import React from 'react'
import unicornio from "./../../assets/images/unicornio.png"
import styled from 'styled-components'

const Sucesso =  styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
height:100%;
`

function PurchaseSuccessfull() {
    return (
        <Sucesso>
            <img src={unicornio} alt="Unicórnio Feliz de compra concluída com sucesso" />
            <h1>Ebaaaaa!</h1>
            <h3>
            SUA COMPRA FOI REALIZADA COM SUCESSO!
            </h3>
            <h5>Dê uma olhada no seu email!! Todas as informações importantes da sua compra estão la.
Qualquer dúvida, entre em contato com nosso suporte: 0800 707070. Se não der certo, você tenta de novo</h5>
        </Sucesso>
    )
}

export default PurchaseSuccessfull
