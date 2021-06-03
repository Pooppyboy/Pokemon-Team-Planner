import React, {useEffect} from 'react';
import axios from "axios";
import {addToParty} from "../lib/helpers";

function PokemonList({pokemonList, setPokemonList, party, setParty}) {

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=251')
            .then(response => {
                let promiseArray = response.data.results.map(pokemon => (
                    axios.get(pokemon.url)
                ))
                Promise.all(promiseArray).then(response => {
                    let temp = response.map(pokemon => pokemon.data)
                    setPokemonList(temp)
                });
            }).catch(error => console.error(error))
    }, [setPokemonList])


    return (
        <div className="d-flex mt-3 mb-4 justify-content-start flex-wrap"
             style={{
                 width: '100%',
             }}>
            {pokemonList ? pokemonList.map(pokemon => {
                return <img className="d-inline-block" onClick={() => addToParty(pokemon, party, setParty)}
                            key={pokemon.name}
                            src={pokemon.sprites.versions["generation-viii"].icons["front_default"]}
                            alt={pokemon.name}
                />
            }) : null}
        </div>
    );
}

export default PokemonList;
