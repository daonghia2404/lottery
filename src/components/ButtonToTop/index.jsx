import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './ButtonToTop.scss';

const ButtonToTop = () => {
  return (
    <a href="#" className="ButtonToTop flex items-center justify-center text-center flex-col">
      <Icon name={EIconName.AngleUp} color={EIconColor.WHITE} />
      Top
    </a>
  );
};

export default ButtonToTop;
