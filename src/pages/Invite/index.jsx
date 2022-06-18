import React from 'react';

import BannerInvite from '@/containers/BannerInvite';
import InviteFriends from '@/containers/InviteFriends';
import ReferralReward from '@/containers/ReferralReward';

const Invite = () => {
  return (
    <div className="Invite">
      <BannerInvite />
      <InviteFriends />
      <ReferralReward />
    </div>
  );
};

export default Invite;
