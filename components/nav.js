import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./search";

const MenuEntry = (text, link, key) => {
  const router = useRouter();
  return (
    <li className="nav-item" key={key}>
      <Link href={link}>
        <a
          className={`px-3 py-2 flex items-center text-lg leading-snug text-black mono hover:text-red-600 hover:underline ${
            router.pathname === link ? "font-bold text-red-600" : ""
          }`}
        >
          <span className="ml-2">{text}</span>
        </a>
      </Link>
    </li>
  );
};

const navElements = [
  {
    text: "Tutorials",
    link: "/tutorials",
  },
  {
    text: "Guides",
    link: "/guides",
  },
  {
    text: "Filters",
    link: "/filters",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "Newsletter",
    link: "/newsletter",
  },
];

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-black">
                <img
                  src="/images/logo_dark.png"
                  alt="AR Bootcamp logo"
                  width="256"
                  height="72"
                  className="w-64"
                />
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-black w-6 fill-current"
              />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li>
                {" "}
                <Search />
              </li>
              {navElements.map((elem, i) => MenuEntry(elem.text, elem.link, i))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
