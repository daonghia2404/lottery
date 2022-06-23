import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 15C0 13.8954 0.895431 13 2 13H8C9.10457 13 10 13.8954 10 15V30C10 31.1046 9.10457 32 8 32H2C0.89543 32 0 31.1046 0 30V15Z"
        fill="url(#paint0_linear_162_36657)"
      />
      <path
        d="M11 10C11 8.89543 11.8954 8 13 8H19C20.1046 8 21 8.89543 21 10V30C21 31.1046 20.1046 32 19 32H13C11.8954 32 11 31.1046 11 30V10Z"
        fill="url(#paint1_linear_162_36657)"
      />
      <path
        d="M22 18C22 16.8954 22.8954 16 24 16H30C31.1046 16 32 16.8954 32 18V30C32 31.1046 31.1046 32 30 32H24C22.8954 32 22 31.1046 22 30V18Z"
        fill="url(#paint2_linear_162_36657)"
      />
      <path
        d="M16 0L17.5047 1.92892L19.8042 2.76393L18.4347 4.79108L18.3511 7.23607L16 6.56L13.6489 7.23607L13.5653 4.79108L12.1958 2.76393L14.4953 1.92892L16 0Z"
        fill="url(#paint3_linear_162_36657)"
      />
      <defs>
        <linearGradient id="paint0_linear_162_36657" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEA2B" />
          <stop offset="0.625748" stop-color="#FFEA31" />
          <stop offset="1" stop-color="#CC7C05" />
        </linearGradient>
        <linearGradient id="paint1_linear_162_36657" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEA2B" />
          <stop offset="0.625748" stop-color="#FFEA31" />
          <stop offset="1" stop-color="#CC7C05" />
        </linearGradient>
        <linearGradient id="paint2_linear_162_36657" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEA2B" />
          <stop offset="0.625748" stop-color="#FFEA31" />
          <stop offset="1" stop-color="#CC7C05" />
        </linearGradient>
        <linearGradient id="paint3_linear_162_36657" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEA2B" />
          <stop offset="0.625748" stop-color="#FFEA31" />
          <stop offset="1" stop-color="#CC7C05" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
