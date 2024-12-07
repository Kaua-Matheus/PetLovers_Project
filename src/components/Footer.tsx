"use client"
import React, { ReactNode } from "react";

import { 
    FaCcVisa, 
    FaTwitterSquare, 
    FaInstagramSquare, 
    FaFacebookSquare 
} from "react-icons/fa";

import { SiMastercard } from "react-icons/si";
import { FaPix } from "react-icons/fa6";



interface FooterProps {
    image?: string;
    alt_image?: string;
    children: ReactNode;
}

export default function Footer(
    {
        image,
        alt_image,
        children,
    }
) {
    return (
        <div className="h-[30rem] text-center">
            <div className="space-x-10 text-center align-middle justify-center flex p-2">
                <img className="h-[5rem]" src={image} alt={alt_image} />
                <div className="flex space-x-4">

                    <div>
                        <p>
                            Redes Sociais
                        </p >
                        <div className="flex space-x-4">
                            <FaFacebookSquare size={30} />
                            <FaTwitterSquare size={30} />
                            <FaInstagramSquare size={30} />
                        </div >
                    </div >

                    <div >
                        <p>Meios de Pagamento</p>
                        <div className="flex justify-center space-x-4">
                            <FaPix size={30} />
                            <SiMastercard size={30} />
                            <FaCcVisa size={30} />
                        </div>
                    </div >
                    <a href="#">
                        Dicas
                    </a >
                    <a href="#">
                        Planos
                    </a >
                    <a href="#">
                        Nosso Blog
                    </a >
                    <a href="#">
                        Sobre Nós
                    </a >
                    <a href="#">
                        Fale Conosco
                    </a >
                </div>
            </div>

            {children}
        </div>
    )

};