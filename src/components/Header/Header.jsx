import React from 'react'
import style from './estilo';
import {Link} from 'react-router-dom'



function Header() {
    return (
        <style.Cabecalho>
            <style.Logo> 
                <Link to="/">
                    ResiliaBooks 
                </Link>
            </style.Logo> 
            <nav>
                <style.Pesquisa type="text" placeholder="buscar livros"/>
            </nav>
            <nav>
                <style.Ul>
                    <style.Li>
                        meus livros
                    </style.Li>
                    <style.Li>
                <Link to="/login">
                    Login 
                </Link>
                </style.Li>
                    <style.Li>
                        meu carrinho
                    </style.Li>
                </style.Ul>
            </nav>
        </style.Cabecalho>
    )
}
export default Header;