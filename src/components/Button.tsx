"use client";
import React from "react";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "primary_button" | "secundary_button" | "buy_button";

}

export default function Button ({ 
    children,
    onClick,
    className = "",
    disabled = false,
    type = "primary_button", 
    }: ButtonProps ) {

        const baseStyles = `mx-0.5 h-8 btn btn-sm border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4 
                ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
                ${className} 
                active:translate-y-0.5 active:shadow-none`
            
        const variants = {
            primary_button: `h-8 border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4 font-semibold`,
            secundary_button: `h-20 rounded-full text-center text-md border-none mx-2 shadow-black shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 py-3 w-52 font-bold`,
            buy_button: `border-none shadow-black shadow-sm text-gray-800 bg-white hover:text-white hover:bg-green-800 px-4 font-semibold`
        };

    return (
        <button 
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyles} ${variants[type]} ${className}`}
            > 
                {children}
            </button>
    );

}