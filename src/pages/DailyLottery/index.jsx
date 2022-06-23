import React from 'react';

import BannerDailyLottery from '@/containers/BannerDailyLottery';
import HowToPlay from '@/containers/HowToPlay';
import TicketsReward from '@/containers/TicketsReward';
import MyTickets from '@/containers/MyTickets';

const DailyLottery = () => {
  const winningRulesList = [
    'Win 3 numbers: co-winner (5%): $600,000.00',
    'Winning 4 numbers: co-funding (10%): $1,200.000.00',
    'Win 5 numbers: co-funding (15%): $1,800,000.00',
    'Win 6 numbers: co-winner (20%): $2,400,000.00',
    'Win 7 numbers: co-fund (40%): $4,800,000.00',
    'Ticket price: 1 USD (~ 1 MGC)',
    'Referral Commission: 1% for 7 levels',
  ];

  return (
    <div className="DailyLottery">
      <BannerDailyLottery
        price="$100,000,000"
        title="LOTTERY JACKPOT"
        subtitle="NET DRAW IN"
        showCountdown
        backgroundDaily
      />
      <TicketsReward backgroundDaily rules={winningRulesList} />
      <MyTickets backgroundDaily />
      <HowToPlay backgroundDaily />
    </div>
  );
};

export default DailyLottery;
