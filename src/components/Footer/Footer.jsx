import React from 'react'
import './estilo.css';

function Footer(props) {
    return (
        <footer className="rodape">
            <div className="black">
                black
            </div >
            <div className="container">
                <div className="imgTemporaria">ResiliaBooks</div>
                <div className="grupo">
                    <a className="link" href="https://github.com/arturacm">Artur Moreira</a>
                    <a className="link" href="https://github.com/MarcosCabral93">Marcos Cabral</a>
                    <a className="link" href="https://github.com/galvaonana">NataliaGalvão</a>
                    <a className="link" href="https://github.com/verginia-fleitas">Verginia Fleitas</a>
                    <a className="link" href="https://github.com/PATOLINODD">Patrick Oliveira</a>
                </div>
                <div className="direitos">Todas as informações incluídas neste site, como texto, gráficos, fotos, o logotipo e as imagens dos alunos, são de propriedade exclusiva dos alunos e protegidas pelas leis de direitos autorais internacionais.</div>
            </div>
        </footer>
    )
}

export default Footer