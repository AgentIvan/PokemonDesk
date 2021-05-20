/* eslint-disable camelcase */
import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

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

export const req = async (endpoint: string): Promise<IPokemonsResponse> => {
  // TODO get params from filter fields
  const params = `?offset=${Math.floor(Math.random() * 87)}&limit=12`;
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  return fetch(uri + params).then((response) => response.json());
};

export default req;
