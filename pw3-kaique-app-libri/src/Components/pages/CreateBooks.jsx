import React from "react";
import style from  "./CreateBooks.module.css";

import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = ()=>{

    return(
        <section className={styles.create_books_container}>
            <h1> Create Books</h1>

            <Input 
            type="text" 
            name= "titulo do livro"
            placeholder="Digite o nome do seu livro"/>

            <Input 
            type="text" 
            name= "titulo do livro"
            placeholder="Digite o nome do seu livro"/>

            
            <Input 
            type="text" 
            name= "titulo do livro"
            placeholder="Digite o nome do seu livro"/>

        <Select
            name="categoria"
            text="escolha uma categoria de livro"
        />

        <Button
            rotulo="cadastrar livros"
        />




        </section>

        
    )
}


export default CreateBooks  