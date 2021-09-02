import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Alert } from 'react-st-modal'
import carrinho from "./../../assets/images/carrinho.jpg"


const Livro = styled.section`
    display: flex;
    align-items:center;
    justify-content: center;
    
    article{
        display: flex;
        flex-direction: column;
        align-items:center;

    }
    .Titulolivro{
    text-transform:uppercase;
    text-align: center;
    font-weight: bold;
    }
    img{
        max-width:250px;
        margin-left: auto;
        margin-right: auto;

        }
    .Autor1{
        text-transform:uppercase;
        text-align: center;
        font-size: 12px;

    } 
    .preço1{
        color:Red;
        font-weight: bold;
        text-transform:uppercase;
        text-align: center;
        font-size: 25px;
        animation: zoomIn 1.3s linear both;
        
        }
    
    @keyframes zoomIn {
    from {
    transform: scale(0.4)
    }
    to {
    transform: scale(1);
    }
}
    
.preço1:hover{
 color:#880808;
 text-shadow: 0.5px 0.5px 5px #fc0303;   
}

button{
    display:flex;
    align-items: center;
    border-radius: 15px;
    background-color:#FFE609;
    padding-left: 15px;
    padding-right: 15px;
    transition: all 0.2s;
}
button img{
    border-radius: 50%;
    height:25px;
}
button:hover{
    transform: scale(1.05)
}
`;

function Book() {

    const [livro, setLivro] = useState(false)
    const { id } = useParams()


    useEffect(() => {
        const requisicao = async () => {
            await fetch(`http://localhost:3000/livros/${parseInt(id)}`)
                .then((res) => res.ok ? res.json() : false)
                .catch(err => console.log(err))
                .then(res => {
                    setLivro(res)
                    console.log(res);
                })
        }
        requisicao();
    }, [id])



    async function adcCarrinho(livro) {

        const carrinho = localStorage.getItem("carrinho")
        if (carrinho) {
            const livroObj = JSON.parse(carrinho)

            const livroEstaNoCarrinho = livroObj.reduce((acum, liv, i) => liv.id === livro.id ? true : acum, false)

            if (livroEstaNoCarrinho) {
                await Alert("Este livro já está no seu carrinho", "")
                //alert("Este livro já está no seu carrinho")

            } else {
                const novoCarrinho = [...livroObj, livro]
                localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
                await Alert("Livro adicionado ao carrinho com sucesso!", "")
            }
        } else {
            localStorage.setItem("carrinho", JSON.stringify([livro]))
            await Alert("Livro adicionado ao carrinho com sucesso!", "")
        }
    }

    function mostrarLivro() {
        if (livro) {
            return (
                <>
                    <h1 className="Titulolivro" > {livro.titulo}</h1>
                    <img src={livro.capaURL} alt="Capa" />
                    <h1 className="Autor1">{livro.autor.nome}</h1>
                    <p className="preço1">R$ {parseInt(livro.preco).toFixed(2)}</p>
                    <button onClick={() => adcCarrinho(livro)}> Adcionar ao carrinho <img src={carrinho}/></button>
                </>
            )
        } else {
            return (
                <h1>Carregando...</h1>
            )
        }
    }
    return (
        <Livro>
            <article>
                {mostrarLivro()}
            </article>
        </Livro>
    )


}


export default Book;