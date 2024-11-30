"use client";

import React from "react";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "primary_card" | "product_card";
  image?: string;
  description?: string;
  price?: string; // Adicionado para a variante de produto
  rating?: number; // Adicionado para a variante de produto
}

export default function Card({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "primary_card",
  image = "",
  description = "",
  price,
  rating,
}: CardProps) {
  const baseStyles = `card bg-darkText image-full w-[40rem] h-[20rem] shadow-xl mx-0.5 p-2 rounded cursor-pointer
              ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
              ${className} 
              active:translate-y-0.5 active:shadow-none`;

  const variants = {
    primary_card: `h-8 border-none rounded shadow-sm text-gray-800 bg-white px-4`,
    product_card: `h-[20rem] w-[15rem] flex flex-col items-center justify-between text-md mx-2 shadow-sm text-gray-800 bg-white rounded`,
  };

  return (
    <div
      className={`${baseStyles} ${variants[type]} ${className}`}
      onClick={onClick}
    >
      {/* Imagem do Card */}
      <div className="p-3 bg-lightGray shadow-sm w-full">
        <img
          src={image}
          alt={description}
          className="object-cover w-full h-[10rem] rounded-t"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 flex flex-col items-center justify-center w-full">
        {/* Exibição de preço e nota apenas para 'product_card' */}
        {type === "product_card" && (
          <div className="mb-2 text-center">
            {price && <p className="text-lg font-bold text-gray-800">{price}</p>}
            {rating !== undefined && (
              <p className="text-sm text-yellow-500">Nota: {rating}/5</p>
            )}
          </div>
        )}
        {/* Outros filhos (se fornecidos) */}
        {children}
      </div>
    </div>
  );
}
