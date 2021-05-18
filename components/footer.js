import Container from "./container";
import EmailSignup from "./email-signup";
import { EXAMPLE_PATH } from "../lib/constants";

const CTA = ({ text, link }) => {
    return (
        <a href={link} className="bg-black text-white p-4 mono my-4">
            {text}
        </a>
    );
};

export default function Footer() {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <div className="py-12 mx-8 flex flex-col lg:flex-row items-center justify-evenly">
                <EmailSignup />
                <div className="flex flex-col mt-8 mx-8">
                  <CTA text="Work with me!" link="https://modelsbymike3d.com" />
                  <CTA text="Support me on Patreon!" link="https://www.patreon.com/ModelsByMike"/>
                  <CTA text="Buy me a coffee!" link="https://www.buymeacoffee.com/modelsbymike3d"/>
                </div>
            </div>
            <div className="text-center">
                Copyright {new Date().getFullYear()}
            </div>
        </footer>
    );
}
