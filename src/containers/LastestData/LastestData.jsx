import React, { useState } from 'react';
import classNames from 'classnames';

import { EKeyTab } from './LastestData.data';
import './LastestData.scss';
import Icon, { EIconName } from '@/components/Icon';
import TableList from '@/containers/TableList/TableList';

const LastestData = () => {
  const [keyTab, setKeyTab] = useState(EKeyTab.LASTEST_BUY);

  const dataTabs = [
    { value: EKeyTab.LASTEST_BUY, iconName: EIconName.LotteryYellow, label: 'Lastest Buy' },
    { value: EKeyTab.LASTEST_WIN, iconName: EIconName.Union, label: 'Latest Win' },
    { value: EKeyTab.TOP_WINNING, iconName: EIconName.Rank, label: 'Top Winning' },
    { value: EKeyTab.TOP_REFERRAL, iconName: EIconName.Speaker, label: 'Top Referral' },
  ];

  const handleChangeKeyTab = (currentTab) => {
    setKeyTab(currentTab);
  };

  const columns = [
    {
      key: 'top',
      title: 'Top',
    },
    {
      key: 'player',
      title: 'Player',
    },
    {
      key: 'registrationDate',
      title: 'Registration Date',
    },
    {
      key: 'totalBuyTickets',
      title: 'Total Buy Tickets',
    },
    {
      key: 'totalWin',
      title: 'Total Win',
    },
  ];

  const dataSources = [
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
    {
      top: '000001',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalBuyTickets: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
      totalWin: <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span>,
    },
  ];

  return (
    <div className="LastestData">
      <div className="container">
        <div className="LastestData-wrapper">
          <div className="LastestData-tabs flex justify-center">
            {dataTabs.map((item) => (
              <div
                key={item.value}
                className={classNames('LastestData-tabs-item flex items-center', { active: keyTab === item.value })}
                onClick={() => handleChangeKeyTab(item.value)}
              >
                <Icon name={item.iconName} />
                {item.label}
              </div>
            ))}
          </div>

          <div className="LastestData-tabs-main">
            <div className="LastestData-tabs-main-item">
              <TableList columns={columns} dataSource={dataSources} title="Top Winning" />
            </div>
            {/* {keyTab === EKeyTab.LASTEST_BUY && <div className="LastestData-tabs-main-item"></div>}
            {keyTab === EKeyTab.LASTEST_WIN && <div className="LastestData-tabs-main-item"></div>}
            {keyTab === EKeyTab.TOP_WINNING && <div className="LastestData-tabs-main-item"></div>}
            {keyTab === EKeyTab.TOP_REFERRAL && <div className="LastestData-tabs-main-item"></div>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestData;
