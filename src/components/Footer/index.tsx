import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapContent}>
        <div className={cn(s.label)}>
          <a className={cn(s.link)} href="https://reactmarathon.com/">
            React Marathon
          </a>
        </div>
        <div className={cn(s.label)}>
          Make with{' '}
          <span role="img" aria-label="love" aria-labelledby="">
            ❤️
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
