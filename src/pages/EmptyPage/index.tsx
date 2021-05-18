import React from 'react';
import Header from '../../components/Header';
import s from './style.module.scss';

interface IProps {
  title?: string;
}

const EmptyPage: React.FC<IProps> = ({ title }: IProps) => {
  return (
    <div className={s.root}>
      <Header />
      <div>This is Empty Page for {title}!</div>
    </div>
  );
};

export default EmptyPage;
