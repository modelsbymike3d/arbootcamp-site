import Alert from "../components/alert";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <main className="mx-auto w-11/12">{children}</main>
      </div>
      <Footer />
    </>
  );
}
