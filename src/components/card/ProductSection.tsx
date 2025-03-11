"use client"; // Indica que o componente será renderizado no lado do cliente (útil em frameworks como Next.js)

import React from "react"; // Importa a biblioteca React para criar componentes
import ProductCard from "./ProductCard"; // Importa o componente ProductCard, que exibe informações de um produto

// Define a interface para as propriedades de um produto
interface ProductProps {
  title: string;     // Título do produto
  category: string;  // Categoria do produto
  rating: number;    // Avaliação do produto (número de estrelas preenchidas)
  image?: string;    // URL da imagem do produto (opcional)
}

// Define a interface para as propriedades da seção de produtos
interface ProductSectionProps {
  title: string;            // Título da seção (por exemplo, "Mais Vendidos")
  products: ProductProps[]; // Array de produtos que serão exibidos na seção
}

// Componente funcional que representa uma seção de produtos
const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    // Container principal da seção com espaçamento inferior e visibilidade controlada para diferentes tamanhos de tela
    <div className="mb-6 md:mb-8 md:hidden">
      {/* Cabeçalho da seção, contendo o título */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg font-semibold text-gray-800 md:text-xl">{title}</h2>
      </div>
      {/* Container para a lista de produtos com rolagem horizontal e configuração de snapping para facilitar a navegação */}
      <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-1.5 sm:-mx-2 md:pb-4 snap-x snap-mandatory">
        {/* Mapeia o array de produtos e renderiza um ProductCard para cada item */}
        {products.map((product, index) => (
          // Cada produto é envolvido em um container com snapping para posicionamento correto
          <div key={index} className="snap-start">
            {/* Renderiza o componente ProductCard, passando as propriedades do produto */}
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection; // Exporta o componente para uso em outras partes da aplicação
