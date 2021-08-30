import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

const Livro = styled.section`
    display: flex;
    justify-content: center;

    img{
        max-width:300px
    }
`

function Book() {
    
    const [livro, setLivro] = useState(false)
    const {id}=useParams()
    

    useEffect(()=>{
       requisicao()
      
      
                
 },[])


 function requisicao(){
    fetch(`http://localhost:3000/livros/${parseInt(id)}`)
    .then((res)=> res.ok?res.json():false)
    .catch(err=>console.log(err))
    .then(res=> {
        setLivro(res)
        console.log(res);
    })}

    function adcCarrinho(livro){
        
        const carrinho = localStorage.getItem("carrinho")
        console.log(carrinho)
        if(carrinho){
            const livroObj = JSON.parse(carrinho)
            console.log(livroObj)

            const livroEstaNoCarrinho = livroObj.reduce((acum,liv, i)=>liv.id===livro.id?true:acum,false)

            if(livroEstaNoCarrinho){
                alert("Este livro já está no seu carrinho")

            }else{
                const novoCarrinho = [...livroObj,livro ]
                localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
                alert("Livro adicionado ao carrinho com sucesso!")
            }
        }else{
            localStorage.setItem("carrinho", JSON.stringify([livro]))
            alert("Livro adicionado ao carrinho com sucesso!")
        }
    }

    function mostrarLivro(){
        if(livro){
          return(
              <>
                <h1> {livro.titulo}</h1>
                <img src={livro.capaURL} alt="Capa" />
                <h1>{livro.autor.nome}</h1>
                <p>R$ {parseInt(livro.preco).toFixed(2)}</p>
                <button onClick={()=>adcCarrinho(livro)}> Adcionar ao carrinho</button>
              </>
          )  
        }else{
            return (
                <h1>Carregando...</h1>
            )
        }
    }
    return (
        <Livro>
            <article>                
                {mostrarLivro()}
            </article>  
        </Livro>
    )      
                
                    
}     


export default Book;