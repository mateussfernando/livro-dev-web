"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// Define a interface para as propriedades de um produto
interface ProductProps {
  title: string;
  category: string;
  rating: number;
  image?: string;
}

// Define a interface para as propriedades de uma seção de produtos
interface ProductSectionProps {
  title: string;
  products: ProductProps[];
}

// Componente que representa um cartão de produto
const ProductCard: React.FC<ProductProps> = ({ title, category, rating, image }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden min-w-[160px] max-w-full h-[250px] mx-1.5 sm:min-w-[180px] md:min-w-[200px] md:h-[280px] md:mx-2">
      {/* Área da imagem do produto */}
      <div className="h-[120px] bg-gray-200 flex items-center justify-center sm:h-[140px] md:h-[160px]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-xs md:text-sm">Imagem</div>
        )}
      </div>
      {/* Área de informações do produto */}
      <div className="p-2 flex flex-col flex-grow md:p-3">
        {/* Exibição das estrelas de avaliação */}
        <div className="flex mb-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={i < rating ? solidStar : regularStar}
              className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        {/* Título do produto */}
        <h3 className="font-medium text-xs mb-1 line-clamp-2 sm:text-sm md:text-sm">{title}</h3>
        {/* Categoria do produto */}
        <p className="text-gray-500 text-xs mt-auto">{category}</p>
      </div>
    </div>
  );
};

// Componente que representa uma seção de produtos
const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  console.log(`Produtos da seção "${title}":`, products); // Adicionando log de depuração
  return (
    <div className="mb-6 md:mb-8 md:hidden">
      {/* Título da seção */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg font-semibold text-gray-800 md:text-xl">{title}</h2>
      </div>
      {/* Lista de produtos com rolagem horizontal */}
      <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-1.5 sm:-mx-2 md:pb-4 snap-x snap-mandatory">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="snap-start">
              <ProductCard {...product} />
            </div>
          ))
        ) : (
          <div className="text-gray-500">Carregando produtos...</div>
        )}
      </div>
    </div>
  );
};

// Componente principal que agrupa todas as seções de produtos
const ProductCarousel: React.FC = () => {
  const [maisVendidos, setMaisVendidos] = useState<ProductProps[]>([]);
  const [melhoresAvaliados, setMelhoresAvaliados] = useState<ProductProps[]>([]);

  // Função para buscar os dados da API
  useEffect(() => {
    // Fazendo a requisição para obter os dados da API
    fetch("https://glorious-winner-r47vvxp9574g2xx5p-3001.app.github.dev/produtos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos da API:", data); // Log para verificação dos dados recebidos
        setMaisVendidos(data.maisVendidos);
        setMelhoresAvaliados(data.melhoresAvaliados);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  console.log("Mais Vendidos:", maisVendidos); // Log para verificação do estado dos produtos
  console.log("Melhores Avaliados:", melhoresAvaliados); // Log para verificação do estado dos melhores avaliados

  return (
    <div className="w-full px-3 py-4 sm:px-4 md:container md:mx-auto md:px-4 md:py-6 lg:max-w-6xl">
      <ProductSection title="Mais Vendidos" products={maisVendidos} />
      <ProductSection title="Melhores Avaliados" products={melhoresAvaliados} />
    </div>
  );
};

export default ProductCarousel;
