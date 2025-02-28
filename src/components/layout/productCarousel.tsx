import React from 'react';
import productsData from '../../data/products.json'; // Caminho relativo correto

interface ProductProps {
  title: string;
  category: string;
  rating: number;
  image?: string;
}

interface ProductSectionProps {
  title: string;
  products: ProductProps[];
}

const ProductCard: React.FC<ProductProps> = ({ title, category, rating, image }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden min-w-[160px] max-w-full h-[250px] mx-1.5 sm:min-w-[180px] md:min-w-[200px] md:h-[280px] md:mx-2">
      <div className="h-[120px] bg-gray-200 flex items-center justify-center sm:h-[140px] md:h-[160px]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-xs md:text-sm">Imagem</div>
        )}
      </div>
      <div className="p-2 flex flex-col flex-grow md:p-3">
        <div className="flex mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <h3 className="font-medium text-xs mb-1 line-clamp-2 sm:text-sm md:text-sm">{title}</h3>
        <p className="text-gray-500 text-xs mt-auto">{category}</p>
      </div>
    </div>
  );
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg font-semibold text-gray-800 md:text-xl">{title}</h2>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-1.5 sm:-mx-2 md:pb-4 snap-x snap-mandatory">
        {products.map((product, index) => (
          <div key={index} className="snap-start">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCarousel: React.FC = () => {
  const { maisVendidos, melhoresAvaliados } = productsData; // Usando os dados importados

  return (
    <div className="w-full px-3 py-4 sm:px-4 md:container md:mx-auto md:px-4 md:py-6 lg:max-w-6xl">
      <ProductSection title="Mais Vendidos" products={maisVendidos} />
      <ProductSection title="Melhores Avaliados" products={melhoresAvaliados} />
    </div>
  );
};

export default ProductCarousel;
