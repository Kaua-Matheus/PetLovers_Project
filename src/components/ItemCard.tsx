"use client";

import React, { ReactNode, useState } from "react"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";



interface ItemCard {
    image?: string;
    imageDescription?: string;
    share: () => void;
    onClick: () => void;
    children: ReactNode;
    heart: boolean;
    price: number;
    descount?: number | 0;
    totalComents: number;
    totalStars: number;
}

export default function ItemCard({
    image,
    imageDescription,
    share,
    onClick,
    children,
    heart,
    price,
    descount,
    totalComents,
    totalStars,
}: ItemCard) {
    const [isHeart, setIsHeart] = useState(heart);

    return (
        <div className="card bg-lightGray image-full w-[15rem] h-[22rem] shadow-xl mx-0.5 p-3 rounded cursor-pointer">

            {/* Curtir e Compartilhar */}
            <div className="flex justify-end p-2 space-x-2">
                    <button onClick={() => alert("Compartilhado!")} className="
                        bg-lightGray 
                        text-gray-800 
                        p-2
                        rounded-md 
                        shadow-sm 
                        hover:bg-gray-300 
                        active:translate-y-0.5 
                        active:shadow-none">
                        <FaShareAlt />
                    </button>
                    <button onClick={() => setIsHeart(!isHeart)} className="
                        bg-lightGray 
                        text-gray-800 
                        p-2
                        rounded-md 
                        shadow-sm 
                        hover:bg-gray-300 
                        active:translate-y-0.5 
                        active:shadow-none">
                        {isHeart ? <FaHeart /> : <FaRegHeart />
                        }
                    </button>
            </div>

            {/* Imagem do Card */}
            <div className="p-3 bg-lightGray w-full text-center font-bold">
                <img src={image} alt="" className="object-cover w-full h-[10rem] rounded-t"/>
            </div>

            {/* Conteúdo do Card */}
            
            
            <div className="px-[1rem]">
                <div className="flex justify-start p-1">
                    {children}
                </div>

                <div className="flex space-x-4">
                        <p className="flex items-center text-sm text-yellow-500">{totalStars}<FaStar />
                        </p>
                        <p className="flex items-center text-sm text-gray-500">{totalComents}<FaCommentAlt />

                        </p>
                </div>

                <div className='flex space-x-3 items-center'>
                    <p className="flex text-lg font-bold text-green-800 justify-start">R${price - (price * ((descount ?? 0)/100))}</p>
                    {descount && <p className="text-sm text-red-500">{descount}% OFF</p>}
                </div>
            </div>
        </div>
    )
}