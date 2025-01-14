import React , { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


import Button from "./Button";

const User: React.FC = () => {
    
    const [Opened, setOpened] = useState(false);

    const inputName = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (Opened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        
    }, [Opened]);

    async function createUsers() {
        console.log(inputName);
    }
    

    return (
        <div>
            <Button onClick={() => setOpened(!Opened)}>
                <FaUserCircle/>
            </Button>
            
            {Opened && (
                <div onClick={() => setOpened(!Opened)}
                className="fixed inset-0 bg-black bg-opacity-50 z-40">

                </div>
            )}

            {Opened && (
                <div className="
                fixed top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                z-50 p-6 w-[90%] max-w-md
                bg-lightGray rounded-sm
                ">

                    <div>
                        <div className="flex mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Login / Cadastro</h2>
                        <Button onClick={() => setOpened(!Opened)}>
                            <IoClose size={20}/>
                        </Button>
                    </div>

                    {/* Formulário de Login */}
                    <div className="space-y-4">
                        <form>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="text" className="text-sm font-medium text-gray-700">
                                    Nome de Usuário
                                </label>
                                <input
                                    type="text"
                                    id="Nome"
                                    ref={inputName}
                                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col space-y-2 mt-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={inputEmail}
                                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col space-y-2 mt-1">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    ref={inputPassword}
                                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                onClick={createUsers}
                                className="w-full mt-6 bg-blue-600 text-white py-2 rounded shadow hover:bg-blue-700"
                            >
                                Login
                            </button>
                        </form>

                        {/* Botão para alternar para cadastro */}
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Não tem uma conta?{' '}
                            <span 
                                className="text-blue-600 cursor-pointer hover:underline">
                                Cadastre-se
                            </span>
                        </p>
                    </div>

                        </div>

                </div>
            )}
        </div>
    )
};

export default User;