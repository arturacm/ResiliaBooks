import React from 'react'
import './estilo.css';
import logo from '../imagens/logo.jpg';

function Footer(props) {
    return (
        <footer className="rodape">
            <div className="black">
                black
            </div>
            <div className="container">
                <div className="imgTemporaria ajustar">
                    <div>
                        <img className="imgAtual" src={logo} alt="ResiliaBooks" width="80px" height="123px"/>
                    </div>
                    <h2 className="f-subTitle" >ResiliaBooks</h2>
                </div>
                <div className="grupo ajustar">
                    <a className="linkGithub" href="https://github.com/arturacm"><h3>Artur Moreira</h3></a>
                    <a className="linkGithub" href="https://github.com/MarcosCabral93"><h3>Marcos Cabral</h3></a>
                    <a className="linkGithub" href="https://github.com/galvaonana"><h3>NataliaGalvão</h3></a>
                    <a className="linkGithub" href="https://github.com/verginia-fleitas"><h3>Verginia Fleitas</h3></a>
                    <a className="linkGithub" href="https://github.com/PATOLINODD"><h3>Patrick Oliveira</h3></a>
                </div>
                <div className="direitos"> <p> 
                    Todas as informações incluídas neste site, como texto, gráficos, fotos, o logotipo e as imagens dos alunos, são de propriedade exclusiva dos alunos e protegidas pelas leis de direitos autorais internacionais.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer