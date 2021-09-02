import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.jpg';
import lupa from "./../../assets/images/lupa.jpg";
import coracao from './../../assets/images/favoritos.jpg';
import login from './../../assets/images/login.jpg';
import carrinho from './../../assets/images/carrinho.jpg';
import livros from './../../assets/images/livros.png';

import Cabecalho from './estilo.js';



function Header({ perfilEstaLogado, ehAdmin }) {
    console.log("perfilEstaLogado", perfilEstaLogado)
    console.log("ehAdmin", ehAdmin)
    function logar() {
        if (perfilEstaLogado) {
            if (ehAdmin) {
                return (
                    <>
                        <Link className="space" to="/base-de-livros">
                            <nav>
                               <h2>Base de Livros</h2>
                            </nav>
                        </Link>
                        <Link className="space" to="/perfil">
                                <div>
                                <img className="imgLogin" src={`https://icon-library.com/images/icon-admin/icon-admin-0.jpg`} alt="Logo login ou foto usuario" /> 
                                </div>
                                <h2>Perfil</h2>
                        </Link>
                    </>
                )
            }
            else {

                return (
                    <>
                        <Link className="space" to="/meus-livros">
                            <nav>
                               <h2> Meus Livros</h2>
                            </nav>
                        </Link>
                        <Link className="space" to="/perfil">
                                <div>
                                <img className="imgLogin" src={`https://github.com/${localStorage.getItem("user")}.png`} alt="Logo login ou foto usuario" /> 
                                </div>
                                <h2>Perfil</h2>
                        </Link>
                    </>
                )
            }
        }else{
            return(
                <>
                <Link className="space" to="/login">
                        <div>
                        <img className="imgLogin" src={`https://github.com/${localStorage.getItem("user")}.png`} alt="Logo login ou foto usuario" /> 
                        </div>
                        <h2>Login</h2>
                </Link>
                </>
            )
        }
    }
    return (
        <Cabecalho>
            <main className="topBar">
                <nav className="logoBar"> 
                    <Link to="/">
                        <div>
                            <img className="imgLogo" src={logo} alt="" />
                        </div>
                        <h2 className="lg-subTitle">ResiliaBooks</h2>
                    </Link>
                </nav> 
                <nav className="casaNavBar">
                            {logar()}
                            <Link className="space" to="/carrinho">
                                <div>
                                    <img className="carrinho" src={carrinho} alt="" />
                                </div>
                                <h2>Meu Carrinho </h2>
                            </Link>
                </nav>
            </main>
            <div className="black">black</div>
        </Cabecalho>
    )
}
export default Header;