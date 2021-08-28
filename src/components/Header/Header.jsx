import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Cabecalho = styled.header`
display: flex;
justify-content: space-between;

nav a, nav{
    display:flex;
    flex-direction:column;
    justify-content: center;
    height:100%
}

img{
    height:50px;
    border-radius:50%;
}
`


function Header() {
    return (
        <Cabecalho>
            <nav> 
                <Link to="/">
                    ResiliaBooks 
                </Link>
            </nav> 
            <nav><input type="text" placeholder="buscar livros"/></nav>
            <nav>meus livros</nav>
            <nav>
                <Link to="/login">
                    <img src={`https://github.com/${localStorage.getItem("user")}.png`} alt="Logo login ou foto usuario" srcset="" /> 
                    Login
                </Link>
            </nav>
            <nav>meu carrinho</nav>
        </Cabecalho>
    )
}
export default Header;