import React from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import CountdownTimer from '@/components/CountdownTimer';

import './AirDropModal.scss';

const AirDropModal = ({ visible, onClose }) => {
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
                  <Button title="GO" />
                </div>
              </div>
            ))}
          </div>

          <div className="AirDropModal-end-time">
            <span>End in</span> <CountdownTimer />
          </div>
          <div className="AirDropModal-rule flex justify-center">
            <Button className="electric-violet" title="RULE & POLICY" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AirDropModal;
