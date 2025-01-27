'use client'

import React from 'react'
import { useEffect, useState } from "react";
import api from "../services/api"

import dog from '../assets/animals/dog1.webp'
// import product from '../assets/products/shampoo_01.webp'
import Carousel from "../components/Carousel"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage() {

  const [products, setProducts] = useState([]);

    async function consultar(){
        setProducts((await api.get("/produtos")).data);
        console.log(products);
    }

  return (
    <body>
      <Navbar></Navbar>
      <main className='mx-32 p-5 mt-10'>
        <h1>Produtos Recomendados!</h1>

        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="card shadow-lg p-4">
              <img src={product.photoUrl} alt={product.name} className="h-48 w-full object-cover rounded" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-green-500 font-bold">R$ {product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>


      <button onClick={consultar}>
                Clique!
      </button>

      <div>
          <h1>Favoritos dos Cachorros</h1>
          {/* <Carousel type='product' cards={
              [
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
              ]
            }></Carousel> */}
      </div>

      <div>
          <h1>Favoritos dos Gatos</h1>
          {/* <Carousel type='product' cards={
              [
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
              ]
            }></Carousel> */}
      </div>

      <div className='bg-gray-900 justify-center text-center p-10 flex flex-col mt-12 rounded-lg'>
          <h1 className='text-yellow-500'>Produtos Exclusivos</h1>
          {/* <Carousel type='product' cards={
              [
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
                {image: dog, description: "Dog",content: "Cachorro oro oro"},
              ]
            }></Carousel> */}
      </div>

      </main>

      <Footer></Footer>
    </body>
  )
}