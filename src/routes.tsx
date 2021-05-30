/* eslint-disable react/display-name */
import React, { PropsWithChildren } from 'react';
import EmptyPage from './pages/Empty';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import PokemonPage from './pages/Pokemon';

export interface IDefaultProps {
  id?: string | number;
}

interface IMenu {
  title: string;
  link: string;
  component: (props: PropsWithChildren<IDefaultProps>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

export const SECOND_MENU: IMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: IDefaultProps) => <PokemonPage id={id} />,
  },
];

type IAccMenu = {
  [key: string]: (props: PropsWithChildren<IDefaultProps>) => JSX.Element;
};

const routes = [...GENERAL_MENU, ...SECOND_MENU].reduce((acc: IAccMenu, item: IMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
