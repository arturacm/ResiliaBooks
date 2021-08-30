import React, {createContext, useState} from 'react'

export const UserContext = createContext({ carrinho: []})


//não sendo usado possivelmente voltar depois


function CarrinhoProvider({children}) {
    const [carrinho, setCarrinho] = useState([])
    
    const adcCarrinho = carrinho =>{

    }

    return (
        <div>
            
        </div>
    )
}

export default CarrinhoProvider
