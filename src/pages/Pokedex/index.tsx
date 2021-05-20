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

interface IPokemonsResponse {
  count?: 11;
  limit?: 11;
  offset?: 1;
  pokemons: RootObject[];
  total?: number;
}

export interface IPokedexPage {
  id?: string | number;
}

const usePokemons = () => {
  const [data, setData] = useState<IPokemonsResponse>({ pokemons: POKEMONS });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://zar.hosthot.ru/api/v1/pokemons?offset=${Math.floor(Math.random() * 87)}&limit=12`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC<IPokedexPage> = ({ id }: IPokedexPage) => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <Heading className={s.message}>Is Loading...</Heading>;
  }

  if (isError) {
    return <Heading className={s.message}>Something wrong!</Heading>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading className={s.message} level="h4">
          {data.total}&nbsp;<b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.content}>
          {data?.pokemons.map((pokemon) => (
            <PokemonCard
              name={pokemon.name_clean}
              attack={pokemon.stats.attack}
              defense={pokemon.stats.defense}
              img={pokemon.img}
              types={pokemon.types}
              key={pokemon.name_clean}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};
export default PokedexPage;
