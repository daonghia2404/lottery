import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import Icon, { EIconName } from '@/components/Icon';

import './Modal.scss';

const Modal = ({ visible, onClose, wrapClassName, children }) => {
  return (
    <AntdModal
      wrapClassName={classNames('Modal-wrapper', wrapClassName)}
      visible={visible}
      onCancel={onClose}
      closable={false}
      footer={null}
    >
      <div className="Modal-close" onClick={onClose}>
        <Icon name={EIconName.Close} />
      </div>
      <div className="Modal-body">{children}</div>
    </AntdModal>
  );
};

export default Modal;
