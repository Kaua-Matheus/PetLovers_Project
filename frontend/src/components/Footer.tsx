"use client"
import React, { Children, ReactNode } from "react";

import { 
    FaCcVisa, 
    FaTwitterSquare, 
    FaInstagramSquare, 
    FaFacebookSquare 
} from "react-icons/fa";

import { SiMastercard } from "react-icons/si";
import { FaPix } from "react-icons/fa6";

import image from "../assets/blackcat.png";

interface FooterProps {
    image?: string;
    alt_image?: string;
    
}

export default function Footer(
    {
        image,
        alt_image,
    }
) {
    return (
        <div className="p-1 text-center flex-col mt-14">
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
            <p>Desenvolvido por <a href="https://github.com/Kaua-Matheus" target="_blank">Kaua-Matheus</a></p>
        </div>
    )

};
Footer.defaultProps = {
    image: image,
    alt_image: "Logo da empresa"
};