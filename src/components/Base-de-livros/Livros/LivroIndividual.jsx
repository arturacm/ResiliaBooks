import React, { useEffect, useState} from "react";
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
function Livro(){
    const [livros, setLivros] = useState()
    

    const {id}=useParams();
  const url=("http://localhost:3000/livros/"+id)
 

    useEffect(() => {
        const novo=async()=>{
            await requi();
        }
        novo();
        
        
      }, [url]);

function requi(){
    const req = async () => {
        await axios
          .get("http://localhost:3000/livros/"+id)
          .then((response) => {
            setLivros(response)
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          });
      };
      req();
}


    return (
        <div>
            {/* <h1> {livros.titulo}</h1>
                <img src={livros.capaURL} alt="Capa"/>
                <h1>{livros.titulo}</h1>
                <p>R$ {parseInt(livros.preco).toFixed(2)}</p><img src={livros.capaURL} alt="Capa"/>
                */}
            <br/>
            <Link to="/base-de-livros/livros"> Voltar</Link>
        </div>
    )
} 
export default Livro;