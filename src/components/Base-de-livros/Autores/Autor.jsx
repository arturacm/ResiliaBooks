import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
function Autores() {
  const [autores, setAutores] = useState([]);
  const [nome, setNome] = useState("");
  const [nacionalidade, setNac] = useState("");
 
  useEffect(() => {
    const req = async () => {
      await axios
        .get("http://localhost:3000/autores/")
        .then((response) => {
          setAutores(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    req();
  }, []);
//post
 async function enviar(e){
    e.preventDefault();
    //const novo ={nome,nacionalidade}
    
     
       await axios.post("http://localhost:3000/autores/",{nacionalidade,nome})
        .then(res => console.log(`Autor ${res.data.nome} ${res.data.nacionalidade}Cadastrado com sucesso`))
        .catch((err)=>console.log(err))

        setNac("")
        setNome("")

       
    };

  return (
    <div>

   
<form onSubmit={enviar} >
  <h1>Novo Autor</h1>
            <input placeholder="Digite o Nome" type="text"  value={nome}name="nome" onChange={(e)=>
            setNome(e.target.value)}/>
            <input placeholder="Digite a Nacionalidade" value={nacionalidade} type="text" name="nacionalidade" onChange={(e)=>
            setNac(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form> <br/>


      <ul >
        {autores.map((item) => {
          return (
            <li key={item.id}>
              {item.nome} {item.nacionalidade}
              <Link to={`/base-de-livros/autor/${item.id}`}><button>Acessar </button></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Autores;
