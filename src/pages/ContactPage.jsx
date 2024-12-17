'use client';

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ContactPage() {
    
    return (
        <body>

        <Navbar />
        
        <main className='mx-32 p-5'>

            {/* Banner de Suporte - Arrumar a qualidade */}
            <div className='flex justify-center bg-[url(../assets/petlovers_background.avif)] items-center rounded-lg shadow-md h-24  bg-cover bg-center'>

                    {/* <img src={petlovers_background} alt="Fundo da página" /> */}

                    
                    <div className='flex justify-center items-center rounded-md bg-white w-[70%] h-12 p-5'>
                        <p id='pacifico' className='text-black'>Suporte Petlovers</p>
                    </div>
                
            </div>            
  
        </main>
  
          <Footer alt_image="BlackCat"/>
          
      </body>
    );

}