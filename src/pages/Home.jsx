// Importações externas
import React from "react";

// Importações de componentes do site
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import Gato from '../assets/Dark_Cat.avif'
import Gato_PNG from '../assets/Dark_Cat_700.png'
import Product from '../components/Product'
import Product_lg from '../components/Product_lg'
import Frame_Card from '../components/Frame_Card'
import SupportPage from "../SupportPage";


export default function Home() {
  return (
    
    <body>
    
      
      <header className='mb-1'
      >

        <Navbar
        />

      </header>
      
      <div className='mx-32 p-5'>
        {/* Opções Acima */}
        <div className='flex justify-center'>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Receba em horas</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Frete Grátis</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Até 10X</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Retire e Troque</Button>
        </div>

        {/* Content */}
        <div className='my-10'>
          <h1>Confira os nossos melhores Serviços e Promoções!</h1>
          
          {/* Cartões */}
          <div className='flex mx-10 justify-center mb-10'>
            <Card image={Gato} text='Um gato é um felino' title='Um gato' text_button='Clique' />
            <Card image={Gato_PNG} text='Um gato é um felino' title='Um gato' text_button='Clique' />
            <Card />
          </div>

          <h1>Ofertas Relâmpago</h1>
          <div className='flex justify-center bg-white p-3 rounded-md mb-10'>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
          
          <h1>Produtos Recomendados</h1>
          <h2>Seu Pet vai amar!</h2>
          <div className='flex justify-center mb-10'>
            <Product_lg></Product_lg>
            <Product_lg></Product_lg>
            <Product_lg></Product_lg>
          </div>

          <h1>Marcas bem avaliadas</h1>
          <div className='flex flex-row p-4 m-4 bg-gray-100 rounded-lg shadow-black shadow-sm mb-10'>
            <Frame_Card/>
            <Frame_Card/>
            <Frame_Card/>
            <Frame_Card/>
          </div>

          <h1>+140 Marcas em Estoque</h1>
          <div className='flex flex-row p-4 m-4 bg-gray-100 rounded-lg shadow-black shadow-sm mb-10'>
            
        </div>
          
        </div>
      </div>
        
    </body>
  )
}