// src/components/navbar/NavLink.tsx
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import type { NavLinkItem } from "../../interfaces/navbar/NavLinkItems";

interface NavLinkProps {
  list: NavLinkItem[];
  isMobileMenuOpen?: boolean; // Renomeado para maior clareza
  onLinkClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  list,
  isMobileMenuOpen = false,
  onLinkClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (text: string) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setOpenDropdown(null); // Fecha qualquer dropdown ativo
  };

  return (
    <ul
      className={`
        ${isMobileMenuOpen ? "flex flex-col" : "hidden"} 
        sm:flex sm:flex-row 
        items-center 
        space-y-4 sm:space-y-0 sm:space-x-6 
        text-lg sm:text-base 
        p-4 sm:p-0
      `}
    >
      {list.map((item) => (
        <li
          key={item.text}
          className="relative group w-full sm:w-auto"
        >
          {item.subLinks ? (
            <>
              <button
                onClick={() => handleDropdownToggle(item.text)}
                className={`
                  flex items-center justify-center sm:justify-start gap-2 
                  font-bold px-3 py-2 rounded-md
                  hover:text-cyan-400 transition-colors duration-300
                  w-full sm:w-auto
                  ${item.className || ""}
                `}
                aria-expanded={openDropdown === item.text}
              >
                {item.children}
                <span>{item.text}</span>
                {openDropdown === item.text ? (
                  <IoChevronUp />
                ) : (
                  <IoChevronDown />
                )}
              </button>
              <ul
                className={`
                  ${openDropdown === item.text ? "block" : "hidden"}
                  sm:absolute sm:top-full sm:left-1/2 sm:-translate-x-1/2
                  mt-2 sm:mt-0 p-3 sm:p-4
                  bg-gray-950 backdrop-blur-lg rounded-md shadow-lg
                  sm:group-hover:block sm:hover:block
                  flex flex-col space-y-2
                `}
              >
                {item.subLinks.map((subLink) => (
                  <li key={subLink.text}>
                    <a
                      href={subLink.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:text-cyan-400 transition-all duration-200 text-neutral-200"
                    >
                      {subLink.children}
                      <span>{subLink.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <a
              href={item.href}
              onClick={handleLinkClick}
              className={`
                flex items-center justify-center sm:justify-start gap-2 
                font-bold px-3 py-2 rounded-md 
                hover:text-cyan-400 transition-colors duration-300 
                w-full sm:w-auto
                ${item.className || ""}
              `}
            >
              {item.children}
              <span>{item.text}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLink;