import React, { useState } from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconName } from '@/components/Icon';

import './PolicyModal.scss';

const PolicyModal = ({ visible, onClose }) => {
  return (
    <Modal wrapClassName="PolicyModal-wrapper" visible={visible} onClose={onClose}>
      <div className="PolicyModal-header flex items-center justify-between">
        <div className="PolicyModal-header-title flex items-center">
          <Icon name={EIconName.AirDrop} />
          AirDrop Terms & Policy
        </div>
      </div>

      <div className="PolicyModal-content">
        <p>Step 1: User registers an account before receiving Airdrop {`=>`} referral recording</p>
        <p>
          Step 2: The user enters the task to join the group / channel / fanpage…. And enter the registered wallet
          address
        </p>
        <p>Step 3: The admin approves and transfers 10 MGA tokens to the user's wallet address</p>
        <p>Step 4: User uses these 10 MGAs to participate in the random rotation of Airdorp program</p>
        <p>If you receive the following results:</p>
        <p>
          xx9: 9 MGC ​​(equivalent to 90 USD) <br />
          x99: 99 MGC ​​(equivalent to 990 USD) <br />
          999: 999 MGC ​​(equivalent to $ 9990) <br />
        </p>

        <p>Note:</p>
        <p>
          Users are only allowed to use MGA to dial Airdrop numbers and cannot buy, sell or convert to other money /
          tokens
        </p>
        <p>
          A user participating in the Airdrop dial must have EZC as a transaction fee for the EZChain blockchain network
        </p>
        <p>
          The amount of MGC will be transferred to the user's wallet in the form of a transfer and lock, opened after
          100 days from the date of receipt. Token MGC is a token that has been listed on the exchange and can be sold
          by the user after the unlocking time is due.
        </p>
      </div>
    </Modal>
  );
};

export default PolicyModal;
