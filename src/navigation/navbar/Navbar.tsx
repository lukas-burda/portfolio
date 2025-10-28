// src/components/navbar/Navbar.tsx
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaCode, FaHome, FaLayerGroup, FaUser, FaBrain, FaCogs } from "react-icons/fa";
import type { NavLinkItem } from "../../interfaces/navbar/NavLinkItems";
import NavLink from "../../components/NavLink/NavLink";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renomeado

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const baseNavLinkClasses = "flex space-x-2 items-center";
  const navIconSize = 20;

  const navLinkList: NavLinkItem[] = [
    {
      href: "#home",
      text: "Início",
      className: baseNavLinkClasses,
      children: <FaHome size={navIconSize} title="Home" />,
    },
    {
      href: "#about",
      text: "Sobre mim",
      className: baseNavLinkClasses,
      children: <FaUser size={navIconSize} title="About" />,
    },
    {
      href: "#skills",
      text: "Habilidades",
      className: baseNavLinkClasses,
      children: <FaCogs size={navIconSize} title="Skills" />,
    },
    {
      text: "Portfólio",
      className: baseNavLinkClasses,
      children: <FaLayerGroup size={navIconSize} title="Portfolio" />,
      subLinks: [
        {
          href: "#competences",
          text: "Competências",
          children: <FaBrain size={navIconSize * 0.8} title="Competences" />,
        },
        {
          href: "#projects",
          text: "Projetos",
          children: <FaCode size={navIconSize * 0.8} title="Projects" />,
        },
      ],
    },
  ];

  return (
    <nav className="backdrop-blur-lg bg-neutral-900/50 py-4 px-4 sm:px-8 fixed top-0 left-0 w-full z-50 border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl tracking-wide">
            <a
              href="/portfolio/"
              onClick={closeMenu}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Lukas Burda
            </a>
          </h1>
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none focus:ring-2 focus:text-cyan-400 rounded-md p-2 text-2xl"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <IoClose />
          ) : (
            <IoMenu />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <NavLink list={navLinkList} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden backdrop-blur-lg bg-neutral-900/50 rounded-md mt-4 border border-neutral-800 transition-all duration-300 ease-in-out">
          <NavLink
            list={navLinkList}
            isMobileMenuOpen={isMobileMenuOpen}
            onLinkClick={closeMenu}
          />
        </div>
      )}
    </nav>
  );
};
