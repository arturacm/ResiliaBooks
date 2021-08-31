import React, { useEffect, useState} from "react";
import {Link,useParams} from 'react-router-dom'
import axios from "axios";
function Genero() {
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState("");
  const {id}=useParams()
  const url=("http://localhost:3000/Genero/"+id)


  useEffect(() => {
    const req = async () => {
      await axios
        .get(url)
        .then((response) => {
          setGeneros(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    req();
  }, [url]);

 async function put(e){
    e.preventDefault();
       await axios.put(url,{genero})
        .then(res => console.log(res))
        .catch((err)=> console.log(err))
    }
async function del(){
        
         await axios.delete(url)
        .then(res => console.log(res))
        .catch((err)=> console.log(err))
    }

  return (
    
       
            <div>
             <form onSubmit={put} >
                 <h3>Atualizar autor</h3>
            <input placeholder="Digite o genero" type="text"  value={genero}name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
            
            <button type="submit">Adicionar</button>
        </form> <br/>


        <Link to="/base-de-livros/Generos/">Voltar</Link>
        
        <h3>{generos.genero}</h3> <br/>
        <button type="button" onClick={del}>Excluir</button>
        </div>
       
        
    
  );
}
export default Genero;