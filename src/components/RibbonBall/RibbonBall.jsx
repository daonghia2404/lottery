import React from 'react';
import classNames from 'classnames';

import './RibbonBall.scss';

const RibbonBall = ({ big, medium, background, value = '111111' }) => {
  const [number1, number2, number3, number4, number5, number6] = value.split('');

  return (
    <div className={classNames('RibbonBall flex items-center justify-around', { big, medium })}>
      <div className="RibbonBall-left">
        <span style={{ background }}></span>
        <span style={{ background }}></span>
        <span style={{ background }}></span>
        <span style={{ background }}></span>
        <span style={{ background }}></span>
      </div>
      <div className="RibbonBall-right">
        <span style={{ background }}></span>
        <span style={{ background }}></span>
        <span style={{ background }}></span>
        <span style={{ background }}></span>
        <span style={{ background }}></span>
      </div>
      <div className="RibbonBall-item">{number1}</div>
      <div className="RibbonBall-item">{number2}</div>
      <div className="RibbonBall-item">{number3}</div>
      <div className="RibbonBall-item">{number4}</div>
      <div className="RibbonBall-item">{number5}</div>
      <div className="RibbonBall-item">{number6}</div>
    </div>
  );
};

export default RibbonBall;
