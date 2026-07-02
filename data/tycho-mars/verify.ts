// Verification of the Tycho/Kepler Mars opposition transcriptions against
// JPL Horizons. Run from the repo root:
//
//   npx tsx data/tycho-mars/verify.ts
//
// For every row of both CSVs this script
//   1. re-derives the internal consistency of the Chapter 8 table
//      (mean-opposite minus observed must equal the printed Differentia), and
//   2. queries Horizons for the geocentric apparent ecliptic-of-date
//      longitude/latitude of Mars at the tabulated instant (Julian-calendar
//      date, hours from the preceding noon, Uraniborg meridian) and prints
//      the residuals, which should sit at the ~1-2 arcminute level of
//      Tycho's real accuracy.
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

/** Uraniborg, island of Hven: 12°41'48" E. Local mean time leads UT by this. */
const URANIBORG_LON_DEG = 12 + 41 / 60 + 48 / 3600

/** Julian day number at noon of a JULIAN-calendar date. */
function julianCalendarJDN(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12)
  const yy = y + 4800 - a
  const mm = m + 12 * a - 3
  return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - 32083
}

/**
 * Tabulated instant -> JD(UT). Hours count from the PRECEDING NOON (the
 * pre-1925 astronomical day) in Uraniborg local mean time; the equation of
 * time (±15 min, unmodelled here) moves Mars by under 0.25', below Tycho's
 * noise floor.
 */
function toJdUt(y: number, m: number, d: number, h: number, min: number): number {
  return julianCalendarJDN(y, m, d) + (h + min / 60) / 24 - URANIBORG_LON_DEG / 360
}

function parseCsv(name: string): Record<string, string>[] {
  const [header, ...lines] = readFileSync(join(here, name), 'utf8').trim().split('\n')
  const cols = header!.split(',')
  return lines.map((l) => Object.fromEntries(l.split(',').map((v, i) => [cols[i]!, v])))
}

const wrap = (deg: number) => ((deg + 180) % 360 + 360) % 360 - 180

async function horizons(jds: number[]): Promise<{ lon: number; lat: number }[]> {
  const url = new URL('https://ssd.jpl.nasa.gov/api/horizons.api')
  const params: Record<string, string> = {
    format: 'text',
    // Mars system barycenter: the Mars-center target (499) is limited to
    // 1600+, while the barycenter rides the full planetary ephemeris. The
    // barycenter-center offset (Phobos+Deimos) is well under a milliarcsecond.
    COMMAND: "'4'",
    OBJ_DATA: "'NO'",
    MAKE_EPHEM: "'YES'",
    EPHEM_TYPE: "'OBSERVER'",
    CENTER: "'500@399'", // geocentric
    QUANTITIES: "'31'", // ObsEcLon, ObsEcLat: apparent ecliptic-of-date
    ANG_FORMAT: "'DEG'",
    CSV_FORMAT: "'YES'",
    TLIST_TYPE: "'JD'",
    TLIST: `'${jds.map((j) => j.toFixed(6)).join(' ')}'`,
  }
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)
  const text = await (await fetch(url)).text()
  const block = text.split('$$SOE')[1]?.split('$$EOE')[0]
  if (!block) throw new Error(`Horizons returned no ephemeris:\n${text.slice(0, 2000)}`)
  return block
    .trim()
    .split('\n')
    .map((line) => {
      const nums = line.split(',').map((s) => s.trim()).filter((s) => /^-?\d+\.\d+$/.test(s))
      const lat = Number(nums[nums.length - 1])
      const lon = Number(nums[nums.length - 2])
      return { lon, lat }
    })
}

function stats(vals: number[]): string {
  const abs = vals.map(Math.abs)
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length
  return `mean ${mean.toFixed(2)}', max |·| ${Math.max(...abs).toFixed(2)}'`
}

// ---- Chapter 8 internal consistency ------------------------------------
const ch8 = parseCsv('oppositions-mean-sun.csv')
let ok = true
for (const r of ch8) {
  const meanSec = Number(r['mean_sun_arcmin']) * 60 + Number(r['mean_sun_arcsec'])
  const obsSec = Number(r['mars_obs_arcmin']) * 60 + Number(r['mars_obs_arcsec'])
  const printed = (Number(r['diff_arcmin']) * 60 + Number(r['diff_arcsec'])) * (r['diff_sign'] === '-' ? -1 : 1)
  if (obsSec - meanSec !== printed) {
    ok = false
    console.error(`ch8 ${r['year']}: obs-mean = ${obsSec - meanSec}" but printed Differentia = ${printed}"`)
  }
}
console.log(`Chapter 8 internal consistency (Differentia column): ${ok ? 'all 10 rows check' : 'FAILED'}\n`)

