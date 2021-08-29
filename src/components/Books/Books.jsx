
import React, {useEffect,useState} from 'react'

function Books() {
    const [livros, setLivros] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/livros")
        .then((res)=> res.json())
        .then(res=> setLivros(res))

    },[])
    return (
        <main>
            {livros.map(livro=>{
                return(
                    <h3>{JSON.stringify(livro)}</h3>
                )
            })}
        </main>
    )
}

export default Books