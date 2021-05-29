import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container} from "react-bootstrap";

function PokemonList({pokemonList, setPokemonList}) {

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(response => {
                response.data.results.forEach(pokemon => (
                    axios.get(pokemon.url)
                        .then(url => {
                            setPokemonList(prevUrl => [...prevUrl, url.data])
                        })
                ))
            }).catch(error => console.error(error))
    }, [])

    console.log(pokemonList)

    return (
        <Container className="mt-3 mb-4">
            {pokemonList ? pokemonList.map(pokemon => (
                //<span onClick={() => alert(pokemon.name)} className="d-inline-block m-1" style={{background: "rgba(255,255,255,0.3)", border: "5px solid rgba(255,255,255,0.5)", borderRadius: "10px"}}>
                    <img onClick={() => alert(pokemon.name)}
                        key={pokemon.id}
                         src={pokemon.sprites.versions["generation-viii"].icons["front_default"]}
                         alt={pokemon.name}
                    />
            )) : null}
        </Container>
    );
}

export default PokemonList;
