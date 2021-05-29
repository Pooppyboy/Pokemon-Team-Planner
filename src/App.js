import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./component/Home";
import Navigation from "./component/Navigation";


function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [party, setParty] = useState([])

  return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home pokemonList={pokemonList} setPokemonList={setPokemonList} party={party} setParty={setParty}/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
