import React, { useEffect, useState } from "react";
import style from './CreateBooks.module.css'

import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";


const CreateBooks = () => {

    ///* DEFINE O STATUS DE DADOS DAS CATEGORIAS */
    const [categorias, setCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
        console.log(book)
    }


    useEffect(() => {

        /* INSERÇÃO DOS DADOS DE LIVRO */
        function createBook(book) {

            // console.log(JSON.stringify(book))

            fetch('http://localhost:5000/inserirLivro', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                },
                body: JSON.stringify(book)
            })
                .then(
                    (resp) => resp.json()
                )
                .then(
                    (data) => {
                        console.log(data);
                        // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                    }
                )
                .catch(
                    (err) => { console.log(err) }
                )
        }
        fetch('http://localhost:5000/listagemCateorias', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
        }).then(
            (resp) =>
                // console.log('RESPOSTA: '+ resp)
                resp.json()

        ).then(
            (data) => {
                // console.log('DATA: ' + data.data[0].nome_categoria)
                setCategorias(data.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }, []);


    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createBook(book);
    }


    return (

        <section className={style.create_books_container}   >

            <h1>Cadastro de livros</h1>

            <form submit = {submit}>

                <Input
                    type="text"
                    name="nome_livro"
                    text="Título do livro"
                    placeHolder="Digite o nome do seu livro aqui"
                    handlerChangeBook={handlerChangeBook}

                />

                <Input
                    type="text"
                    name="autor_livro"
                    text="Nome do autor"
                    placeHolder="Digite o nome do autor aqui"
                />

                <Input
                    type="text"
                    name="descricao_livro"
                    text="Descrição do livro"
                    placeHolder="Digite a descrição do livro"
                />


                <Select
                    name="categoria"
                    text="Escolha uma cetegoria de livro"
                    options={categorias}
                />

                <Button
                    rotulo="Cadastrar livro"
                />

            </form>


        </section>
    )
}

export default CreateBooks

