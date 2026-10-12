import { pyjamaLink } from "./blanks.mjs";

const xpresHow = {
  label: "Xpres, how to DTF",
  url: "https://www.xpres.co.uk/direct-to-film-how-to-guide",
  note: "powder cure, pre-press, 150–160°C for 10–15 seconds, cold peel, second press"
};
const xpresEvo = {
  label: "Xpres DTF Evolution cold-peel sheets",
  url: "https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100",
  note: "second press 10–15 seconds; wash up to 40°C inside out; iron on the reverse only"
};
const amaya = {
  label: "Amaya ProPeel DTF film",
  url: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/",
  note: "pre-press a few seconds; instant peel; second press 5 seconds"
};

const home = { href: "/", label: "Home" };

export const guidePages = [
  {
    path: "/guides/how-dtf-works/",
    title: "How DTF transfers work",
    description: "What direct-to-film is: a print on film, hot-melt powder, a short heat press, a peel, and usually a second press. Celsius, for UK crafters.",
    kicker: "Guide",
    h1: "How DTF works",
    lede: "Direct-to-film puts a full-colour design, white ink included, onto a clear film. You press that film onto the garment. The shirt does not have to be polyester.",
    crumbs: [home, { href: "/guides/how-dtf-works/", label: "How DTF works" }],
    schema: "howto",
    totalTime: "PT5M",
    tools: ["Heat press", "DTF transfer", "Cover sheet"],
    sources: [xpresHow, xpresEvo],
    related: [
      { href: "/guides/gang-sheets/", label: "Gang sheets" },
      { href: "/guides/peel-types/", label: "Peel types" },
      { href: "/guides/final-press/", label: "The second press" },
      { href: "/fabrics/cotton/", label: "Cotton settings" },
      { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }
    ],
    steps: [
      { name: "Start from a finished transfer, or make one", text: "A bought gang sheet is already printed and cured. If you print your own, the design goes onto DTF film, powder coats the wet ink, and the powder is cured until it looks like orange peel." },
      { name: "Pre-press the garment", text: "Xpres say to pre-press so the fabric is dry and flat. Do this before the transfer goes down." },
      { name: "Press adhesive side down", text: "A common setting they describe is 150–160°C for 10–15 seconds at medium pressure, under a silicone sheet. Your packet overrides that." },
      { name: "Peel the way the film says", text: "Their how-to says to take the garment off the press and peel cold. Hot-peel and warm-peel films say otherwise. The word on the packet is the instruction." },
      { name: "Press again under a cover", text: "Return the garment, cover the print, and press again for the time the sheet recommends. Evolution cold-peel sheets suggest 10–15 seconds." }
    ],
    faqs: [
      { q: "Do I cure powder if I bought the transfers?", a: "No. Curing is part of making the transfer. A finished gang sheet is ready to press. Do not bake a bought transfer in a curing oven because a printing guide mentioned 150–160°C." },
      { q: "Why is there white ink?", a: "So the design shows on a dark or coloured shirt. The white sits under the colour on the film. Sublimation has no white ink, which is one reason it cannot lighten a navy shirt." }
    ],
    body: `
<p>If you print the film yourself, <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> describe coating the wet ink with hot-melt powder and curing it until it has an orange-peel look. Their steps say about 3–4 minutes at 150–160°C. The recommended section on the same page says about 2–3 minutes at roughly 150–160°C. Both are on that page. Use the sheet that came with your powder, and keep powder off the printer. Masks, gloves and eye protection matter with hot-melt powder. That is a printing job, not a pressing job.</p>
<p>Most people using this site are pressing a transfer someone else has already made. Your work starts at the pre-press. The adhesive side goes against the fabric. The carrier film faces you. Press, peel, press again. Fabric-by-fabric numbers are on the <a href="/fabrics/cotton/">fabric pages</a> and in the <a href="/">lookup</a>.</p>
<p>The blank kids’ pyjamas linked from the <a href="/fabrics/childrens-clothing/">children’s clothing</a> page are cotton, so this is a DTF job or a vinyl job, not sublimation. A full-colour picture belongs here. A one-colour name may be simpler as <a href="https://heatpress-settings.co.uk/methods/standard-htv/">heat transfer vinyl</a>.</p>
`
  },
  {
    path: "/guides/pre-pressing/",
    title: "Pre-pressing before a DTF transfer",
    description: "Why to pre-press a garment before DTF: moisture and creases. How long is a short press, and when to use a cover sheet.",
    kicker: "Guide",
    h1: "Pre-pressing",
    lede: "A short press before the transfer goes down dries the fabric and knocks the creases out. Skip it and the film often lets go later, or the shirt shines where the steam was.",
    crumbs: [home, { href: "/guides/pre-pressing/", label: "Pre-pressing" }],
    schema: "howto",
    totalTime: "PT1M",
    tools: ["Heat press", "Cover sheet"],
    sources: [xpresHow, amaya],
    related: [
      { href: "/guides/how-dtf-works/", label: "How DTF works" },
      { href: "/fabrics/denim/", label: "Denim holds more moisture" },
      { href: "/fabrics/canvas-totes/", label: "Canvas totes" },
      { href: "/fabrics/nylon/", label: "Keep nylon short and covered" },
      { href: "/troubleshooting/not-sticking/", label: "If it does not stick" }
    ],
    steps: [
      { name: "Heat the press to the temperature you will actually use", text: "Pre-press at the temperature you are about to press, not at a random higher number. The dial may still be wrong. A scrap tells you more than the screen." },
      { name: "Lay the garment flat", text: "Thread a shirt onto the platen when you can, so you are not pressing a folded layer. On a tote, only the panel you will print should be on the platen." },
      { name: "Press briefly", text: "Xpres say to pre-press to remove moisture and creases. They do not print a number of seconds. Amaya say a few seconds. Long enough to flatten and to let steam off. Not a second full press of the design." },
      { name: "Cover heat-sensitive cloth", text: "Polyester, nylon and hi-vis get a cover sheet for this step too. An uncovered platen can glaze the fabric before the transfer is on it." },
      { name: "Let the steam go, then position the film", text: "If the shirt is still damp to the touch, press again for a moment. Then place the transfer. Do not lay film onto a wet panel." }
    ],
    faqs: [
      { q: "How many seconds is a pre-press?", a: "The Xpres how-to does not say. Amaya say a few seconds. Cotton that has been folded in a packet, and denim or canvas, often want the longer end of a few seconds. If you can still see a crease or the cloth feels damp, it is not finished." },
      { q: "Do I pre-press a bought transfer as well as the shirt?", a: "No. Pre-press the garment. The transfer is already cured. Heating the film on its own can start the adhesive before it is on the shirt." }
    ],
    body: `
<p>Moisture is the quiet reason a transfer fails in the wash. Cotton, denim and canvas hold it. When the platen hits a damp patch, steam lifts the film or blows a shiny mark. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> put the pre-press in the method, before the film goes down.</p>
<p>On the blank kids’ sets, pre-press the white chest, not a slogan and not the printed sleeves if you can avoid them. Those tops are described on the <a href="/fabrics/childrens-clothing/">children’s clothing</a> page. <a href="/fabrics/hi-vis/">Hi-vis</a> and <a href="/fabrics/nylon/">nylon</a> get a cover and a shorter touch. You are drying the cloth, not decorating it yet.</p>
`
  },
  {
    path: "/guides/peel-types/",
    title: "DTF peel types: hot, warm and cold",
    description: "Hot peel, warm peel and cold peel for DTF transfers. What each one means, and why peeling at the wrong moment lifts the ink.",
    kicker: "Guide",
    h1: "Hot, warm and cold peel",
    lede: "The peel is part of the setting, like the temperature. Peel a cold-peel film while it is hot and the ink comes up with the carrier. Peel is not a matter of taste.",
    crumbs: [home, { href: "/guides/peel-types/", label: "Peel types" }],
    schema: "article",
    sources: [xpresHow, xpresEvo, amaya],
    related: [
      { href: "/", label: "Settings lookup" },
      { href: "/troubleshooting/not-sticking/", label: "Ink that lifts as you peel" },
      { href: "/guides/final-press/", label: "What to do after the peel" },
      { href: "/fabrics/nylon/", label: "Nylon, where a hot peel is a poor guess" }
    ],
    faqs: [
      { q: "What if the packet does not say?", a: "Ask the supplier before you press a batch. This site will not tell you to guess. Cold is the peel on the Xpres pages we use. It is not a universal default for every film on the market." },
      { q: "Can I let a hot-peel film cool, just to be safe?", a: "Only if the sheet allows it. Some hot-peel films are meant to come off straight away, and waiting can make the carrier fight you. Read the packet. Amaya ProPeel says peel instantly." }
    ],
    body: `
<h2>Cold peel</h2>
<p>Take the garment off the hot platen and wait until the film is cool to the touch. Then peel. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> say to peel cold, and their <a href="https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" rel="noopener noreferrer">Evolution cold-peel sheets</a> say cold. The finish is often a little more matte. This is the patient peel, and it is the one to follow when the sheet says cold. Peeling it hot lifts the design in patches.</p>
<h2>Hot peel</h2>
<p>Peel as soon as the press opens, while the film is hot. A typical ready-made hot-peel transfer still spends several seconds under the platen. The time is not automatically three seconds. <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a> is an instant-peel film that does say 3 seconds on cotton, 10 seconds on blends and 15 seconds on polyester, then peel immediately. If your sheet is not that film, do not copy the 3 seconds. The <a href="/?fabric=cotton&amp;transfer=hot-peel">lookup</a> shows both.</p>
<h2>Warm peel</h2>
<p>Peel a few seconds after the press opens, when the film is warm but not scorching. Neither the Xpres cold-peel pages nor the Amaya instant-peel film describe this middle window. Use it when your packet says warm. The temperature and time can match the cold-peel row for that fabric. The wait is the difference. If the packet says cold, wait fully. If it says hot, do not hover.</p>
<p>Glitter follows whatever peel is printed on the glitter sheet. When it is silent, this site treats it as cold, and says so on the card. Nylon is a poor place to experiment with a hot peel. See <a href="/fabrics/nylon/">nylon</a>.</p>
`
  },
  {
    path: "/guides/final-press/",
    title: "The DTF final press, or second press",
    description: "Why DTF transfers get a second press after the peel, for how long, and how a cover sheet stops a shiny halo.",
    kicker: "Guide",
    h1: "The final press",
    lede: "After you peel, most DTF sheets want the design pressed again under a cover. That second press is part of the method, not a rescue for a bad first one.",
    crumbs: [home, { href: "/guides/final-press/", label: "The final press" }],
    schema: "howto",
    totalTime: "PT1M",
    tools: ["Heat press", "Cover sheet"],
    sources: [xpresHow, xpresEvo, amaya],
    related: [
      { href: "/guides/peel-types/", label: "Peel first" },
      { href: "/guides/washing-and-care/", label: "Washing after the press" },
      { href: "/troubleshooting/ghosting-shiny-marks/", label: "A shiny halo" },
      { href: "/troubleshooting/peeling-after-washing/", label: "If it fails in the wash" }
    ],
    steps: [
      { name: "Peel first", text: "The second press happens after the carrier is off. Peel hot, warm or cold as the sheet says. Do not press the carrier a second time and hope that replaces the peel." },
      { name: "Cover the print", text: "Use a silicone sheet, Teflon or parchment. The cover stops the platen polishing the fabric and keeps adhesive off the platen." },
      { name: "Press again at the same temperature", text: "Xpres say to re-press for the time recommended. Their Evolution cold-peel sheets suggest 10–15 seconds. Amaya ProPeel says 5 seconds at the same temperature. Use the number on your sheet." },
      { name: "Keep the pressure even, not brutal", text: "You are settling the print. Forcing the handle can squeeze adhesive out into a shiny outline. Glitter wants this press lighter still." },
      { name: "Leave it", text: "Do not stretch the print while it is warm. Washing comes later, on the washing page, and only after whatever wait your supplier asks for." }
    ],
    faqs: [
      { q: "The first press looked perfect. Do I still press again?", a: "If the sheet asks for a second press, yes. Xpres Evolution say a second press is recommended for colour retention and longevity. Skipping it is a common reason a print looks fine on the press and fails in the wash." },
      { q: "I forgot, and I peeled yesterday. Can I second-press now?", a: "You can cover a cold garment and press again for the recommended time. It will not always save a print that never bonded. If the edges are already up, read the not-sticking page before you add heat." }
    ],
    body: `
<p>The first press sticks the adhesive to the cloth. The second press, with the carrier gone, beds the print in and usually softens the hand. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> put that re-press in the method. Their Evolution sheets name 10–15 seconds. <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya</a> name 5 seconds for their instant-peel film. Those are two products. Your sheet is the third, and it wins.</p>
<p>A shiny line around the design after this step is often adhesive pushed out, or the fabric glazed because there was no cover. That is on the <a href="/troubleshooting/ghosting-shiny-marks/">shiny marks</a> page. Do not “fix” it with a hotter third press.</p>
`
  },
  {
    path: "/guides/washing-and-care/",
    title: "Washing and caring for DTF transfers",
    description: "How to wash DTF prints: inside out, up to 40°C on one cold-peel sheet, iron on the reverse, and follow the cooler of the label and the packet.",
    kicker: "Guide",
    h1: "Washing and care",
    lede: "A transfer that survived the press can still fail in the wash. Follow the cooler instruction, the garment label or the transfer sheet, and turn the item inside out.",
    crumbs: [home, { href: "/guides/washing-and-care/", label: "Washing and care" }],
    schema: "article",
    sources: [xpresEvo],
    related: [
      { href: "/troubleshooting/peeling-after-washing/", label: "Peeling after washing" },
      { href: "/troubleshooting/cracking/", label: "Cracking" },
      { href: "/guides/final-press/", label: "The second press, before any wash" },
      { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }
    ],
    faqs: [
      { q: "Do I have to wait 24 hours?", a: "Many transfer suppliers ask for a day before the first wash. The Xpres Evolution page checked for this guide specifies the wash temperature and ironing, not a wait. If your packet says 24 hours, wait. If it says something else, do that." },
      { q: "Can I tumble dry?", a: "Only if both the garment label and the transfer sheet allow it. Heat in a dryer is a second press you do not control. When either one says no, do not tumble." }
    ],
    body: `
<p><a href="https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" rel="noopener noreferrer">Xpres Evolution cold-peel sheets</a> say wash up to 40°C, inside out, and iron on the reverse only. That is one product. If your transfers name a cooler wash, or the garment label does, use the cooler of the two. A hi-vis vest with a 30°C label does not become a 40°C wash because a film allowed 40.</p>
<p>Inside out keeps the print off the drum and off zips on other clothes. Skip bleach unless the sheet allows it. Fabric conditioner is not mentioned on the Evolution page. If your sheet says to skip it, skip it. Conditioner can sit on the print and weaken the bond over a few washes.</p>
<p>Iron from the back, with no steam on the print, and only if the label allows ironing at all. Do not slide a hot iron across the face of the design. Stretching a warm print, or peeling a corner to “check” it, starts the crack you will see after the first wash. If the design comes off in the wash, use <a href="/troubleshooting/peeling-after-washing/">peeling after washing</a> rather than pressing the same shirt hotter and washing it again the same day.</p>
<p>Once a print is on cotton nightwear, wash it on the care label, inside out, and within whatever limit the transfer sheet adds.</p>
`
  },
  {
    path: "/guides/dtf-vs-htv-vs-sublimation/",
    title: "DTF vs HTV vs sublimation",
    description: "When to use DTF, heat transfer vinyl or sublimation. Cotton takes DTF and HTV. Sublimation needs polyester. Celsius, with links to the sister charts.",
    kicker: "Guide",
    h1: "DTF, HTV and sublimation",
    lede: "They are three different jobs. DTF is a full-colour film, including white. HTV is cut vinyl, usually one colour at a time. Sublimation is a dye that only bonds with polyester.",
    crumbs: [home, { href: "/guides/dtf-vs-htv-vs-sublimation/", label: "DTF, HTV and sublimation" }],
    schema: "article",
    sources: [xpresHow],
    related: [
      { href: "/fabrics/cotton/", label: "DTF on cotton" },
      { href: "/fabrics/polyester/", label: "DTF on polyester" },
      { href: "/fabrics/childrens-clothing/", label: "Children's cotton clothes" },
      { href: "https://heatpress-settings.co.uk/methods/standard-htv/", label: "Standard HTV charts" },
      { href: "https://heatpress-settings.co.uk/methods/sublimation-polyester/", label: "Sublimation on polyester" },
      { href: "https://heatpress-settings.co.uk/", label: "Heat press settings" }
    ],
    faqs: [
      { q: "Which one should I use for a name on a cotton shirt?", a: "Heat transfer vinyl, if the name is one or two colours. DTF, if the name is full colour or has a fine picture with it. Not sublimation." },
      { q: "Can I press a DTF transfer at a sublimation temperature to make it tougher?", a: "No. Sublimation temperatures are for a different process and a longer time. They are a good way to scorch a shirt and a bad way to apply a DTF film. Use the DTF sheet." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Which process does which job</caption>
  <thead><tr><th></th><th>DTF</th><th>HTV</th><th>Sublimation</th></tr></thead>
  <tbody>
    <tr><td>What it is</td><td>A printed film you press on</td><td>Cut vinyl you press on</td><td>Dye that becomes a gas and bonds with polyester</td></tr>
    <tr><td>Cotton</td><td>Yes</td><td>Yes</td><td>No</td></tr>
    <tr><td>Polyester</td><td>Yes, with care for shine</td><td>Yes, with care for dye and shine</td><td>Yes, if it is light</td></tr>
    <tr><td>White in the design</td><td>The film carries white ink</td><td>The vinyl is the colour</td><td>No white ink</td></tr>
    <tr><td>Typical press</td><td>About 150–160°C for 10–15 seconds for a common cold peel</td><td>See the vinyl charts</td><td>Hotter and longer. See the sublimation charts</td></tr>
  </tbody>
</table>
</div>
<p>The HTV temperatures and the sublimation temperatures are on <a href="https://heatpress-settings.co.uk/">Heat press settings</a>. This site does not copy those charts across. A common DTF cold peel, from <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a>, is 150–160°C for 10–15 seconds, medium, peeled cold. That is a short press beside a sublimation shirt press.</p>
<p>Choose DTF for a photograph or a full-colour design on cotton, blends, or dark polyester. Choose HTV for a flat name or a simple shape in one colour. Choose sublimation when the blank is light polyester, or a coated item sold for it, and you want the print in the fibre rather than on it.</p>
<p>Plain 100% cotton kids' pyjamas ${pyjamaLink("like these")} have a white chest. It takes DTF and it takes vinyl. It does not take sublimation dye. <a href="https://heatpress-settings.co.uk/pyjamas/sublimation/">Heat press settings</a> explains that limit. Pressing longer will not add polyester.</p>
`
  },
  {
    path: "/guides/gang-sheets/",
    title: "DTF gang sheets: cutting and pressing",
    description: "How to cut and press a DTF gang sheet: leave a margin, do not cut the design, and use the same heat, time, pressure and peel as that film.",
    kicker: "Guide",
    h1: "Gang sheets",
    lede: "A gang sheet is several designs on one piece of film, so you are not buying a whole sheet for a single name. You cut them apart, then press them one at a time.",
    crumbs: [home, { href: "/guides/gang-sheets/", label: "Gang sheets" }],
    schema: "howto",
    totalTime: "PT5M",
    tools: ["Scissors", "Heat press"],
    sources: [xpresHow],
    related: [
      { href: "/guides/how-dtf-works/", label: "How DTF works" },
      { href: "/guides/storing-transfers/", label: "Storing the offcuts" },
      { href: "/", label: "Settings lookup" },
      { href: "/guides/peel-types/", label: "Know the peel before you cut a batch" }
    ],
    steps: [
      { name: "Read the peel before you start", text: "Every design on that sheet is the same film. If the sheet is cold peel, every design is cold peel. Do not mix instructions between two suppliers' offcuts." },
      { name: "Cut with a margin", text: "Leave a few millimetres of blank film around the design. Cut through the print and you have a raw edge that lifts." },
      { name: "Keep the pieces flat", text: "Do not fold a cut transfer through the picture. Stack them so the films do not stick face to face if the room is warm." },
      { name: "Press one design", text: "Use the fabric row for that sheet. A gang sheet does not get a different temperature because several designs were printed together." },
      { name: "Press again, then move on", text: "Peel as the sheet says and do the second press before you start the next shirt, so you do not forget which ones are finished." }
    ],
    faqs: [
      { q: "Does a small design need less time than a large one on the same sheet?", a: "No. Time follows the film and the fabric, not the size of the picture. A tiny name and a large chest print from the same sheet use the same press. What changes is placement, and keeping seams out of the platen." },
      { q: "Can I press two small designs in one close of the press?", a: "Only if both sit flat, both are the same film, and the platen covers them evenly. A design hanging off the edge of the platen is only half pressed. One at a time is the reliable way." }
    ],
    body: `
<p>You are paying for the sheet size, not for a promise about every design. Leave space between pictures when you order, enough to cut a margin. Scissors are enough. A blade that scores the adhesive at the edge of the ink gives you a line that cracks later.</p>
<p>The press is the same as any other transfer of that type. Cold-peel cotton is still 150–160°C for 10–15 seconds unless your supplier printed a different row. Look up the <a href="/">fabric and the peel</a>, then believe the slip in the parcel if it disagrees.</p>
<p>Offcuts and spare names should be stored flat. The <a href="/guides/storing-transfers/">storing</a> page is short on purpose. Heat and damp are what ruin a pile of cut transfers before you ever reach the press.</p>
`
  },
  {
    path: "/guides/storing-transfers/",
    title: "Storing DTF transfers",
    description: "How to store DTF transfers: flat, cool and dry, out of sunlight, with the supplier's shelf life rather than a guessed number of months.",
    kicker: "Guide",
    h1: "Storing transfers",
    lede: "Finished DTF transfers keep best flat, cool and dry. Fold one through the print, or leave a stack in a hot car, and they stick to each other or curl before you press them.",
    crumbs: [home, { href: "/guides/storing-transfers/", label: "Storing transfers" }],
    schema: "article",
    related: [
      { href: "/guides/gang-sheets/", label: "Cutting gang sheets" },
      { href: "/guides/how-dtf-works/", label: "How DTF works" },
      { href: "/troubleshooting/not-sticking/", label: "A transfer that will not bond" }
    ],
    faqs: [
      { q: "How long do they last?", a: "As long as the supplier prints on the packet. This site does not invent a shelf life. Use older sheets first, and if a sheet is past the date they gave you, test one before you promise a batch." },
      { q: "The film has stuck to the next one.", a: "Warmth or pressure did that. Peel them apart slowly. If the adhesive has lifted off its own film, that piece is done. Do not press it and hope the shirt will sort it out." }
    ],
    body: `
<p>Keep transfers flat, in a sleeve or between sheets of paper, out of direct sun. A cool cupboard beats a windowsill and beats the back of a van in July. Damp air can leave the film tacky. If a sheet feels wet or the powder looks disturbed, do not press a customer’s shirt with it. Press a scrap, or discard it.</p>
<p>Do not fold through the design. A crease in the adhesive shows up as a line on the garment. Cut gang-sheet pieces want the same treatment. Write the peel type on the sleeve if you have more than one film in the drawer. Cold, warm and hot are easy to mix up a month later, and the <a href="/guides/peel-types/">peel</a> is how prints get ruined in the first second after the press opens.</p>
<p>Nothing on the <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> pressing guide is a storage life. When your supplier prints one, that date is the instruction.</p>
`
  }
];
