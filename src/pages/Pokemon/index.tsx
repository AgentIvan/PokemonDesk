import React from 'react';
import Heading from '../../components/Heading/index';
import useData from '../../hook/useData';
import { IPokemon } from '../../interface/pokemons';
import s from './style.module.scss';

// import Loader from '../../components/Loader/index';

export interface IProps {
  id?: string | number;
}

const PokemonPage: React.FC<IProps> = ({ id }: IProps) => {
  const { data: pokemon, isLoading, isError } = useData<IPokemon>('getPokemon', { id });

  return (
    <div className={s.root}>
      {isLoading && <div>Is Loading...</div>}
      {isError && <div>Something is wrong...</div>}
      {pokemon && (
        <div className={s.pokemonCard}>
          <div className={s.pokemonImage}>
            <img className={s.pokemonPic} src={pokemon.img || undefined} alt="pokemon" />
            <div className={s.pokemonAbilities}>
              <div className={s.labelWrap}>
                {pokemon.types.map((type) => (
                  <span key={type} className={s.label}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.pokemonStats}>
            <div className={s.pokemonInfo}>
              <Heading className={s.pokemonName} level="h3">
                {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              </Heading>
              <div className={s.pokemonGenAndCircle}>
                <Heading className={s.pokemonGeneration} level="h4">
                  Generation 1
                </Heading>
                <div className={s.pokemonCircle}>
                  <Heading level="h6" className={s.pokemonState}>
                    578
                  </Heading>
                </div>
              </div>
            </div>
            <div className={s.pokemonAbilitiesText}>
              <Heading level="h6" className={s.pokemonState}>
                Abilities
              </Heading>
              <Heading level="h6" className={s.pokemonStateText}>
                Overgrow - Chlorophyll
              </Heading>
            </div>
            <div className={s.pokemonHealthAndExp}>
              <div className={s.pokemonHealth}>
                <Heading level="h6" className={s.pokemonState}>
                  Healthy Points
                </Heading>

                <Heading level="h6" className={s.pokemonNums}>
                  1 000 000
                </Heading>
                <div className={s.pokemonProgressBar}>
                  <div
                    className={s.pokemonProgressBarReady}
                    style={{
                      width: '80%',
                      background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
                    }}
                  />
                </div>
              </div>
              <div className={s.pokemonExp}>
                <Heading level="h6" className={s.pokemonState}>
                  Experience
                </Heading>

                <Heading level="h6" className={s.pokemonNums}>
                  1 000 000
                </Heading>
                <div className={s.pokemonProgressBar}>
                  <div
                    className={s.pokemonProgressBarReady}
                    style={{
                      width: '96%',
                      background: 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={s.pokemonDefAndAttack}>
              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>49</span>
                </dd>
                <dt>Defence</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>165</span>
                </dd>
                <dt>Attack</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>130</span>
                </dd>
                <dt>Sp Attack</dt>
              </dl>

              <dl className={s.pokemonDefAndAttackItem}>
                <dd>
                  <span>271</span>
                </dd>
                <dt>Sp Defence</dt>
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
