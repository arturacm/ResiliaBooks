import React, {useState} from 'react'
import styled from 'styled-components'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Login() {

    const [user,setUser] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value)
        // const newUser = require()
        // console.log(newUser)
        setUser(`https://github.com/${e.target[0].value}.png`)
        // try{
        // }catch(err){
        //     console.error(err,"algo de errado nao esta certo")
        // }

    }

    return (
        <main>
            <Formulario onSubmit={handleSubmit}>
                <label htmlFor="usuario">
                    Digite o seu usuario do Github
                </label>
                <input type="text" id="usuario" />
                <input  type="submit"/>
            </Formulario>
            <img src={user}/>
        </main>
    )
}

export default Login
