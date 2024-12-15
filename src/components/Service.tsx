'use client';

import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import blackcat from '../assets/blackcat.png';

import Button from './Button';

interface ServiceProps {
    type?: 'basic' | 'detailed';
    image?: string;
    css?: string;
    children?: ReactNode;
    details?: {
        description?: string;
    }
  }

const Service: React.FC<ServiceProps> = ({
    type,
    image,
    css,
    children,
    details,
}) => { 
    return (
        <div className={`${css} flex flex-row`}>
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
            
            </div>
            {type === 'detailed' && (
                <div className="flex flex-row space-x-4 p-4">

                <aside className='p-4'>
                    <p className='text-lg'>
                        O serviço de Banho e Tosa visa cuidar da saúde 
                        e da higiene de seu Pet, dando banho, higienizando 
                        e aparando os pelos do animal, seja ele gato, cachorro ou ave!
                    </p >

                    <div className="flex mt-24 space-x-[35rem]">
                      <div>
                        <h2>Veja mais detalhes</h2>
                        <Link to='/'><a>Acesse nosso Blog</a></Link>
                      </div>
                      <Button onClick={ () => alert("Serviço agendado! ")}>Agendar Serviço</Button>
                    </div>
                </aside >
              </div >
            )}
        </div>
    );
}

Service.defaultProps = {
    type: 'basic',
    image: blackcat,
    children: 'Nome do serviço',
    details: {
        description: 'Descrição do serviço'
    }
}

export default Service;