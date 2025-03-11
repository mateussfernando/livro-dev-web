"use client"; // Indica que o componente deve ser renderizado no cliente (usado em frameworks como Next.js)

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente para exibir ícones da FontAwesome
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // Importa o ícone de estrela sólida (para avaliações preenchidas)
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"; // Importa o ícone de estrela regular (para avaliações não preenchidas)

// Define a interface das propriedades que o componente espera receber
interface StarRatingProps {
  rating: number; // A propriedade "rating" representa a avaliação do produto (número de estrelas preenchidas)
}

// Componente funcional que exibe a avaliação em forma de estrelas
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    // Container div com classes para layout flex e margem inferior
    <div className="flex mb-1">
      {/* Cria um array de 5 elementos para representar as 5 estrelas e mapeia sobre ele */}
      {[...Array(5)].map((_, i) => (
        // Renderiza o componente FontAwesomeIcon para cada estrela
        <FontAwesomeIcon
          key={i} // Define a chave única para cada item da lista
          // Se o índice for menor que a avaliação, utiliza a estrela sólida; caso contrário, a estrela regular
          icon={i < rating ? solidStar : regularStar}
          // Aplica classes CSS para definir o tamanho e a cor das estrelas com base na avaliação
          className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default StarRating; // Exporta o componente para que possa ser usado em outras partes da aplicação
