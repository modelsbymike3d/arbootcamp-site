import Container from "./container";
import EmailSignup from "./email-signup";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <EmailSignup />
        </div>
      </Container>
    </footer>
  );
}
