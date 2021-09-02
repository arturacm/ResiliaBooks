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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f5f3db;
  width: 50%;
  height: 50%;
  border-radius: 20px;
}
.botoes{
 
 width: 50%;
 display: flex;
 flex-direction: row;
 justify-content: space-around;

}
.botoes button {
  cursor: pointer;
}
h2{
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
function Genero() {
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState("");
  const {id}=useParams();
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

 async function put(){
    
       await axios.put(url,{genero})
        .then(res => console.log(res))
        .catch((err)=> console.log(err))
    }
async function del(){
        
         await axios.delete(url)
        .then(res =>{window.location="/base-de-livros/Generos"
        console.log(res)})
        .catch((err)=> console.log(err))
    }

  return (
    
       
            <Div>

<h2>Atualizar Generos</h2>
             <form onSubmit={put} >

                  
                 <h3> Genero: {generos.genero}</h3>

                 <section>
            <input required placeholder="Digite o genero" type="text"  value={genero}name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
            </section>
           
            <section className="botoes">
            <Button type="button" className="btnExl" onClick={del}>Excluir</Button>
            <Button className="btnForm" type="submit">Editar</Button>
            <Link to="/base-de-livros/Generos/"><Button class="btnVoltar">Voltar</Button></Link>
      </section>
      
        </form> <br/>


        
        </Div>
       
        
    
  );
}
export default Genero;