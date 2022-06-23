import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 30C7.5 30.8284 8.17157 31.5 9 31.5C9.82843 31.5 10.5 30.8284 10.5 30L7.5 30ZM9 -1.90735e-06L0.339745 15L17.6603 15L9 -1.90735e-06ZM10.5 30L10.5 13.5L7.5 13.5L7.5 30L10.5 30Z"
        fill="#79EF35"
      />
    </svg>
  );
};

export default Svg;
