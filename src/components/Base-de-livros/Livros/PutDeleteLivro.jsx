import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

function Livro() {
  const [livro, setLivro] = useState(false);
  const [titulo, setTitulo] = useState();
  const [preco, setPreco] = useState();
  const [capaURL, setCapa] = useState();
  const [genero, setGenero] = useState([]);
  const [autor, setAutor] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [autores, setAutores] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const requisicaoLivros = async () => {
      await axios.get("http://localhost:3000/livros/" + id)
      .then((res) => {
        setLivro(res.data);
        console.log(`OS Livros ${res.data}`);
      });
    };requisicaoLivros();
  
  },[id])
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
   useEffect(()=>{
    const requisicaoGeneros = async () => {
      await axios
        .get("http://localhost:3000/genero/")
        .then((response) => {
          setGeneros(response.data);
          console.log(`OS generos ${response.data}`);
        })
        .catch((error) => {
          console.log(error);
        });
   }
   requisicaoGeneros();
  },[])

  function mostrarLivro() {
    if (livro) {
      return (
        <>
          <h1> {livro.titulo}</h1>
          <img src={livro.capaURL} alt="Capa" />
          <h1>{livro.autor.nome}</h1>
          <p>R$ {parseInt(livro.preco).toFixed(2)}</p>
          
            
        </>
      );
    } else {
      return <h1>Carregando...</h1>;
    }
  }

  
  async function put() {
    await axios
      .put("http://localhost:3000/livros/" + id, {
        titulo,
        preco,
        capaURL,
        genero,
        autor,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  
  async function del() {
    await axios
      .delete("http://localhost:3000/livros/" + id)
      .then((res) => {
        window.location = "/base-de-livros/Livros";
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  // function autores(){
  //   const {aut} =autores
  //   return(
  //   aut.map((item) => {
  //     return (
        
  //       <p>  {item.nome}</p>
        
  //     );
  //   }))
  // }
function testes(){
  console.log(genero)
}
  return (
    <Div>
      <form onSubmit={put}>
        {mostrarLivro()}
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
              type="text"
              name="preco"
              onChange={(e) => setPreco(e.target.value)}
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

          
            <ul>
           {autores.map((item)=>{
             <li> {item.nome}</li>
           })}
         </ul>
         
          
          
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
        <button onClick={put} type="submit">
          Editar
        </button>
        <button onClick={testes} type="button">
          Deletar
        </button>
        <Link to="/base-de-livros/Livros"><button>Voltar</button></Link>
        </section>
      </form>
    </Div>
  );
}

export default Livro;
