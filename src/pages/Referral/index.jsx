import React from 'react';

import BannerReferral from '@/containers/BannerReferral';
import TableList from '@/containers/TableList/TableList';

const Referral = () => {
  const columns = [
    {
      key: 'position',
      title: 'Position',
    },
    {
      key: 'address',
      title: 'Address',
    },
    {
      key: 'ref',
      title: 'Your Ref',
    },
  ];

  const dataSource = [
    {
      position: '1',
      address: '0xE02dF9...8902c5',
      ref: 15,
    },
    {
      position: '2',
      address: '0xE02dF9...8902c5',
      ref: 15,
    },
    {
      position: '3',
      address: '0xE02dF9...8902c5',
      ref: 15,
    },
    {
      position: '4',
      address: '0xE02dF9...8902c5',
      ref: 15,
    },
    {
      position: '5',
      address: '0xE02dF9...8902c5',
      ref: 15,
    },
  ];

  return (
    <div className="Referral">
      <BannerReferral />
      <TableList title="Referral List" columns={columns} dataSource={[]} />
      <TableList title="Top Referral User" columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default Referral;
