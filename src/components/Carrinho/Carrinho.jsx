import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Tabela = styled.table`
img{
    max-width:100px
}
`

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
        <section>
            <h1>Ola carrinho {perfilEstaLogado ? "bem vindo" : "logar agr"}</h1>
            <Tabela>
                <thead>
                    <th>Item</th>
                    <th>Item</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {carrinho?carrinho.map((livro,i)=>{
                        return(
                            <tr key={i}>
                                <td><img src={livro.capaURL} alt={`capa do livro ${livro.titulo}`}/></td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor.nome}</td>
                                <td>{livro.preco}</td>
                            </tr>
                        )
                    }):""}
                </tbody>
            </Tabela>
            <button onClick={limparCarrinho}>Limpar Carrinho</button>
        </section>
    )
}
export default Carrinho;