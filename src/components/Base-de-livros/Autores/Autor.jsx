import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";
import Button from "../../Button/Button";

const Div=styled.section`
display: flex; 
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

form{
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f3db;
  width: 50%;
  height: 50%;
  border-radius: 20px;
}
h1{
  margin: 1vh;
}
input{
  margin:1vh;
}

.listagem-autores{
  background-color: #f5f3db;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  height: 30%;
  align-items: baseline;
  border-radius: 20px;
}
.itens-Listagem{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  

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
  <h3>Novo Autor</h3>

            <input  required placeholder="Digite o Nome" type="text"  value={nome}name="nome" onChange={(e)=>
            setNome(e.target.value)}/>
            <input  required placeholder="Digite a Nacionalidade" value={nacionalidade} type="text" name="nacionalidade" onChange={(e)=>
            setNac(e.target.value)}/>
            
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
      
      <Button type="submit">Adicionar</Button>
      <Link to="/base-de-livros/livros"> <Button type="button">Voltar</Button></Link>
        </form> <br/>


      
    </Div>
  );
}
export default Autores;
