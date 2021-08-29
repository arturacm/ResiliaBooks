import React from 'react'
import style from './estilo';
import './estilo.css';
import {Link} from 'react-router-dom'
import logo from '../imagens/logo.jpg';
import lupa from "../imagens/lupa.jpg";
import coracao from '../imagens/favoritos.jpg';
import login from '../imagens/login.jpg';
import carrinho from '../imagens/carrinho.jpg';



function Header() {
    return (
        <style.Cabecalho>
            <style.Email>resiliabooks@gmail.com.br</style.Email>
            <style.Secao>
            <style.Logo> 
                <div><img src={logo} alt="ResiliaBooks" width="80px" height="123px"/></div>
                <Link className="logoName" to="/">
                    <h2>RESILIA BOOKS</h2> 
                </Link>
            </style.Logo> 
            <nav>
                <style.FalseInput>
                    <style.Pesquisa type="text" placeholder=""/>
                    <button className="searchSubmit"><img class="btn" src={lupa} width="50px" heght="60px" alt="pesquisar" title="pesquisar"/></button>
                </style.FalseInput>
            </nav>
            <nav>
                <style.Ul>
                    <style.Li>
                        <div>
                            <img className="imgFavoritos" src={coracao} alt="Favoritos" title="favoritos" width="73px" height="72px"/>
                        </div>
                        <h2 className="subTitle">MEU LIVROS</h2>
                    </style.Li>
                    <style.Li className="alinharLogin">
                <Link to="/login">
                    <div>
                        <img className="imgLogin" src={login} alt="Login" title="Login" width="73px" height="73px"/>
                    </div>
                   <h2 className="subTitle login"> LOGIN </h2>
                </Link>
                </style.Li>
                    <style.Li>
                        <div>
                            <img className="imgCarrinho" src={carrinho} alt="carrinho" title="carrinho" width="73px" height="73px"/>
                        </div>
                       <h2 className="subTitle carrinho">CARRINHO</h2>
                    </style.Li>
                </style.Ul>
            </nav>
            </style.Secao>
            <style.divBlack></style.divBlack>
        </style.Cabecalho>
    )
}
export default Header;