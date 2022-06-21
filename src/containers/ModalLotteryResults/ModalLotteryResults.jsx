import React from 'react';

import Modal from '@/components/Modal';
import ImageCoin from '@/assets/images/image-coin.png';
import RibbonBall from '@/components/RibbonBall';

import './ModalLotteryResults.scss';

const ModalLotteryResults = ({ visible, onClose }) => {
  return (
    <Modal centered visible={visible} onClose={onClose} wrapClassName="ModalLotteryResults-wrapper">
      <div className="ModalLotteryResults-text-result win">CONGRATULATIONS</div>
      {/* <div className="ModalLotteryResults-text-result lose">BETTER LUCK NEXT TIME</div> */}

      <div className="ModalLotteryResults-image">
        <img src={ImageCoin} alt="" />
      </div>

      <div className="ModalLotteryResults-text">
        Lottery game ID : <strong>1024656540</strong>
      </div>

      <div className="ModalLotteryResults-title">
        THE LUCKY NUMBERS ARE : <strong>7 2 8 9 4 5</strong>
      </div>

      <div className="ModalLotteryResults-ribbon-ball">
        <RibbonBall value="728945" medium background="#17181B" />
      </div>

      {/* <div className="ModalLotteryResults-text">
        You have <span>0</span> ticket in this round
      </div> */}

      <div className="ModalLotteryResults-subtitle">Your number : 0 2 5 8 9 6</div>
      <div className="ModalLotteryResults-text-status win">You have won : 1,000 MGC</div>
      {/* <div className="ModalLotteryResults-text-status lose">Better luck next time</div> */}
    </Modal>
  );
};

export default ModalLotteryResults;
