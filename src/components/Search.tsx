import { FaSearch } from "react-icons/fa";
import React from "react";
import { ReactNode } from "react";

interface SearchProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";

}

function Search(){
    

    return (
        <div className='flex items-center space-x-2'>
            <input className='
                border-none h-8 w-48 
                bg-gray-100 
                shadow-sm 
                p-2
                rounded-sm
                text-black' 
                type='text' 
                placeholder='Pesquisar'
            />

            <FaSearch className='
                border-none h-8 w-8
                bg-gray-100 
                shadow-sm
                p-[0.3rem]
                rounded-sm
                text-black
                hover:bg-gray-800
                hover:text-white
                active:translate-y-0.5 
                active:shadow-none'
            />
        </div>
    )

}

export default Search;