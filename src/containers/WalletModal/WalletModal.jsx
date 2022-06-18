import React, { useState } from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { copyText } from '@/utils/functions';

import { EKeyTab } from './WalletModal.data';
import './WalletModal.scss';
import classNames from 'classnames';

const WalletModal = ({ visible, onClose }) => {
  const [keyTab, setKeyTab] = useState(EKeyTab.MGC);

  const handleChangeKeyTab = (changedTab) => {
    setKeyTab(changedTab);
  };

  return (
    <Modal wrapClassName="WalletModal-wrapper" visible={visible} onClose={onClose}>
      <div className="WalletModal-header flex items-center justify-between">
        <div className="WalletModal-header-title flex items-center">
          <Icon name={EIconName.Wallet} color={EIconColor.NOBEL} />
          Wallet
        </div>

        <div className="WalletModal-header-transcation flex items-center">
          <Icon name={EIconName.Transcation} />
          Transcation
        </div>
      </div>

      <div className="WalletModal-address flex items-center">
        <div className="WalletModal-address-label">ADDRESS</div>
        <div className="WalletModal-address-value">016xdadsgfsdfadsgkljdakjasd....das</div>
        <div className="WalletModal-address-icon" onClick={() => copyText('016xdadsgfsdfadsgkljdakjasd....das')}>
          <Icon name={EIconName.Copy} color={EIconColor.WHITE} />
        </div>
      </div>

      <div className="WalletModal-box">
        <div className="WalletModal-tabs flex">
          <div
            className={classNames('WalletModal-tabs-item flex items-center', { active: keyTab === EKeyTab.MGC })}
            onClick={() => handleChangeKeyTab(EKeyTab.MGC)}
          >
            <Icon name={EIconName.MgcToken} />
            MGC
          </div>
          <div
            className={classNames('WalletModal-tabs-item flex items-center', { active: keyTab === EKeyTab.MGA })}
            onClick={() => handleChangeKeyTab(EKeyTab.MGA)}
          >
            <Icon name={EIconName.MgaToken} />
            MGA
          </div>
        </div>

        <div className="WalletModal-tabs-main">
          {keyTab === EKeyTab.MGC && (
            <div className="WalletModal-tabs-main-item">
              <table>
                <tr>
                  <td>Total balance</td>
                  <td>10,000,000 MGC</td>
                </tr>
                <tr>
                  <td>Balance avaiable now</td>
                  <td>8,000,000 MGC</td>
                </tr>
                <tr>
                  <td>Balance in next 100 days</td>
                  <td>9,000,000 MGC</td>
                </tr>
              </table>
            </div>
          )}

          {keyTab === EKeyTab.MGA && (
            <div className="WalletModal-tabs-main-item">
              <table>
                <tr>
                  <td>Total balance</td>
                  <td>10,000,000 MGA</td>
                </tr>
                <tr>
                  <td>Balance avaiable now</td>
                  <td>8,000,000 MGA</td>
                </tr>
                <tr>
                  <td>Balance in next 100 days</td>
                  <td>9,000,000 MGA</td>
                </tr>
              </table>
            </div>
          )}
        </div>

        <div className="WalletModal-disconnect flex items-center justify-center">
          <Icon name={EIconName.Logout} />
          DISCONECT
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;
