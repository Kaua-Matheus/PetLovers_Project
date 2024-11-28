"use client";

import React from "react";
import {ReactNode} from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "primary_card" | "product_card";
  image?: string;
  description?: string;
}

export default function Card({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "primary_card",
  image = "",
  description = "",
  }: CardProps ) {

      const baseStyles = `card bg-darkText image-full w-[40rem] h-[20rem] shadow-xl mx-0.5 p-2 rounded cursor-pointer
              ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
              ${className} 
              active:translate-y-0.5 active:shadow-none`
          
      const variants = {
          primary_card: `h-8 border-none rounded shadow-sm text-gray-800 bg-white px-4`,
          product_card: `h-[30rem] w-[20rem] flex justify-top text-md mx-2 shadow-md text-gray-800 bg-white py-3 w-52`,
      };

  return (
      <div className={`${baseStyles} ${variants[type]} ${className}`}
        onClick={onClick}>
        
        <div className="p-3 bg-lightGray shadow-sm">
        <img src={image} alt={description} className="object-cover w-[38rem] h-[15rem]"/>
        </div>

        <div>
          {children}
        </div>

      </div>
    );
};
