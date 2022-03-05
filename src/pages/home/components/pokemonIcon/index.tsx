import React from 'react';
import { addToParty } from '../../../../store/partySlice';
import { useAppDispatch } from '../../../../store/hooks';
import useGetPokemonById from '../../../../hooks/useGetPokemonById';
import Loader from '../../../../components/common/loader';
import { Ability, PokemonType, Stats } from '../../../../utils/typings';
import { Pokemon } from 'pokenode-ts';
import { STATS } from '../../../../utils/constants';

type Props = {
  pokemonId: number;
};

function PokemonIcon({ pokemonId }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, data: pokemon } = useGetPokemonById(pokemonId);
  let partyPokemon: PokemonType;

  if (isLoading) return <Loader width={68} height={56} />;

  function transformStatResponse(pokemon: Pokemon): Stats {
    let statObj: Stats = {
      hp: 0,
      attack: 0,
      defense: 0,
      'special-attack': 0,
      'special-defense': 0,
      speed: 0,
    };
    pokemon.stats.forEach((stat) => {
      statObj[stat.stat.name as STATS] = stat.base_stat;
    });
    return statObj;
  }

  function transformAbilityResponse(pokemon: Pokemon): Ability[] {
    const abilities = pokemon.abilities.map((data) => {
      const abilityObj: Ability = {
        name: '',
        description: '',
      };
      abilityObj.name = data.ability.name;
      abilityObj.description = data.ability.url;
      return abilityObj;
    });
    return abilities;
  }

  if (pokemon) {
    partyPokemon = {
      name: pokemon.name,
      spriteUrl: pokemon.sprites.front_default!,
      level: 1,
      baseStats: transformStatResponse(pokemon),
      types: pokemon.types.map((data) => data.type.name),
      abilities: transformAbilityResponse(pokemon),
      moveSet: [],
    };
  }

  return (
    <>
      {pokemon && (
        <img
          onClick={() => dispatch(addToParty(partyPokemon))}
          src={
            pokemon.sprites.versions['generation-viii'].icons[
              'front_default'
            ] as string
          }
          alt={pokemon.name}
        />
      )}
    </>
  );
}

export default PokemonIcon;
