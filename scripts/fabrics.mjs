import { pyjamaMention } from "./blanks.mjs";

const xpresHow = {
  label: "Xpres, how to DTF",
  url: "https://www.xpres.co.uk/direct-to-film-how-to-guide",
  note: "common press 150–160°C for 10–15 seconds, medium, cold peel"
};
const xpresEvo = {
  label: "Xpres DTF Evolution cold-peel sheets",
  url: "https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100",
  note: "150–160, 10–15 seconds, cold peel, second press 10–15 seconds"
};
const amaya = {
  label: "Amaya ProPeel DTF film",
  url: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/",
  note: "instant peel; cotton 160°C for 3 seconds, blends 150°C for 10 seconds, polyester 130°C for 15 seconds"
};

const home = { href: "/", label: "Home" };

const designTable = `<div class="guidance">
  <h2>Suggested design width</h2>
  <p>General guidance for a name or a small picture on the white chest. This is not a print area supplied with the garment. Stay inside the range and keep the design off the raglan seams and the neckband. A two-line name is better than a line that runs into the sleeve.</p>
  <div class="table-wrap">
  <table class="compact">
    <caption>General guidance only, for the raglan sets</caption>
    <thead><tr><th>Age</th><th>Suggested design width</th></tr></thead>
    <tbody>
      <tr><td>6–12 months</td><td>8–10 cm</td></tr>
      <tr><td>1–2 years</td><td>9–11 cm</td></tr>
      <tr><td>2–3 years</td><td>10–12 cm</td></tr>
      <tr><td>3–4 years</td><td>11–13 cm</td></tr>
      <tr><td>4–5 years</td><td>12–14 cm</td></tr>
      <tr><td>5–6 years</td><td>13–15 cm</td></tr>
    </tbody>
  </table>
  </div>
  <p>Baby sets want a smaller picture: about 6–8 cm at 0–3 months, 7–9 cm from 3–12 months, and 8–10 cm at 1–2 years. Flat measurements for the raglan sets are on the <a href="https://heatpress-settings.co.uk/pyjamas/size-guide/">size guide at Heat press settings</a>.</p>
</div>`;

