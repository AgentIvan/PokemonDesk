import React from 'react';
import Header from '../../components/Header';
import s from './style.module.scss';

const EmptyPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>This is Empty Page!</div>
    </div>
  );
};

export default EmptyPage;
