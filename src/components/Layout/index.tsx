import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

export default Layout;
