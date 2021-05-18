import { A } from 'hookrouter';
import React from 'react';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import s from './style.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pockemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, link, value }) => (
            <A key={id} href={link} className={s.menuLink}>
              {value}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
