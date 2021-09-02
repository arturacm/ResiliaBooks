import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Div = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f3db;
    width: 50%;
    height: 80%;
    border-radius: 20px;
  }

  img {
    width: 15%;
    height: 15%;
    border-radius: 100%;
  }
  h1 {
    margin: 1vh;
  }
  input {
    margin: 1vh;
  }

  button {
    background: #000000;
    border-radius: 30px;
    color: white;
    font-weight: bold;
  }
.checkbox{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}  


  .Link {
    text-decoration: none;
    margin: 2px;
  }
  .btnExl {
    background: #9b0202;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    margin-right: 2vw;
  }
`;

function NewLivro() {
  
  const [titulo, setTitulo] = useState();
  const [preco, setPreco] = useState();
  const [capaURL, setCapa] = useState();
  const [genero, setGenero] = useState([]);
  const [autor, setAutor] = useState();
  const [generos, setGeneros] = useState([]);
  const [autores, setAutores] = useState([]);
  

  
  useEffect(() => {
    const req = async () => {
      await axios
        .get("http://localhost:3000/autores/")
        .then((response) => {
          setAutores(response.data)
          setAutor(response.data[0].id)
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
    req();
  }, []);
   useEffect(()=>{
    const requisicaoGeneros = async () => {
      await axios
        .get("http://localhost:3000/genero/")
        .then((response) => {
          setGeneros(response.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
   }
   requisicaoGeneros();
  },[])

 

  
  async function newLivro() {
    const generos=genero;
    const autorId=autor
    await axios
      .post("http://localhost:3000/livros/", {
        titulo,
        preco,
        capaURL,
        generos,
        autorId,
      })
      .then((res) =>{window.location="/base-de-livros/Livros"})
      .catch((err) => console.log(err));
  }
   

  return (
    <Div>
      <form onSubmit={newLivro}>
       <h1>Novo Livro</h1>
          <section>
        <input
              placeholder="Digite o titulo"
              required
              type="text"
              value={titulo}
              name="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
            <input
              placeholder="Digite o Preço"
              required
              value={preco}
              type="number"
              name="preco"
              onChange={(e) => setPreco(parseInt(e.target.value))}
            />
            <input
              placeholder="Digite a Capa"
              required
              value={capaURL}
              type="text"
              name="capaUrl"
              onChange={(e) => setCapa(e.target.value)}
            />
          </section>

          
            <select value={autor} onChange={(e)=>setAutor(e.target.value)}>
           {autores.map((item)=>{
           return( <option value={item.id} > {item.nome}</option>)
           })}
         </select>
         
          
          
          <section>
            <ul  className="checkbox">
          {generos.map((item) => {
          return (
            <li key={item.id}>
            <input  type="checkbox" id={item.id} 
            onChange={(e)=>setGenero([...genero,parseInt(e.target.value)])}
            name={item.genero} value={item.id}/>
             <label >{item.genero}</label>
             </li>
          );
        })}
        </ul>
</section>
        
        <section>
        <button  type="submit">
         Criar
        </button>
        
        <Link to="/base-de-livros/Livros"><button>Voltar</button></Link>
        </section>
      </form>
    </Div>
  );
}

export default NewLivro;
