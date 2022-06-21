import React from 'react';

import ImageCashFlow from '@/assets/images/image-cash-flow.png';
import ImageCashStep from '@/assets/images/image-cash-step.png';

import { dataCardsHowToPlay } from './HowToPlay.data';
import './HowToPlay.scss';
import Icon, { EIconName } from '@/components/Icon';

const HowToPlay = ({ backgroundDaily }) => {
  return (
    <div className="HowToPlay">
      <div className="HowToPlay-wrapper">
        <div className="HowToPlay-title">HOW TO PLAY</div>
        <div className="HowToPlay-cards flex justify-between flex-wrap">
          {dataCardsHowToPlay.map((item, index) => (
            <div key={index} className="HowToPlay-cards-item">
              <div className="HowToPlay-cards-main" style={{ background: item.background }}>
                <div className="HowToPlay-cards-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="HowToPlay-cards-item-title">{item.title}</div>
                <div className="HowToPlay-cards-item-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {backgroundDaily ? (
          <>
            <div className="HowToPlay-content">
              <h4>Lottery Instructions:</h4>
              <p>
                A provably fair algorithm is used to draw the lottery prizes. Prizes are drawn at 15:00 UTC+0 everyday.
                You can buy a ticket for $0.1. The sale of tickets stop at 14:55 UTC+0 everyday. The player chooses six
                numbers for each ticket, the first five are from 1 to 36, and the last one is from 1 to 10. You can
                choose numbers manually or automatically. If you have BCL, you can use BCL to redeem Tickets. Each draw
                produces six numbers. The more numbers you match in the first five numbers, greater prize you will win.
              </p>
              <br />

              <h4>Winning Prize Details:</h4>
              <p>
                All six numbers matched: $100,000 prize. In case you are not the only winner, you may need to share the
                prize equally with others. Five numbers matched, and the sixth number is missed: Each ticket gets a
                $3,000 prize. Four of the first 5 numbers matched: Each ticket gets a $20 prize. Three of the first 5
                numbers matched: Each ticket gets a $1 prize. If all six numbers are missed, the lottery will be
                reserved for free, and continue participating in the next day's draw.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="HowToPlay-title">REWARD PAYMENT LIMIT</div>
            <div className="HowToPlay-content">
              <p>
                There is a limit to receiving large rewards and releasing coins to the market, so only pay coins to the
                market up to X90 times / day calculated for the amount of coin that the user buys tickets. (can do
                transfer and lock order)
              </p>

              <div className="HowToPlay-content-ticket flex items-center">
                <div className="HowToPlay-content-ticket-icon">
                  <Icon name={EIconName.Ticket} />
                </div>
                <div className="HowToPlay-content-ticket-title">TICKET 2 NUMBER X90</div>
                <div className="HowToPlay-content-ticket-description">Payment X90 / day = 1 day</div>
              </div>

              <div className="HowToPlay-content-ticket flex items-center">
                <div className="HowToPlay-content-ticket-icon">
                  <Icon name={EIconName.Ticket} />
                </div>
                <div className="HowToPlay-content-ticket-title">TICKET 3 NUMBER X900</div>
                <div className="HowToPlay-content-ticket-description">Payment X90 / day = 10 days</div>
              </div>

              <div className="HowToPlay-content-ticket flex items-center">
                <div className="HowToPlay-content-ticket-icon">
                  <Icon name={EIconName.Ticket} />
                </div>
                <div className="HowToPlay-content-ticket-title">TICKET 4 NUMBER X9000</div>
                <div className="HowToPlay-content-ticket-description">Payment X90 / day = 1000days</div>
              </div>
            </div>

            <div className="HowToPlay-title">REGULATIONS OF RECEIVING BONUS</div>
            <div className="HowToPlay-content">
              <p>
                To get the commission, the user is required to make at least 1 purchase order within the past 30 days.
              </p>
              <p>
                The undivided commission amount due to ineligibility will be automatically transferred to the above
                users.
              </p>
              <p>
                For example, the picture below. A, B, C, D, E, F, H, I are qualified as having at least 1 order to buy
                lottery tickets in the past 30 days. G has not bought tickets.
              </p>
              <p>If I buy 100 MGC, H gets 1%, G can't receive, F, E, D, C, B, A receive 1% each.</p>
              <p>
                The balance amount that no user receives commission will be automatically transferred to the Airdrop to
                the MGC token holders.
              </p>
              <img src={ImageCashStep} alt="" />
            </div>

            <div className="HowToPlay-content">
              <img src={ImageCashFlow} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HowToPlay;
