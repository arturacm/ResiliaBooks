import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import {Switch, BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <main>
              <h1>Os livros vem aqui </h1>
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
  );
}

export default App;
