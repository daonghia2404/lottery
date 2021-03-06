import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.383 0.530589C17.0069 -0.176864 15.9931 -0.176863 15.617 0.530592L9.176 12.6465L1.69197 5.50264C0.990439 4.83299 -0.157915 5.45376 0.0181034 6.40749L3.18212 23.5512C3.26965 24.0255 3.68323 24.3697 4.16551 24.3697H13.9533H18.9616H28.7494C29.2317 24.3697 29.6452 24.0255 29.7328 23.5512L32.8968 6.40749C33.0728 5.45376 31.9245 4.83299 31.2229 5.50264L23.7954 12.5926L17.383 0.530589Z"
        fill="url(#paint0_linear_162_36650)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_162_36650"
          x1="16.4574"
          y1="0"
          x2="16.4574"
          y2="24.3696"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFEA2B" />
          <stop offset="0.625748" stop-color="#FFEA31" />
          <stop offset="1" stop-color="#CC7C05" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
