/* eslint-disable camelcase */
export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}
export interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string | null;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}
export interface IPokemonsResponse {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemon[];
  total?: number;
}

export interface IPokemons {
  data: IPokemonsResponse | null;
  isLoading: boolean;
  isError: boolean;
}
