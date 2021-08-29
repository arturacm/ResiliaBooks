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
            alert("login de administrador");
            window.location = "/"//gambiarra momentanea
        }else{
            imageExists(imageUrl,(existe)=>{
                if(existe){
                    localStorage.setItem('user',user);
    
                   if(localStorage.getItem(user)){
                    console.log("nenhum livro criado")
                   }else{
                       localStorage.setItem(user,JSON.stringify({
                           
                           livros : [{"id":1,"titulo":"O senhor dos aneis ","autorId":1,"autorUrl":"http://localhost:3000/autores/1","url":"http://localhost:3000/livros/1","capaURL":"https://images-na.ssl-images-amazon.com/images/I/81lQ5N0QwJL.jpg"},]
                       }))
                       console.log("um livro criado como placeholder")
                   }
                    // setUser(imageUrl)
                    alert(`Bem vindo ${e.target[0].value}!`);
    
                    window.location = "/"//gambiarra momentanea
                    
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
