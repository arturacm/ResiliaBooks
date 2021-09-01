import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
function NovoLivro(){
  const [autores, setAutores] = useState([]);
  
  const [titulo, setTitulo] = useState();
  const [preco, setPreco] = useState();
  const [capaURL, setCapa] = useState();
  const [genId, setGenId] = useState();
  const [AutorId, setAutorId] = useState();
  const [generos, setGeneros] = useState([]);

  "/base-de-livros/livros"
async function enviar() {
    console.log({ titulo, preco, capaURL });
    // await axios.post("http://localhost:3000/livros",{titulo,preco,capaURL})
    // .then(res => alert( "O genero "+res.data.genero + " foi adicionado"))
    // .catch((err)=>console.log(err))

    // setGenero("")
  }
  return(

    <div>
              <form  onSubmit={enviar}>
        <h1>Novo Livro</h1>
        <input
          placeholder="Digite o titulo"
          type="text"
          value={titulo}
          name="titulo"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          placeholder="Digite o preco"
          type="number"
          value={preco}
          name="preco"
          onChange={(e) => setPreco(e.target.value)}
        />
        <input
          placeholder="Digite a  URL da Capa"
          type="text"
          value={capaURL}
          name="capaURL"
          onChange={(e) => setCapa(e.target.value)}
        />
          
        {generos.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                name={item.genero}
                value={item.genero}
              />
              <label for={item.genero}>{item.genero}</label>
            </div>
          );
        })}
        <select>
        {autores.map((item) => {
          return (
            <option key={item.id}>
              {item.nome} 
              
            </option>
          );})}
     </select>
        <button type="submit">Adicionar</button>
      </form>{" "}
    </div>
  )

}
export default NovoLivro
