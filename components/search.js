import React, { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    if (algoliasearchNetlify) {
      algoliasearchNetlify({
        appId: "O042WZTVEI",
        apiKey: "1784481b8edf6cc53ec3f5adec0d45a4",
        siteId: "576ee8bc-dcff-48b3-9901-03b8c7ba7aa1",
        branch: "main",
        selector: "div#search",
      });
    }
  }, []);

  return <div id="search"></div>;
}
