import React from 'react';

import TokenCard from '@/components/TokenCard';

import './TokenCardList.scss';

const TokenCardList = () => {
  return (
    <div className="TokenCardList">
      <div className="TokenCardList-wrapper">
        <div className="TokenCardList-list flex flex-wrap">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="TokenCardList-list-item">
              <TokenCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenCardList;
