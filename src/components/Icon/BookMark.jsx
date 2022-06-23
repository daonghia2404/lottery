import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 38V0H20.806V30.1964L0 38Z" fill="url(#paint0_linear_162_36541)" />
      <path d="M34 38V0H13.194V30.1964L34 38Z" fill="url(#paint1_linear_162_36541)" />
      <defs>
        <linearGradient id="paint0_linear_162_36541" x1="17" y1="0" x2="17" y2="38" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C919F4" />
          <stop offset="1" stop-color="#810795" />
        </linearGradient>
        <linearGradient id="paint1_linear_162_36541" x1="17" y1="0" x2="17" y2="38" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C919F4" />
          <stop offset="1" stop-color="#810795" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
