import React, {useEffect,useState} from 'react'
function Base() {
const [livros, setLivros]=useState([])

useEffect(() => {
    const exibir = async()=>{
        await fetch(`http://localhost:3000/livros/`)
        .then((res)=> res.ok?res.json():false)
        .catch(err=>console.log(err))
        .then(res=> {
            setLivros(res)
            console.log(res);
         })
    }
    exibir();
}, [])

    return(


        <div>
            <button>Adicionar</button>
            <ul>
            {livros.map((item)=>{
                return(
                    <>
                    <li key={item.id}>{item.titulo}</li>
                    <button>Excluir</button>
                    <button>Editar</button>
                    </>
                )

            })}
            </ul>
        </div>
    )


    
}
export default Base;