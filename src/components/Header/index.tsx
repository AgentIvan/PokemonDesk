import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import React from 'react';
import { GENERAL_MENU } from '../../routes';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import s from './style.module.scss';

const Header = () => {
  const path = usePath();
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pockemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ link, title }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
