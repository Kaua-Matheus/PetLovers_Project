'use client';

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FullscreenImage from "../components/FullscreenImage";

import dog from '../assets/animals/dog1.webp';

const animals = '../assets/animals';
//     id: String;
//     name: String;
//     description: String;
//     price: Number;
//     stars: Number;
//     comments: Number;
//     imagePath: String;
// };

export default function ContactPage() {

    return (
        <body>

        <Navbar />
        
        <main className='mx-32 p-5 mt-10'>

            {/* Banner de Suporte - Arrumar a qualidade */}
            <div className='flex justify-center bg-[url(../assets/petlovers_background.avif)] items-center rounded-lg shadow-md h-24  bg-cover bg-center'>

                    {/* <img src={petlovers_background} alt="Fundo da página" /> */}

                    
                    <div className='flex justify-center items-center rounded-lg bg-white w-[70%] h-12 p-5'>
                        <p id='pacifico' className='text-black'>Suporte Petlovers</p>
                    </div>
                
            </div>

            <div className='flex flex-row justify-center space-x-5'>
                <button className='shadow-lg rounded-md p-5 mt-5 max-w-32 max-h-20 hover:bg-orange-400 active:translate-y-[0.1rem]'>
                    <p className='font-bold'>Nossos serviços</p>
                    <p>Veja mais</p>
                </button>
                <button className='shadow-lg rounded-md p-5 mt-5 max-w-32 max-h-20 hover:bg-orange-400 active:translate-y-[0.1rem]'>
                    <p className='font-bold'>Adoção</p>
                    <p>Veja mais</p>
                </button>
                <button className='shadow-lg rounded-md p-5 mt-5 max-w-32 max-h-20 hover:bg-orange-400 active:translate-y-[0.1rem]'>
                    <p className='font-bold'>Blog</p>
                    <p>Veja mais</p>
                </button>
                <button className='shadow-lg rounded-md p-5 mt-5 max-w-32 max-h-20 hover:bg-orange-400 active:translate-y-[0.1rem]'>
                    <p className='font-bold'>Contato</p>
                    <p>Veja mais</p>
                </button>
                <button className='shadow-lg rounded-md p-5 mt-5 max-w-32 max-h-20 hover:bg-orange-400 active:translate-y-[0.1rem]'>
                    <p className='font-bold'>Planos</p>
                    <p>Veja mais</p>
                </button>
            </div>

            <div className="mt-20 py-2 space-y-2 items-center flex flex-col">
                <div className="flex h-[24rem] space-x-2 justify-center">
                    <FullscreenImage src={dog} alt="Dog"/>
                <div className="space-y-2">
                    <FullscreenImage css='h-[11.7777rem]' src={dog} alt="Dog"/>
                    <FullscreenImage css='h-[11.7777rem]' src={dog} alt="Dog"/>
                </div>
                <div className="space-y-2">
                    <FullscreenImage css='h-[24rem]' src={dog} alt="Dog"/>
                </div>
                </div>
                <FullscreenImage css='w-[80.7777rem] h-[10rem]' src={dog} alt="Dog"/>
            </div>

        </main>
  
          <Footer alt_image="BlackCat"/>
          
      </body>
    );

}