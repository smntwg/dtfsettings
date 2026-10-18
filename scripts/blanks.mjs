import { PYJAMA_DIR, PYJAMA_PLAIN, PYJAMA_PATTERNED, pyjamaSwapScript } from "./pyjama-pool.mjs";
const listing = "https://www.amazon.co.uk/s?me=A1SAX4Y8C46TBJ&amp;marketplaceID=A1F83G8C2ARO7P";

export function pyjamaLink(text) {
  return `<a href="${listing}" rel="noopener noreferrer">${text}</a>`;
}

export function pyjamaMention() {
  const images = [PYJAMA_PLAIN[0], PYJAMA_PATTERNED[0]].map(([file, alt]) =>
    `<a href="${listing}" rel="noopener noreferrer"><img src="${PYJAMA_DIR}${file}.webp" width="600" height="800" alt="${alt}" loading="lazy" decoding="async"></a>`
  ).join("") + pyjamaSwapScript();
  return `<figure class="example-press">
  ${images}
  <figcaption>Plain 100% cotton kids' pyjamas ${pyjamaLink("like these")} are available on Amazon UK.</figcaption>
</figure>`;
}
