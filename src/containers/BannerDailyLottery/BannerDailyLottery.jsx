import React, { useState } from 'react';
import classNames from 'classnames';

import ImageRibbon from '@/assets/images/image-ribbon.png';
import ImageRibbonYellow from '@/assets/images/image-ribbon-yellow.png';
import CountdownTimer from '@/components/CountdownTimer';
import Button from '@/components/Button';
import ModalLotteryResults from '@/containers/ModalLotteryResults';
import ModalBuyLottery from '@/containers/ModalBuyLottery';

import './BannerDailyLottery.scss';

const BannerDailyLottery = ({ price, title, subtitle, showCountdown, backgroundDaily }) => {
  const [visibleLotteryResultsModal, setVisibleLotteryResultsModal] = useState(false);
  const [visibleBuyLotteryModal, setVisibleBuyLotteryModal] = useState(false);

  const handleOpenBuyLotteryModal = () => {
    setVisibleBuyLotteryModal(true);
  };
  const handleCloseBuyLotteryModal = () => {
    setVisibleBuyLotteryModal(false);
  };

  const handleOpenLotteryResultsModal = () => {
    setVisibleLotteryResultsModal(true);
  };
  const handleCloseLotteryResultsModal = () => {
    setVisibleLotteryResultsModal(false);
  };

  const handleBuyTickets = () => {
    handleCloseBuyLotteryModal();
    handleOpenLotteryResultsModal();
  };

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
            <Button className="yellow" title="BUY TICKET NOW" onClick={handleOpenBuyLotteryModal} />
          </div>
        </div>
      </div>

      <ModalLotteryResults visible={visibleLotteryResultsModal} onClose={handleCloseLotteryResultsModal} />

      <ModalBuyLottery visible={visibleBuyLotteryModal} onClose={handleCloseBuyLotteryModal} onBuy={handleBuyTickets} />
    </div>
  );
};

export default BannerDailyLottery;
