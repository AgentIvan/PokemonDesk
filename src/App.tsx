import { useRoutes } from 'hookrouter';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './pages/NotFound';
import routes from './routes';

const App: React.FC = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
