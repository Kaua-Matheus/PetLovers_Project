"use client";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BiSolidLeftArrowSquare } from "react-icons/bi";

import React, { useState } from "react";
import Card from "./Card";

interface CarouselProps {
  cards: Array<{
    image: string;
    description: string;
    content: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const getVisibleIndices = (centerIndex: number, totalCards: number) => {
    const indices: number[] = [];

    for (let i = -1; i <= 1; i++) {
      indices.push((centerIndex + i + totalCards) % totalCards);
    }

    return indices;
  };

  const visibleIndices = getVisibleIndices(currentIndex, cards.length);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* Cards */}
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
              transform: `translateX(${
                (index - currentIndex) * 700
              }px) scale(${visibleIndices.includes(index) ? 1 : 0.75})`,
              transition: "transform 0.5s ease",
            }}
          >
            <Card
              image={card.image}
              description={card.description}
              className="w-[250px] h-[300px] flex flex-col items-center justify-center bg-white shadow-md"
            >
              <p className="text-black">{card.content}</p>
            </Card>
          </div>
        ))}
      </div>

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
