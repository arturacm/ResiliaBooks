import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.jpg';
import login from './../../assets/images/login.jpg';
import carrinho from './../../assets/images/carrinho.jpg';
import livros from './../../assets/images/livros.png';
import baseDeLivros from './../../assets/images/baseDeLivros.png';

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
a{
    text-decoration:none;
    color:inherit;
}
a:first-child{
    margin-left:15px;
}
nav{
    margin-right:20px
}

img{
    height:70px;
    width:70px;
    margin-bottom:15px;
    margin-top:15px;
    transition: all 0.2s;
}
img:hover{
    transform:scale(1.1)
}
.imgPerfil{
    
    border-radius:50%;
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
                        <Link to="/base-de-livros/livros">
                            <nav>
                                <img src={baseDeLivros} alt="logo base de livros"/>
                                <h2>Base de Livros</h2>
                            </nav>
                        </Link>
                        <Link to="/perfil">
                            <nav>
                                <img src={`https://icon-library.com/images/icon-admin/icon-admin-0.jpg`} alt="Logo login ou foto usuario" />
                                <h2>Perfil</h2>
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
                                <img src={livros} alt="Meus Livros"/>
                                <h2>Meus Livros</h2>
                            </nav>
                        </Link>
                        <Link to="/perfil">
                            <nav>
                                <img className = "imgPerfil" src={`https://github.com/${localStorage.getItem("user")}.png`} alt="Logo login ou foto usuario" />
                               <h2> Perfil</h2>
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
                        <h2>Login</h2>
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
                        <h2>ResiliaBooks</h2>
                    </Link>
                </nav>
                <div className="menu">
                    {logar()}
                    <nav>
                        <Link to="/carrinho">
                            <img src={carrinho} alt="Logo carrinho"/>
                           <h2> Meu Carrinho</h2>
                        </Link>
                    </nav>
                </div>
            </section>
        </Cabecalho>
    )
}
export default Header;