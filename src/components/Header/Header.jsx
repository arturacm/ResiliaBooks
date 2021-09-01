import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import Cabecalho from './estilo.js';

/* importando imagens */
import logo from '../imagens/logo.jpg';
import carrinho from '../imagens/carrinho.jpg';


function Header({perfilEstaLogado, ehAdmin}) {

    console.log(ehAdmin)
    function logar(){
        if(perfilEstaLogado){
            if(ehAdmin){
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
            else{

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