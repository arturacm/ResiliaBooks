import logo from './logo.svg';
import './App.css';
import './preLoad.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Books from './components/Books/Books';
import { useState,useEffect } from 'react';


function App() {
const [preLoad, setPreload] = useState("carregando");
const [conteudo,setConteudo] = useState("oculto");
  useEffect(()=>{
      setPreload("pronto");
      setConteudo("visivel");
  });

  return (
  <div className='App'>
    <div className={conteudo}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <main>
            <Main/>
            <Books/>
          </main>

        </Route>
        <Route path="/login" exact>

          <main>
            <Login/>
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
    <div className={preLoad}>
      <div className='loading'>
      </div>
    </div>
    </div>
  );
}

export default App;