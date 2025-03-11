"use client"; // Indica que o componente será renderizado no lado do cliente (útil em frameworks como Next.js)

import React, { useEffect, useState } from "react"; // Importa a biblioteca React e hooks
import ProductSection from "./ProductSection"; // Importa o componente ProductSection para exibir a lista de produtos

// Tipagem do Produto que corresponde aos dados retornados pela API
type Product = {
  title: string;    // Título do produto
  category: string; // Categoria do produto
  rating: number;   // Avaliação do produto (número de estrelas)
  image: string;    // URL da imagem do produto
};

type ProductsData = {
  maisVendidos: Product[];  // Lista de produtos mais vendidos
  melhoresAvaliados: Product[];  // Lista de produtos melhores avaliados
};

const ProductCarousel: React.FC = () => {
  const [productsData, setProductsData] = useState<ProductsData | null>(null); // Estado para armazenar os dados
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar o carregamento
  const [error, setError] = useState<string | null>(null); // Estado para capturar erros

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await fetch("https://livro-dev-api.onrender.com");
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados dos produtos");
        }
        const data: ProductsData = await response.json();
        setProductsData(data); // Atualiza os dados com a resposta da API
      } catch (error: any) {
        setError(error.message); // Define a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData(); 
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!productsData) {
    return <div>Sem dados disponíveis</div>;
  }

  const { maisVendidos, melhoresAvaliados } = productsData;

  return (
    <div className="w-full px-3 py-4 sm:px-4 md:container md:mx-auto md:px-4 md:py-6 lg:max-w-6xl">
      <ProductSection title="Mais Vendidos" products={maisVendidos} />
      <ProductSection title="Melhores Avaliados" products={melhoresAvaliados} />
    </div>
  );
};

export default ProductCarousel; 