import React from 'react'
import styled from 'styled-components'
import Button from './../Button/Button'

const Perfil = styled.section`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
margin: 10px auto;

`

function Profile({ehAdmin}) {

    function logout(){
        localStorage.removeItem('user');
        window.location = "/login"
        
    }
    function apagarRegistros(){
        if(ehAdmin){
            logout();
        }else{
            localStorage.removeItem(localStorage.getItem('user'));
            logout()    
        }
        
    }

    return (
        <Perfil>
            <p>
            Configurações da conta
            </p>
            <br></br>
            <Button onClick = {logout}>Logout</Button>
            <br></br>
            <Button onClick = {apagarRegistros}>Deletar sua conta</Button>
        </Perfil>
    )
}

export default Profile
