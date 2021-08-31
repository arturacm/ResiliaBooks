import React from 'react'
import styled from 'styled-components'
import imageExists from 'image-exists'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Login() {

    // const [user,setUser] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        const user = e.target[0].value;

        console.log(user);

        const imageUrl = `https://github.com/${user}.png`;
        
        if (user === 'admin'){
            localStorage.setItem('user',user);
            localStorage.setItem(user,JSON.stringify({
                livros : []
            }))
            alert("login de administrador");
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
                    alert(`Bem vindo ${e.target[0].value}!`);
    
                    window.location = "/"
                    
                } else{
                    alert("Github invalido")
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
