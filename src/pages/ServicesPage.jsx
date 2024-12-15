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

              <Service type='detailed'></Service>
              <Service css='mt-10' type='detailed'></Service>
              <Service css='mt-10' type='detailed'></Service>
              <Service css='mt-10' type='detailed'></Service>

        </div >


      </main>

      <Footer>
        <p>Desenvolvido por <a href="https://github.com/Kaua-Matheus" target="_blank">Kaua-Matheus</a></p>
      </Footer>

    </body>

    )
}