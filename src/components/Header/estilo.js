import styled from "styled-components";

const style = styled.header`
    display:flex;
    flex-flow: column;
    height:152px;


    /*============================================================
            resetando decorações dos links e das listas
    ==============================================================*/

    a {
        text-decoration: none;
        color:inherit;
    }
    ul > li{
        list-style: none;
    }

    /*==============================================================
            alinhando elementos no Header
    ================================================================*/
    
    .topBar{
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        align-items:center;
    }
    .casaNavBar{
        display:flex;
        flex-flow:row wrap;
        align-items:center;
    }

    nav a, nav{
        display:flex;
        flex-direction:column;
        justify-content: center;
        height:100%
    }
    img {
        height: 5em;
    }
    .imgLogin{
        transform: translate(-8px, 15px);
        border-radius:50%;
    }
    .logoBar{
        margin-left: 2%;
    }
    .imgLogo{
        transform: translateX(17px) scale(1.5);
    }
    .lg-subTitle{
        position:absolute;
        transform:translateY(45px);
    }
    .carrinho{
        transform:translate(20px, 20px) scale(1.2);
    }
    .space{
        padding-right:20px;
    }
    .black{
        width:100%;
        height: 20px;
        background: black;
        margin:0 auto;
    }
`;

export default style;