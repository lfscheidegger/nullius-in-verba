---
title: The Arrow of Time (draft)
chapter: 23
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1824 the steam engine had remade Britain and embarrassed physics. Mines
were drained, mills spun, and ships crossed the Channel on machines that no
theory could explain. Engineers improved them the way cooks improve soup:
taste, adjust, taste again. Watt's separate condenser had tripled
efficiency; nobody could say whether another trick would triple it again,
or whether some wall stood in the way. The question belonged to a
twenty-eight-year-old French military engineer, Sadi Carnot, and he asked
it with a physicist's generality: given a fire and a place to dump the
exhaust, what is the *most* work any engine — any conceivable engine — can
extract?

Carnot reasoned with the physics of his day, which said heat was caloric,
a conserved fluid.[^caloric] In his picture an engine is a water wheel:
heat falls from the hot boiler to the cold condenser, and work is what you
harvest from the fall. The picture is wrong. The argument he built on it
is one of the most durable in science, because it never needed the
picture — only the fall. First, the ideal engine must be **reversible**:
every step so gentle, so close to equilibrium, that running the cycle
backward undoes it exactly, work turning back into a flow of heat uphill.
Any friction, any heat jumping across a finite temperature gap, is motive
power thrown away. Second — and this is the blade — *no engine can beat a
reversible one between the same two temperatures.* Suppose one did. Run
the reversible engine backward as a refrigerator, feed it the champion's
output, and the pair pumps heat from cold to hot while producing net work
from nothing. A mill that raises its own water. Nature, Carnot held,
grants no such machine. Therefore every reversible engine between the same
boiler and the same condenser has the *same* efficiency, whatever it is
made of — steam, air, alcohol, anything. The limit is set by the two
temperatures alone.

> **Interactive (planned):** a reversible engine you run by hand. Drag a
> piston through the four strokes of Carnot's cycle — expand hot, expand
> insulated, compress cold, compress insulated — while the sim meters heat
> in, heat out, and work done, and draws the loop below in real time. Drag
> slowly and the ledger balances; drag fast and irreversibility eats your
> work, visibly. Then drag the whole cycle *backward* and watch the engine
> become a refrigerator.

<figure>
<figcaption>Carnot's cycle on the pressure–volume plane: two strokes at
constant temperature, two with no heat exchanged. The shaded area inside
the loop is the work <em>W</em> delivered per cycle. Run clockwise it is
an engine; run counterclockwise, a refrigerator.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A closed four-sided loop of curves on pressure-volume axes, bounded by two isotherms and two adiabats, with the enclosed work area shaded">
  <line x1="50" y1="190" x2="370" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="50" y1="190" x2="50" y2="20" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="30" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">p</text>
  <text x="368" y="207" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">V</text>
  <path d="M 100 45 Q 140 80 210 85 Q 240 135 300 155 Q 230 150 175 125 Q 125 100 100 45 Z" fill="currentColor" opacity="0.12" stroke="none"/>
  <path d="M 100 45 Q 140 80 210 85" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 210 85 Q 240 135 300 155" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 300 155 Q 230 150 175 125" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 175 125 Q 125 100 100 45" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="100" cy="45" r="3" fill="currentColor"/>
  <circle cx="210" cy="85" r="3" fill="currentColor"/>
  <circle cx="300" cy="155" r="3" fill="currentColor"/>
  <circle cx="175" cy="125" r="3" fill="currentColor"/>
  <text x="150" y="55" font-size="13" fill="currentColor" font-style="italic">T<tspan dy="3" font-size="10">h</tspan><tspan dy="-3"> (heat in)</tspan></text>
  <text x="216" y="180" font-size="13" fill="currentColor" font-style="italic">T<tspan dy="3" font-size="10">c</tspan><tspan dy="-3"> (heat out)</tspan></text>
  <text x="196" y="118" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">W</text>
</svg>
</figure>

For a generation the argument slept.[^reflections] Then it collided with
the fact this book met one chapter ago: [heat is motion](heat-is-motion.md),
interconvertible with work at Joule's fixed rate, and *not* conserved on
its own. Carnot's water wheel says all the heat arrives at the condenser;
Joule's paddle wheel says some of it must vanish into work. In 1850 Rudolf
Clausius saw that both books balance if the engine *splits* the flow: of
the heat $Q_h$ drawn from the boiler, a portion becomes work and the rest,
$Q_c$, is discharged cold. Energy is conserved — that is the first law.
And heat never flows, of itself, from cold to hot — that is the second,
and it is exactly the axiom Carnot's blade had rested on all along. From
the two together, the efficiency of the ideal engine follows, with
temperature measured on the absolute scale that
[Thomson built](taking-temperature.md) for precisely this purpose:

