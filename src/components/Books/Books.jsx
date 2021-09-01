import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import Livros from './estilo';

function Books() {
    const [livros, setLivros] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/livros")
        .then((res)=> res.ok?res.json():false)
        .catch(err=>console.log(err))
        .then(res=> setLivros(res))
        

    },[])

    return (
     
            <Livros>
            {livros.map(item=>{
                
                return(
                    
                    <article key={item.id} className="artigo">
                    <img src={item.capaURL} alt="capa do Livro" className="img" />
                    <h3>{item.titulo}</h3>
                    <Link to={`/livro/${item.id}`} className="saibaMais">Acessar</Link>
             
                    </article>
                    
                    
                )
                
            }
            )}
            </Livros>
        
    )
}

export default Books
