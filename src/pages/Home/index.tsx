import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading ';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import s from './style.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading level="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading level="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => {}} size="small">
            See pokemons
          </Button>
          <Button onClick={() => {}} color="yellow">
            See pokemons
          </Button>
          <Button onClick={() => {}} size="large">
            See pokemons
          </Button>
        </div>
        <div className={s.contentParalax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
