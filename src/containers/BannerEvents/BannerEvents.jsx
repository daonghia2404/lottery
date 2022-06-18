import React from 'react';

import Carousels from '@/components/Carousels';

import { dataBannerEvents } from './BannerEvents.data';
import './BannerEvents.scss';

const BannerEvents = () => {
  return (
    <div className="BannerEvents">
      <Carousels
        dots={false}
        variableWidth
        slidesToShow={1}
        slidesPerRow={1}
        autoplay
        responsive={[
          {
            breakpoint: 575,
            settings: {
              variableWidth: false,
              adaptiveHeight: true,
            },
          },
        ]}
      >
        {dataBannerEvents.map((item, index) => (
          <div key={index} className="BannerEvents-item" style={{ width: item.width }}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default BannerEvents;
