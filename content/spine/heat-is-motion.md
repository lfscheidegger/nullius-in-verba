---
title: Heat Is Motion (draft)
chapter: 22
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the 1790s heat had a theory, and the theory was good. Heat was
*caloric*: a subtle, weightless fluid that flowed from hot bodies to cold
ones, that could soak into matter or squeeze out of it, and that — like
matter itself — could be neither created nor destroyed. Lavoisier put
caloric on his list of chemical elements. The theory earned its keep. It
explained why heat flows downhill in temperature, why melting ice drinks
heat without warming, why compressed air grows hot (squeezing wrings the
fluid out). The [thermometers of the last chapter](taking-temperature.md)
measured how concentrated the fluid was; calorimeters measured how much of
it moved. The numbers balanced.[^caloric]

There was an older, vaguer rival: heat as *motion* — a trembling of the
small parts of bodies. Bacon and Boyle had liked it; Newton had nodded at
it. But the motion theory had no numbers, and caloric did. In science a
vague truth loses to a precise error, until someone makes the truth
precise.

The first crack came from a cannon factory. In 1798 Benjamin Thompson,
Count Rumford — American-born, Bavarian by employment — supervised the
boring of brass cannon at the Munich arsenal and noticed what every
machinist knew: boring makes metal hot. Caloric had an answer ready.
Grinding brass into chips releases the fluid trapped inside, as squeezing
a sponge releases water. So Rumford ran the experiment that the answer
could not survive. He fitted a *blunt* borer, one that scraped without
cutting, immersed the cannon blank in about nineteen pounds of water, and
set two horses walking. The water warmed, and after two and a half hours
it boiled — to the visible astonishment of the bystanders, he reported.
Almost no chips were produced. He checked that the few chips he did make
held heat exactly as ordinary brass does: nothing had been wrung out of
them. And the supply did not run down. As long as the horses walked, the
heat came. Anything, Rumford argued, that an isolated body can furnish
*without limit* cannot possibly be a material substance. It must be
motion.

It is a beautiful argument, and it changed few minds. Rumford had shown
that friction manufactures heat, but he had not said *at what price* — how
much work buys how much heat.[^rumford-number] Without an exchange rate
there was no quantity to conserve, and caloric, which conserved
beautifully, kept its job for another half century. Sadi Carnot built the
theory of heat engines on caloric in 1824, and built it well.

The exchange rate came from a brewery. James Prescott Joule, son of a
Manchester brewer, grew up among vats where a tenth of a degree was money,
and he measured heat the way Tycho had measured stars. Through the 1840s
he bought heat with every currency he could find: with electric currents
driven through wires, with air compressed in cylinders, with water forced
through narrow tubes.[^mayer] Every purchase, by every route, came out at
nearly the same price. That convergence is the argument — one number
appearing at the end of unrelated experiments is nature insisting.

His cleanest instrument was the paddle wheel. A brass paddle turns inside
an insulated copper vessel of water; fixed baffles stop the water from
merely swirling along, forcing it to churn. Falling lead weights, geared
to the paddle by cords and pulleys, do a known amount of work — weight
times height, $mgh$, the coin of mechanics since
[Huygens](huygens.md) — and a thermometer Joule could read to a two-hundredth
of a degree Fahrenheit reports the heat. Twenty falls of the weights
bought him about half a degree. From runs like these he announced, in
1850, that raising one pound of water one degree Fahrenheit costs 772
foot-pounds of work. In modern units: about 4.16 joules of
work per calorie of heat, against today's value,

$$
J = 4.186\ \frac{\text{joules}}{\text{calorie}},
$$

where a calorie is the heat that warms one gram of water one degree
Celsius. Joule landed within one percent.

