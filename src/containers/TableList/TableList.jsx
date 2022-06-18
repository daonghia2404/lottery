import React from 'react';

import Table from '@/components/Table';

import './TableList.scss';
import Icon, { EIconName } from '@/components/Icon';

const TableList = ({ title, columns, dataSource = [] }) => {
  const isEmpty = dataSource.length === 0;
  return (
    <div className="TableList">
      <div className="container">
        <div className="TableList-wrappper">
          <div className="TableList-header flex items-center justify-between">
            <div className="TableList-header-title">{title}</div>
            {!isEmpty && (
              <div className="TableList-header-search flex items-center">
                <input placeholder="Search Position" />
                <Icon name={EIconName.Search} />
              </div>
            )}
          </div>
          <div className="TableList-main">
            <Table columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
