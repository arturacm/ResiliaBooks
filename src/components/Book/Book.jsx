import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

const Livro = styled.section`
    display: flex;
    justify-content: center;
    .Titulolivro{
    text-transform:uppercase;
    text-align: center;
    font-weight: bold;
    }
    img{
        max-width:250px
        }
    .Autor1{
        text-transform:uppercase;
        text-align: center;
        font-size: 12px;

    } 
    .preço1{
        color:Red;
        font-weight: bold;
        text-transform:uppercase;
        text-align: center;
        font-size: 25px;
        animation: zoomIn 1.3s linear both;
        
        }
    
    @keyframes zoomIn {
    from {
    transform: scale(0.4)
    }
    to {
    transform: scale(1);
    }
}
    
.preço1:hover{
 color:#880808;
 text-shadow: 0.5px 0.5px 5px #fc0303;   
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
                <h1 className="Titulolivro" >{livro.titulo} </h1>
                <img src={livro.capaURL} alt="Capa" />
                <h1 className="Autor1">{livro.autor.nome}</h1>            
                <p className="preço1"> Apenas R$ {parseInt(livro.preco).toFixed(2)}</p>
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