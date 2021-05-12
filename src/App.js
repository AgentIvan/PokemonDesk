import React from 'react';
import cn from 'classnames';

import './custom.css';
import s from './App.module.scss';

const App = () => {
  return <div className={cn(s.header, 'color')}>Yes, we Did It! This is App Component!</div>;
};

export default App;
