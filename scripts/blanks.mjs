const listing = "https://www.amazon.co.uk/s?me=A1SAX4Y8C46TBJ&amp;marketplaceID=A1F83G8C2ARO7P";

const photos = [
  { file: "B0C24KD4J6", w: 600, h: 803, alt: "Blue and white kids pyjamas with a plain white top" },
  { file: "B0BSR58NC9", w: 600, h: 799, alt: "Blue stripe kids pyjamas with a plain white top" }
];

export function pyjamaLink(text) {
  return `<a href="${listing}" rel="noopener noreferrer">${text}</a>`;
}

export function pyjamaMention() {
  const images = photos.map((photo) =>
    `<a href="${listing}" rel="noopener noreferrer"><img src="/img/blanks/${photo.file}.webp" width="${photo.w}" height="${photo.h}" alt="${photo.alt}" loading="lazy" decoding="async"></a>`
  ).join("");
  return `<figure class="example-press">
  ${images}
  <figcaption>We press onto 100% cotton kids' pyjamas ${pyjamaLink("like these")}.</figcaption>
</figure>`;
}
