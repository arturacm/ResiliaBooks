import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Books from './components/Books/Books';
import Profile from './components/Profile/Profile';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import MyBooks from './components/MyBooks/MyBooks';


function App() {

    const[perfilEstaLogado, setPerfilEstaLogado] = useState(false)
    const user = localStorage.getItem('user')

    let usuarioLocal = localStorage.getItem('user');
    
    console.log("main renderizado")
    useEffect(()=>{
        if(localStorage.getItem('user')){
            setPerfilEstaLogado(true)
        }else{
            setPerfilEstaLogado(false)
        }
    },[usuarioLocal])

  return (
    <div className="App">
      <BrowserRouter>
        <Header perfilEstaLogado = {perfilEstaLogado} ehAdmin = {usuarioLocal === 'admin'}/>
        <Switch>
          <Route path="/" exact>
            
            <main>
              <h1>Bem vindo {user}  </h1>
              <Books/>
            </main>

          </Route>
          <Route path="/login" exact>
          
            <main>
              <Login/>
            </main>

          </Route>
          <Route path="/meus-livros" exact>
          
            <main>
              <MyBooks/>
            </main>

          </Route>
          <Route path="/base-de-livros" exact>
          
            <main>
              <h1>
              pagina para alterar a base de livros, permitido apenas para o admin
              </h1>
              <h2>
                Você é admin? {usuarioLocal === 'admin'?"SIM":"NÃO"}
              </h2>
            </main>

          </Route>
          <Route path="/perfil" exact>

            <main>
              <Profile ehAdmin = {usuarioLocal === 'admin'} />
            </main>

          </Route>
          <Route path="*">

            <main>
              <h1> 404 Not Found</h1>
            </main>

          </Route>


        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
