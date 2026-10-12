# dtfsettings.co.uk

UK DTF transfer heat press settings for hobby and small-batch crafters. Celsius first, Fahrenheit in brackets. Plain static HTML, CSS and JavaScript. Cloudflare Pages can publish the repository root with no build command.

The lookup data lives in `data/settings.js`. Guides are generated into folders of `index.html` by `node scripts/build.mjs` (Node, no packages). Commit the generated HTML with the source so the deploy does not need a build.

`functions/_middleware.js` redirects `www.dtfsettings.co.uk` to `https://dtfsettings.co.uk`.

Settings are starting points. Named examples, where a supplier page is linked, are labelled. The instructions packed with a transfer override this site. HTV and sublimation charts are on [heatpress-settings.co.uk](https://heatpress-settings.co.uk/).
