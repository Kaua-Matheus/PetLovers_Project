import React from 'react'
import Button from "./Button_sm"
import Menu from "./Menu"
import Search from "./Search"

const Navbar = () => {
  return (
    
    // NavBar
    <div class=''>
        
        <div class='flex navbar items-center px-24 bg-gray-100 shadow-black shadow-sm'>
            {/* <img src={Logo} alt="Logo Petlovers" class="rounded-lg p-10 object-cover h-36"/> */}
            {/* Botões */}
            <div class="flex-1 p-0.5">

                <Button valor="Contato"></Button>
                <Button valor="Sobre nós"></Button>
                <Button valor="Blog"></Button>
                <Button valor="Produtos"></Button>
                <Button valor="Serviços"></Button>


            </div>

            {/* Pesquisa */}
            <Search></Search>

            {/* Options */}
            <Menu></Menu>
            

        </div>

    </div>


  )
}

export default Navbar