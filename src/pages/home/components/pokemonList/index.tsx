import React from 'react';
import { maxPokemonCount } from '../../../../utils/constants';
import { StyledDiv, StyledWrapper } from './style';
import PokemonIcon from '../pokemonIcon';

function PokemonList() {
  const pokemonIdArray = Array.from(Array(maxPokemonCount).keys());

  return (
    <StyledDiv>
      {pokemonIdArray.map((pokemonId) => {
        return (
          <StyledWrapper>
            <PokemonIcon pokemonId={pokemonId + 1} key={pokemonId + 1} />
          </StyledWrapper>
        );
      })}
    </StyledDiv>
  );
}

export default PokemonList;
