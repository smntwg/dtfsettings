import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { pages } from "./pages.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://dtfsettings.co.uk";
const reviewed = "12 October 2026";
const modified = "2026-10-12";

const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data/settings.js"), "utf8"), context);
const settings = context.window.DTF_SETTINGS;

const nav = [
  {
    label: "Fabrics",
    links: [
      ["100% cotton", "/fabrics/cotton/"],
      ["Polyester", "/fabrics/polyester/"],
      ["Poly-cotton blends", "/fabrics/poly-cotton/"],
      ["Nylon", "/fabrics/nylon/"],
      ["Denim", "/fabrics/denim/"],
      ["Canvas and tote bags", "/fabrics/canvas-totes/"],
      ["Hi-vis", "/fabrics/hi-vis/"],
      ["Children's clothing", "/fabrics/childrens-clothing/"],
      ["Hoodies and sweatshirts", "/fabrics/hoodies/"]
    ]
  },
  {
    label: "Guides",
    links: [
      ["How DTF works", "/guides/how-dtf-works/"],
      ["Pre-pressing", "/guides/pre-pressing/"],
      ["Peel types", "/guides/peel-types/"],
      ["The final press", "/guides/final-press/"],
      ["Washing and care", "/guides/washing-and-care/"],
      ["DTF, HTV and sublimation", "/guides/dtf-vs-htv-vs-sublimation/"],
      ["Gang sheets", "/guides/gang-sheets/"],
      ["Storing transfers", "/guides/storing-transfers/"]
    ]
  },
  {
    label: "Fixes",
    links: [
      ["Not sticking", "/troubleshooting/not-sticking/"],
      ["Cracking", "/troubleshooting/cracking/"],
      ["Peeling after washing", "/troubleshooting/peeling-after-washing/"],
      ["Ghosting or shiny marks", "/troubleshooting/ghosting-shiny-marks/"]
    ]
  },
  {
    label: "Tools",
    links: [
      ["Celsius to Fahrenheit", "/tools/temperature-converter/"],
      ["About", "/about/"],
      ["Privacy", "/privacy/"],
      ["Contact", "/contact/"]
    ]
  }
];

const defaultNotice = "These are starting points for ready-made DTF transfers. Always follow the instructions supplied with your transfers, then test on a scrap. The number on a heat press dial is often not the true platen temperature.";

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function current(href, here) {
  return href === here ? ' aria-current="page"' : "";
}

function header(here) {
  const drops = nav.map((group) => {
    const items = group.links.map(([label, href]) =>
      `<li><a href="${href}"${current(href, here)}>${esc(label)}</a></li>`
    ).join("");
    return `<details class="nav-drop"><summary>${esc(group.label)}</summary><ul>${items}</ul></details>`;
  }).join("");
  return `<a class="skip" href="#content">Skip to content</a>
<header class="site-header">
  <div class="wrap header-bar">
    <a class="brand" href="/">
      <svg class="mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="6" width="34" height="22" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.2"></rect>
        <path d="M12 13h24M12 19h16" stroke="currentColor" stroke-width="2"></path>
        <rect x="11" y="33" width="26" height="7" rx="1" fill="currentColor"></rect>
      </svg>
      <span>
        <span class="brand-name">DTF settings</span>
        <span class="brand-tag">Celsius for UK crafters</span>
      </span>
    </a>
    <details class="menu" id="site-menu">
      <summary class="menu-button">Menu</summary>
      <nav class="menu-panel" aria-label="Primary">
        <a class="home-link" href="/"${current("/", here)}>Home</a>
        ${drops}
      </nav>
    </details>
  </div>
</header>`;
}

