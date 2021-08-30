import React, {useEffect,useState,useCallback} from 'react'
import {useParams, Link} from 'react-router-dom'

function Book() {
    
    const [livro, setLivro] = useState(false)
    const {id}=useParams()
    const url=(`http://localhost:3000/livros/${parseInt(id)}`)

    useEffect(()=>{
    fetch(url)
    .then((res)=> res.ok?res.json():false)
    .catch(err=>console.log(err))
    .then(res=> {
        setLivro(res)
        console.log(res);
    })
 },[url])
    //util
    const mostrarLivro=useCallback(()=>{
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
    },[livro])
    return (

            <section className='container'>
                        <article>
                            
                            {mostrarLivro()}

                        </article>  
                        <Link to='/carrinho'>Comprar</Link>
             </section>
    )                        
}     
export default Book;