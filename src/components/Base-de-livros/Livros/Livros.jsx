import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import novaImg from "./../../../assets/images/novaImg.png"

const Section=styled.section`
display: flex;
width: 100%;

img{
  width: 200px;
  height: 300px;
}
ul{
  display: flex;
flex-direction: row;
flex-wrap: wrap;
}
li{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

`
function Livros() {
  const [livros, setLivros] = useState([]);
  

  useEffect(() => {
       const reqLivros = async () => {
      await axios
        .get("http://localhost:3000/livros/")
        .then((response) => {
          setLivros(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
   
    reqLivros();
  }, []);

 

  return (
    <div>


      <Section>
        
      <ul className="lista">
      <Link to={`/base-de-livros/new-book`}>
                <img src={novaImg} alt="Novoooo Livroooooo" /> 
              </Link>  
        {livros.map((item) => {
          return (
            <li key={item.id}>
              {item.titulo} 
              <Link to={`/base-de-livros/Livros/${item.id}`}>
                <img src={item.capaURL} alt="capa" />
              </Link>
            </li>
          );
        })}
      </ul>
           
      </Section>
      <Link to="/base-de-livros/Autores/"> Acessar autores</Link> <br/> <br/>
      <Link to="/base-de-livros/Generos/"> Acessar Generos</Link>
    </div>
  );
}
export default Livros;
