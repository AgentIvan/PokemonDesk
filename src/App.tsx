import { useRoutes } from 'hookrouter';
import React from 'react';
import routes from './routes';

const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  return routeResult; // || <NotFoundPage />;
};

export default App;
