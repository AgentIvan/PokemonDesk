import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface IProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color: 'yellow' | 'green';
  fullWidth: boolean;
  size: 'base' | 'small';
}

const Button: React.FC<IProps> = ({ children, onClick, color = 'green', size = 'base', fullWidth = false }: IProps) => {
  // eslint-disable-next-line no-console
  console.log(color, color === 'yellow', size, fullWidth);
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.colorYellow]: color === 'yellow',
        [s.small]: size === 'small',
        [s.fullWidth]: fullWidth,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
