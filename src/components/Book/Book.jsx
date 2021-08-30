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
        const requisicao= async()=>{
            await fetch(`http://localhost:3000/livros/${parseInt(id)}`)
            .then((res)=> res.ok?res.json():false)
            .catch(err=>console.log(err))
            .then(res=> {
                setLivro(res)
                console.log(res);
            })}
        requisicao();
      
      
                
 },[id])


 
    function mostrarLivro(){
        if(livro){
          return(
              <>
                <h1> {livro.titulo}</h1>
                <img src={livro.capaURL} alt="Capa" />
                <h1>{livro.autor.nome}</h1>
                <p>R$ {parseInt(livro.preco).toFixed(2)}</p>
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