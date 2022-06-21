import React from 'react';
import classNames from 'classnames';

import ImageRibbonReward from '@/assets/images/image-ribbon-reward.png';
import ImageReward from '@/assets/images/image-reward.png';
import ImageRewardLottery from '@/assets/images/image-reward-lottery.png';

import './TicketsReward.scss';

const TicketsReward = ({ backgroundDaily, rules = [] }) => {
  return (
    <div className="TicketsReward">
      <div className="TicketsReward-wrapper">
        <div className="TicketsReward-header">
          <img src={ImageRibbonReward} alt="" className="TicketsReward-header-ribbon" />
          <div className="TicketsReward-header-info">
            <div className="TicketsReward-header-subtitle">TOTAL PRIZE</div>
            <div className="TicketsReward-header-title">$100,000,000</div>
          </div>
        </div>

        <div className="TicketsReward-body flex flex-wrap justify-between">
          <div
            className={classNames('TicketsReward-video flex items-center justify-center', {
              'background-daily': backgroundDaily,
            })}
          ></div>
          <div className="TicketsReward-reward flex items-center flex-wrap">
            <div className={classNames('TicketsReward-reward-image', { 'background-daily': backgroundDaily })}>
              <div className="TicketsReward-reward-title">LOTTERY ON BLOCK CHAIN</div>
              <img src={backgroundDaily ? ImageReward : ImageRewardLottery} alt="" />
            </div>
            <div className="TicketsReward-reward-info">
              <div className="TicketsReward-reward-title">WINNING RULE</div>
              <div className="TicketsReward-reward-list">
                {rules.map((item, index) => (
                  <div key={index} className="TicketsReward-reward-list-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="TicketsReward-content">
          <p>
            Limit receiving large rewards and release coins to the market so all bonuses will be paid out in 100 days
            (can use transfer and lock orders)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketsReward;
