import React from 'react';

import s from './style.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: './#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '',
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
            <a key={id} href={link} className={s.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
