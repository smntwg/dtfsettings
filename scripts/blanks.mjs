const listing = "https://www.amazon.co.uk/dp/B0C24KD4J6";

const photos = [
  { file: "B0C24KD4J6", w: 600, h: 803, alt: "Blue and white kids pyjamas with a plain white top" },
  { file: "B0C28TCKL6", w: 600, h: 801, alt: "Pink and white kids pyjamas with a plain white top" }
];

export function pyjamaLink(text) {
  return `<a href="${listing}" rel="noopener noreferrer">${text}</a>`;
}

export function pyjamaMention() {
  const images = photos.map((photo) =>
    `<img src="/img/blanks/${photo.file}.webp" width="${photo.w}" height="${photo.h}" alt="${photo.alt}" loading="lazy" decoding="async">`
  ).join("");
  return `<figure class="example-press">
  ${images}
  <figcaption>We press onto plain 100% cotton kids' pyjamas ${pyjamaLink("like these")}.</figcaption>
</figure>`;
}
