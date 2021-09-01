import React from 'react'
import styled from 'styled-components'
import imageExists from 'image-exists'
import {Alert} from 'react-st-modal'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Login() {

    // const [user,setUser] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        const user = e.target[0].value;

        const imageUrl = `https://github.com/${user}.png`;
        
        if (user === 'admin'){
            localStorage.setItem('user',user);
            localStorage.setItem(user,JSON.stringify({
                livros : []
            }))
             
            await Alert('login de administrador', '');
              
            
            window.location = "/"
        }else{
            imageExists(imageUrl,(existe)=>{
                if(existe){
                    localStorage.setItem('user',user);
    
                   if(localStorage.getItem(user)){
                    console.log("nenhum livro criado")
                   }else{
                       localStorage.setItem(user,JSON.stringify({
                           
                           livros : []
                       }))
                       console.log("um livro criado como placeholder")
                   }
                    // setUser(imageUrl)
                   const oi =  async ()=> await Alert(`Bem vindo ${e.target[0].value}!`, '');
                   oi().then(()=> window.location = "/")
                    
                    
                } else{
                    Alert('Github invalido', '');
                }
            })
        }

        
    }

    return (
        <>
            <Formulario onSubmit={handleSubmit}>
                <label htmlFor="usuario">
                    Digite o seu usuario do Github
                </label>
                <input type="text" id="usuario" />
                <input  type="submit"/>
            </Formulario>
            {/* <img src={user?user:""} alt='Imagem do github do usuario'/> */}
        </>
    )
}

export default Login
