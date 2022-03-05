import React from 'react';
import { Container } from '../../components/common/container';
import boxTitleBackground from '../assets/img/box_title_background.png';
import PartyList from './components/partyList';
import PokemonList from './components/pokemonList';
import { PartyContainer, PokemonListContainer } from './style';

function Home() {
  return (
    <Container>
      <PartyContainer>
        <PartyList />
      </PartyContainer>
      <PokemonListContainer>
        <PokemonList />
      </PokemonListContainer>
    </Container>
  );
}

export default Home;
