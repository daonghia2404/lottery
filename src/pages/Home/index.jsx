import React from 'react';

import BannerEvents from '@/containers/BannerEvents';
import TokenCardList from '@/containers/TokenCardList';
import AcceptCookie from '@/containers/AcceptCookie/AcceptCookie';
import LastestData from '@/containers/LastestData';

const Home = () => {
  return (
    <div className="Home">
      <BannerEvents />
      <TokenCardList />
      <LastestData />
      <div style={{ marginBottom: '4rem' }}>
        <AcceptCookie />
      </div>
    </div>
  );
};

export default Home;
