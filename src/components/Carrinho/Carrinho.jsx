import React, {useEffect, useState} from 'react';
import style from './estilo';


function Carrinho({ perfilEstaLogado }) {
    const [carrinho, setCarrinho] = useState(false);

        useEffect(()=>{
            if(localStorage.getItem("carrinho")){
                const carrinhoArr = JSON.parse(localStorage.getItem("carrinho"))
                setCarrinho(carrinhoArr)
                console.log(carrinho)
            }else{
                console.log("nada no carrinho")
            }
        },[])

        function limparCarrinho(){
            
            localStorage.setItem("carrinho","[]")
            setCarrinho(false)
            
        }
    return (
        <style.Secao>
            <h1>Ola carrinho {perfilEstaLogado ? "bem vindo" : "logar agr"}</h1>
            <style.Tabela>
                <thead>
                    <th>Capa</th>
                </thead>
                <tbody>
                    {carrinho?carrinho.map((livro,i)=>{
                        return(
                            <tr key={i}>
                                <td className="info">
                                    <div className="imgLivroCarrinho">
                                        <img src={livro.capaURL} alt={`capa do livro ${livro.titulo}`}/>
                                    </div>
                                    <div className="infoLivro">
                                        <h2>{livro.titulo}</h2>
                                        <h3>{livro.autor.nome}</h3>
                                        <span>{livro.preco}</span>
                                    </div>
                                </td>
                                
                            </tr>
                        )
                    }):""}
                </tbody>
            </style.Tabela>
            <button onClick={limparCarrinho}>Limpar Carrinho</button>
        </style.Secao>
    )
}
export default Carrinho;