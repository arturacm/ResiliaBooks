import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Books from "./components/Books/Books";
import Book from "./components/Book/Book";
import Profile from "./components/Profile/Profile";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MyBooks from "./components/MyBooks/MyBooks";
import Carrinho from "./components/Carrinho/Carrinho";
import PurchaseSuccessfull from './components/PurchaseSuccessfull/PurchaseSuccessfull';
import Autores from "./components/Base-de-livros/Autores/Autor";
import Autor from "./components/Base-de-livros/Autores/PutDeleteAutor";
import Generos from "./components/Base-de-livros/Generos/Generos";
import Genero from "./components/Base-de-livros/Generos/PutDeleteGenero";
import Livros from "./components/Base-de-livros/Livros/Livros";
import Livro from "./components/Base-de-livros/Livros/PutDeleteLivro";
import NewBook from "./components/Base-de-livros/Livros/NewBook";

function App() {
  const [perfilEstaLogado, setPerfilEstaLogado] = useState(false);
  const user = localStorage.getItem("user");

  let usuarioLocal = localStorage.getItem("user");
  
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
        <Header
          perfilEstaLogado={perfilEstaLogado}
          ehAdmin={user === "admin"}
        />
        <Switch>
          <Route path="/" exact>
            <main>
            <h1 className="Titulo1" >Bem vindo Resiliente! {user} </h1>
              <Books />
            </main>
          </Route>
          <Route exact path="/livro/:id">
            <main>
              <Book />
            </main>
          </Route>
          <Route path="/carrinho/" exact>
            <main>
              <Carrinho />
            </main>
          </Route>
          <Route path="/login" exact>
            <main>
              <Login />
            </main>
          </Route>
          <Route path="/meus-livros" exact>
            <main>
              <MyBooks perfilEstaLogado = {perfilEstaLogado}/>
            </main>
          </Route>
          <Route path="/base-de-livros/Livros" exact>
            <main>
              {usuarioLocal === "admin" ? (
                <Livros />
              ) : (
                <h1>Entre como admin</h1>
              )}
            </main>
          </Route>
          <Route path="/base-de-livros/Livros/:id" exact>
            <main>
              <Livro/>
            </main>
          </Route>  

          <Route path="/base-de-livros/new-book" exact>
            <main>
              <NewBook/>
            </main>

            </Route>     
          <Route path="/base-de-livros/Autores" exact>
            <main>
              <Autores/>
            </main>
          </Route>
          <Route path="/base-de-livros/Autor/:id" exact>
            <main>
              <Autor/>
            </main>
          </Route>
          <Route path="/base-de-livros/Generos" exact>
            <main>
              <Generos/>
            </main>
          </Route>        
          <Route path="/base-de-livros/Genero/:id" exact>
            <main>
              <Genero/>
            </main>
          </Route>                       
          <Route path="/perfil" exact>
            <main>
              <Profile ehAdmin={usuarioLocal === "admin"} />
            </main>
          </Route>
          <Route path="/carrinho" exact>

            <main>
              <Carrinho perfilEstaLogado = {perfilEstaLogado} />
            </main>

          </Route>
          <Route path="/compra-sucesso" exact>

            <main>
              <PurchaseSuccessfull />
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
