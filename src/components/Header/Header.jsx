import React from 'react'
import styled from 'styled-components'

const Cabecalho = styled.header`
display: flex;
justify-content: space-between;
`


function Header() {
    return (
        <Cabecalho>
            <nav> ResiliaBooks </nav> 
            <nav><input type="text" placeholder="buscar livros"/></nav>
            <nav>meus livros</nav>
            <nav>login </nav>
            <nav>meu carrinho</nav>
        </Cabecalho>
    )
}
export default Header;