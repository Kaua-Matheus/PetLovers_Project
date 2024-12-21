'use client'

import React from 'react'

import dog from '../assets/animals/dog1.webp'
import Carousel from "../components/Carousel"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage() {
  return (
    <body>
      <Navbar></Navbar>
      <main className='mx-32 p-5 mt-10'>
        <div>
          <h1>Produtos Recomendados!</h1>
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