$$
\eta_{\max} = \frac{W}{Q_h} = 1 - \frac{T_c}{T_h}.
$$

No fuel, no cleverness, no material escapes it. Only the temperatures.

Clausius kept pulling the thread. In an ideal cycle the two heats stand in
the ratio of their temperatures, $Q_c/Q_h = T_c/T_h$ — so the quantity
$Q/T$, counted in and counted out, balances exactly. Around any reversible
cycle,

$$
\oint \frac{dQ}{T} = 0,
$$

and a quantity whose total change around every closed path is zero is a
property of the *state*, like pressure or volume, not of the road taken.
In 1865 Clausius gave it a name built from the Greek for transformation:
**entropy**, $S$, with $dS = dQ/T$ along any reversible step. For real,
irreversible processes the balance tips one way only. Heat crossing a
finite gap, friction, free expansion — each leaves the entropy of the
world higher than before: $\Delta S \geq 0$, with equality only in the
reversible ideal that nothing real quite reaches.

Stand back and see how strange this is. Every law of mechanics we have
built — [Newton's](newton-laws-of-motion.md), and the
[conservation laws](conservation-and-symmetry.md) beneath them — runs as
happily backward as forward. Film a pendulum and reverse the film: still
lawful. Film cream stirring into coffee and reverse it, and every eye in
the room knows. The second law is the first law of physics with a
direction in it. It does not say which way time flows; it says which way
the world runs *in* time, and it is the reason the past looks different
from the future. *Why* a law of engines should govern coffee — why
entropy has anything to do with the atoms of the last chapter — we do not
yet say. That question needs a new kind of law, a law of counting, and it
is exactly one chapter away.

## A prediction you can make

Carnot's formula is a hard ceiling you can compute in one line — provided
the temperatures are absolute.[^kelvins] An engine running on boiling
water at $100\,^\circ$C ($T_h = 373$ K), exhausting at $20\,^\circ$C
($T_c = 293$ K), can convert at most

$$
\eta_{\max} = 1 - \frac{293}{373} \approx 0.214
$$

of its heat into work — about 21 percent, and that only in the reversible
limit. The best steam engines of Carnot's own day delivered only a few
percent, so the tinkerers still had room. Now predict the modern power
station: steam at about $540\,^\circ$C ($813$ K), cooling water at about
$27\,^\circ$C ($300$ K) gives $\eta_{\max} = 1 - 300/813 \approx 0.63$.
Look up any conventional coal or nuclear plant and you will find real
efficiencies near 33 to 42 percent[^numbers] — comfortably under the
ceiling, and unable, by law, to go over it. No amount of engineering
budget has ever bought a violation. None ever will.

[^reflections]: *Réflexions sur la puissance motrice du feu*, Paris, 1824
  — a short book for engineers, in plain French, with almost no
  mathematics. It sold poorly. Carnot died of cholera in 1832, at 36, and
  the argument survived through Clapeyron's 1834 restatement, where
  Thomson and Clausius later found it. The clean two-step logic given here
  is straightened from a messier rescue.

[^caloric]: A confession of history, not a footnote to it: Carnot's book
  assumes caloric throughout, and his private notes show him doubting it
  before he died. That his conclusion outlived his premise is the point —
  the reversibility argument uses only the impossibility of a free lift of
  heat from cold to hot, and that survived the caloric theory's collapse.

[^kelvins]: Celsius fails here, and checking why is worth a minute: the
  formula compares temperatures as *ratios*, and only the absolute scale —
  kelvins, from [the thermometry chapter](taking-temperature.md) — makes
  the ratio physical. With Celsius the formula would predict different
  ceilings depending on where zero was printed on the thermometer.

[^numbers]: The plant figures are typical published operating values for
  subcritical fossil and nuclear stations, quoted here from memory at
  draft fidelity; the real chapter will cite specific plants and sources.
  The steam-engine efficiencies of the 1820s (a few percent) are from the
  standard engineering histories.
