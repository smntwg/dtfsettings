function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const photos = {
  B0C24KD4J6: { w: 600, h: 803, alt: "Blue and white kids pyjamas with white top" },
  B0BSR58NC9: { w: 600, h: 799, alt: "Blue stripe kids pyjamas with white top" },
  B0BRT24PH2: { w: 600, h: 1035, alt: "Blue cloud print kids pyjamas with white top" },
  B0BT21ML1J: { w: 600, h: 1016, alt: "Blue stars kids pyjamas with white top" },
  B0C28TCKL6: { w: 600, h: 801, alt: "Pink and white kids pyjamas with white top" },
  B0BXB676WT: { w: 600, h: 801, alt: "Pink stripe kids pyjamas with white top" },
  B0BRY4S423: { w: 600, h: 1016, alt: "Pink cloud print kids pyjamas with white top" },
  B0BXB21ZZ3: { w: 600, h: 1005, alt: "Pink stars kids pyjamas with white top" },
  B0GMRKRZ7K: { w: 600, h: 1026, alt: "Sage and white kids pyjamas with white top" },
  B0F88C6VRC: { w: 600, h: 1012, alt: "Pastel sage stripe kids pyjamas with white top" },
  B0GYSQPXHR: { w: 600, h: 923, alt: "Red stripe kids pyjamas with white top" },
  B0GMRFXVZX: { w: 600, h: 1009, alt: "Mink and white kids pyjamas with white top" },
  B0GYSLPRQN: { w: 600, h: 1011, alt: "Natural stripe kids pyjamas with white top" },
  B0GMQZY2WZ: { w: 600, h: 1011, alt: "Pastel purple and white kids pyjamas with white top" },
  B0FCSH6JLZ: { w: 600, h: 1015, alt: "Pastel purple stripe kids pyjamas with white top" },
  B0BTZ7T4RJ: { w: 600, h: 991, alt: "Blank dinosaur kids pyjamas with white top" },
  B0GWJNXWLG: { w: 600, h: 1028, alt: "Digger print kids pyjamas with white top" },
  B0BWK4XZRT: { w: 600, h: 1062, alt: "Unicorn kids pyjamas with white top" },
  B0GWJKDQGJ: { w: 600, h: 1025, alt: "Fairy princess kids pyjamas with white top" },
  B0C1949NZT: { w: 600, h: 1043, alt: "Heart print kids pyjamas with white top" },
  B0BSC9D8DG: { w: 600, h: 1015, alt: "Ballerina kids pyjamas with white top" },
  B0GWJD7YT7: { w: 600, h: 1012, alt: "Teddy bear kids pyjamas with white top" },
  B0FQPF13NZ: { w: 600, h: 1004, alt: "Bunny print kids pyjamas with white top" },
  B0CHK512ZJ: { w: 600, h: 965, alt: "White blank baby pyjamas" },
  B0GH2368W1: { w: 600, h: 954, alt: "Light blue blank baby pyjamas" },
  B0GH2MG9X5: { w: 600, h: 966, alt: "Pink blank baby pyjamas" }
};

function card(product) {
  const photo = photos[product.asin];
  if (!photo) throw new Error(`No photo for ${product.asin}`);
  const href = `https://www.amazon.co.uk/dp/${product.asin}`;
  return `<li class="blank-card"><img src="/img/blanks/${product.asin}.webp" width="${photo.w}" height="${photo.h}" alt="${esc(photo.alt)}" loading="lazy" decoding="async"><h3>${esc(product.title)}</h3><p>${esc(product.line)}</p><a class="btn" href="${href}" rel="noopener noreferrer">View on Amazon</a></li>`;
}

function grid(products, wide) {
  return `<ul class="blank-grid${wide ? " wide" : ""}">${products.map(card).join("")}</ul>`;
}

function grouped(products) {
  const groups = [];
  for (const product of products) {
    let group = groups.find((item) => item.name === product.group);
    if (!group) {
      group = { name: product.group, items: [] };
      groups.push(group);
    }
    group.items.push(product);
  }
  return groups.map((group) => `<h3 class="blank-group">${esc(group.name)}</h3>${grid(group.items, true)}`).join("");
}

