import React from 'react';

import TokenCard from '@/components/TokenCard';

import { dataReferralCardList } from './ReferralCardList.data';
import './ReferralCardList.scss';

const ReferralCardList = () => {
  return (
    <div className="ReferralCardList">
      <div className="ReferralCardList-wrapper">
        <div className="ReferralCardList-list flex">
          {dataReferralCardList.map((item) => (
            <div key={item} className="ReferralCardList-list-item">
              <TokenCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralCardList;
