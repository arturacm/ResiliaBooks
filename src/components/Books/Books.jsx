import React, {useEffect,useState} from 'react'
import './Books.css'
function Books() {
    const [livros, setLivros] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/livros")
        .then((res)=> res.ok?res.json():false)
        .catch(err=>console.log(err))
        .then(res=> setLivros(res))
        

    },[])

    return (
     
            <section className='container'>
            {livros.map(item=>{
                
                return(
                    
                    <article className="artigo">
                        <h3>{item.titulo}</h3>
             <img src={item.capaURL} alt="capa do Livro" className="img" />
             
             <button >Acessar</button>
                    </article>
                    
                    
                )
                
            }
            )}
            </section>
        
    )
}

export default Books
