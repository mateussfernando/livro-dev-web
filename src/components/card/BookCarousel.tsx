"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// Definindo a interface para as propriedades de um card de livro
type BookCardProps = {
  title: string;
  category: string;
  rating: number;
  image?: string;
}

// Definindo a interface para as propriedades de uma seção de cards de livros
type BookSectionProps = {
  title: string;
  books: BookCardProps[];
}

// Definindo a interface para os dados que serão retornados pela API
type BookData = {
  maisVendidos: BookCardProps[];
  melhoresAvaliados: BookCardProps[];
}

// Componente que representa um cartão de livro
const BookCard: React.FC<BookCardProps> = ({ title, category, rating, image }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden min-w-[160px] max-w-full h-[250px] mx-1.5 sm:min-w-[180px] md:min-w-[200px] md:h-[280px] md:mx-2">
      {/* Área da imagem do livro */}
      <div className="h-[120px] bg-gray-200 flex items-center justify-center sm:h-[140px] md:h-[160px]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-xs md:text-sm">Imagem</div>
        )}
      </div>
      {/* Área de informações do livro */}
      <div className="description-card-container p-2 flex flex-col flex-grow md:p-3">
        {/* Exibição das estrelas de avaliação */}
        <div className="description-card-stars flex mb-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={i < rating ? solidStar : regularStar}
              className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        {/* Título do livro */}
        <h3 className="description-card-title font-['Montserrat'] font-bold text-xs mb-1 line-clamp-2 sm:text-sm md:text-sm text-black">
          {title}
        </h3>
        {/* Categoria do livro */}
        <p className="description-card-category font-['Montserrat'] text-gray-500 text-xs mt-auto text-black">{category}</p>
      </div>
    </div>
  );
};

// Componente que representa uma seção de cards de livros
const BookSection: React.FC<BookSectionProps> = ({ title, books }) => {
  return (
    <div className="bookcarousel-container mb-6 md:mb-8 md:hidden">
      {/* Título da seção */}
      <div className="bookcarousel-section-title flex items-center justify-between mb-3 md:mb-4">
        <h2 className="font-['Montserrat'] text-lg font-semibold text-black md:text-xl">
          {title}
        </h2>
      </div>
      {/* Lista de cards de livros com rolagem horizontal */}
      <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-1.5 sm:-mx-2 md:pb-4 snap-x snap-mandatory">
        {books.map((book, index) => (
          <div key={index} className="snap-start">
            <BookCard {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal que agrupa todas as seções de cards de livros
const BookCarousel: React.FC = () => {
  const [maisVendidos, setMaisVendidos] = useState<BookCardProps[]>([]);
  const [melhoresAvaliados, setMelhoresAvaliados] = useState<BookCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Usando useEffect para realizar a requisição no lado do cliente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://livrodevbackend.onrender.com/api");

        if (!response.ok) {
          throw new Error("Resposta da rede não foi ok");
        }

        const Bookdata: BookData = await response.json();

        // Atualiza o estado com os dados da API
        setMaisVendidos(Bookdata.maisVendidos);
        setMelhoresAvaliados(Bookdata.melhoresAvaliados);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido");
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Exibe a mensagem de carregamento enquanto os dados não chegam
  if (isLoading) {
    return <div className="font-['Montserrat'] text-black">Carregando...</div>;
  }

  // Exibe a mensagem de erro caso ocorra algum problema
  if (error) {
    return <div className="font-['Montserrat'] text-black">Erro: {error}</div>;
  }

  // Exibe as seções de cards de livros quando os dados são carregados
  return (
    <div className="w-full px-3 py-4 sm:px-4 md:container md:mx-auto md:px-4 md:py-6 lg:max-w-6xl">
      <BookSection title="Mais Vendidos" books={maisVendidos} />
      <BookSection title="Melhores Avaliados" books={melhoresAvaliados} />
    </div>
  );
};

export default BookCarousel;
