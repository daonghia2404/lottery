import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 22 25">
      <path
        class="st0"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M20.1,24.1c1.2-1.2,1.2-3.1,0-4.2L13,12.7L20,5.6c1.2-1.2,1.2-3.1,0-4.2c-1.2-1.2-3.1-1.2-4.2,0l-9.2,9.2
	C6.2,11,5.9,11.5,5.8,12V2.5C5.8,1.1,4.7,0,3.3,0h-1C0.9,0-0.2,1.1-0.2,2.5v20c0,1.4,1.1,2.5,2.5,2.5h1c1.4,0,2.5-1.1,2.5-2.5v-9.1
	c0.1,0.5,0.4,1,0.8,1.4l0,0c0,0,0.1,0.1,0.1,0.1l9.2,9.2C17.1,25.3,18.9,25.3,20.1,24.1z"
      />
    </svg>
  );
};

export default Svg;
