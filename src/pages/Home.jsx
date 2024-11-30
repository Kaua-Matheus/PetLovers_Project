// Importações externas
import React from "react";

// Importações de componentes do site
import blackcat from "../assets/blackcat.png";
import dogs from "../assets/dogs.jpeg";
import furao from "../assets/furao.jpg";

// Componentes
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import CardCreator from "../components/CardCreator";



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
        <div id="section">
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
        <div id="section">
          <h2>
            Ofertas Relâmpago
          </h2>

          <div className='flex'>
            <Card
              onClick={() => alert("Cartão Clicado!")}
              type="product_card"
              image={dogs}
              description={"Cachorro"}
              price="R$10,00"
              rating={4}
              className="w-[250px] h-[300px] flex flex-col items-center justify-center bg-white shadow-md"
              >
                <p className="text-black">Cartão</p>
            </Card>
            <Card
              onClick={() => alert("Cartão Clicado!")}
              type="product_card"
              image={dogs}
              description={"Cachorro"}
              price="R$10,00"
              rating={4}
              className="w-[250px] h-[300px] flex flex-col items-center justify-center bg-white shadow-md"
              >
                <p className="text-black">Cartão</p>
            </Card>
            <Card
              onClick={() => alert("Cartão Clicado!")}
              type="product_card"
              image={dogs}
              description={"Cachorro"}
              price="R$10,00"
              rating={4}
              className="w-[250px] h-[300px] flex flex-col items-center justify-center bg-white shadow-md"
              >
                <p className="text-black">Cartão</p>
            </Card> 
          </div>
        </div>

        {/* Produtos */}
        
        <div id="section">
          <h1>Produtos Recomendados</h1>
          

        </div>

      </div>
        
    </body>
  )
}