import React from 'react';
import Button from './Button';

export default function Product({Name, Description, Price, Image}){

    return (
        <div class=''>
            <div class='flex flex-row flex-wrap justify-center items-center'>
                <div class='flex-initial flex-col items-center'>
                    <img src='https://via.placeholder.com/150' alt='Imagem do produto' class='rounded-lg p-2 object-cover h-36'/>
                    <h1 class='text-lg font-bold text-justify'>{Name}</h1>
                    <p class='text-sm text-justify'>{Description}</p>
                    <p class='text-sm text-justify'>{Price}</p>
                    <Button>Comprar</Button>
                </div>
            </div>
        </div>
    )

}

Product.defaultProps = {
    Name: "Produto",
    Description: "Descrição do Produto",
    Price: "R$ 0,00",
    Image: "https://via.placeholder.com/150"
}