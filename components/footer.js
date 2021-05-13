import Container from "./container";
import EmailSignup from "./email-signup";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="py-12 mx-8 flex flex-col lg:flex-row items-center justify-evenly">
        <EmailSignup />
        <div className="flex flex-col mt-8 mx-8">
          <a
            href="https://www.patreon.com/ModelsByMike"
            className="bg-black text-white p-4 mono my-4"
          >
            Support me on Patreon!
          </a>
          <a
            href="https://www.buymeacoffee.com/modelsbymike3d"
            className="bg-black text-white p-4 mono my-4"
          >
            Buy me a coffee!
          </a>
        </div>
      </div>
      <div className="text-center">Copyright {new Date().getFullYear()}</div>
    </footer>
  );
}
