'use client';

import React, { ReactNode } from 'react';

interface ServiceProps {
    image: string;
    children: ReactNode;
  };

export default function Service({
    image,
    children,
}: ServiceProps) {
    return (
        <div className="card bg-white image-full w-[15rem] h-auto shadow-sm mx-2 p-4 rounded cursor-pointer flex items-center flex-col space-y-4">
            <img className="rounded-full object-cover w-[10rem] h-[10rem] overflow-hidden flex items-center justify-center" 
            src={image} alt="" />

            <div className='text-center text-darkGray text-sm'>
                {children}
            </div>
            
        </div>
    );
}