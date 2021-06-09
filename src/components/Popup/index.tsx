import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

interface IPopupProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
}

const Popup: React.FC<IPopupProps> = ({ children, show }: IPopupProps) => {
  return (
    <div className={cn(s.popupOverlay, show ? '' : s.hide)}>
      <div className={s.popup}>{children}</div>
    </div>
  );
};

export default Popup;
