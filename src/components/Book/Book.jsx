import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

function Book() {
    
    const [livro, setLivro] = useState([])
    const {id}=useParams()
    

    useEffect(()=>{
       requisicao()
      
      
                
 },[])


 function requisicao(){
    fetch(`http://localhost:3000/livros/${parseInt(id)}`)
    .then((res)=> res.ok?res.json():false)
    .catch(err=>console.log(err))
    .then(res=> setLivro(res))}

    return (

            <section className='container'>
                        <article>
                            <h1> {livro.titulo}</h1>
                            <img src={livro.capaURL} alt="Capa" />
                            <p>R$ {parseInt(livro.preco).toFixed(2)}</p>
                            
                        </article>  
             </section>
    )      
                
                    
}     
                
            
           
        
    


export default Book;