import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
function Livros() {
  const [generos, setGeneros] = useState([]);
  const [autores, setAutores] = useState([]);
  const [livros, setLivros] = useState([]);
  
 
  useEffect(() => {
      
    const reqGeneros = async () => {
      await axios
        .get("http://localhost:3000/genero/")
        .then((response) => {
          setGeneros(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const reqAutores = async () => {
        await axios
          .get("http://localhost:3000/autores/")
          .then((response) => {
            setAutores(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
     
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
      reqAutores();
      reqGeneros();
      reqLivros();
  }, []);



//  async function enviar(e){
//     e.preventDefault();
//         await axios.post("http://localhost:3000/genero",{genero})
//         .then(res => alert( "O genero "+res.data.genero + " foi adicionado"))
//         .catch((err)=>console.log(err))

//         setGenero("")
    

       
//     };

    
  return (
    <div>


{/* <form onSubmit={enviar} >
    <h1>Novo Livro</h1>
            <input placeholder="Digite o titulo" type="text"  value={titulo} name="titulo" onChange={(e)=>
            setGenero(e.target.value)}/>
             <input placeholder="Digite o genero" type="text"  value={genero} name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
             <input placeholder="Digite o genero" type="text"  value={genero} name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
            
            
            <button type="submit">Adicionar</button>
        </form> <br/> */}


      <ul >
        {generos.map((item) => {
          return (
            <li key={item.id}>
              {item.genero} 
              <Link to={`/base-de-livros/genero/${item.id}`}><button>Acessar </button></Link>
            </li>
          );
        })}
      </ul>
      <ul >
        {autores.map((item) => {
          return (
            <li key={item.id}>
              {item.nome} {item.nacionalidade}
              <Link to={`/base-de-livros/autor/${item.id}`}><button>Acessar </button></Link>
            </li>
          );
        })}
      </ul>
      <ul >
      {livros.map((item)=>{
                return(
                    
                    <li key={item.id}>{item.titulo} <button>Excluir</button>
                    <button>Editar</button> <br/>
                    <Link to={`/base-de-livros/Autores/${item.id}`}><button>Acessar </button></Link>
                    </li>
                    

                   
                )

            })}
      </ul>

      
    </div>
  );
}
export default Livros;