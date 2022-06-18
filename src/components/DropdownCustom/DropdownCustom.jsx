import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import Icon from '@/components/Icon';

import './DropdownCustom.scss';

const DropdownCustom = ({ overlayClassName, children, overlay, menu = [] }) => {
  const renderMenuOverlay = () => {
    return (
      <div className="DropdownCustom-menu">
        {menu.map((item) => (
          <div className="DropdownCustom-menu-item flex items-center justify-center" onClick={item.onClick}>
            <div className="DropdownCustom-menu-item-icon">
              <Icon name={item.iconName} color={item.iconColor} />
            </div>
            <div className="DropdownCustom-menu-item-title">{item.title}</div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="DropdownCustom">
      <AntdDropdown
        trigger={['click']}
        overlay={overlay || renderMenuOverlay()}
        overlayClassName={classNames('DropdownCustom-overlay', overlayClassName)}
      >
        <div className="DropdownCustom-wrapper">{children}</div>
      </AntdDropdown>
    </div>
  );
};

export default DropdownCustom;
