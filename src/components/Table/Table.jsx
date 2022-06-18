import React from 'react';

import Button from '@/components/Button';
import Logo from '@/assets/images/favicon.svg';

import './Table.scss';

const Table = ({ columns = [], dataSource = [] }) => {
  const isEmpty = dataSource.length === 0;
  return (
    <div className="Table">
      <div className="Table-main">
        {isEmpty ? (
          <div className="Table-empty flex items-center justify-center flex-col">
            <img src={Logo} alt="" />
            No data
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                {columns.map((item, index) => (
                  <td key={index}>{item.title}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataSource.map((item, index) => (
                <tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>{item?.[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {!isEmpty && (
        <div className="Table-loadmore flex justify-center">
          <Button className="electric-violet" title="LOAD MORE" />
        </div>
      )}
    </div>
  );
};

export default Table;
