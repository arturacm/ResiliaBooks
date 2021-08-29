import React, {useState} from 'react';
import styled from 'styled-components';
import imageExists from 'image-exists';
import {Formulario,Main,Img} from './estilo';

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
        <Main>
            <Formulario onSubmit={handleSubmit}>
                <label htmlFor="usuario">
                    Digite o seu usuario do Github
                </label>
                <input type="text" id="usuario" />
                <input  type="submit"/>
            </Formulario>
            <Img src={user}/>
        </Main>
    )
}

export default Login