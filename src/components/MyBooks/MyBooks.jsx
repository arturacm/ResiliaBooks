import React from 'react'
import styled from 'styled-components'

const Livros = styled.section`
    width:80%;
    display:flex;

    .livro{
        
        display: flex;
        flex-direction: column
        
    }
    .livro img{
        width:auto;
        height:250px
    }

`

function MyBooks() {

    const user = localStorage.getItem('user')
    const meusLivros = JSON.parse(localStorage.getItem(user))

    console.log(meusLivros)

    return (
        <Livros>
            
            {meusLivros.livros.map((livro,i)=>{
                return(
                    <div className="livro" key={i}>
                        <img src={livro.capaURL} alt={`imagem da capa do livro ${livro.titulo}`} />
                        <p>
                            {livro.titulo}
                        </p>
                        <p>
                            {livro.autorId}
                        </p>
                    </div>
                )
            })}
        </Livros>
    )
}

export default MyBooks
