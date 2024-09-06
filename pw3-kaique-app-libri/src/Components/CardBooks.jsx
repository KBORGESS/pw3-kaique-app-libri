// import style from './CardBooks.modules.css'
// import Button from './Button'



// const CardBooks = ({titulo, autor, imagem, Button})=> {
//     return (
//         <div>
//             <h3>{titulo}</h3>
//             <p>{autor}</p>
//             <img src= {imagem} alt ={titulo} title={{titulo}}/>

//             <div>
//                 <Button label = "detalhe"></Button>
//             </div>
//         </div>
//     )
// }

// export default CardBooks

import style from './CardBooks.module.css'
import Button from './Button'


const CardBooks = ({titulo, autor, imagem})=> {
    return (
        <div className= {style.card_Books}>
            <h3 className= {style.titulo}>{titulo}</h3>
            <p className= {style.autor}>{autor}</p>
            <img src= {imagem} alt ={titulo} title={{titulo}}/>

            <div>
                <Button label = "detalhe"></Button>
            </div>
        </div>
    )
}

export default CardBooks