import React, {useEffect, useState} from 'react';
import style from './estilo';
import { Confirm, Alert } from 'react-st-modal'

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
    function finalizarCompra(){
        const meusLivros = JSON.parse(localStorage.getItem(user))
        meusLivros.livros = [...meusLivros.livros, ... carrinho]
        console.log(meusLivros);
        localStorage.setItem(user,JSON.stringify(meusLivros))
        limparCarrinho()
        window.location = '/compra-sucesso';
        
    }
    return (
        <section>
            <h1>Ola carrinho {user ? user : "logar agr"}</h1>
            <style.Tabela>
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
                                <td className="info">
                                    <div className="imgLivroCarrinho">
                                        <img src={livro.capaURL} alt={`capa do livro ${livro.titulo}`}/>
                                    </div>
                                    <div className="infoLivro">
                                        <h2>{livro.titulo}</h2>
                                        <h3>{livro.autor.nome}</h3>
                                        <span>{livro.preco}</span>
                                        <span>{jaPossuiLivro(livro)?"Já possui":""} </span>
                                    </div>
                                </td>
                                
                            </tr>
                        )
                    }):""}
                    <tfoot>
                        <td>Subtotal </td>
                        <td>R$ {subTotal.toFixed(2)}</td>
                    </tfoot>
                </tbody>
            </style.Tabela>
            <button onClick={limparCarrinho}>Limpar Carrinho</button>
            <button onClick ={async () => {
          const result = await Confirm(`O Subtotal foi de R$ ${subTotal.toFixed(2)}`, 
            'Deseja confirmar a compra?');
          
          if (result) {
            finalizarCompra()
          } else {
            await Alert('Sua compra foi cancelada', '');
          }
            
            }} 
            
            disabled={numLivros>0||subTotal==0 || !Boolean(user) || user === 'admin'}>Finalizar a Compra</button>
        </section>
    )
}
export default Carrinho;