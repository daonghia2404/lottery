import React from 'react';

import Icon, { EIconName } from '@/components/Icon';

import './TokenCard.scss';

const TokenCard = ({ image, title, price, description }) => {
  return (
    <div className="TokenCard">
      <div className="TokenCard-header">{title}</div>
      <div className="TokenCard-body">
        <div className="TokenCard-body-bookmark">
          <Icon name={EIconName.BookMark} />
        </div>
        {image && (
          <div className="TokenCard-body-icon">
            <img src={image} alt="" />
          </div>
        )}

        <div className="TokenCard-body-title">{price}</div>
        <div className="TokenCard-body-description">{description}</div>
      </div>
    </div>
  );
};

export default TokenCard;
