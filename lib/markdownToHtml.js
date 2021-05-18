import remark from "remark";
import html from "remark-html";
const unwrapImages = require("remark-unwrap-images");
const highlight = require("remark-highlight.js");
var gfm = require("remark-gfm");
var slug = require('remark-slug')
const headings = require('remark-autolink-headings')
const youtubeThumbnail = require("./youtubeThumbnail");
const lazyImage = require('./lazyImage');

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(slug)
    .use(headings, {behavior: 'wrap'})
    .use(highlight)
    .use(gfm)
    .use(unwrapImages)
    .use(youtubeThumbnail)
    .use(lazyImage)
    .use(html)
    .process(markdown);
  return result.toString();
}
