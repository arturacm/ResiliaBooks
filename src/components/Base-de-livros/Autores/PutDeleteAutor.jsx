import React, { useEffect, useState} from "react";
import {Link,useParams} from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";

const Div=styled.section`
display: flex; 
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

form{
  display: flex;
  flex-direction: column;
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
.btnExl{
background: #9b0202;
border-radius: 30px;
color: white;
font-weight: bold;
margin-right: 2vw;

}
.btnVoltar{
background: #f0cc02;
border-radius: 30px;
color: #050505;
font-weight: bold;

}

.btnForm{
background: #000000;
border-radius: 30px;
color: white;
font-weight: bold;

}


.Link{
  
  margin: 2px;
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
             <form onSubmit={put} >
               <section>
               <h3>Atualizar autor</h3>
                   <h3 >{autor.nome} {autor.nacionalidade}</h3>
                   
                 
                 </section>
                 <section>
            <input placeholder="Digite o Nome" required type="text"  value={nome}name="nome" onChange={(e)=>
            setNome(e.target.value)}/>
            <input placeholder="Digite a Nacionalidade" required value={nacionalidade} type="text" name="nacionalidade" onChange={(e)=>
            setNac(e.target.value)}/>
            </section>
            <section>
            <button type="button" className="btnExl" onClick={del}>Excluir</button>
            <button className="btnForm" type="submit">Editar</button>
            <Link to="/base-de-livros/Autores/"><button class="btnVoltar">Voltar</button></Link>
            </section> <br/>
            
        </form> <br/>


        
        
         <br/>
    
        </Div>
       
        
    
  );
}
export default Autor;