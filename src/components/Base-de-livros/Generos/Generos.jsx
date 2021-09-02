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
function Generos() {
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState('');
  
 
  useEffect(() => {
    const req = async () => {
      await axios
        .get("http://localhost:3000/genero/")
        .then((response) => {
          setGeneros(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    req();
  }, []);
//post
 async function enviar(){
    
        await axios.post("http://localhost:3000/genero",{genero})
        .then(res => alert( "O genero "+res.data.genero + " foi adicionado"))
        .catch((err)=>console.log(err))

        setGenero("")
    

       
    };

    
  return (
    <Div>


<form onSubmit={enviar} >
    <h1>Novo Genero</h1>
            <input required placeholder="Digite o genero" type="text"  value={genero} name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
            
            <button type="submit">Adicionar</button>
        </form> <br/>


      <ul >
        {generos.map((item) => {
          return (
            <li key={item.id}>
              
              <Link to={`/base-de-livros/genero/${item.id}`}>{item.genero} </Link>
            </li>
          );
        })}
      </ul>

      
    </Div>
  );
}
export default Generos;