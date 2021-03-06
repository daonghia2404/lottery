import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.6273 12.4254C25.5677 12.32 25.4853 12.2292 25.3863 12.1596L21.9748 9.73696L17.0306 6.17097C16.8688 6.05962 16.677 6 16.4805 6C16.2841 6 16.0923 6.05962 15.9305 6.17097L10.9863 9.73696L7.56864 12.2091C7.47657 12.2777 7.39888 12.3638 7.33997 12.4624C7.1243 12.6894 7.00281 12.9898 7.00006 13.303V25.4718C7.00812 25.7943 7.1419 26.1008 7.37284 26.3259C7.60377 26.5511 7.91357 26.6771 8.23611 26.677H13.2545C13.577 26.6771 13.8868 26.5511 14.1177 26.3259C14.3487 26.1008 14.4824 25.7943 14.4905 25.4718V18.1359H18.6065V25.4718C18.6146 25.7943 18.7484 26.1008 18.9793 26.3259C19.2103 26.5511 19.5201 26.6771 19.8426 26.677H24.7559C25.0784 26.6771 25.3882 26.5511 25.6191 26.3259C25.8501 26.1008 25.9839 25.7943 25.9919 25.4718V13.2535C25.9794 12.9413 25.8491 12.6454 25.6273 12.4254Z"
        fill="url(#paint0_linear_15_28)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15_28"
          x1="16.4496"
          y1="25.8674"
          x2="16.4805"
          y2="9.09422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#059231" />
          <stop offset="1" stop-color="#1EE15B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
