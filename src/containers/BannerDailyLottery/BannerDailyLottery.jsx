import React from 'react';

import ImageRibbon from '@/assets/images/image-ribbon.png';
import ImageRibbonYellow from '@/assets/images/image-ribbon-yellow.png';
import CountdownTimer from '@/components/CountdownTimer';
import Button from '@/components/Button';

import './BannerDailyLottery.scss';
import classNames from 'classnames';

const BannerDailyLottery = ({ price, title, subtitle, showCountdown, backgroundDaily }) => {
  return (
    <div className={classNames('BannerDailyLottery', { 'background-daily': backgroundDaily })}>
      <div className="container">
        <div className="BannerDailyLottery-wrapper flex flex-col items-center justify-center text-center">
          <div className="BannerDailyLottery-price">{price}</div>
          <div className="BannerDailyLottery-title">
            <img src={backgroundDaily ? ImageRibbon : ImageRibbonYellow} alt="" />
            <span>{title}</span>
          </div>
          {subtitle && <div className="BannerDailyLottery-subtitle">{subtitle}</div>}
          {showCountdown && (
            <div className="BannerDailyLottery-description">
              <CountdownTimer />
            </div>
          )}

          <div className="BannerDailyLottery-btn">
            <Button className="yellow" title="BUY TICKET NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDailyLottery;
