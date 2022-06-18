import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9977 18C14.865 18 18 14.865 18 10.9977C18 7.13041 14.865 3.99536 10.9977 3.99536C7.13039 3.99536 3.99534 7.13041 3.99534 10.9977C3.99534 14.865 7.13039 18 10.9977 18Z"
        stroke="url(#paint0_linear_20_182)"
        stroke-miterlimit="10"
      />
      <path
        opacity="0.3"
        d="M10.9976 16.3514C13.9545 16.3514 16.3514 13.9544 16.3514 10.9976C16.3514 8.04078 13.9545 5.6438 10.9976 5.6438C8.04081 5.6438 5.64384 8.04078 5.64384 10.9976C5.64384 13.9544 8.04081 16.3514 10.9976 16.3514Z"
        fill="url(#paint1_linear_20_182)"
      />
      <path d="M7.5 13.4998L12.5 6.99976H10L7 13.4998H7.5Z" fill="#BD4768" />
      <path d="M12.5 6.99976L7.5 13.4998H9.5L11 9.49976L12.5 10.9998L13.5 9.49976L12.5 6.99976Z" fill="#BC264A" />
      <path d="M12.5 12.4998H10.5L11 10.9998H12L12.5 12.4998Z" fill="#BD4768" />
      <path d="M15 13.4998H12.5L11.5 10.4998L13.5 9.49976L15 13.4998Z" fill="#D54F74" />
      <path d="M11.5 10.4998L11 9.49976L12 10.4998H11.5Z" fill="#BD4768" />
      <defs>
        <linearGradient
          id="paint0_linear_20_182"
          x1="3.52434"
          y1="10.9977"
          x2="18.4741"
          y2="10.9977"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#B64567" />
          <stop offset="0.41" stop-color="#B84D4D" />
          <stop offset="1" stop-color="#BD466A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_20_182"
          x1="5.64384"
          y1="10.9976"
          x2="16.3546"
          y2="10.9976"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#B6456E" />
          <stop offset="0.41" stop-color="#B84D80" />
          <stop offset="1" stop-color="#BD4646" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
