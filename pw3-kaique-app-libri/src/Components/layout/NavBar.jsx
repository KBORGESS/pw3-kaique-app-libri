import style from './NavBar.modules.css'
import { Outlet, link } from 'react-router-dom'

const NavBar = () => {

    return (

        <nav className={style.navbar}>

            <ul className={style.list}>

                <link to='/'>
                <li className={style.item}><img className={style.logo} src='./book.png' /></li>
                </link>

                <link to='/'>
                <li className={style.item}>HOME</li>
                </link>

                <link to='/CreateBooks'>
                <li className={style.item}>CADASTRAR LIVRO</li>
                </link>

                <link to='/ListBooks'>
                <li className={style.item}>LISTAR LIVRO</li>
                </link>
            </ul>

        </nav>
    )
}

export default NavBar