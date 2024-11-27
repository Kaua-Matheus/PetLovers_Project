"use client"
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BiSolidLeftArrowSquare } from "react-icons/bi";

import React, { useState } from 'react';
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

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
          {/* Cards */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {cards.map((card, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <Card
                  image={card.image}
                  description={card.description}
                  className="flex flex-col items-center justify-center"
                >
                  {card.content}
                </Card>
              </div>
            ))}
          </div>
    
          {/* Controles de Navegação */}
          <button
            onClick={prevSlide}
            className="h-20 w-20 absolute flex justify-center items-center left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <BiSolidLeftArrowSquare className='h-20 w-20'/>
          </button>
          <button
            onClick={nextSlide}
            className="h-20 w-20 absolute flex justify-center items-center right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <BiSolidRightArrowSquare className='h-20 w-20'/>
          </button>
        </div>
      );
    };

export default Carousel;