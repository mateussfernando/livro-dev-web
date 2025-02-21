import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[4rem] md:mt-[9rem]">
      <div>
        <h1 className="text-black text-[25px] font-['Press_Start_2P'] font-normal leading-normal">
          LER PARA CODAR MELHOR.
        </h1>
        <span className="text-black text-[32px] font-[Montserrat] font-normal leading-normal">
          Descubra os livros essenciais para evoluir na programação e acelerar
          sua carreira tech.
        </span>
      </div>

      <div>
        <Image src="/homemSentado.png" alt="Logo" width={500} height={0} className="w-[100%] md:w-[411px] md:h-[411px]" />
      </div>
    </section>
  );
}
