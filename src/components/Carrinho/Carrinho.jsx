import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Tabela = styled.table`
img{
    max-width:100px
}
`

function Carrinho({ perfilEstaLogado }) {
    const [carrinho, setCarrinho] = useState(false);
    let subTotal = 0;

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
        function removerDoCarrinho(indice){
            const newCarrinho = carrinho.filter((livro, i)=> i!==indice)
            localStorage.setItem("carrinho",JSON.stringify(newCarrinho))
            setCarrinho(newCarrinho)
            
        }
    return (
        <section>
            <h1>Ola carrinho {perfilEstaLogado ? "bem vindo" : "logar agr"}</h1>
            <Tabela>
                <thead>
                    <th>Item</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {carrinho?carrinho.map((livro,i)=>{
                        subTotal += livro.preco
                        return(
                            <tr key={i}>
                                <td><img src={livro.capaURL} alt={`capa do livro ${livro.titulo}`}/></td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor.nome}</td>
                                <td>{livro.preco}</td>
                                <td><button onClick={()=>removerDoCarrinho(i)}>Remover</button></td>
                            </tr>
                        )
                    }):""}
                    <tfoot>
                        <td>Subtotal </td>
                        <td>R$ {subTotal.toFixed(2)}</td>
                    </tfoot>
                </tbody>
            </Tabela>
            <button onClick={limparCarrinho}>Limpar Carrinho</button>
        </section>
    )
}
export default Carrinho;