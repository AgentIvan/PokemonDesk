/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons';
import s from './style.module.scss';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface RootObject {
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

export interface IPokedexPage {
  id?: string | number;
}
const PokedexPage: React.FC<IPokedexPage> = ({ id }: IPokedexPage) => {
  const [pokemons, setPokemons] = useState<RootObject[]>(POKEMONS);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://zar.hosthot.ru/api/v1/pokemons?offset=10&limit=10')
      .then((response) => response.json())
      .then((data) => setPokemons(data.pokemons))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className={s.message}>
        <Heading>Is Loading...</Heading>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={s.message}>
        <Heading>Something wrong!</Heading>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <Layout>
        {id && <>id:{id}</>}
        <div className={s.content}>
          {pokemons?.map((pokemonData) => (
            <PokemonCard
              name={pokemonData.name_clean}
              attack={pokemonData.stats.attack}
              defense={pokemonData.stats.defense}
              img={pokemonData.img}
              types={pokemonData.types}
              key={pokemonData.name_clean}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};
export default PokedexPage;
