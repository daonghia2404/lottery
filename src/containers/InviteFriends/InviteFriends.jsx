import { dataStepInviteFriends } from '@/containers/InviteFriends/InviteFriends.data';
import React from 'react';

import './InviteFriends.scss';

const InviteFriends = () => {
  return (
    <div className="InviteFriends">
      <div className="container">
        <div className="InviteFriends-wrapper">
          <div className="InviteFriends-header flex items-center justify-between">
            <div className="InviteFriends-header-title">How to invite friends</div>
            <div className="InviteFriends-header-inviter flex items-center">
              My inviter:
              <span>78asd...dffiud</span>
              <strong>10%</strong>
            </div>
          </div>

          <div className="InviteFriends-main flex flex-wrap">
            {dataStepInviteFriends.map((item, index) => (
              <div key={index} className="InviteFriends-main-item">
                <div className="InviteFriends-item">
                  <div className="InviteFriends-item-step">Step {index + 1}</div>
                  <div className="InviteFriends-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="InviteFriends-item-title">{item.title}</div>
                  <div className="InviteFriends-item-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
