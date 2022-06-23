import React, { useState } from 'react';
import classNames from 'classnames';

import TableList from '@/containers/TableList/TableList';

import { EKeyTab } from './ListMembersData.data';
import './ListMembersData.scss';

const ListMembersData = () => {
  const [keyTab, setKeyTab] = useState(EKeyTab.LIST_MEMBERS);

  const dataTabs = [
    { value: EKeyTab.LIST_MEMBERS, label: 'List Members' },
    { value: EKeyTab.LIST_COMMISSION, label: 'List Commission' },
  ];

  const handleChangeKeyTab = (currentTab) => {
    setKeyTab(currentTab);
  };

  const columns = [
    {
      key: 'address',
      title: 'Address',
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
      key: 'totalReferrals',
      title: 'Total Referrals',
    },
  ];

  const dataSources = [
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
    {
      address: '16x0...0',
      player: '0x00axca001',
      registrationDate: <span style={{ fontWeight: 800, color: '#24F16A' }}>19/02/2022</span>,
      totalReferrals: <span style={{ fontWeight: 800, color: '#24F16A' }}>1,000</span>,
    },
  ];

  return (
    <div className="ListMembersData">
      <div className="container">
        <div className="ListMembersData-wrapper">
          <div className="ListMembersData-tabs flex justify-center">
            {dataTabs.map((item) => (
              <div
                key={item.value}
                className={classNames('ListMembersData-tabs-item flex items-center', { active: keyTab === item.value })}
                onClick={() => handleChangeKeyTab(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="ListMembersData-tabs-main">
            <div className="ListMembersData-tabs-main-item">
              <TableList columns={columns} dataSource={dataSources} title="List Members" />
            </div>
            {/* {keyTab === EKeyTab.LASTEST_BUY && <div className="ListMembersData-tabs-main-item"></div>}
            {keyTab === EKeyTab.LASTEST_WIN && <div className="ListMembersData-tabs-main-item"></div>}
            {keyTab === EKeyTab.TOP_WINNING && <div className="ListMembersData-tabs-main-item"></div>}
            {keyTab === EKeyTab.TOP_REFERRAL && <div className="ListMembersData-tabs-main-item"></div>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMembersData;