const kidsCatalogue = [
  { group: "Blue", asin: "B0C24KD4J6", title: "Blue & White Blank Pyjamas", line: "White top, blue sleeves and bottoms." },
  { group: "Blue", asin: "B0BSR58NC9", title: "Blue Stripe Blank Pyjamas", line: "White top, blue stripe on the sleeves and bottoms." },
  { group: "Blue", asin: "B0BRT24PH2", title: "Blue Cloud Blank Pyjamas", line: "White top, cloud print on the sleeves and bottoms." },
  { group: "Blue", asin: "B0BT21ML1J", title: "Blue Stars Blank Pyjamas", line: "White top, stars print on the sleeves and bottoms." },
  { group: "Pink", asin: "B0C28TCKL6", title: "Pink & White Blank Pyjamas", line: "White top, pink sleeves and bottoms." },
  { group: "Pink", asin: "B0BXB676WT", title: "Pink Stripe Blank Pyjamas", line: "White top, pink stripe on the sleeves and bottoms." },
  { group: "Pink", asin: "B0BRY4S423", title: "Pink Cloud Blank Pyjamas", line: "White top, cloud print on the sleeves and bottoms." },
  { group: "Pink", asin: "B0BXB21ZZ3", title: "Pink Stars Blank Pyjamas", line: "White top, stars print on the sleeves and bottoms." },
  { group: "Sage", asin: "B0GMRKRZ7K", title: "Sage & White Blank Pyjamas", line: "White top, sage sleeves and bottoms." },
  { group: "Sage", asin: "B0F88C6VRC", title: "Pastel Sage Stripe Blank Pyjamas", line: "White top, pastel sage stripe on the sleeves and bottoms." },
  { group: "Red", asin: "B0GYSQPXHR", title: "Red Stripe Blank Pyjamas", line: "White top, red stripe on the sleeves and bottoms." },
  { group: "Neutrals", asin: "B0GMRFXVZX", title: "Mink & White Blank Pyjamas", line: "White top, mink sleeves and bottoms." },
  { group: "Neutrals", asin: "B0GYSLPRQN", title: "Natural Stripe Blank Pyjamas", line: "White top, natural stripe on the sleeves and bottoms." },
  { group: "Purple", asin: "B0GMQZY2WZ", title: "Pastel Purple & White Blank Pyjamas", line: "White top, pastel purple sleeves and bottoms." },
  { group: "Purple", asin: "B0FCSH6JLZ", title: "Pastel Purple Stripe Blank Pyjamas", line: "White top, pastel purple stripe on the sleeves and bottoms." },
  { group: "Prints", asin: "B0BTZ7T4RJ", title: "Blank Dinosaur Pyjamas", line: "White top, dinosaur print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0GWJNXWLG", title: "Digger Print Blank Pyjamas", line: "White top, digger print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0BWK4XZRT", title: "Unicorn Blank Pyjamas", line: "White top, unicorn print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0GWJKDQGJ", title: "Blank Fairy Princess Pyjamas", line: "White top, fairy print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0C1949NZT", title: "Heart Print Blank Pyjamas", line: "White top, heart print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0BSC9D8DG", title: "Ballerina Blank Pyjamas", line: "White top, ballerina print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0GWJD7YT7", title: "Teddy Bear Blank Pyjamas", line: "White top, teddy print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0FQPF13NZ", title: "Bunny Print Blank Pyjamas", line: "White top, bunny print on the sleeves and bottoms." }
];

const babyProducts = [
  {
    asin: "B0CHK512ZJ",
    title: "White Blank Baby Pyjamas",
    line: "Long-sleeve baby set in white. 100% cotton, from 0–3 months to 1–2 years."
  },
  {
    asin: "B0GH2368W1",
    title: "Light Blue Blank Baby Pyjamas",
    line: "Long-sleeve baby set in light blue. 100% cotton, from 0–3 months to 1–2 years."
  },
  {
    asin: "B0GH2MG9X5",
    title: "Pink Blank Baby Pyjamas",
    line: "Long-sleeve baby set in pink. 100% cotton, from 0–3 months to 1–2 years."
  }
];

export function pyjamaBox(introHtml) {
  return `<aside class="blanks">
  <h2>Blank kids' pyjamas we use</h2>
  <p>These are the blank sets these guides are written around. Each link opens the Amazon UK listing; pick your size there.</p>
  ${introHtml}
  ${grouped(kidsCatalogue)}
  <h3 class="blank-group">Baby sets</h3>
  <p>A different long-sleeve set, not the raglan measurements. These are 100% cotton.</p>
  ${grid(babyProducts)}
</aside>`;
}
