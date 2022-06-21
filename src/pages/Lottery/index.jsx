import React from 'react';

import BannerDailyLottery from '@/containers/BannerDailyLottery';
import HowToPlay from '@/containers/HowToPlay';
import TicketsReward from '@/containers/TicketsReward';
import MyTickets from '@/containers/MyTickets';

const Lottery = () => {
  const winningRulesList = [
    'Buy 2 numbers: Win X90',
    'Buy 3 numbers: Win X900',
    'Buy 4 numbers: Win X9000',
    'Buying limit: $ 0.1 - $ 1,000',
    'Referral commissions: 1% for 7 levels',
    'Bonus for Holder: 3%',
  ];

  return (
    <div className="Lottery">
      <BannerDailyLottery price="$100,000,000" title="LOTTERY" />
      <TicketsReward rules={winningRulesList} />
      <MyTickets />
      <HowToPlay />
    </div>
  );
};

export default Lottery;