<figure>
<figcaption>Joule's paddle-wheel experiment, schematized. A falling weight
turns a paddle in an insulated vessel of water; baffles force the water to
churn rather than swirl; a fine thermometer reads the temperature rise.
The work done is <em>mgh</em>, known exactly.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A weight hanging from a pulley, connected by a cord to a paddle shaft inside a vessel of water with a thermometer">
  <circle cx="100" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="290" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="42" x2="290" y2="42" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="50" x2="92" y2="148" stroke="currentColor" stroke-width="1"/>
  <rect x="77" y="148" width="30" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="150" x2="60" y2="172" stroke="currentColor" stroke-width="1"/>
  <path d="M 56 166 L 60 174 L 64 166" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="192" text-anchor="middle" font-size="13" fill="currentColor">weight falls h</text>
  <path d="M 230 80 L 230 190 L 350 190 L 350 80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="234" y1="100" x2="346" y2="100" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <line x1="290" y1="58" x2="290" y2="178" stroke="currentColor" stroke-width="1.5"/>
  <line x1="258" y1="130" x2="322" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="258" y1="155" x2="322" y2="155" stroke="currentColor" stroke-width="1.5"/>
  <line x1="330" y1="66" x2="330" y2="112" stroke="currentColor" stroke-width="1"/>
  <circle cx="330" cy="115" r="3" fill="currentColor"/>
  <text x="256" y="95" font-size="13" fill="currentColor">water</text>
  <text x="336" y="60" text-anchor="middle" font-size="13" fill="currentColor">thermometer</text>
  <text x="290" y="208" text-anchor="middle" font-size="13" fill="currentColor">paddle wheel</text>
</svg>
</figure>

> **Interactive (planned):** replay Joule's actual paddle-wheel runs from
> the tables of his 1850 *Philosophical Transactions* paper — lead weights
> of about 29 pounds falling through 63 inches, twenty times per run
> (provenance to be documented in `/data/`). Set the weights, watch the
> thermometer creep, subtract his own corrections — for cooling, and for
> the speed the weights still had when they hit the floor — and extract
> the equivalent yourself. The dataset
> here will be real; this draft fakes nothing in its place.

Read the number the right way around and caloric dies of it. Heat is not
a conserved fluid, because work creates it at a fixed price. What is
conserved is something larger: the sum of motion and heat, of $mgh$ and
$\tfrac{1}{2}mv^2$ and the warmth in the water, one quantity wearing
different clothes. Heat is not a substance that flows; it is energy in
transit — [the conserved currency of Chapter 16](conservation-and-symmetry.md),
now found circulating in places mechanics had written off as losses.
Friction destroys motion; nothing destroys energy. And if heat is energy,
the old vague rival becomes the sober conclusion: what warms when the
paddle churns is the motion of parts too small to see. What those parts
are, and how their private chaos becomes our public temperature, this
book has not yet earned; that story is two chapters away.

## A prediction you can make

If falling water churns itself instead of turning a paddle, the waterfall
is its own Joule apparatus. A kilogram falling a height $h$ carries $gh$
joules into the pool, and warming that kilogram of water one degree costs
$4186$ joules, so

$$
\Delta T = \frac{gh}{c} = \frac{9.8\ h}{4186}\ ^\circ\text{C} \quad (h \text{ in meters}).
$$

Niagara's Horseshoe Falls drop about $50$ m: the water at the bottom
should be warmer than the water at the top by
$9.8 \times 50 / 4186 \approx 0.12\ ^\circ$C — a real, measurable
warmth, and absurd under caloric, which permits no heat without a source
to drain. Joule made exactly this prediction for a 160-foot fall and got
about a fifth of a degree Fahrenheit, the same number.[^honeymoon] Find a
tall waterfall, a good thermometer, and a calm pool, and check him.

[^caloric]: Caloric was not a foolish theory; it was a wrong theory, which
  is a different thing. It made quantitative predictions, most of them
  right, and calorimetry — still the working core of thermal measurement —
  was built under its flag. Good data outlives the theory it was taken
  to support.

[^rumford-number]: Rumford's paper does contain the makings of a number:
  he recorded the water, the temperature rise, the time, and the labor of
  the horses. Reconstructions from his figures give roughly 5.5 joules
  per calorie — the right scale, some thirty percent high. The
  reconstruction is modern hindsight; Rumford himself never framed the
  result as an exchange rate, which is precisely why caloric survived him.

[^mayer]: The straightened history confesses: Julius Robert Mayer, a
  German physician, stated the equivalence of heat and work in 1842 and
  estimated the constant from published gas data before Joule's best
  measurements. Priority was disputed bitterly. This chapter follows
  Joule because the *measurement* is his; the idea has more than one
  parent.

[^honeymoon]: Joule's published value is 772.692 foot-pounds per pound of
  water per degree Fahrenheit (*Philosophical Transactions*, 1850); the
  modern figure is 778.2, and 4.186 J/cal corresponds to the modern
  specific heat of water, 4186 J per kilogram per degree Celsius. The
  waterfall remark is Joule's own, made to William Thomson, who claimed
  he later met Joule near Chamonix — on his honeymoon, thermometer in
  hand, intending to try it on a waterfall. The anecdote is Thomson's
  and may be polished; the physics is not.
