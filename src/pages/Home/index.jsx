import React from 'react';

import BannerEvents from '@/containers/BannerEvents';
import TokenCardList from '@/containers/TokenCardList';
import AcceptCookie from '@/containers/AcceptCookie/AcceptCookie';

const Home = () => {
  return (
    <div className="Home">
      <BannerEvents />
      <TokenCardList />
      <div style={{ marginBottom: '4rem' }}>
        <AcceptCookie />
      </div>
    </div>
  );
};

export default Home;
