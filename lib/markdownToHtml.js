import remark from "remark";
import html from "remark-html";
const unwrapImages = require("remark-unwrap-images");
const highlight = require("remark-highlight.js");
const youtubeThumbnail = require("./youtubeThumbnail");

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(highlight)
    .use(unwrapImages)
    .use(youtubeThumbnail)
    .use(html)
    .process(markdown);
  return result.toString();
}
