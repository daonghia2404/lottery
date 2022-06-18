import React from 'react';
import { Link } from '@reach/router';

import ImageBannerReferral from '@/assets/images/image-banner-invite.png';
import Button from '@/components/Button';

import './BannerReferral.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { copyText } from '@/utils/functions';

const BannerReferral = () => {
  return (
    <div className="BannerReferral">
      <div className="BannerReferral-referral-btn">
        <Button title="Referral Terms" />
      </div>
      <div className="container">
        <div className="BannerReferral-wrapper flex items-center justify-between">
          <div className="BannerReferral-wrapper-item">
            <div className="BannerReferral-info">
              <div className="BannerReferral-info-title">REFERRAL</div>
              <div className="BannerReferral-info-description">Refer a friend and get reward toghter up to 7%</div>
              <div className="BannerReferral-link">
                <div className="BannerReferral-link-title">My Referral Link</div>
                <div className="BannerReferral-link-value flex items-center">
                  <span>https://mgc.game?ref=ad78545saff4qqfas...</span>
                  <Icon
                    name={EIconName.Copy}
                    color={EIconColor.GORSE}
                    onClick={() => copyText('https://mgc.game?ref=ad78545saff4qqfas...')}
                  />
                </div>
              </div>
              <div className="BannerReferral-create-link flex items-center">
                Create new link
                <Icon name={EIconName.CirclePlus} />
              </div>
              <div className="BannerReferral-info-btn flex justify-center">
                <Button className="yellow" title="CLAIM REWARD" />
              </div>
            </div>
          </div>
          <div className="BannerReferral-wrapper-item">
            <div className="BannerReferral-image">
              <img src={ImageBannerReferral} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerReferral;
