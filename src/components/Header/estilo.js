import styled from "styled-components";

const style = {
    Cabecalho: styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    Logo: styled.nav`

    `,
    Pesquisa: styled.input`
        width: 579px;
        height: 1.5em;
    `,
    Ul: styled.ul`
        display:flex;
        flex-flow: row wrap;
        justisy-content: space-around;
        align-items: center;
    `,
    Li: styled.li`
        list-style: none;
        padding: 0% 50px 0% 0%;
    `
}

export default style;