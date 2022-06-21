import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 17 25">
      <path
        fill={color}
        d="M15.2,19.4c1.2,1.2,1.2,3.1,0,4.2c-1.2,1.2-3.1,1.2-4.2,0l-9.2-9.2c-1.2-1.2-1.2-3.1,0-4.2C2.9,9,4.8,9,6,10.2
	L15.2,19.4z"
      />
      <path
        fill={color}
        d="M15.1,5.1c1.2-1.2,1.2-3.1,0-4.2c-1.2-1.2-3.1-1.2-4.2,0l-9.2,9.2c-1.2,1.2-1.2,3.1,0,4.2
	c1.2,1.2,3.1,1.2,4.2,0L15.1,5.1z"
      />
    </svg>
  );
};

export default Svg;
