import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import PartyPage from "./component/PartyPage";


function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [party, setParty] = useState([])
    const [generations, setGenerations] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState("")

  return (
      <BrowserRouter>
        <Navigation generations={generations} setGenerations={setGenerations}/>
        <Switch>
          <Route exact path="/">
            <Home pokemonList={pokemonList} setPokemonList={setPokemonList} party={party} setParty={setParty} setSelectedPokemon={setSelectedPokemon}/>
          </Route>
            <Route exact path="/party">
                <PartyPage pokemonList={pokemonList}
                           setPokemonList={setPokemonList}
                           party={party}
                           setParty={setParty}
                           selectedPokemon={selectedPokemon}
                           setSelectedPokemon={setSelectedPokemon}/>
            </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
