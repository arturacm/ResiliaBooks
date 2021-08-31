import React, {useEffect,useState} from 'react'
import axios from 'axios'
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
           

            </ul>
        </div>
    )


    
}
export default Base;