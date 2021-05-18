import React from 'react';
import Header from '../../components/Header';
import s from './style.module.scss';

interface IProps {}

const PokedexPage: React.FC<IProps> = () => {
  return (
    <div className={s.root}>
      <Header />
      PokedexPage
    </div>
  );
};
export default PokedexPage;
