export default function Frame_Card({Marca, Nota, Comentarios}){
    return (
        <div class='flex flex-row p-2 m-auto bg-gray'>
                <div class='flex-initial border-2 rounded-md text-center content-center p-2'>
                    <img src='https://via.placeholder.com/150' alt='Imagem do produto' class='rounded-lg p-2 object-cover h-36'/>
                    <h1 class='text-lg font-bold text-center text-black'>{Marca}</h1>
                    <p class='text-sm text-center text-black'>{Nota} ----- {Comentarios}</p>
                </div>
            </div>
    )
}
Frame_Card.defaultProps = {
    Marca: "Produto",
    Nota: "10",
    Comentarios: "20"
}
