import React from 'react'
import styled from 'styled-components'

const Livros = styled.section`
    width:80%;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .livro{
        
        display: flex;
        flex-direction: column;
        margin: 20px;
        
    }
    .livro img{
        width:auto;
        height:250px
    }

`

function MyBooks({perfilEstaLogado}) {

    const user = localStorage.getItem('user')
    const meusLivros = JSON.parse(localStorage.getItem(user))

    console.log(meusLivros)

    return (
        <Livros>
            
            {perfilEstaLogado?meusLivros.livros.map((livro,i)=>{
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
            }): (
                <h1>Usuario não logado</h1>
            )}
        </Livros>
    )
}

export default MyBooks
