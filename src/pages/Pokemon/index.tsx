import React from 'react';
import useData from '../../hook/useData';
import { IPokemon } from '../../interface/pokemons';

export interface IPokemonProps {
  id?: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }: IPokemonProps) => {
  const { data, isLoading, isError } = useData<IPokemon>('getPokemon', { id });
  if (isLoading) return <div>Is Loading...</div>;
  if (isError) return <div>Something is wrong...</div>;
  return <div>Name: {data?.name}</div>;
};

export default PokemonPage;
