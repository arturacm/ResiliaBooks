import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Tabela = styled.table`
img{
    max-width:100px
}
`

function Carrinho({perfilEstaLogado}) {
    const [carrinho, setCarrinho] = useState(false);

    let numLivros = 0;
    let subTotal = 0;
    const user = localStorage.getItem('user')

    useEffect(()=>{
        if(localStorage.getItem("carrinho")){
            const carrinhoArr = JSON.parse(localStorage.getItem("carrinho"))
            setCarrinho(carrinhoArr)
            
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

    function jaPossuiLivro(livro){
        if(user){
            const meusLivros = JSON.parse(localStorage.getItem(user))
            return meusLivros.livros.reduce((acum,liv, i)=>liv.id===livro.id?true:acum,false)
        }else{
            return false;
        }
    }
    return (
        <section>
            <h1>Ola carrinho {user ? user : "logar agr"}</h1>
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
                        if(jaPossuiLivro(livro)) numLivros++
                        return(
                            <tr key={i}>
                                <td><img src={livro.capaURL} alt={`capa do livro ${livro.titulo}`}/></td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor.nome}</td>
                                <td>{livro.preco}</td>
                                <td><button onClick={()=>removerDoCarrinho(i)}>Remover</button></td>
                                <td>{jaPossuiLivro(livro)?"Já possui":""} </td>
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
            <button disabled={numLivros>0 || !Boolean(user) || user === 'admin'}>Finalizar a Compra</button>
        </section>
    )
}
export default Carrinho;