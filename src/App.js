import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./component/Home";
import Navigation from "./component/Navigation";


function App() {
    const [pokemonList, setPokemonList] = useState([])

  return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home pokemonList={pokemonList} setPokemonList={setPokemonList}/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
