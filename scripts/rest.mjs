const chip = (c) => `<button type="button" data-c="${c}">${c}°C</button>`;

const home = { href: "/", label: "Home" };

export const restPages = [
  {
    path: "/tools/temperature-converter/",
    title: "Celsius to Fahrenheit converter for DTF presses",
    description: "Convert DTF heat press temperatures between Celsius and Fahrenheit, including 150°C and 160°C.",
    kicker: "Tool",
    h1: "Celsius to Fahrenheit",
    lede: "Type either side. The other side updates. The buttons are temperatures these DTF notes actually use.",
    crumbs: [home, { href: "/tools/temperature-converter/", label: "Temperature converter" }],
    schema: "tool",
    ogType: "website",
    need: false,
    scripts: ["/js/converter.js"],
    sources: [
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "a common press of 150–160°C" },
      { label: "Amaya ProPeel DTF film", url: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/", note: "160°C on cotton, 130°C on polyester, for that film" }
    ],
    related: [
      { href: "/", label: "Settings lookup" },
      { href: "/fabrics/cotton/", label: "Cotton, where 150–160°C is the cold-peel start" }
    ],
    body: `
<form id="converter" class="tool-card" style="display:block;color:inherit;text-decoration:none">
  <div class="calc-grid">
    <div>
      <label for="celsius">Celsius</label>
      <input id="celsius" name="celsius" type="number" inputmode="decimal" step="0.1" value="150">
    </div>
    <div>
      <label for="fahrenheit">Fahrenheit</label>
      <input id="fahrenheit" name="fahrenheit" type="number" inputmode="decimal" step="0.1" value="302">
    </div>
  </div>
  <div class="chips" role="group" aria-label="Temperatures used on these pages">
    ${[130, 140, 145, 150, 155, 160].map(chip).join("")}
  </div>
  <p id="converter-note" class="hint"></p>
</form>
<p>The formula is the ordinary one: Fahrenheit equals Celsius times 9/5, plus 32. This page uses that conversion beside every Celsius figure. 150°C is 302°F. 160°C is 320°F. 130°C is 266°F.</p>
<p>If a supplier prints both units and they do not match the formula exactly, trust the pair on their sheet. A press dial in Fahrenheit is not a reason to add an extra 30 degrees. If the dial and the results disagree, test a scrap before you invent an offset.</p>
<p>HTV and sublimation use other temperatures. Those converters and charts are on <a href="https://heatpress-settings.co.uk/tools/temperature-converter/">Heat press settings</a>.</p>
`
  },
  {
    path: "/about/",
    title: "About this DTF settings guide",
    description: "How dtfsettings.co.uk chooses DTF heat press figures, which pages it links, and what it will not invent.",
    kicker: "About",
    h1: "About this guide",
    lede: "A UK reference for pressing DTF transfers. Celsius first, Fahrenheit in brackets, and a standing instruction to follow the sheet that came with the film.",
    crumbs: [home, { href: "/about/", label: "About" }],
    schema: "about",
    need: false,
    sources: [
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide" },
      { label: "Xpres DTF Evolution cold-peel sheets", url: "https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" },
      { label: "Amaya ProPeel DTF film", url: "https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" },
      { label: "Heat press settings", url: "https://heatpress-settings.co.uk/" }
    ],
    related: [
      { href: "/", label: "Settings lookup" },
      { href: "/privacy/", label: "Privacy" },
      { href: "/contact/", label: "Contact" },
      { href: "https://heatpress-settings.co.uk/", label: "Heat press settings" }
    ],
    body: `
<p>DTF settings are easy to copy into one number and hard to trust. Cold-peel film, hot-peel film and glitter do not share a single press. This site shows a starting point for ready-made transfers, and a named example beside it when a published page gives a different one.</p>
<h2>Where the numbers come from</h2>
<p>The common cold-peel band, 150–160°C for 10–15 seconds at medium pressure, is the press <a href="https://www.xpres.co.uk/direct-to-film-how-to-guide" rel="noopener noreferrer">Xpres</a> describe, including a cold peel and a second press. Their <a href="https://www.xpres.co.uk/xpres-dtf-evolution-cold-peel-sheets-pack-x-100" rel="noopener noreferrer">Evolution cold-peel sheets</a> use that heat and time, a second press of 10–15 seconds, a wash up to 40°C inside out, and ironing on the reverse only. <a href="https://www.amayauk.com/product/propeel-dtf-film-60cm-x-100m/" rel="noopener noreferrer">Amaya ProPeel</a> is an instant-peel film with its own short times, including 3 seconds on cotton. Those cards are labelled. They are not blended into one average.</p>
<p>Denim, canvas, nylon and hi-vis do not have their own row on those pages. Where this site still offers a starting point, the page says so. Nylon is a test figure only if your supplier lists nylon. Hi-vis is a cooler cautious start, kept off the reflective tape. Heavier cotton uses the top of the published band because Xpres say heavier cotton may need a slightly higher temperature and they do not print a new number.</p>
<h2>What this site will not do</h2>
<p>It does not invent a citation. If a page on this site links to a supplier, that page is the one being described. If a row is a starting point rather than a named chart, it is labelled as a starting point. The instructions in your packet override both.</p>
<p>Nothing here is a promise that your press matches the dial. Test on a scrap. HTV and sublimation are a different craft. Their charts are on <a href="https://heatpress-settings.co.uk/">Heat press settings</a>.</p>
<p>The guides were checked against those supplier pages on 12 October 2026. Makers revise sheets. If a product page and this site diverge, believe the product page, and <a href="/contact/">send a correction</a>.</p>
`
  },
  {
    path: "/privacy/",
    title: "Privacy policy, cookies and affiliate disclosure",
    description: "UK GDPR privacy notice for dtfsettings.co.uk: email, cookies, empty advert spaces, and a plain link to an Amazon UK range.",
    kicker: "Privacy",
    h1: "Privacy policy",
    lede: "This notice explains what dtfsettings.co.uk does with personal information. It was updated on 18 October 2026.",
    modified: "2026-10-18",
    crumbs: [home, { href: "/privacy/", label: "Privacy" }],
    schema: "privacy",
    need: false,
    ad: false,
    related: [
      { href: "/about/", label: "About the guide" },
      { href: "/contact/", label: "Contact" }
    ],
    body: `
<h2>Who we are</h2>
<p>The site is operated as dtfsettings.co.uk. For privacy questions, email <a href="mailto:contact@dtfsettings.co.uk">contact@dtfsettings.co.uk</a>. There is no account system and no shop on this site.</p>
<h2>What we collect</h2>
<p>If you email that address, we receive whatever you put in the message: your email address, your name if you include it, and the details of your question. We use that only to reply. The lawful basis is our legitimate interest in answering people who write to us. We do not run a mailing list from those messages.</p>
<p>The site is hosted on Cloudflare Pages. Delivering a web page involves connection data such as your IP address. That processing is done by the host so the site can be shown. Cloudflare’s own privacy notice describes their logs: <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener noreferrer">cloudflare.com/privacypolicy</a>.</p>
<p>We do not ask for an account, we do not run a contact form with a database behind it, and we do not use the site to profile you.</p>
<h2>Cookies</h2>
<p>This version of the site does not set its own cookies. It uses Cloudflare Web Analytics to count page views, which is cookieless: it does not set cookies or use local storage, and it does not track you across sites. It does not load advertising scripts. If that changes, this policy will be updated first, and any non-essential cookies will wait for a proper choice under the Privacy and Electronic Communications Regulations and UK GDPR.</p>
<h2>Advertising and affiliate links</h2>
<p>You may see a marked box that says the space is reserved for a future advert. Nothing is loaded in that box. There is no AdSense code and no ads.txt file yet.</p>
<p>You may also see a box headed “What you’ll need”. The slots in it are empty. Nothing is loaded there, and they are not affiliate links.</p>
<p>The cotton page and the children’s clothing page each show two small photos of kids’ pyjamas, one plain colour and one stripe or print, and a sentence that links to the Amazon UK range. The photos use that same address. The DTF, HTV and sublimation guide uses it in a sentence. Nothing is added to the address to track a commission. If we later add affiliate links or adverts, they will be labelled as such before they go live.</p>
<h2>How long we keep email</h2>
<p>We keep correspondence for as long as we need it to handle your question and any follow-up, and then delete it. Hosting logs are kept on the host’s schedule, not ours.</p>
<h2>Your rights</h2>
<p>Under UK GDPR you can ask for a copy of the personal data we hold about you, ask us to correct it, ask us to delete it, ask us to restrict or stop certain uses, and ask for a portable copy where that right applies. You can also complain to the Information Commissioner’s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>. We would like the chance to put a problem right first, via the contact address above.</p>
<h2>Children</h2>
<p>The guides talk about pressing children’s clothes. The site itself is written for adult crafters. We do not knowingly collect information from children.</p>
`
  },
  {
    path: "/contact/",
    title: "Contact dtfsettings.co.uk",
    description: "Email contact@dtfsettings.co.uk about a DTF chart, a correction or a broken source link. There is no contact form.",
    kicker: "Contact",
    h1: "Contact",
    lede: "There is no form and no inbox inside the site. Email is the whole of it.",
    crumbs: [home, { href: "/contact/", label: "Contact" }],
    schema: "contact",
    ad: false,
    need: false,
    related: [
      { href: "/about/", label: "How the numbers are chosen" },
      { href: "/", label: "Settings lookup" }
    ],
    body: `
<p><a href="mailto:contact@dtfsettings.co.uk">contact@dtfsettings.co.uk</a></p>
<p>Useful mail is a correction: the transfer name, the page you were on, and the supplier link that disagrees with this site. No chart can set the dial for every press and every own-brand film. If the packet in your hand has a temperature, that packet wins.</p>
<p>Please do not send passwords, payment card numbers or anything else you would not want in an ordinary email. The <a href="/privacy/">privacy notice</a> explains what happens to messages.</p>
`
  }
];
