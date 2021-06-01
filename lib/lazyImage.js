import { visit } from "unist-util-visit";

module.exports = lazyImage;

function lazyImage() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, "image", visitor);

    function visitor(node) {
      if (!node.data) node.data = { hProperties: {} };
      if (!node.data.hProperties) node.data.hProperties = {};
      node.data.hProperties.loading = "lazy";
      node.data.hProperties.height = "200";
    }
  }
}
