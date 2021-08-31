import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Base() {
const [livros, setLivros]=useState([])


useEffect(() => {
const req=async()=>{    
 await axios.get('http://localhost:3000/livros/')
 .then((response)=>{ setLivros(response.data)})
  .catch((error)=>{console.log(error)})
}
req();
}, [])

    return(


        <div>
            <button>Adicionar</button>
            <ul>
            {livros.map((item)=>{
                return(
                    
                    <li key={item.id}>{item.titulo} <button>Excluir</button>
                    <button>Editar</button></li>
                   
                )

            })}
           <Link to="/base-de-livros/Livros/"> Acessar Livros</Link> <br/>
           <Link to="/base-de-livros/Autores/"> Acessar autores</Link> <br/>
           <Link to="/base-de-livros/Generos/"> Acessar Generos</Link>

            </ul>
        </div>
    )


    
}
export default Base;