export const fabricPages = [
  {
    path: "/fabrics/cotton/",
    title: "DTF heat press settings for 100% cotton",
    description: "DTF on 100% cotton in Celsius: a common cold-peel start of 150–160°C for 10–15 seconds, medium pressure, plus hot peel and glitter.",
    kicker: "Fabric",
    h1: "100% cotton",
    lede: "Cotton is the fabric DTF is bought for. A photograph, a full-colour name, a design with white in it: the transfer carries the ink, including the white, and the cotton does not have to be polyester.",
    crumbs: [home, { href: "/fabrics/cotton/", label: "100% cotton" }],
    schema: "article",
    tableFabric: "cotton",
    sources: [xpresHow, xpresEvo, amaya],
    related: [
      { href: "/fabrics/childrens-clothing/", label: "Children's cotton clothes" },
      { href: "/guides/peel-types/", label: "Hot, warm and cold peel" },
      { href: "/guides/final-press/", label: "The second press" },
      { href: "/guides/dtf-vs-htv-vs-sublimation/", label: "When to use HTV or sublimation instead" },
      { href: "/troubleshooting/not-sticking/", label: "If it does not stick" },
      { href: "/fabrics/hoodies/", label: "Hoodies and sweatshirts" }
    ],
    faqs: [
      { q: "Should I press cotton hotter than 160°C?", a: "Not from the pages this site uses. Xpres say heavier cotton may need a slightly higher temperature and they do not print a new number. Creep up on a spare, inside the instructions you were given, rather than jumping past the sheet." },
      { q: "Can I sublimate a white cotton shirt instead?", a: "No. Sublimation dye needs polyester. DTF is the full-colour route on cotton. Heat press settings explains the sublimation limit, and the vinyl charts if you only need a one-colour name." }
    ],
    body: `
<p>For a ready-made cold-peel transfer, start at 150–160°C (302–320°F) for 10–15 seconds, medium pressure. Peel when the film is cold, off the hot platen, then press again under a silicone sheet, Teflon or parchment. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> publish that common press, and their <a href="https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" rel="noopener noreferrer">Evolution cold-peel sheets</a> use the same heat and time, with a second press of 10–15 seconds.</p>
<p>Hot peel is a different film. A typical ready-made hot-peel start on cotton is still around 155–160°C, for 8–12 seconds, peeled straight away. <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a> is much shorter: 160°C for 3 seconds, medium-heavy, peel instantly, then 5 seconds again. Use 3 seconds only when that is your film. The <a href="/?fabric=cotton&amp;transfer=hot-peel">lookup</a> keeps the two cards apart.</p>
<p>Pre-press cotton. It holds moisture, and a damp patch is a common reason a transfer lifts after a wash that looked fine in the press. See <a href="/guides/pre-pressing/">pre-pressing</a>. Glitter uses the cold-peel row unless the packet says otherwise, with a lighter second press so the sparkle is not crushed.</p>
<p>A one-colour name is often simpler in heat transfer vinyl. Those temperatures are on <a href="https://heatpress-settings.co.uk/methods/standard-htv/">Heat press settings</a>, not here. Sublimation will not print ordinary cotton, however white the shirt is. The comparison is on the <a href="/guides/dtf-vs-htv-vs-sublimation/">DTF, HTV and sublimation</a> page.</p>
<p>A kids’ top in this cotton is about 200 gsm, with a white chest. Press that chest, not the raglan seam. Placement and a suggested design width are on the <a href="/fabrics/childrens-clothing/">children’s clothing</a> page.</p>
${pyjamaMention()}
`
  },
  {
    path: "/fabrics/polyester/",
    title: "DTF heat press settings for polyester",
    description: "DTF on polyester in Celsius: the common 150–160°C cold-peel band, a cooler hot-peel start, and how to limit shine and dye migration.",
    kicker: "Fabric",
    h1: "100% polyester",
    lede: "DTF will press onto polyester. The risk is the fabric, not the idea. Polyester shines, and dye in the shirt can move into a pale print.",
    crumbs: [home, { href: "/fabrics/polyester/", label: "Polyester" }],
    schema: "article",
    tableFabric: "polyester",
    sources: [xpresHow, xpresEvo, amaya],
    related: [
      { href: "/fabrics/hi-vis/", label: "Hi-vis, which is usually polyester" },
      { href: "/fabrics/poly-cotton/", label: "Poly-cotton blends" },
      { href: "/troubleshooting/ghosting-shiny-marks/", label: "Shiny marks" },
      { href: "/guides/dtf-vs-htv-vs-sublimation/", label: "Sublimation, when the shirt is light polyester" }
    ],
    faqs: [
      { q: "Why not drop every polyester press to 130°C?", a: "130°C for 15 seconds is the polyester row for Amaya ProPeel, an instant-peel film. Xpres still describe a common press of 150–160°C, and they include polyester in the fabrics DTF is for. Use the row for the transfers in your hand." },
      { q: "The white print has gone pink.", a: "That is dye from the shirt moving into the transfer. It is more likely when the press is hot and the polyester was strongly dyed. Cover the shirt, and if your supplier prints a lower polyester temperature, use that. Pressing again hotter will not pull the dye back out." }
    ],
    body: `
<p><a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> describe DTF for cotton, polyester and blends, and a common press of 150–160°C for 10–15 seconds at medium pressure, peeled cold. That is the cold-peel starting point here, with a cover sheet between the platen and the shirt. A shiny rectangle in the shape of the platen is scorch or glaze. It is not a pale transfer. Read <a href="/troubleshooting/ghosting-shiny-marks/">ghosting and shiny marks</a> before you add time.</p>
<p>Hot-peel polyester is where this site starts lower, at 140–150°C for 10–12 seconds, light to medium, peeled straight away. The named exception is <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a>: polyester at 130°C for 15 seconds, medium-heavy, peel instantly, then 5 seconds again. That card is only for that film.</p>
<p>Light polyester can also be sublimated, which dyes the fibre instead of laying a film on top. Those presses are hotter and longer. They live on <a href="https://heatpress-settings.co.uk/methods/sublimation-polyester/">Heat press settings</a>. Do not borrow a sublimation minute and put it on a DTF transfer. Dark polyester is a DTF job if you need white in the design, because sublimation has no white ink.</p>
<p>Hi-vis vests are usually polyester with reflective tape. They have their own, cooler notes on the <a href="/fabrics/hi-vis/">hi-vis</a> page. Blends are not a midpoint between this page and cotton. See <a href="/fabrics/poly-cotton/">poly-cotton</a>.</p>
`
  },
  {
    path: "/fabrics/poly-cotton/",
    title: "DTF heat press settings for poly-cotton blends",
    description: "DTF on poly-cotton: use the cotton band, not an average, and watch the polyester share for shine and dye migration.",
    kicker: "Fabric",
    h1: "Poly-cotton blends",
    lede: "A 50/50 or 65/35 shirt is not halfway between two presses. The transfer sheets that name blends put them with cotton. The polyester in the shirt can still misbehave.",
    crumbs: [home, { href: "/fabrics/poly-cotton/", label: "Poly-cotton blends" }],
    schema: "article",
    tableFabric: "poly-cotton",
    sources: [xpresHow, xpresEvo, amaya],
    related: [
      { href: "/fabrics/cotton/", label: "100% cotton" },
      { href: "/fabrics/polyester/", label: "Polyester" },
      { href: "/troubleshooting/ghosting-shiny-marks/", label: "Shiny marks" }
    ],
    faqs: [
      { q: "Should I average the cotton and polyester temperatures?", a: "No. Xpres list blends with cotton and polyester, and the common press they describe is 150–160°C for 10–15 seconds. Inventing a midpoint is less useful than reading the packet." },
      { q: "The shirt says cotton rich. Does that change the press?", a: "Read the label. Cotton rich can be a touch of polyester or a workwear shirt that is mostly polyester. The transfer still follows the sheet. The more polyester, the more you should cover the fabric and watch for shine." }
    ],
    body: `
<p>Check the label before you pick a row. Then press the row your transfers name, not a blend you calculated. For a cold-peel transfer the starting point is the same band as <a href="/fabrics/cotton/">cotton</a>: 150–160°C for 10–15 seconds, medium, cold peel, then a second press. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> put cotton, polyester and blends in one method.</p>
<p><a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a> does split blends out, for that instant-peel film only: 150°C for 10 seconds, medium-heavy, peel straight away, then 5 seconds. A ready-made hot-peel gang sheet is more often the 8–12 second start in the table. The packet decides which card you are on.</p>
<p>The polyester fibres can still glaze or bleed dye into white ink. Cover the shirt. If a pale design shifts colour, treat it as the <a href="/fabrics/polyester/">polyester</a> problem and stop adding heat. Sublimation on a blend only dyes the polyester share, so it looks pale. That is a different process, described on <a href="https://heatpress-settings.co.uk/fabrics/poly-cotton/">Heat press settings</a>.</p>
`
  },
  {
    path: "/fabrics/nylon/",
    title: "DTF heat press settings for nylon",
    description: "DTF on nylon: no published nylon time on the sources this site uses, and a cautious test only if your transfer supplier lists nylon.",
    kicker: "Fabric",
    h1: "Nylon",
    lede: "Nylon marks, shines and can melt. Press it only when the instructions with your transfers name nylon. A cotton setting is not a nylon setting.",
    crumbs: [home, { href: "/fabrics/nylon/", label: "Nylon" }],
    schema: "article",
    tableFabric: "nylon",
    tableCaption: "Cautious test points, only if your supplier lists nylon",
    notice: "The rows below are a cautious test, and only if your transfer supplier lists nylon. They are not a published nylon chart. If the packet does not name nylon, do not press it.",
    sources: [xpresHow, amaya],
    related: [
      { href: "/troubleshooting/ghosting-shiny-marks/", label: "Shiny marks that will not wash out" },
      { href: "/troubleshooting/not-sticking/", label: "If the film never bonds" },
      { href: "/fabrics/polyester/", label: "Polyester, a different sensitive fabric" },
      { href: "/guides/pre-pressing/", label: "A short pre-press, with a cover sheet" }
    ],
    faqs: [
      { q: "Xpres say DTF works on cotton, poly and blends. Is nylon included?", a: "Their how-to says cotton, poly, blends and more. It does not print a nylon temperature or time. More is not a number. Use the sheet that came with your film." },
      { q: "The bag is coated or waterproof.", a: "A coating is a further reason to stop. Heat can mark the coating, and many transfer sheets never claim it. If the packet is silent, do not borrow the cotton row to find out." }
    ],
    body: `
<p>The lookup still shows a test figure, because people ask for one: 140°C (284°F), about 10 seconds, light pressure, cold peel, with a cover sheet. That is a cautious start for a scrap, not a manufacturer’s nylon row. The <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> guide and the <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a> page used on this site name cotton, polyester and blends. They do not name nylon.</p>
<p>Press an inside seam or a spare. Stop if the nylon shines, stiffens or smells. That mark will not wash out. Hot peel is the riskier of the peels here. If the packet says cold, wait, even when you are in a hurry. Glitter on nylon is a test you will often lose. The film has to grip a fabric that does not like the heat the texture wants.</p>
<p>Pre-press only for a moment, under a cover, enough to flatten the panel. A long pre-press can glaze the nylon before the design is even on it. See <a href="/guides/pre-pressing/">pre-pressing</a> and <a href="/troubleshooting/ghosting-shiny-marks/">shiny marks</a>.</p>
`
  },
  {
    path: "/fabrics/denim/",
    title: "DTF heat press settings for denim",
    description: "DTF on denim in Celsius: 160°C for about 15 seconds as a heavy-cotton start, with seams and pockets kept off the platen.",
    kicker: "Fabric",
    h1: "Denim",
    lede: "Denim is heavy cotton. It holds moisture, and seams hold the platen off the film. The press has to reach the weave without cooking a rectangle into the cloth.",
    crumbs: [home, { href: "/fabrics/denim/", label: "Denim" }],
    schema: "article",
    tableFabric: "denim",
    tableCaption: "Heavy-cotton starting points for denim",
    sources: [xpresHow, xpresEvo],
    related: [
      { href: "/fabrics/cotton/", label: "The cotton band these rows sit on" },
      { href: "/guides/pre-pressing/", label: "Pre-pressing thick cloth" },
      { href: "/troubleshooting/not-sticking/", label: "Edges that lift on a seam" },
      { href: "/fabrics/canvas-totes/", label: "Canvas, the other thick cotton" }
    ],
    faqs: [
      { q: "Is 160°C a denim chart from a supplier?", a: "No. Xpres say heavier cotton may need a slightly higher temperature and they do not print a new number. 160°C for 15 seconds is the top of the 150–160°C band they do print, held for the longer end of 10–15 seconds. Your packet still wins." },
      { q: "The design failed only beside the pocket.", a: "The pocket seam lifted the platen. Press the flat part of the leg or the chest, or use a pillow under the denim if your press has one, so the film meets the cloth. More heat on a ridge still misses the film." }
    ],
    body: `
<p>Pre-press the area until it is dry and flat. Denim from a cold wash, or folded in a stack, needs longer than a T-shirt. Then press a cold-peel transfer at 160°C (320°F) for 15 seconds, medium to firm, peel cold, and press again under a cover sheet. Firm means the platen meets the weave. It does not mean forcing the handle until the print cracks.</p>
<p>Keep zips, rivets and pocket seams out from under the platen. They steal pressure and they can mark the platen or the denim. A jacket back is an easier panel than a jeans pocket.</p>
<p>Hot peel on denim still wants that heat: 160°C for 10–12 seconds is the starting point, peeled straight away, unless the sheet gives its own time. Glitter follows the cold-peel row and a lighter second press. Stretch denim with elastane is closer to a sensitive fabric. Cover it and test a scrap before you trust the rigid-denim time.</p>
<p>Ordinary cotton notes, including why sublimation is the wrong process, are on the <a href="/fabrics/cotton/">cotton</a> page. Vinyl on cotton is on <a href="https://heatpress-settings.co.uk/fabrics/cotton/">Heat press settings</a>.</p>
`
  },
  {
    path: "/fabrics/canvas-totes/",
    title: "DTF heat press settings for canvas and tote bags",
    description: "DTF on cotton canvas and tote bags: 160°C for about 15 seconds, a proper pre-press, and handles kept off the platen.",
    kicker: "Fabric",
    h1: "Canvas and tote bags",
    lede: "A cotton tote takes a DTF transfer on the flat panel. It will not take sublimation dye. The awkward part is the bag, not the temperature.",
    crumbs: [home, { href: "/fabrics/canvas-totes/", label: "Canvas and tote bags" }],
    schema: "article",
    tableFabric: "canvas",
    tableCaption: "Starting points for canvas and cotton totes",
    sources: [xpresHow, xpresEvo],
    related: [
      { href: "/fabrics/cotton/", label: "100% cotton" },
      { href: "/fabrics/denim/", label: "Denim" },
      { href: "/guides/pre-pressing/", label: "Pre-pressing" },
      { href: "/troubleshooting/not-sticking/", label: "Edges that do not stick" }
    ],
    faqs: [
      { q: "Can I sublimate a natural canvas shopper?", a: "Only if it is polyester or has a coating sold for sublimation. Ordinary cotton canvas will not take the dye. DTF is the full-colour route. Heat press settings says the same about cotton totes." },
      { q: "Do I press both sides of the bag at once?", a: "No. You heat a folded layer you did not mean to, and the print on the front can pick up the seam or the handle. Slide one panel flat on the platen and keep the rest of the bag out of the way." }
    ],
    body: `
<p>Pre-press the panel until the canvas is dry and the fold creases have given up. Then use the top of the common cotton band: 160°C (320°F) for 15 seconds, medium pressure, cold peel, and a second press under a cover. <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> include cotton in the DTF method and say heavier cotton may need a slightly higher temperature. They do not print a separate canvas row, so this page does not invent one.</p>
<p>Handles, the base seam and the other side of the bag must stay off the platen. A handle under the film leaves a line that never bonds. If the tote is coated or laminated, stop and read the packet. Coated fabric is closer to the <a href="/fabrics/nylon/">nylon</a> warning than to this cotton row.</p>
<p>Hot peel starts at 155–160°C for 10–12 seconds if the sheet says hot. Glitter follows the cold-peel row. A one-colour logo can be vinyl instead. The cotton vinyl notes are on <a href="https://heatpress-settings.co.uk/fabrics/tote-bags/">Heat press settings</a>.</p>
`
  },
  {
    path: "/fabrics/hi-vis/",
    title: "DTF heat press settings for hi-vis",
    description: "DTF on hi-vis workwear: a cooler 145–150°C start, cold peel preferred, and the design kept off reflective tape.",
    kicker: "Fabric",
    h1: "Hi-vis",
    lede: "A hi-vis vest is usually polyester, and it usually has reflective tape. The tape and a hot platen do not belong together. Press the fabric, not the stripe.",
    crumbs: [home, { href: "/fabrics/hi-vis/", label: "Hi-vis" }],
    schema: "article",
    tableFabric: "hi-vis",
    tableCaption: "Cautious starting points for hi-vis",
    notice: "These are cautious starting points, not a named hi-vis chart. Keep the design off the reflective tape, cover the vest, and follow your transfer supplier. Test a spare.",
    sources: [xpresHow],
    related: [
      { href: "/fabrics/polyester/", label: "Polyester" },
      { href: "/troubleshooting/ghosting-shiny-marks/", label: "Shiny marks and dulled tape" },
      { href: "/guides/pre-pressing/", label: "A short, covered pre-press" },
      { href: "/guides/washing-and-care/", label: "Washing workwear" }
    ],
    faqs: [
      { q: "Can I press across the reflective band if the logo is large?", a: "Better to shrink the design. Heat can dull the tape, and a dulled stripe is not a wash fault. If the logo must sit near the band, keep the platen off the tape and test a spare vest before a batch." },
      { q: "Is 145°C hot enough for the adhesive?", a: "It is a cautious start at the bottom of the temperatures people use on polyester. If the packet says 160°C and the vest can take it away from the tape, the packet wins. If the fabric shines or the tape dulls on the test, stop and ask the supplier rather than adding time." }
    ],
    body: `
<p>There is no hi-vis row on the <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> page this site uses. The starting point here is cooler than their general 150–160°C band, because the garment is polyester and the tape is the part you cannot easily replace: 145–150°C (293–302°F) for 10–12 seconds, light to medium, cold peel, with a cover sheet, then a short second press.</p>
<p>Place the transfer on plain fabric. Thread or slide the vest so the reflective bands sit outside the platen. A short pre-press, covered, is enough to flatten the panel. A long uncovered pre-press can glaze the polyester and dull a stripe before you have pressed a design.</p>
<p>Hot peel only if the packet says hot, and still clear of the tape. Glitter near a reflective band is rarely the right finish. Workwear labels often want a cool wash. Follow the cooler of the garment label and the transfer sheet, and read <a href="/guides/washing-and-care/">washing and care</a>. The wider polyester notes are on the <a href="/fabrics/polyester/">polyester</a> page.</p>
`
  },
  {
    path: "/fabrics/childrens-clothing/",
    title: "DTF heat press settings for children's clothing",
    description: "DTF on children's cotton clothes and blank kids' pyjamas: the cotton press, chest placement, and a suggested design width by age.",
    kicker: "Fabric",
    h1: "Children's clothing",
    lede: "Press the fabric that is actually in the garment. These blank kids’ sets are cotton, with a white chest. Use the cotton DTF row, and keep the design on that chest.",
    crumbs: [home, { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }],
    schema: "article",
    tableFabric: "cotton",
    tableCaption: "Cotton starting points, which these tops use",
    sources: [xpresHow, xpresEvo],
    related: [
      { href: "/fabrics/cotton/", label: "100% cotton" },
      { href: "/guides/pre-pressing/", label: "Pre-press the chest" },
      { href: "/guides/dtf-vs-htv-vs-sublimation/", label: "Why not sublimation" },
      { href: "/guides/washing-and-care/", label: "Washing" },
      { href: "https://heatpress-settings.co.uk/pyjamas/htv/", label: "HTV on these pyjamas" },
      { href: "https://heatpress-settings.co.uk/pyjamas/size-guide/", label: "Size guide" }
    ],
    faqs: [
      { q: "Do children's clothes need a lower DTF temperature?", a: "These sets are about 200 gsm cotton. They use the cotton row, not a baby-film temperature borrowed from vinyl. If the care label says cool iron or do not iron, test a spare or do not press it. The packet and the label both apply." },
      { q: "Can I sublimate the white chest?", a: "No. The chest is cotton. Sublimation dye does not bond to it. A longer press adds heat, not polyester. DTF and heat transfer vinyl can sit on that chest. Heat press settings sets out why." }
    ],
    body: `
<p>The kids’ sets these notes are written around are 100% cotton, about 200 gsm, with a long raglan sleeve. The top body is white. The sleeves and bottoms are coloured, striped or printed. There is no brand label in the neck.</p>
${pyjamaMention()}
<p>Use the <a href="/fabrics/cotton/">cotton</a> press: for a cold-peel transfer, 150–160°C for 10–15 seconds, medium, peel cold, then a second press under a cover. Pre-press the white chest first so it is dry and flat. Keep poppers, zips and the raglan seams off the platen. A design that crosses the seam sits on a ridge, and the edge will lift.</p>
<p>Lay the top flat, front up. Centre the transfer on the white body, below the neckband, with plain cotton around it. Cover it. If the platen also covers a printed sleeve, that print takes the same heat, so slide the top until the platen meets the chest and as little of the print as you can manage.</p>
${designTable}
<p>A one-colour name can be vinyl instead of DTF. Placement and the film charts are on <a href="https://heatpress-settings.co.uk/pyjamas/htv/">Heat press settings</a>. If you sell children’s nightwear in the UK, a design on the chest does not remove the labelling rules. That sister page points at the trading-standards summary. This site is not legal advice.</p>
`
  }
  ,
  {
    path: "/fabrics/hoodies/",
    title: "DTF on hoodies and sweatshirts: heat press settings",
    description: "Pressing DTF transfers on hoodies and sweatshirts: the fabric's own row, a pillow past the pocket seams, a dry pre-press, and the hood kept off the platen.",
    kicker: "Fabric",
    h1: "Hoodies and sweatshirts",
    lede: "A hoodie takes a DTF transfer well. It just fights back: a pocket seam, a thick fleece that holds water, a hood and drawcords. Use the row for the fabric, then deal with those.",
    crumbs: [home, { href: "/fabrics/hoodies/", label: "Hoodies and sweatshirts" }],
    schema: "article",
    sources: [
      xpresHow,
      xpresEvo,
      { label: "Siser, how to heat press a hoodie", url: "https://www.siserna.com/heat-press-hoodie/", note: "a pillow under the print area, seams off the platen, pressure turned down" },
      { label: "Siser, heat transfer pillows", url: "https://www.siser.com/all-about-siser-heat-transfer-pillows/", note: "for seams, pockets, zips and drawstrings" }
    ],
    related: [
      { href: "/fabrics/cotton/", label: "100% cotton" },
      { href: "/fabrics/poly-cotton/", label: "Poly-cotton blends" },
      { href: "/fabrics/polyester/", label: "Polyester" },
      { href: "/guides/pre-pressing/", label: "Pre-pressing" },
      { href: "/troubleshooting/not-sticking/", label: "Edges that do not stick" },
      { href: "/troubleshooting/cracking/", label: "Cracking" }
    ],
    faqs: [
      { q: "Is there a separate hoodie temperature?", a: "Not in the Xpres guide this site uses. They give one common press for cotton, polyester and blends: 150–160°C for 10–15 seconds, medium, cold peel, then a second press. Read the label, use that fabric’s row, and follow the sheet with your transfers if it differs." },
      { q: "The print lifted only along the pocket line.", a: "The pocket seam held the platen off the film there. Lift the print area above the seam with a pressing pillow, or move the design. Adding heat or time does not reach a spot the platen is not touching." },
      { q: "Where should the back print go?", a: "Low enough that the hood does not cover it when it is down. Siser make the same point about vinyl on a hoodie back." }
    ],
    body: `
<p>Check the label first. Most hoodies and sweatshirts are cotton, polyester or a blend, and <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> put all three in the same common DTF press: 150–160°C (302–320°F) for 10–15 seconds, medium pressure, peel cold, then press again under a cover. Use the <a href="/fabrics/cotton/">cotton</a>, <a href="/fabrics/poly-cotton/">poly-cotton</a> or <a href="/fabrics/polyester/">polyester</a> row, and the peel your packet names. Xpres also say heavier cotton may need a slightly higher temperature, without printing a new number, so a thick cotton hoodie sits at the top of that band rather than above it.</p>
<h2>Dry it first</h2>
<p>Sweatshirt fleece holds more moisture than a T-shirt. Xpres pre-press to take out moisture and creases before the film goes down. On a thick hoodie, open the press after the pre-press and let any steam clear before you position the transfer. A lint roller over the fleece stops loose fibres ending up under the film. More on <a href="/guides/pre-pressing/">pre-pressing</a>.</p>
<h2>Get past the pocket and the seams</h2>
<p>The kangaroo pocket is the usual reason a hoodie print fails in one band. Its stitched edge props the top platen up. Siser’s hoodie walkthrough, written for vinyl but the same press problem, puts a heat transfer pillow inside the garment so the print area sits higher than the pocket seams, and hangs the shoulder seams off the lower platen. With a pillow in, they turn the pressure down so the press still closes. Siser list zips, drawstrings, seams and pockets among the jobs a pillow is for.</p>
<p>Keep the hood, the drawcords and any zip off the platen. Slide the hoodie on so you press one layer, not the front and back together. Pull the cords out of the way rather than pressing over them.</p>
<h2>Peel and second press</h2>
<p>Cold-peel film needs the hoodie to cool before you lift it. Fleece holds heat, so give it longer than a thin tee. Then cover and press again. The Xpres Evolution sheets give 10–15 seconds for that second press. If a corner lifts as you peel, lay the film back, cover it and press again rather than pulling. <a href="/troubleshooting/not-sticking/">Not sticking</a> covers the usual causes.</p>
<p>Hoodies stretch across the chest and at the cuffs when they go on. A large, solid block of transfer is more likely to <a href="/troubleshooting/cracking/">crack</a> there than a lighter design. Wash inside out and follow the cooler of the garment label and the transfer sheet. See <a href="/guides/washing-and-care/">washing and care</a>.</p>
<p>A one-colour name or number can be cut vinyl instead. Vinyl settings for hoodies are on <a href="https://heatpress-settings.co.uk/fabrics/hoodies/">Heat press settings</a>.</p>
`
  }
];
