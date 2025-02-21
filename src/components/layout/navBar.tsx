"use client"; // Necessário para o Next.js em componentes que usam hooks, como useState

import Image from "next/image"; // Importação do componente Image do Next.js para otimizar imagens
import { useState } from "react"; // Importação do hook useState para controlar o estado do menu

export default function NavBar() {
  // Cria um estado 'menuOpen' para controlar a visibilidade do menu. O valor inicial é 'false' (menu fechado)
  const [menuOpen, setMenuOpen] = useState(false);


  function toggleMenu () {
    setMenuOpen(!menuOpen); // Alterna o valor do estado 'menuOpen'
  };

  return (
    <nav className="flex justify-between items-center w-full px-4 py-2"> {/* NavBar com flexbox, espaçamento e alinhamento */}
      
      {/* Logo */}
      <div>
        <Image src="/livro.dev logo 1.png" alt="Logo" width={206} height={62} />
        {/* Imagem do logo, que será renderizada com o Next.js Image component para otimização */}
      </div>

      {/* Menu */}
      <div
        className={`${
          menuOpen ? "top-[9%]" : "top-[-100%]" // Se o menu estiver aberto, a posição será 'top-[9%]', se fechado será 'top-[-100%]'
        } nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 w-full md:w-auto flex items-center px-5`} // Classe dinâmica para animar o menu e controlar a posição em dispositivos móveis
      >
        {/* Lista de itens do menu */}
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-1">
          <li>
            <button className="text-black text-[20px] font-bold font-[Montserrat]">INÍCIO</button>
          </li>
          <li>
            <button className="text-black text-[20px] font-bold font-[Montserrat]">CONTATO</button>
          </li>
          <li>
            <button className="text-black text-[20px] font-bold font-[Montserrat]">ENCONTRE LIVROS</button>
          </li>
          <li>
            <button className="text-black text-[20px] font-bold font-[Montserrat]">LOGIN/CADASTRO</button>
          </li>
        </ul>
      </div>

      {/* Ícone de menu hamburguer (visível em telas pequenas e tablets) */}
      <div className="flex items-center gap-6 lg:hidden">
        <i
          className={`fa-solid ${
            menuOpen ? "fa-xmark" : "fa-bars" // Se o menu estiver aberto, mostra o ícone de "x" (fechar). Se fechado, mostra o ícone de "bars" (abrir)
          } text-3xl cursor-pointer text-black`} // Estilo do ícone com cor preta e tamanho 3xl
          onClick={toggleMenu} // Chama a função toggleMenu ao clicar no ícone
        ></i>
      </div>
    </nav>
  );
}
