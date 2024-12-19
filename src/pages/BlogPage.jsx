'use client';

import React from "react";

import { TbPlayerPlayFilled } from "react-icons/tb";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import dog from '../assets/animals/dog1.webp';

export default function BlogPage() {

    return (
        <body>

        <Navbar />
        
        <main className='mx-32 p-5'>

            <h1>Ultimas notícias</h1>
            <div className="flex flex-row space-x-20">
                <div className='h-[30rem] text-white bg-[url(../assets/animals/dog1.webp)] bg-cover bg-center flex flex-col justify-end p-10'>
                    <div className='mb-2 text-lg'>
                        <button className='flex justify-center bg-black max-w-[4rem] bg-opacity-50 p-2 rounded-sm active:translate-y-[0.1rem]'>
                            <TbPlayerPlayFilled size={45}/>
                        </button>
                    </div>
                    <div className="bg-black bg-opacity-50 p-5 rounded-sm">
                        <p className='text-white max-lg:text-sm'>Menina de 2 anos é encontrada dormindo ao lado de cachorro na floresta depois de ser dada como desaparecida.</p>
                    </div>
                </div>
                <div className='flex flex-col'>

                    {/* Notícias */}

                    <button className="flex w-[30rem] space-x-2 p-2 shadow-sm rounded-lg">
                      <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                      <div className="space-y-2 flex flex-col text-justify">
                          <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                          <p>Há 2 semanas - 4 min de leitura</p>
                      </div>
                    </button>
                    <button className="flex w-[30rem] space-x-2 p-2 shadow-sm rounded-lg">
                      <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                      <div className="space-y-2 flex flex-col text-justify">
                          <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                          <p>Há 2 semanas - 4 min de leitura</p>
                      </div>
                    </button>
                    <button className="flex w-[30rem] space-x-2 p-2 shadow-sm rounded-lg">
                      <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                      <div className="space-y-2 flex flex-col text-justify">
                          <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                          <p>Há 2 semanas - 4 min de leitura</p>
                      </div>
                    </button>
                </div>
            </div>

            {/* Notícias mais antigas */}
            <div className='mt-20'>
                <h1>Notícias mais Antigas</h1>

                <div className='flex flex-col space-y-3'>
                    
                    <button className="flex w-[60vw] space-x-2 p-2 shadow-sm rounded-lg">
                        <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                        <div className="space-y-2 flex flex-col text-justify">
                            <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                            <p>Há 2 semanas - 4 min de leitura</p>
                        </div>
                    </button>
                    <button className="flex w-[60vw] space-x-2 p-2 shadow-sm rounded-lg">
                        <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                        <div className="space-y-2 flex flex-col text-justify">
                            <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                            <p>Há 2 semanas - 4 min de leitura</p>
                        </div>
                    </button>
                    <button className="flex w-[60vw] space-x-2 p-2 shadow-sm rounded-lg">
                        <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                        <div className="space-y-2 flex flex-col text-justify">
                            <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                            <p>Há 2 semanas - 4 min de leitura</p>
                        </div>
                    </button>
                    <button className="flex w-[60vw] space-x-2 p-2 shadow-sm rounded-lg">
                        <img className='w-[12rem] rounded-lg' src={dog} alt="doguinho" />
                        <div className="space-y-2 flex flex-col text-justify">
                            <p className='text-lg font-bold'>Shopper quer faturar até 85 milhões dem 2024 com loja de produtos para pets</p>
                            <p>Há 2 semanas - 4 min de leitura</p>
                        </div>
                    </button>
                </div>
            </div>

        </main>
  
          <Footer alt_image="BlackCat"/>
          
      </body>
    );

}