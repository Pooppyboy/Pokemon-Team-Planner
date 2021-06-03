import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/general/Navigation";
import PartyPage from "./components/party/PartyPage";
import axios from "axios";


function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [party, setParty] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState()

    // Set each stat of each pokemon within party
    useEffect(() => {
        let active = true
        let tempParty = [...party]
        let tempStat = 0
        party.forEach((pokemon, i) => {
            tempParty[i].stats = pokemon.pokemonAPI.stats.map(stat => {
                // Stats calculation
                if (stat.stat.name === "hp") {
                    tempStat = Math.round((((2 * stat["base_stat"] + pokemon.IV[stat.stat.name] + (pokemon.EV[stat.stat.name] / 4)) * pokemon.level) / 100) + Number(pokemon.level) + 10)
                } else {
                    tempStat = Math.round(((((2 * stat["base_stat"] + pokemon.IV[stat.stat.name] + (pokemon.EV[stat.stat.name] / 4)) * pokemon.level) / 100) + 5) *
                        ((pokemon.nature["increased_stat"] && (pokemon.nature["increased_stat"].name === stat.stat.name)) ? 1.1 : 1) *
                        ((pokemon.nature["decreased_stat"] && (pokemon.nature["decreased_stat"].name === stat.stat.name)) ? 0.9 : 1))
                }
                return {[stat.stat.name]: tempStat}
            })
        })
        if (active) setParty(tempParty)

        return () => {
            active = false
        }
    }, [party.length, setParty, party[selectedPokemon] && party[selectedPokemon].level])

    // Call ability APIs to store in list
    useEffect(() => {
        let active = true
        let tempParty = [...party]
        party.forEach((pokemon, i) => {
            let abilityListPromiseArrays = pokemon.pokemonAPI.abilities.map(ability => (
                axios.get(ability.ability.url)
            ))
            Promise.all(abilityListPromiseArrays).then(response => {
                tempParty[i].abilityList = response.map(ability => ability.data)
                if (active) setParty(tempParty)
            });
        })
        return () => {
            active = false
        }
    }, [party.length, setParty])

    // Call move APIs to store in list
    useEffect(() => {
        let active = true
        let tempParty = [...party]
        party.forEach((pokemon, i) => {
            let moveListPromiseArrays = pokemon.pokemonAPI.moves.map(moves => (
                axios.get(moves.move.url)
            ))
            Promise.all(moveListPromiseArrays).then(response => {
                tempParty[i].moveList = response.map(move => move.data)
                if (active) setParty(tempParty)

            });
        })
        return () => {
            active = false
        }
    }, [party.length, setParty])

    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <Home pokemonList={pokemonList}
                          setPokemonList={setPokemonList}
                          party={party}
                          setParty={setParty}
                          selectedPokemon={selectedPokemon}
                          setSelectedPokemon={setSelectedPokemon}
                    />
                </Route>
                <Route exact path="/party">
                    <PartyPage pokemonList={pokemonList}
                               setPokemonList={setPokemonList}
                               party={party}
                               setParty={setParty}
                               selectedPokemon={selectedPokemon}
                               setSelectedPokemon={setSelectedPokemon}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
