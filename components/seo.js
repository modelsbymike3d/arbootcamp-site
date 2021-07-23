import Head from "next/head";

export default function SEO(args) {
  const siteName = "AR Bootcamp";
  const title = args.title ? args.title : "AR Bootcamp";
  const description = args.description ? args.description : args.excerpt;
  const image = args.image ? args.image : "/images/main.jpg";
  const endPath = args.extraPath
    ? `${args.extraPath}/${args.path}`
    : `${args.path}`;
  const url = args.path
    ? `https://arbootcamp.com/${endPath}`
    : "https://arbootcamp.com";
  const imagePath = `https://arbootcamp.com${image}`;

  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={description} />
    </Head>
  );
}
