import style from './CardBooks.modules.css'
import Button from './Button'


const CardBooks = ({titulo, autor, imagem, Button})=> {
    return (
        <div>
            <h3>{titulo}</h3>
            <p>{autor}</p>
            <img src= {imagem} alt ={titulo} title={{titulo}}/>

            <div>
                <Button label = "detalhe"></Button>
            </div>
        </div>
    )
}

export default CardBooks