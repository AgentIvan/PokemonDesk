import React from 'react';

export interface IProps {
  name?: string;
}

export const Hello: React.FC<IProps> = ({ name }: IProps) => {
  if (name) {
    return <h1>Hello, {name}!</h1>;
  }
  return <span>Hey, stranger</span>;
};

export default Hello;
