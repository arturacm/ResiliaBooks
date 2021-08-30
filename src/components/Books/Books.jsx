import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Livros = styled.section`
display: flex;

.artigo{
    display: flex;
    flex-direction: column;
    margin: 20px
}
img{
    max-width:200px
}
`

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
                        <h3>{item.titulo}</h3>
             <img src={item.capaURL} alt="capa do Livro" className="img" />
             <Link to={`/livro/${item.id}`}>Acessar</Link>
             
                    </article>
                    
                    
                )
                
            }
            )}
            </Livros>
        
    )
}

export default Books
