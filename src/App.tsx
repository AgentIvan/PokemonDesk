import { useRoutes } from 'hookrouter';
import React from 'react';
import NotFoundPage from './pages/NotFound';
import routes from './routes';

const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
};

export default App;
