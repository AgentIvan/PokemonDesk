import React from 'react';
import EmptyPage from './pages/EmptyPage';
import HomePage from './pages/Home';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}
export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <EmptyPage title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <EmptyPage title="Documentation" />,
  },
];

type IAccMenu = {
  [key: string]: () => JSX.Element;
};

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
