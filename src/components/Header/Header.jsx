import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Cabecalho = styled.header`
display: flex;
justify-content: space-between;
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
                    Login 
                </Link>
            </nav>
            <nav>meu carrinho</nav>
        </Cabecalho>
    )
}
export default Header;