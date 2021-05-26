import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/useData';
import useDebounse from '../../hook/useDebounse';
import { IPokemonsResponse } from '../../interface/pokemons';
import IQuery from '../../interface/query';
import s from './style.module.scss';

export interface IPokedexPage {
  id?: string | number;
}

const PokedexPage: React.FC<IPokedexPage> = ({ id }: IPokedexPage) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });
  const debouncedValue = useDebounse(searchValue, 1000);
  const { data, isLoading, isError } = useData<IPokemonsResponse>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <Heading className={s.message}>Something wrong!</Heading>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <div className={s.inputStyle}>
          <Heading level="h3">Please input Pokemon Name</Heading>
          <input key="editor1" type="text" value={searchValue} onChange={handleSearchChange} />
          <p>
            {data?.total ? (
              <>
                {data.total}&nbsp;<b>Pokemons</b>&nbsp;for you to choose your favorite
              </>
            ) : (
              <>There is no one Pokemon</>
            )}
          </p>
        </div>
        {isLoading ? (
          <Heading className={s.message}>Is Loading...</Heading>
        ) : (
          <div className={s.content}>
            {data?.pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                attack={pokemon.stats.attack}
                defense={pokemon.stats.defense}
                img={pokemon.img}
                types={pokemon.types}
              />
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default PokedexPage;
