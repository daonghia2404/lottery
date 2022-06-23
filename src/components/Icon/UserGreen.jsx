import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5001 15.8276C17.8707 15.8276 21.4139 12.2845 21.4139 7.91379C21.4139 3.54313 17.8707 0 13.5001 0C9.12941 0 5.58629 3.54313 5.58629 7.91379C5.58629 12.2845 9.12941 15.8276 13.5001 15.8276ZM5.76564 14.8226C2.30626 16.953 0 20.7752 0 25.136C0 26.786 0.330155 28.3588 0.928005 29.7921H26.072C26.6698 28.3588 27 26.786 27 25.136C27 20.7752 24.6937 16.953 21.2344 14.8226C19.4463 17.132 16.6468 18.6188 13.5 18.6188C10.3532 18.6188 7.55373 17.132 5.76564 14.8226Z"
        fill="url(#paint0_linear_162_45549)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_162_45549"
          x1="13.5"
          y1="0"
          x2="13.5"
          y2="29.7921"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9AFF35" />
          <stop offset="1" stop-color="#19BE34" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
