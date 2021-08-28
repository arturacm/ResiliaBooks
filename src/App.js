import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Books from './components/Books/Books';
import Profile from './components/Profile/Profile';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'


function App() {

    const[perfilEstaLogado, setPerfilEstaLogado] = useState(false)

    console.log("main renderizado")
    useEffect(()=>{
        if(localStorage.getItem('user')){
            setPerfilEstaLogado(true)
        }else{
            setPerfilEstaLogado(false)
        }
    },[localStorage.getItem('user')])
    // function atualiza(){
    //   console.log("main renderizado")
    //     if(localStorage.getItem('user')){
    //         setPerfilEstaLogado(true)
    //     }else{
    //         setPerfilEstaLogado(false)
    //     }
    // }
    // atualiza()
  return (
    <div className="App">
      <BrowserRouter>
        <Header perfilEstaLogado = {perfilEstaLogado}/>
        <Switch>
          <Route path="/" exact>
            
            <main>
              <h1>Bem vindo {localStorage.getItem('user')}  </h1>
              <Books/>
            </main>

          </Route>
          <Route path="/login" exact>
          {setPerfilEstaLogado}
            <main>
              <Login/>
            </main>

          </Route>
          <Route path="/perfil" exact>

            <main>
              <Profile/>
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
