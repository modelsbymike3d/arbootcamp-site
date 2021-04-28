const fs = require("fs");
const glob = require("glob");

glob("out/**/*.html", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Generating sitemap for ${res.length} pages`);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${res
              .map((page) => {
                const path = page.replace("out", "").replace(".html", "");
                const route = path === "/index" ? "" : path;

                return `
                        <url>
                            <loc>${`https://arbootcamp.com${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  fs.writeFileSync("out/sitemap.xml", sitemap.trim());
});

// (async () => {
//   // Ignore Next.js specific files (e.g., _app.js) and API routes.
//   const pages = await globby(["out/**/*.html}"]);
//   console.log(pages);
//   const sitemap = `
//         <?xml version="1.0" encoding="UTF-8"?>
//         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//             ${pages
//               .map((page) => {
//                 const path = page.replace("out", "").replace(".html", "");
//                 const route = path === "/index" ? "" : path;

//                 return `
//                         <url>
//                             <loc>${`https://arbootcamp.com${route}`}</loc>
//                         </url>
//                     `;
//               })
//               .join("")}
//         </urlset>
//     `;

//   fs.writeFileSync("out/sitemap.xml", sitemap);
// })();
