import React, {useEffect, useState} from 'react';
import axios from "axios";

function PokemonList({pokemonList, setPokemonList}) {
    const [pokemonImages, setPokemonImages] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
            .then(response => {
                response.data.results.forEach(pokemon => {
                    setPokemonList(prevPokemon => ([...prevPokemon, pokemon.name]))
                    axios.get(pokemon.url)
                        .then(response => {
                            setPokemonImages(prevImage => ([...prevImage, response.data.sprites.versions["generation-viii"].icons["front_default"]]))
                        }).catch(error => console.error(error))
                })
            }).catch(error => console.error(error))
    }, [])


    return (
        <>
            {pokemonImages.map((image, i) => (
                <img key={i+1} src={image} />
            ))}
        </>
    );
}

export default PokemonList;
