import React, {useEffect,useState} from 'react'

function Books() {
    const [livros, setLivros] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/livros")
        .then((res)=> res.ok?res.json():false)
        .catch(err=>console.log(err))
        .then(res=> setLivros(res))
        

    },[])
    return (
        <>
            <ul>

            {livros.map((livro,i)=>{
                return(
                    <li key={i} >{JSON.stringify(livro)}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Books
