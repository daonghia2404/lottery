import React, { useState } from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import CountdownTimer from '@/components/CountdownTimer';
import PolicyModal from '@/containers/PolicyModal';

import './AirDropModal.scss';

const AirDropModal = ({ visible, onClose }) => {
  const [isClamed, setIsClamed] = useState(false);
  const [visiblePolicyModal, setVisiblePolicyModal] = useState(false);

  const handleOpenVisiblePolicyModal = () => {
    setIsClamed(true);
    setVisiblePolicyModal(true);
  };

  const handleCloseVisiblePolicyModal = () => {
    setVisiblePolicyModal(false);
  };

  return (
    <Modal wrapClassName="AirDropModal-wrapper" visible={visible} onClose={onClose}>
      <div className="AirDropModal-header flex items-center justify-between">
        <div className="AirDropModal-header-title flex items-center">
          <Icon name={EIconName.AirDrop} />
          AirDrop
        </div>
      </div>

      <div className="AirDropModal-task">
        <div className="AirDropModal-task-overlay" />
        <div className="AirDropModal-task-main">
          <div className="AirDropModal-title">Airdrop Task</div>
          <div className="AirDropModal-description">Complete all tasks to get free tokens</div>

          <div className="AirDropModal-process">
            <div className="AirDropModal-process-line" />
            <div className="AirDropModal-process-circle" />
            <div className="AirDropModal-process-percent">5%</div>
            <div className="AirDropModal-process-title">MGA</div>
          </div>

          <div className="AirDropModal-task-wrapper">
            <div className="AirDropModal-task-title">Task</div>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="AirDropModal-task-item flex items-center justify-between">
                <div className="AirDropModal-task-item-icon">
                  <Icon name={EIconName.Task} />
                </div>
                <div className="AirDropModal-task-item-info">
                  <div className="AirDropModal-task-item-info-title">Follow Twitter</div>
                  <div className="AirDropModal-task-item-info-description">
                    Follow our main Twitter, retweet and tag 3 friend
                  </div>
                </div>
                <div className="AirDropModal-task-item-btn">
                  {item % 2 === 0 ? (
                    <Button title="GO" />
                  ) : (
                    <Button className="gray" iconName={EIconName.Check} iconColor={EIconColor.WHITE} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="AirDropModal-end-time">
            <span>End in</span> <CountdownTimer />
          </div>
          <div className="AirDropModal-rule flex justify-center">
            {isClamed ? (
              <Button title="CLAIM AIRDROP" />
            ) : (
              <Button className="electric-violet" title="RULE & POLICY" onClick={handleOpenVisiblePolicyModal} />
            )}
          </div>
        </div>
      </div>

      <PolicyModal visible={visiblePolicyModal} onClose={handleCloseVisiblePolicyModal} />
    </Modal>
  );
};

export default AirDropModal;
