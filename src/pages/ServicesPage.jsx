"use client";
import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Button from '../components/Button';

import blackcat from "../assets/blackcat.png";
import dogs from "../assets/dogs.jpeg";
import furao from "../assets/furao.jpg";


export default function ServicosPage() {
    return (

        <body>

      <Navbar />      

      <main>

        <div>
            <h1 className='mb-4'>Beneficios dos serviços feitos conosco.</h1>
            <div className="flex justify-center space-x-4 font-bold">
                <div className="h-[10rem] bg-lightGray rounded shadow-md flex flex-col space-y-10 p-4">
                    <h2 className='text-black'>Praticidade</h2>
                    <p className='text-md'>Tenha mais tempo para aproveitar seu pet!</p>
                </div>
                <div className="h-[10rem] bg-lightGray rounded shadow-md flex flex-col space-y-10 p-4">
                    <h2 className='text-black'>Praticidade</h2>
                    <p className='text-md'>Tenha mais tempo para aproveitar seu pet!</p>
                </div>
                <div className="h-[10rem] bg-lightGray rounded shadow-md flex flex-col space-y-10 p-4">
                    <h2 className='text-black'>Praticidade</h2>
                    <p className='text-md'>Tenha mais tempo para aproveitar seu pet!</p>
                </div>
            </div>
        </div>

        <div className='mt-12'>
          <h1 className='mb-4'>Confira os nossos Serviços</h1>
          <div className="flex justify-center">
            <Service image={blackcat}>Banho e tosa</Service>
            <Service image={furao}>Consultas Veterinárias</Service>
            <Service image={dogs}>Pet Grooming</Service>
            <Service image={blackcat}>Pet Hotel</Service>
            <Service image={furao}>Dog Walking</Service>
          </div>
        </div>

        <div className='mt-12'>
            <div className="flex flex-row space-x-4 p-4">
                <Service image={blackcat}>Banho e tosa</Service> 

                <aside className='p-4'>
                    <p className='text-lg'>
                        O serviço de Banho e Tosa visa cuidar da saúde 
                        e da higiene de seu Pet, dando banho, higienizando 
                        e aparando os pelos do animal, seja ele gato, cachorro ou ave!
                    </p >

                    <div className="flex absolute bottom-10 space-x-[35rem]">
                      <div>
                        <h2>Veja mais detalhes</h2>
                        <Link><a>Acesse nosso Blog</a></Link>
                      </div>
                      <Button onClick={ () => alert("Serviço agendado! ")}>Agendar Serviço</Button>
                    </div>
                </aside >
              </div >

              {/* <Service type=''>Banho e Tosa</Service> */}
        </div >


      </main>

      <Footer>
        <p>Desenvolvido por <a href="https://github.com/Kaua-Matheus" target="_blank">Kaua-Matheus</a></p>
      </Footer>

    </body>

    )
}