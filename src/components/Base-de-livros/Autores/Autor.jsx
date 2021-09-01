import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";

const Div=styled.section`
display: flex; 
justify-content: space-around;
align-items: center;
width: 100%;
height: 100%;

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f3db;
  width: 20%;
  height: 30%;
  border-radius: 20px;
}
h1{
  margin: 1vh;
}
input{
  margin:1vh;
}
button{
background: #000000;
border-radius: 30px;
color: white;
font-weight: bold;

}
.listagem-autores{
  background-color: #f5f3db;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 15vw;
  height: 20vh;
  align-items: center;
  border-radius: 20px;
}

.Link{
  text-decoration: none;
  margin: 2px;
}


`
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
 async function enviar(){
   
    //const novo ={nome,nacionalidade}
    
     
       await axios.post("http://localhost:3000/autores/",{nacionalidade,nome})
        .then(res => console.log(`Autor ${res.data.nome} ${res.data.nacionalidade}Cadastrado com sucesso`))
        .catch((err)=>console.log(err))

        setNac("")
        setNome("")

       
    };

  return (
    <Div>

   
<form onSubmit={enviar} >
  <h1>Novo Autor</h1>
            <input  required placeholder="Digite o Nome" type="text"  value={nome}name="nome" onChange={(e)=>
            setNome(e.target.value)}/>
            <input  required placeholder="Digite a Nacionalidade" value={nacionalidade} type="text" name="nacionalidade" onChange={(e)=>
            setNac(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form> <br/>


      <section className="listagem-autores">
        <h3>Autores</h3>
        <div className="itens-Listagem">
        {autores.map((item) => {
          return (
            
            <Link key={item.id} className="Link" to={`/base-de-livros/autor/${item.id}`}>{item.nome}</Link>
            
          );
        })}
        </div>
      </section>
    </Div>
  );
}
export default Autores;
