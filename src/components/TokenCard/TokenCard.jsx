import React from 'react';

import Icon, { EIconName } from '@/components/Icon';

import './TokenCard.scss';

const TokenCard = () => {
  return (
    <div className="TokenCard">
      <div className="TokenCard-header">What is MGC</div>
      <div className="TokenCard-body">
        <div className="TokenCard-body-bookmark">
          <Icon name={EIconName.BookMark} />
        </div>
        <div className="TokenCard-body-icon">
          <Icon name={EIconName.MgcToken} />
        </div>
        <div className="TokenCard-body-title">MGC</div>
        <div className="TokenCard-body-description">
          MGC is a lottery page base on block chain ..... ..........................
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
