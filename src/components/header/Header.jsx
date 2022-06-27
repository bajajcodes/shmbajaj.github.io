import { links } from "./header.data";
import { Menu, Close } from "./icons";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showBottomBorder, setShowBottomBorder] = useState(false);

  useEffect(() => {
    function handleShowBottomBorder() {
      if (window.scrollY >= 80) {
        setShowBottomBorder(true);
      } else {
        setShowBottomBorder(false);
      }
    }
    window.addEventListener("scroll", handleShowBottomBorder);
    return () => window.removeEventListener("scroll", handleShowBottomBorder);
  });

  return (
    <header
      className={`flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky top-0 z-50 ${
        showBottomBorder ? "border-b-4 border-gray-400" : ""
      }`}
    >
      <h1 className="text-5xl font-brandSignature whitespace-nowrap">
        Shubham Bajaj
      </h1>
      <nav>
        <ul className="hidden md:flex flex-wrap">
          {links.map(({ id, text, link }) => (
            <li
              key={id}
              role={"link"}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setShowMobileNav((p) => !p)}
              >
                {text}
              </Link>
            </li>
          ))}
          <li
            role={"link"}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            onClick={() => setShowMobileNav((p) => !p)}
          >
            <a href="https://shmbajaj.hashnode.dev/" target={"_blank"}>
              {" "}
              Blog
            </a>
          </li>
        </ul>
        <div
          className="cursor-pointer z-10 text-gray-400 duration-200 md:hidden"
          onClick={() => setShowMobileNav((p) => !p)}
        >
          {showMobileNav ? <Close /> : <Menu />}
        </div>
        {showMobileNav && (
          <ul className="flex flex-col items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden">
            {links.map(({ id, text, link }) => (
              <li
                key={id}
                role={"link"}
                className="px-4 py-6 cursor-pointer capitalize text-4xl font-medium hover:scale-105 duration-200"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setShowMobileNav((p) => !p)}
                >
                  {text}
                </Link>
              </li>
            ))}
            <li
              role={"link"}
              className="px-4 py-6 cursor-pointer capitalize text-4xl font-medium hover:scale-105 duration-200"
              onClick={() => setShowMobileNav((p) => !p)}
            >
              <a href="https://shmbajaj.hashnode.dev/" target={"_blank"}>
                {" "}
                Blog
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export { Header };
