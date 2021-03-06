import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Livros = styled.section`
display: flex;
flex-flow: row wrap;

.artigo{
    display: flex;
    flex-direction: column;
    margin: 20px;
}
img{
    max-width:200px
}
.Titulo1{
    text-transform:uppercase;
    text-align: left;
    font-weight: bold;
    font-size: 12px;
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
                        <h3 className="Titulo1">{item.titulo}</h3>
                        <Link to={`/livro/${item.id}`}> <img src={item.capaURL} alt="capa do Livro" className="img" /></Link>
           
             
                    </article>
                    
                    
                )
                
            }
            )}
            </Livros>
        
    )
}

export default Books
