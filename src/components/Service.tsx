'use client';

import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import blackcat from '../assets/blackcat.png';

interface ServiceProps {
    type?: 'basic' | 'detailed';
    image?: string;
    children?: ReactNode;
    details?: {
        description?: string;
    }
  };

const Service: React.FC<ServiceProps> = ({
    type,
    image,
    children,
    details,
}) => { 
    return (
        <div className="
            card bg-white image-full w-[15rem] 
            h-auto shadow-md mx-2 p-4 rounded cursor-pointer 
            flex items-center flex-col space-y-4
            active:translate-y-0.5 active:shadow-none">
            <img className="rounded-full object-cover w-[10rem] h-[10rem] overflow-hidden flex items-center justify-center" 
            src={image} alt="" />

            <div className='text-center text-darkGray text-sm'>
                {children}
            </div>

            {type === 'detailed' && (
                <div className='text-center text-darkGray text-sm'>
                    {details?.description}
                </div>
            )}
            
        </div>
    );
}

Service.defaultProps = {
    type: 'basic',
    image: blackcat,
    children: 'Nome do serviço',
}