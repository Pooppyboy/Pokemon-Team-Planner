import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container} from "react-bootstrap";
import {addToParty} from "../lib/helpers";

function PokemonList({pokemonList, setPokemonList, party, setParty}) {

    useEffect(() => {
        let temp = [...pokemonList]
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(response => {
                response.data.results.forEach(pokemon => {
                    axios.get(pokemon.url)
                        .then(url => {
                            temp[url.data.id - 1] = url.data
                            // setPokemonList(prevUrl => [...prevUrl, url.data])
                        })
                })
                setPokemonList(temp)
            }).catch(error => console.error(error))
    }, [])


    return (
        <Container className="d-flex mt-3 mb-4 justify-content-center">
            <Container className="d-flex justify-content-start flex-wrap">
            {pokemonList ? pokemonList.map(pokemon => (
                    <img className="d-inline-block" onClick={() => addToParty(pokemon, party, setParty)}
                        key={pokemon.id}
                         src={pokemon.sprites.versions["generation-viii"].icons["front_default"]}
                         alt={pokemon.name}
                    />
            )) : null}
            </Container>
        </Container>
    );
}

export default PokemonList;
