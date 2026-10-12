/* Starting points for pressing ready-made DTF transfers.
   The packet supplied with the transfers overrides every row.
   Fahrenheit is the usual conversion (C × 9/5 + 32). */
(function (root) {
  "use strict";

  var guides = {
    cotton: "/fabrics/cotton/",
    polyester: "/fabrics/polyester/",
    "poly-cotton": "/fabrics/poly-cotton/",
    nylon: "/fabrics/nylon/",
    denim: "/fabrics/denim/",
    canvas: "/fabrics/canvas-totes/",
    "hi-vis": "/fabrics/hi-vis/"
  };

  var xpres = {
    name: "Xpres cold-peel example",
    tempC: "150–160",
    tempF: "302–320",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Cold",
    detail: "Xpres describe a common DTF press of 150–160°C for 10–15 seconds at medium pressure, then a cold peel away from the platen and a second press. Their Evolution cold-peel sheets use the same 150–160°C and 10–15 seconds, with a second press of 10–15 seconds. They say heavier cotton may need a slightly higher temperature, and they do not print a new number.",
    sourceLabel: "Xpres, how to DTF",
    sourceUrl: "https://www.xpres.co.uk/direct-to-film-how-to-guide"
  };

  var amayaCotton = {
    name: "Amaya ProPeel film, cotton",
    tempC: "160",
    tempF: "320",
    time: "3 seconds",
    pressure: "Medium to heavy",
    peel: "Hot",
    detail: "This is one instant-peel film, not a typical ready-made gang sheet. Amaya press cotton at 160°C for 3 seconds, medium-heavy pressure, peel straight away, then press again for 5 seconds under protection paper or Teflon. If your transfers are not this film, do not copy the 3-second time.",
    sourceLabel: "Amaya ProPeel DTF film",
    sourceUrl: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/"
  };

  var amayaBlend = {
    name: "Amaya ProPeel film, blends",
    tempC: "150",
    tempF: "302",
    time: "10 seconds",
    pressure: "Medium to heavy",
    peel: "Hot",
    detail: "Amaya’s blend row for this instant-peel film is 150°C for 10 seconds, medium-heavy pressure, peel straight away, then 5 seconds again under a cover. It is not the default for every hot-peel gang sheet.",
    sourceLabel: "Amaya ProPeel DTF film",
    sourceUrl: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/"
  };

  var amayaPoly = {
    name: "Amaya ProPeel film, polyester",
    tempC: "130",
    tempF: "266",
    time: "15 seconds",
    pressure: "Medium to heavy",
    peel: "Hot",
    detail: "Amaya press polyester with this instant-peel film at 130°C for 15 seconds, medium-heavy, peel straight away, then 5 seconds again. That 130°C belongs to this film. It is not a general cold-peel polyester setting.",
    sourceLabel: "Amaya ProPeel DTF film",
    sourceUrl: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/"
  };

  var nylonCaution = "The sources named on this site do not print a nylon row. Use this only as a cautious test, and only if your transfer supplier lists nylon. If the packet does not name nylon, do not press it. Stop if the fabric shines or stiffens. A mark on nylon does not wash out.";
  var hiVisCaution = "Hi-vis is usually polyester, often with reflective tape. Heat can dull the tape and glaze the cloth. Keep the design and the platen off the reflective bands, cover the vest, and test a spare. Prefer the peel your packet names. This cooler band is a cautious starting point, not a named hi-vis chart.";
  var polyCaution = "Cover the shirt. Polyester can shine or bleed dye into a pale print. If your supplier prints a lower polyester temperature, use that. Stop if a shiny box appears around the design.";
  var denimNote = "Pre-press until the area is dry and flat. Keep pocket seams, zips and thick folds out from under the platen.";
  var canvasNote = "Pre-press the panel you are printing. Keep handles, the base seam and the other side of the bag off the platen.";

  function row(fabric, transfer, tempC, tempF, time, pressure, peel, summary, detail, caution, example) {
    return {
      fabric: fabric,
      transfer: transfer,
      tempC: tempC,
      tempF: tempF,
      time: time,
      pressure: pressure,
      peel: peel,
      summary: summary,
      detail: detail,
      caution: caution || "",
      example: example || null,
      guide: guides[fabric],
      links: [
        { href: "/guides/peel-types/", label: "Hot, warm and cold peel" },
        { href: "/guides/final-press/", label: "The second press" },
        { href: "/guides/pre-pressing/", label: "Pre-pressing" }
      ]
    };
  }

  var coldSecond = " After a cold peel, press again under a silicone sheet, Teflon or parchment. Xpres Evolution cold-peel sheets suggest a second press of 10–15 seconds.";
  var hotSecond = " After you peel, cover the print and press again. Amaya’s instant-peel film uses 5 seconds for that second press. A ready-made sheet may say something else. Use the sheet.";
  var warmSecond = " Peel when the film is warm, a few seconds after the press opens, and only if the packet says warm. Then cover the print and press again briefly.";
  var glitterSecond = " Glitter is not given a separate temperature on the Xpres or Amaya pages this site uses. Press it like the cold-peel row unless the packet says otherwise, and keep the second press lighter so the texture is not crushed.";

  var records = [
    row("cotton", "cold-peel", "150–160", "302–320", "10–15 seconds", "Medium", "Cold",
      "A common cold-peel starting point for cotton, in the band Xpres publish.",
      "Pre-press the shirt. Press the adhesive side down at medium pressure, take the shirt off the platen, and peel when the film is cold." + coldSecond + " Heavier cotton can sit at the top of the band. Xpres mention a slightly higher temperature for heavier cotton and do not give the new number.",
      "", xpres),
    row("cotton", "warm-peel", "150–160", "302–320", "10–15 seconds", "Medium", "Warm",
      "Same heat and time as the cold-peel cotton row. The peel is the part that changes.",
      "The Xpres pages and the Amaya instant-peel film do not describe a warm peel. If your packet says warm, use 150–160°C for 10–15 seconds at medium pressure and peel while the film is warm." + warmSecond,
      "If the packet says cold, wait. If it says hot, peel straight away. Do not invent a warm peel for a film that names another one."),
    row("cotton", "hot-peel", "155–160", "311–320", "8–12 seconds", "Medium", "Hot",
      "A typical ready-made hot-peel start for cotton. One instant-peel film is much shorter.",
      "Peel as soon as the press opens. The 8–12 seconds is a starting point for ready-made hot-peel transfers, not a blended average." + hotSecond,
      "Do not use a 3-second press unless your film says 3 seconds.", amayaCotton),
    row("cotton", "glitter", "150–160", "302–320", "10–15 seconds", "Medium", "Cold",
      "Glitter DTF on cotton uses the cold-peel cotton row unless the packet says otherwise.",
      "Cover the shirt." + glitterSecond,
      "If the glitter sheet says hot or warm, follow that peel. The temperature on this card is not a separate glitter chart."),

    row("polyester", "cold-peel", "150–160", "302–320", "10–15 seconds", "Medium", "Cold",
      "Xpres group polyester with cotton at 150–160°C. Cover the shirt.",
      "Press adhesive side down, peel cold off the platen, then press again under a cover sheet." + coldSecond,
      polyCaution, xpres),
    row("polyester", "warm-peel", "150–160", "302–320", "10–15 seconds", "Medium", "Warm",
      "Use the cold-peel band, and peel warm only if the packet says warm.",
      "Cover the shirt so the platen does not glaze a rectangle into the polyester." + warmSecond,
      polyCaution),
    row("polyester", "hot-peel", "140–150", "284–302", "10–12 seconds", "Light to medium", "Hot",
      "A cooler hot-peel start for polyester, so the cloth is less likely to shine.",
      "Peel straight away, with a cover sheet on the transfer. This is a starting point for ready-made hot-peel transfers." + hotSecond,
      polyCaution + " The 130°C card is one named film, not this starting point.", amayaPoly),
    row("polyester", "glitter", "150–160", "302–320", "10–15 seconds", "Medium", "Cold",
      "Glitter on polyester follows the cold-peel row unless the packet says otherwise.",
      "Cover the shirt. A shiny halo is usually the fabric or adhesive squeezed out, not a pale glitter print." + glitterSecond,
      polyCaution),

    row("poly-cotton", "cold-peel", "150–160", "302–320", "10–15 seconds", "Medium", "Cold",
      "Xpres include blends with cotton and polyester at the same common press.",
      "Do not average a cotton temperature and a polyester temperature. Pre-press, press medium, peel cold, then press again." + coldSecond,
      "The polyester in the blend can still shine or shift dye into a pale print. Cover it.", xpres),
    row("poly-cotton", "warm-peel", "150–160", "302–320", "10–15 seconds", "Medium", "Warm",
      "Same band as cold-peel blends. Peel warm only when the packet says warm.",
      "Cover the shirt." + warmSecond,
      "A higher polyester share is a reason to test, not a reason to invent a midpoint."),
    row("poly-cotton", "hot-peel", "150–160", "302–320", "8–12 seconds", "Medium", "Hot",
      "A ready-made hot-peel start for blends, in the same temperature band as cold peel.",
      "Peel straight away." + hotSecond,
      "The 10-second card is one instant-peel film’s blend row. Use it when that is the film you have.", amayaBlend),
    row("poly-cotton", "glitter", "150–160", "302–320", "10–15 seconds", "Medium", "Cold",
      "Glitter on a blend follows the cold-peel row unless the packet says otherwise.",
      "Cover the shirt and keep the second press light." + glitterSecond,
      ""),

    row("nylon", "cold-peel", "140", "284", "10 seconds", "Light", "Cold",
      "A cautious test for nylon, and only if the supplier lists it.",
      "Use a cover sheet. Press one scrap or an inside seam before a bag or a jacket you cannot spare. Peel cold.",
      nylonCaution),
    row("nylon", "warm-peel", "140", "284", "10 seconds", "Light", "Warm",
      "Same cautious test. Peel warm only if the packet says warm.",
      "Light pressure and a cover sheet. Warm is not safer than cold on a fabric the film never named.",
      nylonCaution),
    row("nylon", "hot-peel", "140", "284", "8–10 seconds", "Light", "Hot",
      "Hot peel on nylon is easy to get wrong. Only if the packet lists both nylon and a hot peel.",
      "If the packet says cold, peel cold even if you would rather go faster. Cover the fabric.",
      nylonCaution),
    row("nylon", "glitter", "140", "284", "10 seconds", "Light", "Cold",
      "Glitter on nylon is a test, not a standard job.",
      "The texture needs a bond the fabric may not give. Peel cold unless the packet says otherwise, and keep the second press light.",
      nylonCaution),

    row("denim", "cold-peel", "160", "320", "15 seconds", "Medium to firm", "Cold",
      "The top of the Xpres cotton band, for longer, because denim is heavy.",
      "Xpres say heavier cotton may need a slightly higher temperature and do not print a new number. 160°C for 15 seconds is that top end, then a cold peel and a second press." + coldSecond,
      denimNote, xpres),
    row("denim", "warm-peel", "160", "320", "15 seconds", "Medium to firm", "Warm",
      "Same heavy-cotton start. Peel warm only if the packet says warm.",
      denimNote + warmSecond,
      ""),
    row("denim", "hot-peel", "160", "320", "10–12 seconds", "Medium to firm", "Hot",
      "Hot peel on denim still wants the heat to reach the weave.",
      "Peel straight away. If the edges are not down, the time was short or a seam held the platen off. Do not jump past the packet." + hotSecond,
      denimNote),
    row("denim", "glitter", "160", "320", "15 seconds", "Medium to firm", "Cold",
      "Glitter on denim uses the heavy-cotton cold-peel start unless the packet says otherwise.",
      denimNote + glitterSecond,
      ""),

    row("canvas", "cold-peel", "160", "320", "15 seconds", "Medium", "Cold",
      "Canvas and cotton totes start at the top of the common cotton band.",
      "The cloth is thick and holds moisture. Pre-press the panel, press 160°C for 15 seconds, peel cold, then press again under a cover." + coldSecond,
      canvasNote, xpres),
    row("canvas", "warm-peel", "160", "320", "15 seconds", "Medium", "Warm",
      "Same canvas start. Peel warm only if the packet says warm.",
      canvasNote + warmSecond,
      ""),
    row("canvas", "hot-peel", "155–160", "311–320", "10–12 seconds", "Medium", "Hot",
      "Hot peel on a tote still needs a flat, dry panel.",
      "Peel straight away. A handle or a seam under the platen leaves a cold spot, and that edge will lift." + hotSecond,
      canvasNote),
    row("canvas", "glitter", "160", "320", "15 seconds", "Medium", "Cold",
      "Glitter on canvas follows the cold-peel tote row unless the packet says otherwise.",
      canvasNote + glitterSecond,
      ""),

    row("hi-vis", "cold-peel", "145–150", "293–302", "10–12 seconds", "Light to medium", "Cold",
      "A cooler start for hi-vis, cold peel, clear of the reflective tape.",
      "Cover the vest. Press the print on the fabric, not across a reflective band. Peel cold, then a short second press under a cover sheet.",
      hiVisCaution),
    row("hi-vis", "warm-peel", "145–150", "293–302", "10–12 seconds", "Light to medium", "Warm",
      "Same cooler band. Peel warm only if the packet says warm.",
      "Keep the tape out of the platen." + warmSecond,
      hiVisCaution),
    row("hi-vis", "hot-peel", "145–150", "293–302", "8–10 seconds", "Light to medium", "Hot",
      "Hot peel on hi-vis only if the packet says hot. Keep the tape clear.",
      "Peel straight away and cover the vest. A dulled reflective stripe is heat damage, not a failed print.",
      hiVisCaution),
    row("hi-vis", "glitter", "145–150", "293–302", "10–12 seconds", "Light to medium", "Cold",
      "Glitter on hi-vis is rarely worth it near reflective tape.",
      "If you test one, use the cooler cold-peel start, keep it off the bands, and keep the second press light." + glitterSecond,
      hiVisCaution)
  ];

  root.DTF_SETTINGS = {
    reviewed: "12 October 2026",
    fabrics: [
      { id: "cotton", label: "100% cotton" },
      { id: "polyester", label: "Polyester" },
      { id: "poly-cotton", label: "Poly-cotton blends" },
      { id: "nylon", label: "Nylon" },
      { id: "denim", label: "Denim" },
      { id: "canvas", label: "Canvas and tote bags" },
      { id: "hi-vis", label: "Hi-vis" }
    ],
    transfers: [
      { id: "cold-peel", label: "Cold-peel standard" },
      { id: "warm-peel", label: "Warm peel" },
      { id: "hot-peel", label: "Hot peel" },
      { id: "glitter", label: "Glitter" }
    ],
    records: records
  };
})(typeof window !== "undefined" ? window : globalThis);
