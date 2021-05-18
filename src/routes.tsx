import React from 'react';
import EmptyPage from './pages/EmptyPage';
import HomePage from './pages/Home';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <EmptyPage />,
  // '/about': () => <AboutPage />,
  // '/products': () => <ProductOverview />,
  // '/products/:id': ({id}) => <ProductDetails id={id} />
};

export default routes;
