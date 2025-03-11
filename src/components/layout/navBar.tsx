
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-full pl-4 pr-8 py-4">
      {/* Logo */}
      <div>
        <Image 
          src="/livrodevlogo.png" 
          alt="Logo"
          width={500} 
          height={500}  
          className="w-24 h-7"
        />
      </div>
      
      {/* Menu (escondido em telas menores) */}
      <div className="hidden md:flex md:items-center md:gap-[4vw]">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-1">
          <li><button className="text-black text-[20px] font-bold font-montserrat">INÍCIO</button></li>
          <li><button className="text-black text-[20px] font-bold font-montserrat">CONTATO</button></li>
          <li><button className="text-black text-[20px] font-bold font-montserrat">ENCONTRE LIVROS</button></li>
          <li><button className="text-black text-[20px] font-bold font-montserrat">LOGIN/CADASTRO</button></li>
        </ul>
      </div>
    </nav>
  );
}
