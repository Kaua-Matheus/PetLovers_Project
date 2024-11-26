import React from 'react'
import Button from "./Button"
import Menu from "./Menu"
import Search from "./Search"

const Navbar = () => {
  return (
    
    // NavBar
    <div class=''>
        
        <div class='flex navbar items-center px-24 h-12 bg-gray-100 shadow-md'>
            {/* Botões */}
            <div class="flex-1 p-0.5">

                <Button onClick={() => alert("Botão Clicado!")} >Contato</Button>
                <Button onClick={() => alert("Botão Clicado!")} >Sobre nós</Button>
                <Button onClick={() => alert("Botão Clicado!")} >Blog</Button>
                <Button onClick={() => alert("Botão Clicado!")} >Produtos</Button>
                <Button onClick={() => alert("Botão Clicado!")} >Serviços</Button>

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