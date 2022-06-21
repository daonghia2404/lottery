import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageSampleAvatar from '@/assets/images/image-sample-avatar.png';
import Table from '@/components/Table';
import RibbonBall from '@/components/RibbonBall';

import './MyTicketsHistoryTable.scss';

const MyTicketsHistoryTable = () => {
  const columns = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'numbers',
      title: 'Numbers',
    },
    {
      key: 'matches',
      title: 'Matches',
    },
    {
      key: 'prize',
      title: 'Prize',
    },
  ];

  const dataSources = [
    {
      name: (
        <div className="MyTicketsHistoryTable-avatar flex items-center justify-center">
          <img src={ImageSampleAvatar} alt="" />
          Zxcvasd
        </div>
      ),
      numbers: (
        <div className="MyTicketsHistoryTable-numbers flex items-center justify-center">
          <RibbonBall background="#1E2024" />
          <span>x1</span>
        </div>
      ),
      matches: <div className="MyTicketsHistoryTable-matches">4</div>,
      prize: <div className="MyTicketsHistoryTable-price">$20</div>,
    },
    {
      name: (
        <div className="MyTicketsHistoryTable-avatar flex items-center justify-center">
          <img src={ImageSampleAvatar} alt="" />
          Zxcvasd
        </div>
      ),
      numbers: (
        <div className="MyTicketsHistoryTable-numbers flex items-center justify-center">
          <RibbonBall background="#1E2024" />
          <span>x1</span>
        </div>
      ),
      matches: <div className="MyTicketsHistoryTable-matches">4</div>,
      prize: <div className="MyTicketsHistoryTable-price">$20</div>,
    },
    {
      name: (
        <div className="MyTicketsHistoryTable-avatar flex items-center justify-center">
          <img src={ImageSampleAvatar} alt="" />
          Zxcvasd
        </div>
      ),
      numbers: (
        <div className="MyTicketsHistoryTable-numbers flex items-center justify-center">
          <RibbonBall background="#1E2024" />
          <span>x1</span>
        </div>
      ),
      matches: <div className="MyTicketsHistoryTable-matches">4</div>,
      prize: <div className="MyTicketsHistoryTable-price">$20</div>,
    },
    {
      name: (
        <div className="MyTicketsHistoryTable-avatar flex items-center justify-center">
          <img src={ImageSampleAvatar} alt="" />
          Zxcvasd
        </div>
      ),
      numbers: (
        <div className="MyTicketsHistoryTable-numbers flex items-center justify-center">
          <RibbonBall background="#1E2024" />
          <span>x1</span>
        </div>
      ),
      matches: <div className="MyTicketsHistoryTable-matches">4</div>,
      prize: <div className="MyTicketsHistoryTable-price">$20</div>,
    },
    {
      name: (
        <div className="MyTicketsHistoryTable-avatar flex items-center justify-center">
          <img src={ImageSampleAvatar} alt="" />
          Zxcvasd
        </div>
      ),
      numbers: (
        <div className="MyTicketsHistoryTable-numbers flex items-center justify-center">
          <RibbonBall background="#1E2024" />
          <span>x1</span>
        </div>
      ),
      matches: <div className="MyTicketsHistoryTable-matches">4</div>,
      prize: <div className="MyTicketsHistoryTable-price">$20</div>,
    },
  ];

  return (
    <div className="MyTicketsHistoryTable">
      <div className="MyTicketsHistoryTable-filter flex items-center flex-wrap">
        <div className="MyTicketsHistoryTable-filter-text">Game ID</div>
        <div className="MyTicketsHistoryTable-filter-pagination flex items-center">
          <div className="MyTicketsHistoryTable-filter-pagination-btn">
            <Icon name={EIconName.AngleLeft} color={EIconColor.WHITE} />
          </div>
          <div className="MyTicketsHistoryTable-filter-pagination-btn">
            <Icon name={EIconName.AngleLineLeft} color={EIconColor.WHITE} />
          </div>

          <div className="MyTicketsHistoryTable-filter-pagination-value">20220616</div>

          <div className="MyTicketsHistoryTable-filter-pagination-btn">
            <Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />
          </div>
          <div className="MyTicketsHistoryTable-filter-pagination-btn">
            <Icon name={EIconName.AngleLineRight} color={EIconColor.WHITE} />
          </div>
        </div>
        <div className="MyTicketsHistoryTable-filter-text">06/16/2022, 9:55:00 PM</div>
      </div>

      <div className="MyTicketsHistoryTable-main">
        <div className="MyTicketsHistoryTable-main-title">Winning Number</div>
        <div className="MyTicketsHistoryTable-main-winning flex justify-center">
          <RibbonBall background="#303236" big />
        </div>
        <div className="MyTicketsHistoryTable-main-header flex justify-between">
          <div className="MyTicketsHistoryTable-main-subtitle">Winner List</div>
          <div className="MyTicketsHistoryTable-main-subtitle">Total tickets sold this round 1000</div>
        </div>
        <div className="MyTicketsHistoryTable-main-table">
          <Table columns={columns} dataSource={dataSources} />
        </div>
      </div>
    </div>
  );
};

export default MyTicketsHistoryTable;
