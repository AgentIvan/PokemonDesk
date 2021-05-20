import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';
import TeamRocket from './assets/TeamRocket.png';
import s from './style.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.subTitle}>
            <span>The Rocket Team</span> has won this time.
          </div>
          <Button color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
