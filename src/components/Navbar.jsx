import React from 'react'
import Button from "./Button"
import Menu from "./Menu"
import Search from "./Search"
import { FaHome } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        
    <div class='fixed top-0 w-full z-50 flex space-x-4 md:space-x-32 lg:space-x-96 px-24 h-12 bg-gray-100 shadow-md justify-center items-center'>
        
      {/* Botões */}
      <div class="flex space-x-2">
          <Link to='/'>
            <button  className="
              ml-12 h-8 btn btn-sm border-none rounded shadow-sm 
              text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4
              active:translate-y-0.5 active:shadow-none">
              <FaHome/>
            </button>
          </Link>
          <Button onClick={() => alert("Botão Clicado!")} >Contato</Button>
          <Link to='/sobre' > 
            <Button>Sobre nós</Button> 
          </Link >
          <Button onClick={() => alert("Botão Clicado!")} >Blog</Button>
          <Button onClick={() => alert("Botão Clicado!")} >Produtos</Button>
          <Link to='/servicos' > <Button >Serviços</Button> </Link>
      </div>

      <div className='flex'>
        
        <Search/>
        <Menu/>
      </div>
          
    </div>


  )
}

export default Navbar