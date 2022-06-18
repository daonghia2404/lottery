import React from 'react';

import ImageCash from '@/assets/images/image-cash.png';
import ImageChart from '@/assets/images/image-chart.png';

import './ReferralReward.scss';

const ReferralReward = () => {
  return (
    <div className="ReferralReward">
      <div className="container">
        <div className="ReferralReward-wrapper">
          <div className="ReferralReward-title">REFERRAL REWARD SYSEM</div>
          <div className="ReferralReward-main flex flex-wrap">
            <div className="ReferralReward-main-item">
              <div className="ReferralReward-main-title">REFERRAL REWARDS</div>
              <div className="ReferralReward-main-image" style={{ maxWidth: '18rem' }}>
                <img src={ImageCash} alt="" />
              </div>
              <div className="ReferralReward-main-text">
                Users who introduce new members to join the Airdrop will receive 5% of the total MGC of all the users
                they refer in 7 levels.
              </div>
              <div className="ReferralReward-main-text">
                This amount of MGC is transferred and locked and unlocked after 100 days from the date of receipt
              </div>
            </div>
            <div className="ReferralReward-main-item">
              <div className="ReferralReward-main-text" style={{ maxWidth: '32rem' }}>
                Users who introduce new members to join the Airdrop will receive 5% of the total MGC of all the users
                they refer in 7 levels.
              </div>
              <div className="ReferralReward-main-image">
                <img src={ImageChart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralReward;
