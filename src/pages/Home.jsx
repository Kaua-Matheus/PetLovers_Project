// Importações externas
import React from "react";

// Importações de componentes do site
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Logo from "../assets/Logo.png"
import Gato from '../assets/Dark_Cat.avif'
import Gato_PNG from '../assets/Dark_Cat_700.png'
import Button_lg from '../components/Button_lg'
import Product from '../components/Product'
import Product_lg from '../components/Product_lg'
import Frame_Card from '../components/Frame_Card'
import SupportPage from "../SupportPage";
// import Comprimento from "./components/Comprimento.jsx"
// import Button from './components/Button.jsx'


export default function Home() {
  return (
    
    <main>
      
      <header class='mb-1'>

        {/* NavBar */}
        <Navbar></Navbar>
      </header>
      <body class='mx-32 p-5'>
        
        {/* Opções Acima */}
        <div class='flex justify-center'>
          <Button_lg primary_text='Receba em horas' secundary_text='Ver regras'/>
          <Button_lg primary_text='Frete Grátis' secundary_text='Confira'/>
          <Button_lg primary_text='Até 10X' secundary_text='Saiba Mais'/>
          <Button_lg primary_text='Retire e Troque' secundary_text='Ver regras'/>
        </div>

        {/* Content */}
        <div class='my-10'>
          <h1>Confira os nossos melhores Serviços e Promoções!</h1>
          
          {/* Cartões */}
          <div class='flex mx-10 justify-center mb-10'>
            <Card image={Gato} text='Um gato é um felino' title='Um gato' text_button='Clique' />
            <Card image={Gato_PNG} text='Um gato é um felino' title='Um gato' text_button='Clique' />
            <Card />
          </div>

          <h1>Ofertas Relâmpago</h1>
          <div class='flex justify-center bg-white p-3 rounded-md mb-10'>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
          
          <h1>Produtos Recomendados</h1>
          <h2>Seu Pet vai amar!</h2>
          <div class='flex justify-center mb-10'>
            <Product_lg></Product_lg>
            <Product_lg></Product_lg>
            <Product_lg></Product_lg>
          </div>

          <h1>Marcas bem avaliadas</h1>
          <div class='flex flex-row p-4 m-4 bg-gray-100 rounded-lg shadow-black shadow-sm mb-10'>
            <Frame_Card/>
            <Frame_Card/>
            <Frame_Card/>
            <Frame_Card/>
          </div>

          <h1>+140 Marcas em Estoque</h1>
          <div class='flex flex-row p-4 m-4 bg-gray-100 rounded-lg shadow-black shadow-sm mb-10'>
            
          </div>
          
        </div>

        
      </body>
    </main>
  )
}