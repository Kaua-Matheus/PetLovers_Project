import React from 'react'
import Button from "./Button"
import Menu from "./Menu"
import Search from "./Search"
import { FaHome } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      
    // Arrumar o "fixed" para que o menu fique fixo no topo da página
    <div class='top-0 w-full z-50 flex space-x-4 md:space-x-32 lg:space-x-96 px-24 h-12 bg-gray-100 shadow-md justify-center items-center'>
        
      {/* Botões */}
      <div class="flex space-x-2">

          <Link to='/'>
            <button  className="
              ml-12 h-8 btn btn-sm border-none rounded shadow-sm 
              text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4
              active:translate-y-0.5 active:shadow-none">
              <FaHome/>
            </button>
          </Link >


          <Link to='/contato'>
            <Button>Contato</Button>
          </Link >

          <Link to='/sobre' > 
            <Button>Sobre nós</Button> 
          </Link >

          <Link to='/blog'>
            <Button>Blog</Button>
          </Link >

          <Link to='/produtos'>
            <Button>Produtos</Button>
          </Link >

          <Link to='/servicos' >
            <Button >Serviços</Button> 
          </Link >

      </div>

      <div className='flex'>
        
        <Search/>
        <Menu/>
      </div>
          
    </div>


  )
}

export default Navbar