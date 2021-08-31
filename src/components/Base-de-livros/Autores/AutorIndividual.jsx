import React, { useEffect, useState} from "react";
import {Link,useParams} from 'react-router-dom'
import axios from "axios";
function Autor() {
  const [autor, setAutor] = useState([]);
  const [nome, setNome] = useState("");
  const [nacionalidade, setNac] = useState("");
  const {id}=useParams()
  const url=("http://localhost:3000/autores/"+id)


  useEffect(() => {
    const req = async () => {
      await axios
        .get(url)
        .then((response) => {
          setAutor(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    req();
  }, [url]);

 async function put(e){
    e.preventDefault();
       await axios.put(url,{nacionalidade,nome})
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
            <input placeholder="Digite o Nome" type="text"  value={nome}name="nome" onChange={(e)=>
            setNome(e.target.value)}/>
            <input placeholder="Digite a Nacionalidade" value={nacionalidade} type="text" name="nacionalidade" onChange={(e)=>
            setNac(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form> <br/>


        <Link to="/base-de-livros/autor/">Voltar</Link>
        <h3 >{autor.nome}</h3>
        <h3>{autor.nacionalidade}</h3> <br/>
        <button type="button" onClick={del}>Excluir</button>
        </div>
       
        
    
  );
}
export default Autor;