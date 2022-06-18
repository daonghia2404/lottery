import React from 'react';
import { Button as AntdButton } from 'antd';

import Icon from '@/components/Icon';

import './Button.scss';
import classNames from 'classnames';

const Button = ({ title, className, iconName, style, iconColor, onClick }) => {
  return (
    <div className={classNames('Button', className)} style={style}>
      <AntdButton onClick={onClick}>
        {iconName && <Icon name={iconName} color={iconColor} />}
        {title}
      </AntdButton>
    </div>
  );
};

export default Button;