function footer() {
  const cols = nav.filter((group) => group.label !== "Tools").map((group) => {
    const items = group.links.map(([label, href]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("");
    return `<div><h2>${esc(group.label)}</h2><ul>${items}</ul></div>`;
  }).join("");
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <h2>About these numbers</h2>
      <p class="fine">Starting points for ready-made DTF transfers, checked ${reviewed}. Always follow your transfer supplier, then test on a scrap. The dial on a hobby press is often not the platen temperature.</p>
      <p class="fine"><a href="/about/">About</a> · <a href="/privacy/">Privacy</a> · <a href="mailto:contact@dtfsettings.co.uk">contact@dtfsettings.co.uk</a></p>
      <p class="fine">HTV and sublimation charts: <a href="https://heatpress-settings.co.uk/">Heat press settings</a>.</p>
    </div>
    ${cols}
  </div>
</footer>`;
}

function crumbs(items) {
  const html = items.map((item, index) => {
    if (index === items.length - 1) return `<li>${esc(item.label)}</li>`;
    return `<li><a href="${item.href}">${esc(item.label)}</a></li>`;
  }).join("");
  return `<nav aria-label="Breadcrumb"><ol class="crumbs">${html}</ol></nav>`;
}

function breadcrumbLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: origin + (item.href === "/" ? "/" : item.href)
    }))
  };
}

function adSlot() {
  return `<aside class="ad-slot" aria-label="Reserved advertisement space">
  <p class="ad-kicker">Advertisement</p>
  <p>This space is reserved for a future advert. Nothing is loaded here, and there is no advertising script on the site yet.</p>
</aside>`;
}

function needBox(items) {
  const slots = (items || ["Heat press", "DTF transfers", "Cover sheet"]).map((label) =>
    `<li><strong>${esc(label)}</strong> Link to follow</li>`
  ).join("");
  return `<aside class="need" aria-label="What you'll need">
  <h2>What you'll need</h2>
  <p>Space for product links. Nothing is loaded in this box yet, and these are not affiliate links.</p>
  <ul class="need-list">${slots}</ul>
</aside>`;
}

function related(links) {
  if (!links || !links.length) return "";
  const items = links.map((link) => `<li><a href="${link.href}">${esc(link.label)}</a></li>`).join("");
  return `<aside class="related"><h2>Related guides</h2><ul>${items}</ul></aside>`;
}

function sources(list) {
  if (!list || !list.length) return "";
  const items = list.map((source) =>
    `<li><a href="${esc(source.url)}" rel="noopener noreferrer">${esc(source.label)}</a>${source.note ? ` — ${esc(source.note)}` : ""}</li>`
  ).join("");
  return `<h2>Sources</h2><ul class="sources">${items}</ul>`;
}

function stepsHtml(steps) {
  if (!steps || !steps.length) return "";
  const items = steps.map((step) => `<li><strong>${esc(step.name)}.</strong> ${esc(step.text)}</li>`).join("");
  return `<h2>How to do it</h2><ol class="steps">${items}</ol>`;
}

function faqHtml(faqs) {
  if (!faqs || !faqs.length) return "";
  const items = faqs.map((faq) =>
    `<details><summary>${esc(faq.q)}</summary><p>${esc(faq.a)}</p></details>`
  ).join("");
  return `<h2>Common questions</h2><div class="faq">${items}</div>`;
}

function settingsTable(fabricId, caption) {
  const fabric = settings.fabrics.find((item) => item.id === fabricId);
  const title = caption || `Starting points for ${fabric ? fabric.label.toLowerCase() : fabricId}`;
  const order = settings.transfers.map((item) => item.id);
  const labels = Object.fromEntries(settings.transfers.map((item) => [item.id, item.label]));
  const rows = settings.records
    .filter((record) => record.fabric === fabricId)
    .sort((a, b) => order.indexOf(a.transfer) - order.indexOf(b.transfer));
  const body = rows.map((record) =>
    `<tr><td>${esc(labels[record.transfer] || record.transfer)}</td><td>${esc(record.tempC)}°C (${esc(record.tempF)}°F)</td><td>${esc(record.time)}</td><td>${esc(record.pressure)}</td><td>${esc(record.peel)}</td></tr>`
  ).join("");
  return `<div class="table-wrap">
<table>
  <caption>${esc(title)}</caption>
  <thead><tr><th>Transfer</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>${body}</tbody>
</table>
</div>
<p>The packet supplied with your transfers wins over this table. Where a named film publishes a different press, the <a href="/?fabric=${esc(fabricId)}&amp;transfer=cold-peel">lookup</a> shows that example beside the starting point.</p>`;
}

function graphFor(page, canonical) {
  const graph = [breadcrumbLd(page.crumbs)];
  if (page.schema === "home") {
    graph.push({
      "@type": "WebSite",
      name: "DTF settings",
      url: origin + "/",
      description: page.description,
      inLanguage: "en-GB"
    });
  }
  if (page.schema === "howto" || page.steps) {
    graph.push({
      "@type": "HowTo",
      name: page.h1,
      description: page.description,
      inLanguage: "en-GB",
      totalTime: page.totalTime || "PT2M",
      tool: (page.tools || ["Heat press"]).map((name) => ({ "@type": "HowToTool", name })),
      step: (page.steps || []).map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text
      }))
    });
  }
  if (page.faqs && page.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    });
  }
  if (page.schema === "article" || page.schema === "howto" || page.schema === "about") {
    graph.push({
      "@type": page.schema === "about" ? "AboutPage" : "Article",
      headline: page.h1,
      description: page.description,
      dateModified: modified,
      inLanguage: "en-GB",
      mainEntityOfPage: canonical,
      author: { "@type": "Organization", name: "DTF settings" }
    });
  }
  if (page.schema === "tool") {
    graph.push({
      "@type": "WebApplication",
      name: page.h1,
      description: page.description,
      url: canonical,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
      inLanguage: "en-GB"
    });
  }
  if (page.schema === "contact") {
    graph.push({
      "@type": "ContactPage",
      name: page.h1,
      url: canonical,
      description: page.description,
      inLanguage: "en-GB"
    });
  }
  if (page.schema === "privacy") {
    graph.push({
      "@type": "WebPage",
      name: page.h1,
      url: canonical,
      description: page.description,
      inLanguage: "en-GB",
      dateModified: page.modified || modified
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function documentHtml(page) {
  const here = page.path;
  const canonical = origin + (here === "/404.html" ? "/404.html" : here);
  const robots = page.robots ? `<meta name="robots" content="${esc(page.robots)}">` : "";
  const scripts = (page.scripts || []).map((src) => `<script src="${src}" defer></script>`).join("");
  const table = page.tableFabric ? settingsTable(page.tableFabric, page.tableCaption) : "";
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  ${robots}
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="${page.ogType || "article"}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="en_GB">
  <meta property="og:site_name" content="DTF settings">
  <meta name="twitter:card" content="summary">
  <meta name="theme-color" content="#351242">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&family=Playfair+Display:wght@500..800&display=swap">
  <link rel="stylesheet" href="/css/site.css">
  ${jsonLd(graphFor(page, canonical))}
  <!-- Cloudflare Web Analytics: injected automatically by Cloudflare (zone setting). Do not add the manual beacon: this site's token is zone-type and the manual endpoint rejects it. -->
</head>
<body>
  ${header(here)}
  <main id="content" class="page">
    <div class="wrap">
      ${crumbs(page.crumbs)}
      <header class="page-intro">
        <p class="kicker">${esc(page.kicker)}</p>
        <h1>${esc(page.h1)}</h1>
        <p class="lede">${esc(page.lede)}</p>
      </header>
      <div class="prose">
        <aside class="notice"><p>${esc(page.notice || defaultNotice)}</p></aside>
        ${table}
        ${page.body || ""}
        ${stepsHtml(page.steps)}
        ${faqHtml(page.faqs)}
        ${sources(page.sources)}
        ${page.closing || ""}
      </div>
      ${page.need === false ? "" : needBox(page.needItems)}
      ${related(page.related)}
      ${page.ad === false ? "" : adSlot()}
    </div>
  </main>
  ${footer()}
  <script src="/js/nav.js" defer></script>
  ${scripts}
</body>
</html>
`;
}

function selectOptions(list, selected) {
  return list.map((item) =>
    `<option value="${esc(item.id)}"${item.id === selected ? " selected" : ""}>${esc(item.label)}</option>`
  ).join("");
}

function homePage() {
  const description = "Look up UK DTF heat press temperature, time, pressure and peel by fabric and transfer type. Celsius first, with a note to follow your supplier.";
  const faqs = [
    {
      q: "Are these the exact settings for my transfers?",
      a: "No. They are starting points. Cold-peel film, hot-peel film and glitter do not share one number, and a press dial is often not the platen temperature. Use the instructions supplied with your transfers, then test on a scrap."
    },
    {
      q: "Why is there a second card on some results?",
      a: "The first card is a starting point for a ready-made transfer. The second card is a published example from a named film, such as an Xpres cold-peel sheet or Amaya ProPeel. If your packet matches that film, use the film. Otherwise use your packet, not the example."
    },
    {
      q: "Can I use a polyester sublimation temperature for DTF?",
      a: "No. Sublimation on polyester is a hotter, longer press. Those charts are on Heat press settings. A DTF transfer is a film you press on, usually around 150–160°C for a short time, not a dye press of a minute or more."
    }
  ];
  const page = {
    path: "/",
    title: "DTF heat press settings in Celsius for UK crafters",
    description,
    kicker: "UK guide",
    h1: "DTF heat press settings you can start from",
    lede: "Pick a fabric and a transfer type. You get temperature in Celsius, with Fahrenheit in brackets, plus time, pressure and whether to peel hot, warm or cold.",
    crumbs: [{ href: "/", label: "Home" }],
    schema: "home",
    ogType: "website",
    faqs,
    scripts: ["/data/settings.js", "/js/lookup.js"],
    ad: false,
    need: false,
    notice: "Starting points only. Always follow the instructions supplied with your transfers, then test on a scrap. A press dial often disagrees with the platen."
  };

  const fabricCards = [
    ["/fabrics/cotton/", "100% cotton", "The usual home for a DTF transfer. Cold peel often starts at 150–160°C."],
    ["/fabrics/polyester/", "Polyester", "The same published band, with a cover sheet so the shirt does not shine."],
    ["/fabrics/poly-cotton/", "Poly-cotton", "Blends stay on the cotton row. Do not average two temperatures."],
    ["/fabrics/nylon/", "Nylon", "Only if your supplier lists it. A shiny patch will not wash out."],
    ["/fabrics/denim/", "Denim", "Heavy cotton: the top of the band, and a longer press."],
    ["/fabrics/canvas-totes/", "Canvas and totes", "Pre-press the panel. Keep handles and seams off the platen."],
    ["/fabrics/hi-vis/", "Hi-vis", "Cooler, and keep the design off the reflective tape."],
    ["/fabrics/childrens-clothing/", "Children's clothing", "Cotton tops with a white chest. Use the cotton row, and keep the design on that chest."],
    ["/fabrics/hoodies/", "Hoodies and sweatshirts", "The fabric's own row. Get the print area above the pocket seam and dry the fleece first."]
  ].map(([href, title, text]) =>
    `<a class="guide-card" href="${href}"><h3>${esc(title)}</h3><p>${esc(text)}</p></a>`
  ).join("");

  const guideCards = [
    ["/guides/how-dtf-works/", "How DTF works", "Film, powder, a short press, a peel, and usually a second press."],
    ["/guides/pre-pressing/", "Pre-pressing", "Dry the fabric before the transfer goes down."],
    ["/guides/peel-types/", "Peel types", "Hot, warm and cold are instructions, not moods."],
    ["/guides/final-press/", "The final press", "The second press under a cover sheet, and why it is not optional on most sheets."],
    ["/guides/washing-and-care/", "Washing and care", "Inside out, and the cooler of the label and the transfer sheet."],
    ["/guides/dtf-vs-htv-vs-sublimation/", "DTF, HTV or sublimation", "Which job is which, and where the other charts live."],
    ["/guides/gang-sheets/", "Gang sheets", "Cut them apart, then press one design at a time."],
    ["/guides/storing-transfers/", "Storing transfers", "Flat, cool and dry. The packet's shelf life wins."]
  ].map(([href, title, text]) =>
    `<a class="guide-card" href="${href}"><h3>${esc(title)}</h3><p>${esc(text)}</p></a>`
  ).join("");

  const fixLinks = [
    ["/troubleshooting/not-sticking/", "Not sticking"],
    ["/troubleshooting/cracking/", "Cracking"],
    ["/troubleshooting/peeling-after-washing/", "Peeling after washing"],
    ["/troubleshooting/ghosting-shiny-marks/", "Ghosting or shiny marks"]
  ].map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("");

  const body = `
<section class="lookup" aria-labelledby="lookup-title">
  <div class="lookup-head">
    <h2 id="lookup-title">Settings lookup</h2>
    <p>Figures checked ${esc(settings.reviewed)}.</p>
  </div>
  <form id="lookup-form">
    <div class="fields pair">
      <div>
        <label for="fabric">Fabric</label>
        <select id="fabric" name="fabric">${selectOptions(settings.fabrics, "cotton")}</select>
      </div>
      <div>
        <label for="transfer">Transfer type</label>
        <select id="transfer" name="transfer">${selectOptions(settings.transfers, "cold-peel")}</select>
      </div>
    </div>
  </form>
  <div id="lookup-result" aria-live="polite">
    <p>Loading the starting point for this combination.</p>
  </div>
  <noscript><p>The lookup uses JavaScript. The same starting points are written out on the <a href="/fabrics/cotton/">fabric pages</a>.</p></noscript>
</section>
${adSlot()}
<section class="section">
  <h2>Fabrics</h2>
  <div class="grid guides">${fabricCards}</div>
</section>
<section class="section">
  <h2>Guides</h2>
  <div class="grid guides">${guideCards}</div>
</section>
<section class="section">
  <h2>When it goes wrong</h2>
  <ul>${fixLinks}</ul>
</section>
<section class="section">
  <h2>Tools</h2>
  <div class="grid tools">
    <a class="tool-card" href="/tools/temperature-converter/"><h3>°C to °F converter</h3><p>Including 150°C and 160°C, the temperatures these DTF notes keep using.</p></a>
    <a class="tool-card" href="https://heatpress-settings.co.uk/"><h3>HTV and sublimation</h3><p>Those charts live on Heat press settings, the sister guide. This site stays with DTF.</p></a>
  </div>
</section>
${needBox()}
`;
  const html = documentHtml({ ...page, body, related: [] });
  return html.replace("<div class=\"prose\">", "<div class=\"prose home-prose\">");
}

function notFound() {
  return documentHtml({
    path: "/404.html",
    title: "Page not found | DTF settings",
    description: "That page is not on dtfsettings.co.uk. Try the settings lookup or the fabric guides.",
    kicker: "404",
    h1: "That page is not here",
    lede: "The link may be out of date. The settings lookup and the fabric guides are on the home page.",
    crumbs: [{ href: "/", label: "Home" }, { href: "/404.html", label: "Page not found" }],
    schema: "article",
    robots: "noindex",
    ad: false,
    need: false,
    body: `<p><a href="/">Back to the settings lookup</a></p>
<ul>
  <li><a href="/fabrics/cotton/">100% cotton</a></li>
  <li><a href="/guides/how-dtf-works/">How DTF works</a></li>
  <li><a href="/guides/peel-types/">Peel types</a></li>
  <li><a href="/fabrics/childrens-clothing/">Children's clothing</a></li>
  <li><a href="/tools/temperature-converter/">Temperature converter</a></li>
</ul>`,
    related: []
  });
}

function write(rel, html) {
  const dest = rel === "index.html" ? path.join(root, "index.html") : path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}

const urls = [];
for (const page of pages) {
  const rel = page.path.replace(/^\//, "") + "index.html";
  write(rel, documentHtml(page));
  if (!page.robots) urls.push(origin + page.path);
}
write("index.html", homePage());
urls.unshift(origin + "/");
write("404.html", notFound());

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc><lastmod>${modified}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

if (!settings || settings.records.length !== 28) {
  throw new Error(`Expected 28 lookup records, got ${settings && settings.records.length}`);
}

console.log(`Wrote ${urls.length} public URLs plus 404.html`);
