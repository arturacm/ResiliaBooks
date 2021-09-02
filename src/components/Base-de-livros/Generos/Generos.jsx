import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";
import Button from "../../Button/Button";

const Div=styled.section`
display: flex; 
flex-direction: column;
justify-content: space-around;
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
  height: 60%;
  border-radius: 20px;
}
h1{
  margin: 1vh;
}
input{
  text-align: center;
}
.botoes button{
  cursor: pointer;
}
.listagem-autores{
  
  display: flex;
  flex-direction: column;
  
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
.botoes{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

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

<h1>Novo Genero</h1>
<form onSubmit={enviar} >
    
            <input required placeholder="Digite o genero" type="text"  value={genero} name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
            



            <section className="listagem-autores">
        
        <div className="itens-Listagem">
            {generos.map((item) => {
            return (
            
              
              <Link key={item.id} to={`/base-de-livros/genero/${item.id}`}>{item.genero} </Link>
           
                 );
            })}
            </div>
      </section>

            <section className="botoes">
            
            <Button className="btnForm" type="submit">Criar</Button>
            <Link to="/base-de-livros/Livros/"><Button class="btnVoltar">Voltar</Button></Link>
      </section>


        </form> <br/>


        

      
    </Div>
  );
}
export default Generos;