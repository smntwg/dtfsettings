const xpresHow = {
  label: "Xpres, how to DTF",
  url: "https://www.xpres.co.uk/direct-to-film-how-to-guide",
  note: "pre-press, cold peel, second press, powder cured to an orange peel"
};
const xpresEvo = {
  label: "Xpres DTF Evolution cold-peel sheets",
  url: "https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100",
  note: "wash up to 40°C inside out; second press 10–15 seconds"
};
const amaya = {
  label: "Amaya ProPeel DTF film",
  url: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/",
  note: "peel instantly; times differ by fabric"
};

const home = { href: "/", label: "Home" };

export const fixPages = [
  {
    path: "/troubleshooting/not-sticking/",
    title: "DTF transfer not sticking",
    description: "Why a DTF transfer does not stick: the wrong peel, low time or pressure, a damp shirt, the film upside down, or a fabric the sheet never listed.",
    kicker: "Troubleshooting",
    h1: "Not sticking",
    lede: "If the design lifts as you peel, or the edges are already up, the bond did not happen. Pressing hotter than the sheet is the fix people try first, and it is often the wrong one.",
    crumbs: [home, { href: "/troubleshooting/not-sticking/", label: "Not sticking" }],
    schema: "article",
    sources: [xpresHow, xpresEvo, amaya],
    related: [
      { href: "/guides/peel-types/", label: "Peel types" },
      { href: "/guides/pre-pressing/", label: "Pre-pressing" },
      { href: "/guides/final-press/", label: "The second press" },
      { href: "/fabrics/nylon/", label: "Nylon" },
      { href: "/troubleshooting/peeling-after-washing/", label: "It stuck, then failed in the wash" }
    ],
    faqs: [
      { q: "Can I press it again?", a: "If the carrier is still on and you peeled too soon, lay it back down carefully, cover it, and press again for the time on the sheet. If the ink has already torn out of the design, a second press will not put it back. Use a fresh transfer on a spare." },
      { q: "It only failed on one side.", a: "That side was not pressed. A seam, a zip, a tote handle or a collar held the platen off the film. Move the garment so the design sits on a flat area. More temperature does not reach a gap." }
    ],
    body: `
<h2>Work through it in this order</h2>
<ol>
  <li><strong>Which way is the film?</strong> The adhesive, the duller powdered side, goes against the shirt. The clear carrier faces you. A transfer pressed upside down will never bond, however long you leave it.</li>
  <li><strong>Did you peel when the sheet said?</strong> <a href="/guides/peel-types/">Cold, warm and hot</a> are different films. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> say peel cold, off the platen. <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a> says peel instantly. Peeling a cold film hot lifts the ink. That looks like a bad press. It was the peel.</li>
  <li><strong>Was the shirt dry?</strong> Pre-press. Cotton, denim and canvas hold moisture. A damp panel lets go at the edges. See <a href="/guides/pre-pressing/">pre-pressing</a>.</li>
  <li><strong>Was it this film’s time, on this fabric?</strong> A common cold peel is 150–160°C for 10–15 seconds. A 3-second cotton press belongs to one instant-peel film, not to every hot-peel sheet. The <a href="/">lookup</a> keeps those apart. Your packet still wins.</li>
  <li><strong>Was the pressure even?</strong> Medium means the platen meets the cloth. Light pressure on thick denim misses the weave. Heavy pressure that squeezes adhesive out is a different fault, on the <a href="/troubleshooting/ghosting-shiny-marks/">shiny marks</a> page.</li>
  <li><strong>Does the sheet list this fabric?</strong> <a href="/fabrics/nylon/">Nylon</a> and coated cloth are the usual misses. If the packet does not name them, the cotton row will not save the job.</li>
  <li><strong>Did you second-press?</strong> Some prints feel stuck and then lift at the corner because the <a href="/guides/final-press/">final press</a> was skipped.</li>
</ol>
<p>If you printed the film yourself and the powder looks grainy rather than like orange peel, the cure failed before the shirt was involved. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> describe curing until that orange-peel look. Fix the cure. Do not chase it with a hotter shirt press.</p>
<p>The dial is the last check. If a trusted sheet suddenly fails on a press that used to work, the platen may not be at the temperature on the screen. Test a scrap before you build a private offset into every job.</p>
`
  },
  {
    path: "/troubleshooting/cracking/",
    title: "DTF print cracking",
    description: "Why a DTF print cracks: too much heat or time, a stretchy shirt, a heavy second press, or a wash that was hotter than the sheet.",
    kicker: "Troubleshooting",
    h1: "Cracking",
    lede: "A crack is a print that bonded and then broke. It is not the same fault as a film that never stuck. More time will usually make a brittle print worse.",
    crumbs: [home, { href: "/troubleshooting/cracking/", label: "Cracking" }],
    schema: "article",
    sources: [xpresHow, xpresEvo],
    related: [
      { href: "/guides/final-press/", label: "A lighter second press" },
      { href: "/guides/washing-and-care/", label: "Washing" },
      { href: "/troubleshooting/peeling-after-washing/", label: "Peeling after washing" },
      { href: "/fabrics/childrens-clothing/", label: "Jersey that stretches" }
    ],
    faqs: [
      { q: "The print cracked when the child pulled the shirt on.", a: "DTF does not stretch like a stretch vinyl. A large solid design across a chest that gets pulled will crack even when the press was right. Keep designs inside the suggested widths on the children’s page, and avoid a solid block on a seam." },
      { q: "Glitter has gone flat and split.", a: "The second press was too hard or too long for the texture. Press glitter like the cold-peel row unless the packet says otherwise, and keep that second press light." }
    ],
    body: `
<ol>
  <li><strong>The press was longer or hotter than the sheet.</strong> A common cold peel is 10–15 seconds, not a minute. Leaving the platen down “to be sure” can cook the adhesive until it snaps when the fabric moves. Go back to the packet.</li>
  <li><strong>The second press crushed it.</strong> The <a href="/guides/final-press/">final press</a> should settle the print under a cover, not stamp it. Glitter and fine detail show this first.</li>
  <li><strong>The shirt stretches and the print does not.</strong> Cotton jersey, including the blank kids’ tops, moves when it is pulled on. A design that runs into the raglan seam cracks at that line. See <a href="/fabrics/childrens-clothing/">children’s clothing</a>.</li>
  <li><strong>The wash was too hot, or the dryer was.</strong> <a href="https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" rel="noopener noreferrer">Xpres Evolution</a> say up to 40°C, inside out. A 60°C wash or a hot tumble can crack a print that was fine. Follow the cooler of the label and the sheet. Details are on <a href="/guides/washing-and-care/">washing and care</a>.</li>
  <li><strong>You printed it, and the powder was over-cooked.</strong> Xpres describe a cure that looks like orange peel, not a powder that has scorched. Over-cured film can go brittle. That is a printing fault. Pressing the shirt more gently will not restore powder that is already burnt.</li>
</ol>
<p>If the design is lifting in sheets rather than cracking in lines, you are on the wrong page. Use <a href="/troubleshooting/not-sticking/">not sticking</a> or <a href="/troubleshooting/peeling-after-washing/">peeling after washing</a>.</p>
`
  },
  {
    path: "/troubleshooting/peeling-after-washing/",
    title: "DTF peeling after washing",
    description: "Why a DTF transfer peels after washing: washed too soon or too hot, no second press, or the bond was only ever at the centre of the design.",
    kicker: "Troubleshooting",
    h1: "Peeling after washing",
    lede: "The print looked fine on the press and came away in the wash. The bond was incomplete, or the wash was harsher than the sheet allows. A hotter reprint on the same ruined design rarely saves it.",
    crumbs: [home, { href: "/troubleshooting/peeling-after-washing/", label: "Peeling after washing" }],
    schema: "article",
    sources: [xpresEvo, xpresHow],
    related: [
      { href: "/guides/washing-and-care/", label: "Washing and care" },
      { href: "/guides/final-press/", label: "The second press" },
      { href: "/troubleshooting/not-sticking/", label: "It never stuck" },
      { href: "/troubleshooting/cracking/", label: "Cracking, a different pattern" }
    ],
    faqs: [
      { q: "Can I iron it back on after the wash?", a: "If a corner has lifted and the film is still intact, a cover sheet and another press at the sheet’s temperature can sometimes lay it down. If the print has shredded or the adhesive has washed out, ironing will not rebuild it. Use a new transfer on a spare shirt." },
      { q: "It survived the first wash and failed on the fifth.", a: "Look at temperature, inside-out, and conditioner. A 40°C limit ignored once may not show until the adhesive has been softened a few times. Evolution sheets say up to 40°C and inside out. Your sheet may be stricter." }
    ],
    body: `
<ol>
  <li><strong>The wash was hotter than the sheet or the label.</strong> <a href="https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" rel="noopener noreferrer">Xpres Evolution</a> allow up to 40°C, inside out. A cotton cycle at 60°C is a different test. Use the cooler instruction. The <a href="/guides/washing-and-care/">washing page</a> has the rest.</li>
  <li><strong>It was washed too soon.</strong> If your supplier says to wait 24 hours, a wash the same afternoon is outside their method. The Evolution page we checked does not print that wait. Follow the packet you have, not a wait copied from vinyl.</li>
  <li><strong>There was no second press.</strong> A first press can look stuck. The <a href="/guides/final-press/">second press</a> is what several sheets rely on for wash life. Evolution suggest 10–15 seconds. If you skipped it, that is the first thing to change on the next shirt, not the temperature.</li>
  <li><strong>The edges were never down.</strong> A seam, a damp patch or light pressure leaves the middle bonded and the outline loose. The wash finds the outline. That is a pressing fault. See <a href="/troubleshooting/not-sticking/">not sticking</a>.</li>
  <li><strong>Conditioner or a hot tumble.</strong> If the sheet says to avoid fabric conditioner, it is not optional. A tumble on high is extra heat the adhesive did not ask for.</li>
</ol>
<p>Change one thing on the next test. Raising the temperature and the time and the wash heat together tells you nothing. The packet remains the instruction.</p>
`
  },
  {
    path: "/troubleshooting/ghosting-shiny-marks/",
    title: "DTF ghosting and shiny marks",
    description: "DTF ghosting, a shiny box from the platen, and a shiny halo around the design. What each mark is, and what to change.",
    kicker: "Troubleshooting",
    h1: "Ghosting or shiny marks",
    lede: "Three marks get called the same thing. A ghost repeats the picture. A shiny box is the shape of the platen. A halo sits around the design. They have different causes.",
    crumbs: [home, { href: "/troubleshooting/ghosting-shiny-marks/", label: "Ghosting or shiny marks" }],
    schema: "article",
    sources: [xpresHow, amaya],
    related: [
      { href: "/fabrics/polyester/", label: "Polyester shine" },
      { href: "/fabrics/hi-vis/", label: "Hi-vis tape" },
      { href: "/fabrics/nylon/", label: "Nylon" },
      { href: "/guides/final-press/", label: "The second press and adhesive squeeze-out" },
      { href: "/guides/pre-pressing/", label: "Moisture" }
    ],
    faqs: [
      { q: "Will the shiny box wash out?", a: "Sometimes a light glaze softens. Often it does not, especially on polyester and nylon. Do not promise that it will. The next press needs a cover sheet and, on sensitive fabric, less heat. Another press on the same mark makes it worse." },
      { q: "Is a ghost the same as scorch?", a: "No. A ghost is a second, fainter copy of the design, slightly offset. Scorch or glaze is a shiny or brown area with no second picture. A halo is a shiny outline tight around the print, often adhesive." }
    ],
    body: `
<h2>A ghost</h2>
<p>A faint second image means the film or the shirt moved while the adhesive was still soft. It happens if you drag the carrier off to one side, if the shirt shifts as the press opens, or if the second press is not lined up with the first. Peel straight and steady, in the direction the sheet allows. For the <a href="/guides/final-press/">second press</a>, put the garment back in the same place. Tape is rarely needed on DTF the way it is on sublimation paper, but the shirt still has to lie still.</p>
<p>Moisture makes the soft version of this mark. Steam moves things. <a href="/guides/pre-pressing/">Pre-press</a> until the fabric is dry.</p>
<h2>A shiny box</h2>
<p>A rectangle the size of the platen is the fabric, not a failed design. Polyester and nylon do it first. Hi-vis tape can dull in the same press. Cover the garment. On <a href="/fabrics/polyester/">polyester</a> and <a href="/fabrics/hi-vis/">hi-vis</a>, use the cooler end if your sheet allows it. <a href="https://heatpress-settings.co.uk/troubleshooting/scorch-marks/">Heat press settings</a> has a longer note on scorch from vinyl and sublimation. The same rectangle can appear around a DTF print. More time will not polish it away.</p>
<h2>A shiny halo</h2>
<p>A gloss outline tight to the design is usually adhesive squeezed out, or the edge of the film pressed too hard. Ease the pressure. Keep the second press covered and shorter if the sheet allows a range. Do not wipe it with solvent. If the halo is only on one side, the platen was tipped and that side took all the pressure.</p>
<p><a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> and <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya</a> both put a cover sheet in the method, a silicone sheet or protection paper. Use one. The bare platen is how boxes get shiny.</p>
`
  }
];
