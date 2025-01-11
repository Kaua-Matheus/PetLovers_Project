'use client';

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Button from './Button';

const Menu: React.FC = () => {
    const [Opened, setOpened] = useState(false);

    // Desabilitar a rolagem do body quando o menu está aberto
    useEffect(() => {
        if (Opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = ""; // Limpa o estilo ao desmontar o componente
        };
    }, [Opened]);

    return (
        <div className="relative">
            {/* Botão Hamburger */}
            <button
                onClick={() => setOpened(!Opened)}
                className="ml-12 h-8 btn btn-sm border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4
                    active:translate-y-0.5 active:shadow-none"
            >
                <GiHamburgerMenu />
            </button>

            {/* Menu Lateral */}
            <div
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white transform z-50 ${
                    Opened ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-lg overflow-y-auto`}
                style={{ width: "250px" }}
            >
                {/* Cabeçalho do Menu */}
                <div className="flex justify-between items-center p-4 bg-gray-900">
                    <Button
                        onClick={() => setOpened(false)}
                    >
                        Fechar
                    </Button>

                    <span className="text-lg font-bold">Menu</span>
                </div>

                {/* Conteúdo do Menu */}
                <div className="flex flex-col p-4 space-y-4">
                    <Button>Item 1</Button>
                    <Button>Item 2</Button>
                    <Button>Item 3</Button>
                    <Button>Item 4</Button>
                    <Button>Item 5</Button>
                    <Button>Item 6</Button>
                </div>
            </div>

            {Opened && (
                <div
                    onClick={() => setOpened(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                ></div>
            )}
        </div>
    );
};

export default Menu;
