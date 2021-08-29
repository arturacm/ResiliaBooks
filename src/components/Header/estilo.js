import styled from "styled-components";
import lupa from "../imagens/lupa.jpg";

const style = {
    Cabecalho: styled.header`
        display: flex;
        flex-direction:column;
    `,
    Secao: styled.nav`
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin: 0 auto;
    `,
    Logo: styled.nav`
        display:flex;
        flex-flow:column;
        align-items:center;
        justify-content:center;
        margin: 2em 0em 0em 2em;
        padding: 0em 0em 1em 0em;
        text-decoration:none;
        line-height:22px;
    `,
    FalseInput: styled.div`
        display:flex;
        width: 585px;
        height: 68px;
        background: #ffffff;
        border:1px solid #a0a0a0;
        border-radius:10px;
        box-shadow:5px 5px 10px black;
    `,
    Pesquisa: styled.input`
        font-size: 2em;
        font-family: Montserrat;
        width: 500px;
        height: 60px;
        margin-top: 3px;
        padding-left: 18px;
        border:none;
        border-radius:10px;
        background: transparent;
    `,
    Submit: styled.input`
        background: url(${lupa});
        cursor:pointer;
    `,
    Ul: styled.ul`
        display:flex;
        flex-flow: row;
        margin: 0 auto;
        justisy-content: space-between;
        align-items: center;
    `,
    Li: styled.li`
        list-style: none;
        padding: 0px 100px 0px 0px;
    `,
    Email: styled.div`
        height: 26px;
        border: 1px solid black;
        background: #FFFCB8;
        border-top: #FFFCB8;
        border-right: #FFFCB8;
        padding: 0.45em 1em 0em;
        margin: 0% 0% 0% 0%;
    `,
    divBlack: styled.div`
        background: black;
        height: 10px;
    `
}

export default style;