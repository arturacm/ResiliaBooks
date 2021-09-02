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
  width: 60%;
  height: 60%;
  border-radius: 20px;
}
.botoes{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}
.botoes button{
  cursor: pointer;
}

input{
  margin:1vh;
  text-align: center;
}

.listagem-autores{
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  height: 30%;
  align-items: baseline;
  
}
.itens-Listagem{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 
}
 a {
  color: black;
  font-weight: bold;
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
        
        <div className="itens-Listagem">
        {autores.map((item) => {
          return (
            
            <Link key={item.id}  to={`/base-de-livros/autor/${item.id}`}>{item.nome}</Link>
            
          );
        })}
        </div>
      </section>
      <section className="botoes">
      <Button type="submit">Adicionar</Button>
      <Link to="/base-de-livros/livros"> <Button type="button">Voltar</Button></Link>
      </section>
        </form> <br/>


      
    </Div>
  );
}
export default Autores;
