import React from 'react';
import { Link } from '@reach/router';

import ImageBannerInvite from '@/assets/images/image-banner-invite.png';
import Button from '@/components/Button';

import './BannerInvite.scss';

const BannerInvite = () => {
  return (
    <div className="BannerInvite">
      <div className="BannerInvite-referral-btn">
        <Button title="Referral Terms" />
      </div>
      <div className="container">
        <div className="BannerInvite-wrapper flex items-center justify-between">
          <div className="BannerInvite-wrapper-item">
            <div className="BannerInvite-info">
              <div className="BannerInvite-info-title">Invite your friends. Earn Cryptocurrency together</div>
              <div className="BannerInvite-info-description">
                Earn up to <span>20%</span> from friends’ swap commission on MGC GAME <span>5%</span> from their
                earninfs on Farms & Launchpools{' '}
              </div>
              <Link to="/" className="BannerInvite-info-description">
                Read more
              </Link>
              <div className="BannerInvite-info-btn flex">
                <Button className="yellow" title="Create Referral Code Now" />
              </div>
            </div>
          </div>
          <div className="BannerInvite-wrapper-item">
            <div className="BannerInvite-image">
              <img src={ImageBannerInvite} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerInvite;
