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
import ItemCard from "../components/ItemCard";
import Service from "../components/Service";



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
          
          <div className="flex justify-center space-x-[2%]">
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
          </div>
          <div className="flex justify-center space-x-[2%] mt-2">
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
            <ItemCard image={dogs} price={21} descount={1} totalComents={2} totalStars={2}>Produto</ItemCard>
          </div>
        </div>

        {/* Marcas bem avaliadas */}
        <div>
          <h2 id="section">Marcas bem avaliadas</h2>

          <div className="flex">
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

        {/* Marcas em estoque */}
        <div id='section'>
          <h1>+140 Marcas em estoque</h1>
          <div className="flex items-center justify-center col-3 columns-4 space-x-2">
              <img className="h-[10rem] w-[10rem]" src={blackcat} alt="Gato preto" />
              <img className="h-[10rem] w-[10rem]" src={dogs} alt="Cachoxinhos" />
              <img className="h-[10rem] w-[10rem]" src={blackcat} alt="Gato preto" />
              <img className="h-[10rem] w-[10rem]" src={dogs} alt="Cachoxinhos" />
              <img className="h-[10rem] w-[10rem]" src={blackcat} alt="Gato preto" />
              <img className="h-[10rem] w-[10rem]" src={dogs} alt="Cachoxinhos" />
          </div>
        </div>

        {/* Missão */}
        <div id='section'>
          <h1 id="pacifico" className="text-xl">PetLovers</h1>
          <p>Nossa missão é trazer maior conforto e carinho aos nossos tão amados animaizinhos, visamos sempre o bem estar e o ótimo estilo de vida para os nossos <strong id="pacifico" className="text-lg">Pets</strong>.</p>
          <a href="#">Leia Mais</a>
        </div>

        {/* Confira os nossos Serviços */}
        <div>
          <h1 id='section'>Confira os nossos Serviços</h1>
          <div className="flex">
            <Service image={blackcat}>Banho e tosa</Service>
            <Service image={furao}>Consultas Veterinárias</Service>
            <Service image={dogs}>Pet Grooming</Service>
            <Service image={blackcat}>Pet Hotel</Service>
            <Service image={furao}>Dog Walking</Service>
          </div>
        </div>
        

      </div>
        
    </body>
  )
}