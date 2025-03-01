"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className="flex justify-between items-center w-full pl-4 pr-8 py-4">
      {/* Logo */}
      <div>
        <Image 
          src="/livro.dev logo 1.png" 
          alt="Logo" 
          width={500} 
          height={500} 
          className="w-24 h-7"
        />
      </div>

      {/* Menu */}
      <div
        className={`${
          menuOpen ? "top-[9%]" : "top-[-100%]"
        } nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 w-full md:w-auto flex items-center px-5`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-1">
          <li><button className="text-black text-[20px] font-bold font-montserrat">INÍCIO</button></li>
          <li><button className="text-black text-[20px] font-bold font-montserrat">CONTATO</button></li>
          <li><button className="text-black text-[20px] font-bold font-montserrat">ENCONTRE LIVROS</button></li>
          <li><button className="text-black text-[20px] font-bold font-montserrat">LOGIN/CADASTRO</button></li>
        </ul>
      </div>

      {/* Ícone do Menu */}
      <div className="flex items-center gap-6 lg:hidden">
        <FontAwesomeIcon
          icon={menuOpen ? faXmark : faBars}
          className="text-3xl cursor-pointer text-black"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}
