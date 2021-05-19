import cn from 'classnames';
import React from 'react';
import Heading from '../Heading';
import ImageNotFound from './assets/ImageNotFound.png';
import s from './style.module.scss';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  img: string | null;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, attack, defense, types, img }: IPokemonCard) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading
          level={4}
          //   size='xs'
          className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span className={cn(s.label, s.colorWrap, s[type as keyof typeof s])}>{type}</span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s.colorWrap, s[types[0] as keyof typeof s])}>
        {img ? <img src={img} alt={name} /> : <img src={ImageNotFound} className={s.notFound} alt={`No ${name}`} />}
      </div>
    </div>
  );
};

export default PokemonCard;
