import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.55649 0.00178801C7.50321 0.000574443 7.45105 0 7.40004 0L7.40822 0.0105214C7.2135 0.026746 7.01932 0.0616153 6.82624 0.114298C9.436 1.49209 10.9264 6.5909 10.2283 12.3655C9.54648 18.006 7.00119 22.4343 4.2291 23.1907C4.55146 23.3609 4.89089 23.4743 5.24538 23.5252C5.48066 23.559 5.71607 23.5643 5.95065 23.5426C5.97444 23.5511 6.00442 23.5556 6.04107 23.5556C6.94707 23.5556 8.04223 23.1553 8.04223 23.1553C10.118 22.6496 21.8958 20.3846 21.8958 20.3846L21.898 20.3767C22.8968 20.1368 23.9899 18.674 24.5315 16.7249C25.0734 14.7752 24.8914 12.9576 24.1589 12.2372L24.1607 12.2308C20.2348 8.45585 12.4735 1.63078 11.024 0.905989C9.93808 0.363041 8.95386 0.125137 8.1475 0.0399393C8.1269 0.0365399 8.10624 0.0333527 8.08553 0.0303789C7.90912 0.00504859 7.73264 -0.00427737 7.55649 0.00178801ZM1.72463 11.4528C2.45139 5.93652 4.83868 1.62367 7.22886 1.28996C6.93469 1.09279 6.61901 0.967824 6.28428 0.923724C3.71563 0.585308 0.997537 5.13673 0.213254 11.0896C-0.57103 17.0425 0.875485 22.1426 3.44414 22.481C3.63254 22.5058 3.82175 22.5044 4.01094 22.4779C2.04774 21.1621 1.04255 16.6299 1.72463 11.4528ZM25.0667 12.6838C25.5197 14.0427 25.5149 15.421 25.0667 17.2137C24.6137 19.0256 23.2547 20.3846 22.8018 20.3846C22.6049 20.3846 23.3804 20.4738 24.2992 20.5795C25.0708 20.6683 25.9434 20.7687 26.4259 20.8376C26.8787 20.8376 27.7847 19.9316 28.2376 18.1197C28.9059 15.4465 28.2376 14.4957 27.7849 14.0427L25.0667 12.6838ZM22.3488 20.8376L20.0838 21.2906C20.143 21.4683 20.2394 21.6878 20.3566 21.9546C20.5382 22.368 20.7696 22.8949 20.9898 23.5556C21.1615 24.0709 20.5599 24.7083 19.8794 25.4292C19.1242 26.2293 18.2718 27.1323 18.2718 28.0855H22.3488C22.3488 26.2735 24.1607 22.8006 25.0667 21.2906L22.3488 20.8376ZM8.99097 12.3103C8.36229 16.5167 6.58386 19.737 5.01873 19.503C3.4536 19.2691 2.69444 15.6696 3.32312 11.4632C3.95179 7.25689 5.73022 4.0366 7.29535 4.27052C8.86049 4.50445 9.61964 8.10399 8.99097 12.3103Z"
        fill="url(#paint0_linear_162_36660)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_162_36660"
          x1="14.2601"
          y1="0"
          x2="14.2601"
          y2="28.0855"
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
