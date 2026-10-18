// Colour pool for the pyjama photos. Real product photos from the Amazon UK storefront, no brand names.
// The HTML carries the first plain + first patterned photo as the no-JS default; an inline script
// swaps in a random plain + patterned pair on each page load. Every photo links to the storefront.
export const PYJAMA_DIR = "/img/blanks/";
export const PYJAMA_PLAIN = [["purple-white", "Plain pastel purple and white kids’ pyjamas with a white top"], ["pink-white", "Plain pink and white kids’ pyjamas with a white top"], ["blue-white", "Plain blue and white kids’ pyjamas with a white top"]];
export const PYJAMA_PATTERNED = [["pink-stripe", "Pink stripe kids’ pyjamas with a white top"], ["sage-stripe", "Sage green stripe kids’ pyjamas with a white top"], ["blue-cloud", "Blue cloud print kids’ pyjamas with a white top"], ["pink-stars", "Pink star print kids’ pyjamas with a white top"]];
export function pyjamaSwapScript() {
  const p = JSON.stringify(PYJAMA_PLAIN).replace(/</g, "\\u003c");
  const t = JSON.stringify(PYJAMA_PATTERNED).replace(/</g, "\\u003c");
  return `<script>(function(s){var d=${JSON.stringify(PYJAMA_DIR)},p=${p},t=${t},g=function(a){return a[Math.random()*a.length|0]},x=[g(p),g(t)],m=s.parentNode.querySelectorAll("img");for(var i=0;i<m.length&&i<2;i++){m[i].src=d+x[i][0]+".webp";m[i].alt=x[i][1]}})(document.currentScript)</script>`;
}
