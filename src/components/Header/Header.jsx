import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Cabecalho = styled.header`
display: flex;
justify-content: space-between;

nav a, nav{
    display:flex;
    flex-direction:column;
    justify-content: center;
    height:100%
}

img{
    height:50px;
    border-radius:50%;
}
`


function Header({perfilEstaLogado, ehAdmin}) {

    console.log(ehAdmin)
    function logar(){
        if(perfilEstaLogado){
            if(ehAdmin){
                return (
                    <>
                        <Link to="/base-de-livros/livros">
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
            else{

                return (
                    <>
                        <Link to="/meus-livros">
                            <nav>
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
        }else{
            return(
                <Link to="/login">
                    <nav>
                        <img src={`https://github.com/${localStorage.getItem("user")}.png`} alt="Logo login ou foto usuario" /> 
                        Login
                    </nav>
                </Link>
            )
        }
    }
    return (
        <Cabecalho>
            <nav> 
                <Link to="/">
                    ResiliaBooks 
                </Link>
            </nav> 
            <nav>
                <input type="text" placeholder="buscar livros"/>
            </nav>
            {logar()}
            <nav>meu carrinho</nav>
        </Cabecalho>
    )
}
export default Header;