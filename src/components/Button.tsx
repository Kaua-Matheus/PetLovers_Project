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
            primary_button: `h-8 px-4 border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 font-semibold`,
            secundary_button: `h-20 w-52 rounded-full text-center shadow-md shadow-lg border-none text-gray-800 bg-white hover:text-white hover:bg-gray-800 font-bold`,
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