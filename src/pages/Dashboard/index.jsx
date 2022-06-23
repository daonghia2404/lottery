import React from 'react';
import { Tooltip } from 'antd';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { copyText } from '@/utils/functions';

import { dataDashboardCards } from './Dashboard.data';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container">
        <div className="Dashboard-wrapper">
          <div className="Dashboard-search flex items-center">
            <div className="Dashboard-search-title">Preview Id</div>
            <div className="Dashboard-search-control flex items-center">
              <div className="Dashboard-search-control-input">
                <input placeholder="Enter ID" />
              </div>
              <div className="Dashboard-search-control-btn">
                <Button title="Go" className="electric-violet" />
              </div>
            </div>
          </div>

          <div className="Dashboard-info flex flex-wrap justify-between">
            <div className="Dashboard-info-item flex items-center">
              <div className="Dashboard-info-avatar">
                <Icon name={EIconName.User} color={EIconColor.WHITE} />
              </div>
              <div className="Dashboard-info-content">
                <div className="Dashboard-info-content-title">ID: 1</div>
                <div className="Dashboard-info-content-subtitle flex items-center">
                  0dxasa...10
                  <Icon name={EIconName.Copy} onClick={() => copyText('0dxasa...10')} />
                </div>

                <div className="Dashboard-info-content-description flex items-center">
                  Invited 01.06.2022 by
                  <span>78asd...dffiud</span>
                </div>
              </div>
            </div>
            <div className="Dashboard-info-item">
              <div className="Dashboard-info-link">
                <div className="Dashboard-info-link-title">My Referral Link</div>
                <div className="Dashboard-info-link-value flex items-center justify-between">
                  <span>https://mgc.game?ref=ad78545saff4qqfas...</span>
                  <Icon
                    name={EIconName.Copy}
                    color={EIconColor.GORSE}
                    onClick={() => copyText('https://mgc.game?ref=ad78545saff4qqfas...')}
                  />
                </div>

                <div className="Dashboard-info-link-create flex items-center">
                  Create new link
                  <Icon name={EIconName.CirclePlus} />
                </div>
              </div>
            </div>
          </div>

          <div className="Dashboard-blance">
            <div className="Dashboard-title">PERSONAL BALANCE</div>

            <div className="Dashboard-blance-wrapper flex flex-wrap">
              <div className="Dashboard-blance-item">
                <div className="Dashboard-blance-item-header flex items-center">
                  <Icon name={EIconName.MgcToken} />
                  MGC Balance
                </div>

                <div className="Dashboard-blance-item-body">
                  <div className="Dashboard-blance-item-row flex justify-between">
                    <div className="Dashboard-blance-item-row-text">Total Balance</div>
                    <div className="Dashboard-blance-item-row-text green">10,000,000</div>
                  </div>
                  <div className="Dashboard-blance-item-row flex justify-between">
                    <div className="Dashboard-blance-item-row-text">Avaiable Balance</div>
                    <div className="Dashboard-blance-item-row-text green">8,000,000</div>
                  </div>
                  <div className="Dashboard-blance-item-row flex justify-between">
                    <div className="Dashboard-blance-item-row-text">Avaiable in next 100days</div>
                    <div className="Dashboard-blance-item-row-text green">9,000,000</div>
                  </div>
                </div>
              </div>

              <div className="Dashboard-blance-item">
                <div className="Dashboard-blance-item-header flex items-center">
                  <Icon name={EIconName.MgaToken} />
                  MGA Balance
                </div>

                <div className="Dashboard-blance-item-body">
                  <div className="Dashboard-blance-item-row flex justify-between">
                    <div className="Dashboard-blance-item-row-text">Total Balance</div>
                    <div className="Dashboard-blance-item-row-text green">10,000,000</div>
                  </div>
                  <div className="Dashboard-blance-item-row flex justify-between">
                    <div className="Dashboard-blance-item-row-text">Avaiable Balance</div>
                    <div className="Dashboard-blance-item-row-text green">10,000,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Dashboard-cards">
            <div className="Dashboard-title">PERSONAL BALANCE</div>

            <div className="Dashboard-cards-wrapper flex flex-wrap justify-between">
              {dataDashboardCards.map((item, index) => (
                <div key={index} className="Dashboard-cards-item">
                  <div className="Dashboard-cards-item-header flex justify-between items-center">
                    <div className="Dashboard-cards-item-title">{item.title}</div>
                    <div className="Dashboard-cards-item-tooltip">
                      <Tooltip title={item.tooltip} placement="top">
                        <div>
                          <Icon name={EIconName.Question} />
                        </div>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="Dashboard-cards-item-body">
                    <div className="Dashboard-cards-item-value flex items-center justify-center">
                      {item.number}
                      <Icon name={item.icon} />
                    </div>
                    <div className="Dashboard-cards-item-arrow flex items-center">
                      <Icon name={EIconName.ArrowUp} />
                      {` `} 1
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
