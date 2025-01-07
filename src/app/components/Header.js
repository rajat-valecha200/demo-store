"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUser,
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import './Header.css';
const links = [
  { name: "SHOP", href: "#" },
  { name: "SKILLS", href: "#" },
  { name: "STORIES", href: "#" },
  { name: "ABOUT", href: "#" },
  { name: "CONTACT US", href: "#" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 md:px-8">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl md:hidden mr-4"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
          <a href="#">
            <Image
              src="/logo.png"
              alt="Store Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </a>
        </div>

        <h1 className="font-inter text-4xl font-extrabold leading-[43.57px] tracking-[1px] text-center">
          LOGO
        </h1>

        <div className="flex items-center justify-end flex-1 space-x-3">
          <FontAwesomeIcon icon={faSearch} className="text-gray-800 w-4 h-4" />
          <FontAwesomeIcon icon={faHeart} className="text-gray-800 w-4 h-4" />
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="text-gray-800 w-4 h-4"
          />
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-800 w-4 h-4 hidden md:inline"
          />
          <div className="relative hidden md:inline">
            <button className="text-gray-800 text-xs flex items-center gap-2">
              ENG{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-gray-800 w-4 h-4"
              />
            </button>
          </div>    
        </div>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
