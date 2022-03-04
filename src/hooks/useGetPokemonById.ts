import { Pokemon, PokemonClient } from "pokenode-ts";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../utils/constants";

async function getPokemonById(pokemonId: number) {
  const api = new PokemonClient();
  const pokemon = await api.getPokemonById(pokemonId);
  return pokemon;
}

export default function useGetPokemonById(pokemonId: number) {
  return useQuery<Pokemon>(
    [QUERY_KEYS.GET_POKEMON, QUERY_KEYS.BY_ID, pokemonId],
    () => getPokemonById(pokemonId)
  );
}
