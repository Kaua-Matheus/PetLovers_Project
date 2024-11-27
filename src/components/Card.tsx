"use client";

import React from "react";
import {ReactNode} from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "primary_card" | "secundary_card";
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

      const baseStyles = `mx-0.5 h-8 btn btn-sm border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4 
              ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
              ${className} 
              active:translate-y-0.5 active:shadow-none`
          
      const variants = {
          primary_card: `h-8 border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4`,
          secundary_card: `h-20 rounded-full text-center text-md border-none mx-2 shadow-black shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 py-3 w-52`,
      };

  return (
      <div className="card bg-gray-950 image-full w-[40rem] h-[20rem] shadow-xl mx-0.5 my-10 p-2">

        <div className="p-3 bg-gray-800 rounded-sm shadow-sm">
        <img src={image} alt={description} className="object-cover w-[38rem] h-[15rem]"/>
        </div>

        <div className='bg-gray-500 p-2 flex justify-start'>
          {children}
        </div>

      </div>
    );
};
