import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../routes';
import s from './style.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading level="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading level="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParalax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
