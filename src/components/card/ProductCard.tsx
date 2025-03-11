"use client";
import React from "react";
import Image from "next/image";
import StarRating from "./StarRating";

type ProductProps = {
  title: string;
  category: string;
  rating: number;
  image?: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, category, rating, image }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden min-w-[160px] max-w-full h-[250px] mx-1.5 sm:min-w-[180px] md:min-w-[200px] md:h-[280px] md:mx-2">
      {/* Imagem do Produto */}
      <div className="h-[120px] bg-gray-200 flex items-center justify-center sm:h-[140px] md:h-[160px]">
        {image ? (
          <Image src={image} alt={title} width={200} height={160} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-xs md:text-sm">Imagem</div>
        )}
      </div>

      {/* Informações do Produto */}
      <div className="p-2 flex flex-col flex-grow md:p-3">
        <StarRating rating={rating} />
        <h3 className="font-medium text-xs mb-1 line-clamp-2 sm:text-sm md:text-sm">{title}</h3>
        <p className="text-gray-500 text-xs mt-auto">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
