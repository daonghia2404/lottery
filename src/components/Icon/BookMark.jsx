import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 38V0H20.806V30.1964L0 38Z" fill="#D9D9D9" />
      <path d="M34 38V0H13.194V30.1964L34 38Z" fill="#D9D9D9" />
    </svg>
  );
};

export default Svg;
