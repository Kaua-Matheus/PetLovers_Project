import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <body>

      <Navbar />      

      <main>

        <div className="p-10 space-y-4">
        
          <div>
            <h1>Sobre o <b id="pacifico">PetLovers</b></h1>
            <h2>PetLovers é um site de pet shop, voltado ao atendimento, venda de produtos e prestação de serviço aos Pets.</h2>
          </div>
          <div>
            <h2>Sobre Nós</h2>
            <p>Fundada em 10 de dezembro de 2024, a PetLovers nasceu com o objetivo de trazer mais amor, cuidado e bem-estar para os seus queridos pets. Nossa missão é oferecer produtos de qualidade, serviços especializados e muito carinho para todos os bichinhos que fazem parte das nossas vidas.</p>
            <p>Aqui na PetLovers, acreditamos que os pets não são apenas animais de estimação, mas membros da família. Por isso, estamos comprometidos em criar uma experiência única, tanto para você quanto para o seu companheiro de quatro patas (ou patas curtinhas, como o nosso querido Neve).</p>
          </div>
          <hr />
          <div>
            <h2>Nossos Mascotes</h2>
            <p>A inspiração para a criação da PetLovers veio diretamente dos nossos mascotes, que são verdadeiros membros da nossa equipe:</p>
            <li>Neve (Furão): Um explorador curioso e cheio de energia, Neve adora se esconder nos lugares mais inusitados do escritório. Ele é o nosso símbolo de alegria e diversão!</li>
            <li>Marilu (Cadelinha): Com seu jeitinho doce e carinhoso, Marilu é a guardiã oficial da PetLovers. Sempre disposta a receber visitantes com um rabinho abanando, ela nos lembra da importância do amor incondicional.</li>
            <li>Mingau (Gato): Elegante e cheio de charme, Mingau é o rei do conforto. Ele passa os dias descansando em suas almofadas favoritas e nos inspira a criar um ambiente aconchegante para todos os pets.</li>
          </div>
          <hr />
          <div>
            <h2>O Que Oferecemos</h2>
            <p>Na PetLovers, temos tudo o que você precisa para cuidar do seu bichinho:</p>
            <li>Produtos de qualidade para alimentação, conforto e diversão.</li>
            <li>Serviços como banho, tosa, consultas veterinárias e até um Pet Hotel para os momentos em que você precisar viajar.</li>
            <li>Dicas e conteúdos no nosso blog, sempre voltados para o bem-estar dos pets.</li>
          </div>
          <hr />
          <div>
            <h2>Nossa Filosofia</h2>
            <p>Acreditamos que todo pet merece ser tratado com respeito, carinho e dignidade. Trabalhamos todos os dias para criar um mundo onde eles sejam felizes, saudáveis e muito amados.</p>
            <p>A nossa equipe está sempre pronta para atender você e o seu amigo peludo (ou de penas, escamas, etc.) com todo o cuidado e atenção que vocês merecem. Venha nos visitar e fazer parte </p>da família PetLovers!
          </div>
        </div>

      </main>

      <Footer>
        <p>Desenvolvido por <a href="https://github.com/Kaua-Matheus" target="_blank">Kaua-Matheus</a></p>
      </Footer>

    </body>
  );
}

export default AboutPage;
