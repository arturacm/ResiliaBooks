import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.jpg';
import lupa from "./../../assets/images/lupa.jpg";
import coracao from './../../assets/images/favoritos.jpg';
import login from './../../assets/images/login.jpg';
import carrinho from './../../assets/images/carrinho.jpg';

const Cabecalho = styled.header`
display: flex;
flex-direction:column;

.email{
    height: 26px;
        border: 1px solid black;
        background: #FFFCB8;
        border-top: #FFFCB8;
        border-right: #FFFCB8;
        padding: 2;
        margin: 0;
}
section{
    display: flex;
    justify-content: space-between;
    height:100%;
    border-bottom:solid black 10px;
}
.logo{
    border-radius:0;
    width:auto;
}
nav a, nav{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    height:100%;
    margin-top:0px;
    border-radius:10px;
    
}
a:first-child{
    margin-left:15px;
}
nav{
    margin-right:20px
}

}
img{
    height:70px;
    width:70px;
    border-radius:50%;
    margin-bottom:15px;
    margin-top:15px;
    transition: all 0.2s;
}
img:hover{
    transform:scale(1.1)
}

.menu{
    display:flex;
    justify-content:space-between;
}
`;


function Header({ perfilEstaLogado, ehAdmin }) {
    console.log("perfilEstaLogado", perfilEstaLogado)
    console.log("ehAdmin", ehAdmin)
    function logar() {
        if (perfilEstaLogado) {
            if (ehAdmin) {
                return (
                    <>
                        <Link to="/base-de-livros">
                            <nav>
                                Base de Livros
                            </nav>
                        </Link>
                        <Link to="/perfil">
                            <nav>
                                <img src={`https://icon-library.com/images/icon-admin/icon-admin-0.jpg`} alt="Logo login ou foto usuario" />
                                Perfil
                            </nav>
                        </Link>
                    </>
                )
            }
            else {

                return (
                    <>
                        <Link to="/meus-livros">
                            <nav>
                                <img src={coracao} alt="Meus Livros"/>
                                Meus Livros
                            </nav>
                        </Link>
                        <Link to="/perfil">
                            <nav>
                                <img src={`https://github.com/${localStorage.getItem("user")}.png`} alt="Logo login ou foto usuario" />
                                Perfil
                            </nav>
                        </Link>
                    </>
                )
            }
        } else {
            return (
                <Link to="/login">
                    <nav>
                        <img src={login} alt="Logo login" />
                        Login
                    </nav>
                </Link>
            )
        }
    }
    return (
        <Cabecalho>
            <div className="email">resiliabooks@gmail.com.br</div>
            <section>
                <nav>
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo"/>
                        ResiliaBooks
                    </Link>
                </nav>
                <div className="menu">
                    {logar()}
                    <nav>
                        <Link to="/carrinho">
                            <img src={carrinho} alt="Logo carrinho"/>
                            Meu Carrinho
                        </Link>
                    </nav>
                </div>
            </section>
        </Cabecalho>
    )
}
export default Header;