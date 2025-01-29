"use client";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BiSolidLeftArrowSquare } from "react-icons/bi";

import React, { useState } from "react";
import Card from "./Card";
import ItemCard from "./ItemCard";

interface CarouselProps {
  onClick?: () => void | undefined;
  cards: Array<{
  image: string;
  description: string;
  content: string;
  price?: number | undefined;
  stars?: string;
  comments?: string;
  }>;
  type?: "normal" | "product";
}

const Carousel: React.FC<CarouselProps> = ({ 
  cards,
  type = 'normal',
 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 5;

  const getVisibleIndices = (centerIndex: number, totalCards: number, visibleCards: number) => {
    const indices: number[] = [];
    const range = Math.floor(visibleCards / 2);

    for (let i = -range; i <= range; i++) {
      indices.push((centerIndex + i + totalCards) % totalCards);
    }

    return indices;
  };

  const visibleIndices = getVisibleIndices(currentIndex, cards.length, visibleCards);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden p-5">

      {/* Card Normal */}
      {type === "normal" && (
        <div className="relative flex justify-center items-center w-full h-[300px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ${
              visibleIndices.includes(index)
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * (700 / visibleCards)}%) scale(${
                visibleIndices.includes(index) ? 0.92 : 0.75
              })`,
              transition: "transform 0.5s ease",
            }}
          >

            {/* Componente Normal */}
              <Card
              onClick={() => alert("Card clicado")}
              image={card.image}
              description={card.description}
              className="w-[250px] h-[300px] flex flex-col items-center justify-center bg-white shadow-md"
            >
              <p className="text-black">{card.content}</p>
            </Card>
          </div>
        ))}
      </div>
      )}
      
      {/* Card Product */}
      {type === "product" && (
        <div className="relative flex justify-center items-center w-full h-[300px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ${
              visibleIndices.includes(index)
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * (550 / visibleCards)}%) scale(${
                visibleIndices.includes(index) ? 0.92 : 0.75
              })`,
              transition: "transform 0.5s ease",
            }}
          >

            {/* Componente Produto */}
          <ItemCard 

            // Arrumar!
            image={card.image} price={Number(card.price)} descount={1} totalComents={Number(card.comments)} totalStars={Number(card.stars)}>{card.description}
          </ItemCard>
          </div>
        ))}
      </div>
      )}

      {/* Botão Esquerda */}
      <button
        onClick={prevCard}
        className="h-20 w-20 absolute flex justify-center items-center left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <BiSolidLeftArrowSquare className="h-20 w-20" />
      </button>

      {/* Botão Direita */}
      <button
        onClick={nextCard}
        className="h-20 w-20 absolute flex justify-center items-center right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <BiSolidRightArrowSquare className="h-20 w-20" />
      </button>
    </div>
  );
};

export default Carousel;
