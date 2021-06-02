import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import PartyPage from "./components/PartyPage";


function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [party, setParty] = useState([])
    const [generations, setGenerations] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState([])
    const [partyAbilities, setPartyAbilities] = useState([])
    const [partyMoveSets, setPartyMoveSets] = useState(
        [
            [{}, {}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}]
        ]
    )

    return (
        <BrowserRouter>
            <Navigation generations={generations} setGenerations={setGenerations}/>
            <Switch>
                <Route exact path="/">
                    <Home pokemonList={pokemonList}
                          setPokemonList={setPokemonList}
                          party={party}
                          setParty={setParty}
                          selectedPokemon={selectedPokemon}
                          setSelectedPokemon={setSelectedPokemon}/>
                </Route>
                <Route exact path="/party">
                    <PartyPage pokemonList={pokemonList}
                               setPokemonList={setPokemonList}
                               party={party}
                               setParty={setParty}
                               selectedPokemon={selectedPokemon}
                               setSelectedPokemon={setSelectedPokemon}
                               partyMoveSets={partyMoveSets}
                               setPartyMoveSets={setPartyMoveSets}
                               partyAbilities={partyAbilities}
                               setPartyAbilities={setPartyAbilities}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
