import { pyjamaPhotos } from "./pyjama-pool.mjs";
const listing = "https://www.amazon.co.uk/s?me=A1SAX4Y8C46TBJ&amp;marketplaceID=A1F83G8C2ARO7P";

export function pyjamaLink(text) {
  return `<a href="${listing}" rel="noopener noreferrer">${text}</a>`;
}

export function pyjamaMention() {
  const images = pyjamaPhotos(listing);
  return `<figure class="example-press">
  ${images}
  <figcaption>Plain 100% cotton kids' pyjamas ${pyjamaLink("like these")} are available on Amazon UK.</figcaption>
</figure>`;
}
