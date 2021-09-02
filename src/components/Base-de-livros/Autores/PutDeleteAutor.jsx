import React, { useEffect, useState} from "react";
import {Link,useParams} from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";
import Button from "../../Button/Button";


const Div=styled.section`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

form{
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  background-color: #f5f3db;
  width: 40%;
  height: 60%;
  border-radius: 20px;
}
Button{
  cursor: pointer;
}
.botoes{
 
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}

h1{
  margin: 1vh;
}
input{
  margin:1vh;
}
.btnExl{
background: #9b0202;
border-radius: 30px;
color: white;
font-weight: bold;
}
.autor{
  display: flex;
  flex-direction: column;
}






`

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

 async function put(){
    
       await axios.put(url,{nacionalidade,nome})
        .then(res => console.log(res))
        .catch((err)=> console.log(err))
    }
async function del(){
        
         await axios.delete(url)
        .then(res => {window.location="/base-de-livros/Autores"
          console.log(res)})
        .catch((err)=> console.log(err))
    }

  return (
    
       
            <Div>
               <h2>Atualizar autor</h2>

             <form onSubmit={put} >
                   <section className="autor">
                   <h3 > Nome: {autor.nome}</h3> 
                   <h3>Nacionalidade: {autor.nacionalidade}</h3>
                   </section>
                 
               
                 <section>
            <input placeholder="Digite o Nome" required type="text"  value={nome}name="nome" onChange={(e)=>
            setNome(e.target.value)}/>
            <input placeholder="Digite a Nacionalidade" required value={nacionalidade} type="text" name="nacionalidade" onChange={(e)=>
            setNac(e.target.value)}/>
            </section>
            <section>
            
            </section> <br/>
            
            <section className="botoes">
            <Button type="button" className="btnExl" onClick={del}>Excluir</Button>
            <Button className="btnForm" type="submit">Editar</Button>
            <Link to="/base-de-livros/Autores/"><Button class="btnVoltar">Voltar</Button></Link>
      </section>
       
            
        </form> <br/>


        
        
         <br/>
    
        </Div>
       
        
    
  );
}
export default Autor;