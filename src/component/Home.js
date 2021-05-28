import React from 'react';
import {Container} from "react-bootstrap";
import PokemonList from "./PokemonList";

function Home({pokemonList, setPokemonList}) {
    return (
        <Container>
            <PokemonList pokemonList={pokemonList} setPokemonList={setPokemonList}/>
        </Container>
    );
}

export default Home;
