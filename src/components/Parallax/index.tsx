import React from 'react';

import s from './style.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  return (
    <div className={s.root}>
      <div className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={s.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={s.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div className={s.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={s.pikachu}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
