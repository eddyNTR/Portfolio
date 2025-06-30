import React, { useState } from "react";
import Logo from "../../assets/espadas.png";

const navbarlinks = [
  {
    id: 1,
    title: "Inicio",
    Link: "/",
  },
  {
    id: 2,
    title: "Sobre mi",
    Link: "#sobremi",
  },
  {
    id: 3,
    title: "Habilidades",
    Link: "#habilidades",
  },
  {
    id: 4,
    title: "Proyectos",
    Link: "#proyectos",
  },
];

const navbarRedes = [
  {
    id: 1,
    title: "Linkedin",
    Link: "#",
    icon: "bi bi-linkedin",
  },
  {
    id: 2,
    title: "Github",
    Link: "#",
    icon: "bi bi-git",
  },
  {
    id: 3,
    title: "Gmail",
    Link: "#",
    icon: "bi bi-envelope",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-[rgba(128,0,128,0.2)] w-full backdrop-blur-md z-50">
      <div className="flex justify-between  items-center sm:px-12 sm:py-6 px-4 py-3">
        {/*Logo navbar*/}
        <div>
          <img src={Logo} alt="Logo de sitio" className="w-[60px]" />
        </div>

        {/*Boton de amburguesa */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/*Navegacion desktop*/}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-white text-center sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-120 transform inline-block duration-300"
                  href={link.Link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*Navegacion redes desktop*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.Link}
                >
                  <i
                    className={`${link.icon} sm:text-2xl text-lg text-white transition-all`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*KMenu movil */}
      <div
        className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarlinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                className="text-white hover:text-sky-200 "
                href={link.Link}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                href={link.Link}
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-white hover:text-sky-200`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
