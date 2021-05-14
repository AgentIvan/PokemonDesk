import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';

const App: React.FC = () => {
  return <div className={cn(s.header, 'color')}>Yes, we Did It! This Marathon!</div>;
};

export default App;
