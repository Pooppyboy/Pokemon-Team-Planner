import { Type } from 'pokenode-ts';

export type GridColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type PokemonType = {
  name: string;
  baseStats: Stats;
  types: string[];
  moveSet: Move[];
  abilities: Ability[];
  spriteUrl: string;
  level: number;
};

export type Stats = {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
};

export type Move = {
  name: string;
  type: string;
  description: string;
  pp: number;
};

export type Ability = {
  name: string;
  description: string;
};
