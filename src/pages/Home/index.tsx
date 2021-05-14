import React from 'react';
import Header from '../../components/Header';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
    </div>
  );
};

export default HomePage;
