import React from 'react';

import BannerReferral from '@/containers/BannerReferral';
import ListMembersData from '@/containers/ListMembersData';
import InviteFriends from '@/containers/InviteFriends';
import ReferralReward from '@/containers/ReferralReward';
import ReferralCardList from '@/containers/ReferralCardList';

const Referral = () => {
  return (
    <div className="Referral">
      <BannerReferral />
      <ReferralCardList />
      <div className="container">
        <div className="Referral-wrapper">
          <ListMembersData />
          <InviteFriends />
          <ReferralReward />
        </div>
      </div>
    </div>
  );
};

export default Referral;
