import React from 'react'
import Button from "./Button"
import Menu from "./Menu"
import Search from "./Search"

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    // NavBar
    <div class=''>
        
        <div class='flex navbar items-center px-24 h-12 bg-gray-100 shadow-md'>
            {/* Botões */}
            <div class="flex-1 p-0.5">

                <Button onClick={() => alert("Botão Clicado!")} >Contato</Button>
                <Link to='/sobre'> <Button>Sobre nós</Button> </Link>
                <Button onClick={() => alert("Botão Clicado!")} >Blog</Button>
                <Button onClick={() => alert("Botão Clicado!")} >Produtos</Button>
                <Link to='/servicos'> <Button >Serviços</Button> </Link>

            </div>

            {/* Pesquisa */}
            <Search/>

            {/* Options */}
            <Menu/>
            


        </div>

    </div>


  )
}

export default Navbar