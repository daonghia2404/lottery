import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" r="24.5" transform="matrix(-1 0 0 1 24.5 24.5)" fill="black" />
      <path
        d="M17.6863 17.1213C16.5147 15.9497 16.5147 14.0503 17.6863 12.8787C18.8578 11.7071 20.7573 11.7071 21.9289 12.8787L31.1213 22.0711C32.2929 23.2426 32.2929 25.1421 31.1213 26.3137C29.9497 27.4853 28.0502 27.4853 26.8787 26.3137L17.6863 17.1213Z"
        fill="white"
      />
      <path
        d="M17.7717 31.3524C16.6001 32.5239 16.6001 34.4234 17.7717 35.595C18.9433 36.7666 20.8427 36.7666 22.0143 35.595L31.2067 26.4026C32.3783 25.2311 32.3783 23.3316 31.2067 22.16C30.0351 20.9884 28.1356 20.9884 26.9641 22.16L17.7717 31.3524Z"
        fill="white"
      />
    </svg>
  );
};

export default Svg;
