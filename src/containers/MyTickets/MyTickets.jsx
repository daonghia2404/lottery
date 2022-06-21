import React, { useState } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';
import MyTicketsHistoryTable from '@/containers/MyTickets/MyTicketsHistoryTable';
import ModalLotteryResults from '@/containers/ModalLotteryResults';
import ModalBuyLottery from '@/containers/ModalBuyLottery';

import { EKeyTab } from './MyTickets.data';
import './MyTickets.scss';

const MyTickets = () => {
  const [keyTab, setKeyTab] = useState(EKeyTab.MY_TICKETS);
  const [visibleLotteryResultsModal, setVisibleLotteryResultsModal] = useState(false);
  const [visibleBuyLotteryModal, setVisibleBuyLotteryModal] = useState(false);

  const handleOpenBuyLotteryModal = () => {
    setVisibleBuyLotteryModal(true);
  };
  const handleCloseBuyLotteryModal = () => {
    setVisibleBuyLotteryModal(false);
  };

  const handleOpenLotteryResultsModal = () => {
    setVisibleLotteryResultsModal(true);
  };
  const handleCloseLotteryResultsModal = () => {
    setVisibleLotteryResultsModal(false);
  };

  const handleBuyTickets = () => {
    handleCloseBuyLotteryModal();
    handleOpenLotteryResultsModal();
  };

  const dataTabs = [
    { value: EKeyTab.MY_TICKETS, label: 'My ticket (0)' },
    { value: EKeyTab.MY_WINNINGS, label: 'My Winnings' },
    { value: EKeyTab.HISTORY, label: 'History' },
  ];

  const handleChangeKeyTab = (currentTab) => {
    setKeyTab(currentTab);
  };

  return (
    <div className="MyTickets">
      <div className="MyTickets-wrapper">
        <div className="MyTickets-tabs flex">
          {dataTabs.map((item) => (
            <div
              key={item.value}
              className={classNames('MyTickets-tabs-item flex items-center', { active: keyTab === item.value })}
              onClick={() => handleChangeKeyTab(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="MyTickets-tabs-main">
          {keyTab === EKeyTab.MY_TICKETS && (
            <div className="MyTickets-tabs-main-item">
              <div className="MyTickets-tabs-wrapper flex items-center justify-between">
                <div className="MyTickets-tabs-main-item-text">You have no ticket!</div>
                <div className="MyTickets-tabs-main-item-btn">
                  <Button title="BUY TICKET NOW" className="yellow" onClick={handleOpenBuyLotteryModal} />
                </div>
              </div>
            </div>
          )}
          {keyTab === EKeyTab.MY_WINNINGS && (
            <div className="MyTickets-tabs-main-item">
              <div className="MyTickets-tabs-wrapper flex items-center justify-between">
                <div className="MyTickets-tabs-main-item-text">No data yet</div>
              </div>
            </div>
          )}
          {keyTab === EKeyTab.HISTORY && (
            <div className="MyTickets-tabs-main-item">
              <MyTicketsHistoryTable />
            </div>
          )}
        </div>
      </div>

      <ModalLotteryResults visible={visibleLotteryResultsModal} onClose={handleCloseLotteryResultsModal} />

      <ModalBuyLottery visible={visibleBuyLotteryModal} onClose={handleCloseBuyLotteryModal} onBuy={handleBuyTickets} />
    </div>
  );
};

export default MyTickets;
