import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
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
    <div>


<form onSubmit={enviar} >
    <h1>Novo Genero</h1>
            <input placeholder="Digite o genero" type="text"  value={genero} name="genero" onChange={(e)=>
            setGenero(e.target.value)}/>
            
            <button type="submit">Adicionar</button>
        </form> <br/>


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

      
    </div>
  );
}
export default Generos;