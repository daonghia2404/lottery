import ImageTokenCard1 from '@/assets/images/image-token-card-1.png';
import ImageTokenCard5 from '@/assets/images/image-token-card-5.png';
import ImageTokenCard6 from '@/assets/images/image-token-card-6.png';
import ImageTokenCard7 from '@/assets/images/image-token-card-7.png';
import ImageTokenCard8 from '@/assets/images/image-token-card-8.png';

export const dataReferralCardList = [
  {
    price: (
      <>
        Finished Dynamic <br />
        <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span> <br />
        Unfinished Dynamic <br />
        <span style={{ fontWeight: 800, color: '#24F16A' }}>10</span> <br />
      </>
    ),
    title: 'Referral Status',
    description: 'Referrals Status in 30 days',
  },
  {
    image: ImageTokenCard1,
    title: 'Total Members',
    price: '$9,999,999',
    description: 'Total members in 7 level',
  },
  { image: ImageTokenCard5, title: 'Direct Members', price: '$9,999,999', description: 'Direct referrals members' },
  {
    image: ImageTokenCard6,
    title: 'Total revenue',
    price: '$29,999,999',
    description: 'Total amount of 7 levels to buy tickets',
  },
  {
    image: ImageTokenCard7,
    title: 'Totsl Commission',
    price: '$29,999,999',
    description: 'Total Win Money..................',
  },
  {
    image: ImageTokenCard8,
    title: 'Commission Lost',
    price: '-$1,111',
    description: 'Total Win Money..................',
  },
];
