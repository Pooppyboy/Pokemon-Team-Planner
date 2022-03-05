import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import PokemonWrapper from './pokemonWrapper';
import { StyledDiv } from './style';

function PartyList() {
  const party = useAppSelector((state) => state.party);
  const dispatch = useAppDispatch();

  return (
    <StyledDiv>
      {party && party.map((pokemon) => <PokemonWrapper pokemon={pokemon} />)}
    </StyledDiv>
  );
}

export default PartyList;
