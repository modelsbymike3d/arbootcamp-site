import "../styles/index.css";
import "@fontsource/ubuntu-mono";
import "@fontsource/lato";
import PlausibleProvider from "next-plausible";

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="arbootcamp.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
