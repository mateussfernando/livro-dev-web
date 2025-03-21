export default function AboutSection() {
  return (
    <div className="pt-4 w-[100%]">
      <div className="px-4">
      <h1 className="text-black font-normal font-['Press_Start_2P'] text-[13px] sm:text-[16px]">
  LER PARA CODAR MELHOR.
</h1>

        <p className="w-80 h-11 text-black text-sm font-normal font-['Montserrat']">
          Descubra os livros essenciais para evoluir na programação e acelerar
          sua carreira tech.
        </p>
      </div>

      <div className="w-[100%] h-10 bg-[#F8F9FA] flex flex-row items-center justify-between px-4">
        <span className="text-[#141e47] text-xs font-bold font-['Montserrat']">
          Encontre o livro ideal para você!
        </span>
        <a className="text-[#8599ff] text-xs font-bold font-['Montserrat'] cursor-pointer">
          Ver todos
        </a>
      </div>
    </div>
  );
}
