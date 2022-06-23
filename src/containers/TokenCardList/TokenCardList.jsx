import React from 'react';

import TokenCard from '@/components/TokenCard';

import { dataTokenCardList } from './TokenCardList.data';
import './TokenCardList.scss';

const TokenCardList = () => {
  return (
    <div className="TokenCardList">
      <div className="TokenCardList-wrapper">
        <div className="TokenCardList-list flex">
          {dataTokenCardList.map((item) => (
            <div key={item} className="TokenCardList-list-item">
              <TokenCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenCardList;
