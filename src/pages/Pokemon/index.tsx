import React from 'react';

export interface IPokemonProps {
  id?: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }: IPokemonProps) => {
  return <div>id: {id}</div>;
};

export default PokemonPage;
