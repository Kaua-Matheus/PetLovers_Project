// Importações externas
import React from "react";

// Importações de componentes do site
import blackcat from "../assets/blackcat.png";
import dogs from "../assets/dogs.jpeg";
import furao from "../assets/furao.jpg";

// Componentes
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import FullscreenImage from "../components/FullscreenImage";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import Service from "../components/Service";


function HomePage() {

  return (
    
    <body>
      <Navbar />

      
      <main className='mx-32 p-5'>
      
        {/* Topo */}
        <div className='flex justify-center space-x-6 '>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Receba em horas</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Frete Grátis</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Até 10X</Button>
          <Button type='secundary_button' onClick={() => alert("Botão Clicado!")} >Retire e Troque</Button>
        </div>


        {/* Carrossel */}
        <div>
          <div className='flex columns-2 align-top space-x-[18rem]'>
            <h1>Confira os nossos melhores serviços e promoções</h1>

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
        <div>
          <h1>
            Ofertas Relâmpago
          </h1>

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
        
        <div>
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
          <h1>Marcas bem avaliadas</h1>

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
          <p>Nossa missão é trazer maior conforto e carinho aos nossos tão amados animaizinhos, visamos sempre o bem estar e o ótimo estilo de vida para os nossos <strong id="pacifico" >Pets</strong>.</p>
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
        
        {/* Blog */}
        <div className="flex flex-col justify-center">
          <h1 id='section'>Venha ver o nosso Blog</h1>

          <div>
            <h2>Adoção Animal</h2>
            <p>Espaço de adoção animal acontecerá neste sábado, o evento visa a facilitação de adoção de animais em situação de abandono. Haverá também dicas de proteção e cuidados com os Pets.</p>
          </div>
          
          {/* 
            Arrumar para que a tela trave quando as imagens estiverem em fullscreen
            Arrumar o fundo para que não fiquem espaços em branco 
          */}
          <div className="py-2 space-y-2">
            <h3>Veja as Imagens</h3>
            <div className="flex h-[32rem] space-x-2">
              <FullscreenImage src={dogs} alt="Cachorrinhos"/>
              <div className="space-y-2">
                <FullscreenImage css='h-[15.75rem]' src={blackcat} alt="Gato preto"/>
                <FullscreenImage css='h-[15.75rem]' src={furao} alt="Furão"/>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer>
        <Footer image={blackcat} alt_image="BlackCat">
          <p>Desenvolvido por <a href="https://github.com/Kaua-Matheus" target="_blank">Kaua-Matheus</a></p>
        </Footer>
      </footer>
        
    </body>
  )
}

export default HomePage;