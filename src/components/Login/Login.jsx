import React, {useState} from 'react'
import styled from 'styled-components'
import imageExists from 'image-exists'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Login() {

    console.log(imageExists)
    
    const [user,setUser] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value)

        const imageUrl = `https://github.com/${e.target[0].value}.png`;
        
        imageExists(imageUrl,(existe)=>{
            if(existe){
                localStorage.setItem('githubUser',e.target[0].value);
                setUser(imageUrl)
                
            } else{
                alert("Github invalido")
            }
        })
        
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
