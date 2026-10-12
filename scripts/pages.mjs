import { fabricPages } from "./fabrics.mjs";
import { guidePages } from "./guides.mjs";
import { fixPages } from "./fixes.mjs";
import { restPages } from "./rest.mjs";

export const pages = [...fabricPages, ...guidePages, ...fixPages, ...restPages];
