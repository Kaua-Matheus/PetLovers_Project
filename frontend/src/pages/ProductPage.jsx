'use client'

import React from 'react'
import { useEffect, useState } from "react";
import api from "../services/api"

import dog from '../assets/animals/dog1.webp'
import Carousel from "../components/Carousel"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage() {

  const [products, setProducts] = useState([]);

    async function consultar(){
        setProducts((await api.get("/produtos")).data);
    }

  return (
    <body>
      <Navbar></Navbar>
      <main className='mx-32 p-5 mt-10'>
        <h1>Produtos Recomendados!</h1>
        <div>
          {products.map(product => (
            <Carousel key={product.id} type='product' cards={
              [
                {image: dog, description: product.name, content: product.description},
              ]
            }></Carousel>
          ))}
      </div>
      <button onClick={consultar}>
                Clique!
      </button>

      <div>
        {products.map(product => (
            <div key={product.id}>Valor: {product.name}</div>
        ))}
      </div>

      <div>
          <h1>Favoritos dos Cachorros</h1>
          <Carousel type='product' cards={
              [
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
              ]
            }></Carousel>
      </div>

      <div>
          <h1>Favoritos dos Gatos</h1>
          <Carousel type='product' cards={
              [
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
              ]
            }></Carousel>
      </div>

      <div className='bg-gray-900 justify-center text-center p-10 flex flex-col mt-12 rounded-lg'>
          <h1 className='text-yellow-500'>Produtos Exclusivos</h1>
          <Carousel type='product' cards={
              [
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
              ]
            }></Carousel>
      </div>

      </main>

      <Footer></Footer>
    </body>
  )
}