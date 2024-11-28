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
        <div className="mt-10">
          <div className='flex columns-2 align-top'>
            <h1 className="text-black">Confira os nossos melhores serviços e promoções</h1>

            <div>
              <p className='font-bold m-1' >Precisa de Ajuda nas Compras?
                <aside className=""><a href="">Fale com um atendente.</a></aside>
              </p>
              <p className='font-bold m-1' >Visite a Loja mais perto de Você!
                <aside><a href="">Procure a loja mais perto de você</a></aside>
              </p>
            </div>

          </div>

          <Carousel cards={
            [
              {image: blackcat, description: "Gato",content: "Gato ato ato"},
              {image: dogs, description: "Dogs",content: "Cachorro oro oro"},
              {image: furao, description: "Furão",content: "Furao ao ao"},
            ]
          }></Carousel>
        </div>

        {/* Ofertas */}
        <div className="mt-10">
          <h2>
            Ofertas Relâmpago
          </h2>
          
          <div>
          <Card
            onClick={() => alert("Botão Clicado!")}
            type="product_card"
            image={dogs}
            description={"Cachorro"}
            className="w-[250px] h-[300px] flex flex-col items-center justify-center bg-white shadow-md"
            >
              <p className="text-black">Cartão</p>
            </Card>
          </div>
        </div>

      </div>
        
    </body>
  )
}