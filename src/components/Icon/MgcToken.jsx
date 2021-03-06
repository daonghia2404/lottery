import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.2 28.4C22.9379 28.4 28.4 22.9379 28.4 16.2C28.4 9.46213 22.9379 4 16.2 4C9.46213 4 4 9.46213 4 16.2C4 22.9379 9.46213 28.4 16.2 28.4Z"
        stroke="url(#paint0_linear_15_47)"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path d="M13.3716 11.8506H10.9425V20.6204H12.1571L13.3716 11.8506Z" fill="#33B44B" />
      <path d="M16.2273 16.5227L15.5379 19.8326L12.8627 15.5106L13.3715 11.8506L16.2273 16.5227Z" fill="#5EBB55" />
      <path d="M13.6342 20.6206H12.1023L12.8847 15.3467L13.6342 16.7582V20.6206Z" fill="#0F7D3F" />
      <path d="M15.538 19.8326H16.9166L21.441 11.8506H19.0065L15.538 19.8326Z" fill="#5EBB55" />
      <path d="M21.4904 20.6204H20.1665L18.7331 16.5774L21.4412 11.8506L21.4904 20.6204Z" fill="#1FAD4B" />
      <path d="M18.7713 20.6207H20.1664L18.7276 16.5449L18.7713 20.6207Z" fill="#5EBB55" />
      <path d="M19.0065 11.8506L15.538 19.8326L16.2273 16.468L19.0065 11.8506Z" fill="#33B44B" />
      <path
        opacity="0.3"
        d="M16.2 25.5277C21.3516 25.5277 25.5278 21.3515 25.5278 16.1999C25.5278 11.0483 21.3516 6.87207 16.2 6.87207C11.0484 6.87207 6.87222 11.0483 6.87222 16.1999C6.87222 21.3515 11.0484 25.5277 16.2 25.5277Z"
        fill="url(#paint1_linear_15_47)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15_47"
          x1="3.17937"
          y1="16.2"
          x2="29.2261"
          y2="16.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#45B650" />
          <stop offset="0.41" stop-color="#50B84D" />
          <stop offset="1" stop-color="#67BD46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_15_47"
          x1="6.87222"
          y1="16.1999"
          x2="25.5333"
          y2="16.1999"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#45B650" />
          <stop offset="0.41" stop-color="#50B84D" />
          <stop offset="1" stop-color="#67BD46" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
