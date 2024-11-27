// Importações externas
import React from "react";

// Importações de componentes do site
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import blackcat from "../assets/blackcat.png";
import dogs from "../assets/dogs.jpeg";
import furao from "../assets/furao.jpg";


export default function Home() {
  return (
    
    <body>
    
      
      <header className='mb-1'
      >

        <Navbar
        />

      </header>
      
      <div className='mx-32 p-5'>

        {/* Topo */}
        <div className='flex justify-center'>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Receba em horas</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Frete Grátis</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Até 10X</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Retire e Troque</Button>
        </div>


        {/* Carrossel */}

        <h1 className="text-black">Confira os nossos melhores serviços e promoções</h1>

        <Carousel cards={
          [
            {image: blackcat, description: "Gato",content: "Gato ato ato"},
            {image: dogs, description: "Dogs",content: "Cachorro oro oro"},
            {image: furao, description: "Furão",content: "Furao ao ao"},
          ]
        }></Carousel>

      </div>
        
    </body>
  )
}