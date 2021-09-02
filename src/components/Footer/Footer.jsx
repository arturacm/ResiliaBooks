import React from 'react'
import styled from 'styled-components'
import logo from './../../assets/images/logo.jpg';

const Rodape = styled.footer`
display: flex;
flex-direction:column;
align-items: center;
border-top: solid black 50px;

img{
    height: auto;
    width:50px
}
`

function Footer() {
    return (
        <Rodape>
            <img  src={logo} alt="ResiliaBooks" width="80px" height="123px"/>
            <h5>
            Todos os direitos reservados
            </h5>
        </Rodape>
    )
}

export default Footer
