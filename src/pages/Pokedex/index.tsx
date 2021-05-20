/* eslint-disable camelcase */
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
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
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        {id && <>id:{id}</>}
        <div className={s.content}>
          {POKEMONS.map((pokemonData) => (
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
      <Footer />
    </div>
  );
};
export default PokedexPage;