// ---- Derived-column consistency: decimal degrees vs verbatim cells ------
const ch15 = parseCsv('oppositions-true-sun.csv')
const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
const frac = (s: string) => (s === '' ? 0 : Number(s.split('/')[0]) / Number(s.split('/')[1]))
let derivedOk = true
const check = (what: string, got: number, want: number) => {
  if (Math.abs(got - want) > 1e-5) {
    derivedOk = false
    console.error(`derived-column mismatch: ${what}: csv ${got} vs recomputed ${want}`)
  }
}
for (const r of ch15) {
  const lam = SIGNS.indexOf(r['mars_sign']!) * 30 + Number(r['mars_deg']) + Number(r['mars_arcmin']) / 60 + Number(r['mars_arcsec']) / 3600
  check(`ch15 row ${r['index']} lambda`, Number(r['lambda_deg']), lam)
  const beta = (Number(r['lat_deg']) + (Number(r['lat_arcmin']) + frac(r['lat_arcmin_fraction']!)) / 60) * (r['lat_direction'] === 'M' ? -1 : 1)
  check(`ch15 row ${r['index']} beta`, Number(r['beta_deg']), beta)
}
for (const r of ch8) {
  const sun = Number(r['mean_sun_sign_num']) * 30 + Number(r['mean_sun_deg']) + Number(r['mean_sun_arcmin']) / 60 + Number(r['mean_sun_arcsec']) / 3600
  check(`ch8 ${r['year']} mean_sun_lambda`, Number(r['mean_sun_lambda_deg']), sun)
  const oppFloor = (Number(r['mean_sun_sign_num']) * 30 + Number(r['mean_sun_deg']) + 180) % 360
  const mars = oppFloor + Number(r['mars_obs_arcmin']) / 60 + Number(r['mars_obs_arcsec']) / 3600
  check(`ch8 ${r['year']} mars_lambda`, Number(r['mars_lambda_deg']), mars)
}
console.log(`Derived decimal columns re-derived from verbatim cells: ${derivedOk ? 'all rows check' : 'FAILED'}\n`)

for (const [label, rows, hasLat] of [
  ['Chapter 15 (12 true-sun oppositions)', ch15, true],
  ['Chapter 8 (10 mean-sun oppositions)', ch8, false],
] as const) {
  const jds = rows.map((r) =>
    toJdUt(Number(r['year']), Number(r['month']), Number(r['day']), Number(r['hour']), Number(r['minute'])),
  )
  const eph = await horizons(jds)
  console.log(label)
  console.log('  row   date (Julian cal.)     printed λ      JPL λ       Δλ (arcmin)' + (hasLat ? '   Δβ (arcmin)' : ''))
  const dLons: number[] = []
  const dLats: number[] = []
  rows.forEach((r, i) => {
    const lam = Number(r[hasLat ? 'lambda_deg' : 'mars_lambda_deg'])
    const dLon = wrap(lam - eph[i]!.lon) * 60
    dLons.push(dLon)
    let latPart = ''
    if (hasLat) {
      const dLat = (Number(r['beta_deg']) - eph[i]!.lat) * 60
      dLats.push(dLat)
      latPart = `      ${dLat >= 0 ? '+' : ''}${dLat.toFixed(2)}`
    }
    const date = `${r['year']}-${String(r['month']).padStart(2, '0')}-${String(r['day']).padStart(2, '0')} ${r['hour']}:${String(r['minute']).padStart(2, '0')}`
    console.log(
      `  ${String(i + 1).padStart(3)}   ${date.padEnd(18)}  ${lam.toFixed(4).padStart(9)}   ${eph[i]!.lon.toFixed(4).padStart(9)}     ${dLon >= 0 ? '+' : ''}${dLon.toFixed(2)}${latPart}`,
    )
  })
  console.log(`  Δλ: ${stats(dLons)}` + (hasLat ? `   Δβ: ${stats(dLats)}` : '') + '\n')
}
