import React from 'react'
import styled from 'styled-components'

const Rodape = styled.footer`
display: flex;
justify-content: center;
`

function Footer() {
    return (
        <Rodape>
            Todos os direitos reservados
        </Rodape>
    )
}

export default Footer
