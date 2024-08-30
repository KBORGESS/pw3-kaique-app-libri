import React from "react";

import style from './Home.module.css';

const Home = () => {

    return(

        <section className={style.Home_container}>
            <h1>SEJAM BEM VIADOS</h1>
            <p> aqui você acha as melhores vagas de corres </p>
            <img src="./book_home.jpg" />
        </section>
    )
}

export default Home 
