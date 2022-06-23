import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Modal from '@/components/Modal';
import DropdownCustom from '@/components/DropdownCustom';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { getArrayFrom0To } from '@/utils/functions';

import {
  EPickTypesValue,
  dataQuickOptionsNumberTickets,
  dataPickTypesOptions,
  dataLotteryTickets,
} from './ModalBuyLottery.data';
import './ModalBuyLottery.scss';

const ModalBuyLottery = ({ visible, onClose, onBuy, lotteryTickets }) => {
  const LIMIT_NUMBER_DIGITS = 36;
  const LIMIT_NUMBER_POSITIONS = 10;

  const paymentTypeMenu = [
    { title: 'MGC', iconName: EIconName.MgcToken, onClick: () => {} },
    { title: 'MGA', iconName: EIconName.MgaToken, onClick: () => {} },
  ];
  const [numberTickets, setNumberTickets] = useState(dataQuickOptionsNumberTickets[0]?.value);
  const [numberDigits, setNumberDigits] = useState([]);
  const [lotteryTicketsAmount, setLotteryTicketsAmount] = useState(dataLotteryTickets[1]);
  const [pickType, setPickType] = useState(EPickTypesValue.AUTO);

  const handleClickQuickOptionsNumberTickets = (value) => {
    setNumberTickets(value);
  };

  const handleChangePickType = (value) => {
    setPickType(value);
  };

  const handleClickNumberDigit = (value) => {
    const isExisted = numberDigits.includes(value);

    if (isExisted) {
      const newNumberDigits = numberDigits.filter((item) => item !== value);
      setNumberDigits(newNumberDigits);
    } else {
      if (numberDigits.length < LIMIT_NUMBER_POSITIONS) {
        setNumberDigits([...numberDigits, value]);
      }
    }
  };

  const handleRandomNumberDigits = () => {
    const randomNumber = (existedNumbers) => {
      const value = Math.floor(Math.random() * (LIMIT_NUMBER_DIGITS + 1));
      if (existedNumbers.includes(value) || value === 0) {
        return randomNumber(existedNumbers);
      }

      return value;
    };
    const randomNumbers = [];
    while (randomNumbers.length < LIMIT_NUMBER_POSITIONS) {
      randomNumbers.push(randomNumber(randomNumbers));
    }

    setNumberDigits(randomNumbers);
  };

  const handleChangeNumberTickets = (e) => {
    const { value } = e.target;
    const isNumber = !value || /\d/g.test(value);
    if (isNumber) setNumberTickets(value);
  };

  const handleChangeLotteryTickets = (tickets) => {
    setLotteryTicketsAmount(tickets);
  };

  useEffect(() => {
    if (pickType === EPickTypesValue.AUTO) handleRandomNumberDigits();
  }, [pickType]);

  return (
    <Modal visible={visible} onClose={onClose} wrapClassName="ModalBuyLottery-wrapper">
      <div className="ModalBuyLottery-header flex items-center justify-between">
        <div className="ModalBuyLottery-header-title flex items-center">Buy Lottery Tickets</div>
      </div>

      <div className="ModalBuyLottery-main">
        {lotteryTickets && (
          <div className="ModalBuyLottery-tickets flex items-center justify-center">
            {dataLotteryTickets.map((item) => (
              <div
                className={classNames('ModalBuyLottery-tickets-item', {
                  active: item.value === lotteryTicketsAmount.value,
                })}
                onClick={() => handleChangeLotteryTickets(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
        <div className="ModalBuyLottery-subtitle">Pay with</div>
        <DropdownCustom menu={paymentTypeMenu} overlayClassName="ModalBuyLottery-dropdown">
          <div className="ModalBuyLottery-payment-type flex items-center justify-between">
            <div className="ModalBuyLottery-payment-type-item flex items-center">
              <div className="ModalBuyLottery-payment-type-item-icon">
                <Icon name={EIconName.MgcToken} />
              </div>
              <div className="ModalBuyLottery-payment-type-item-text">MGC</div>
            </div>
            <div className="ModalBuyLottery-payment-type-item flex items-center">
              <div className="ModalBuyLottery-payment-type-item-text">10,000,000</div>
              <div className="ModalBuyLottery-payment-type-item-arrow">
                <Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />
              </div>
            </div>
          </div>
        </DropdownCustom>

        <div className="ModalBuyLottery-subtitle">Number of tickets</div>
        <div className="ModalBuyLottery-amount">
          <div className="ModalBuyLottery-amount-input">
            <input value={numberTickets} onChange={handleChangeNumberTickets} placeholder="Enter amount of tickets" />
          </div>
          <div className="ModalBuyLottery-amount-quick-options flex justify-center items-center">
            {dataQuickOptionsNumberTickets.map((item) => (
              <div
                className="ModalBuyLottery-amount-quick-options-item"
                onClick={() => handleClickQuickOptionsNumberTickets(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="ModalBuyLottery-amount-text">Price 1,000 MGC/Ticket</div>
        </div>
        <div className="ModalBuyLottery-subtitle">
          Total cost : <span>10,000.00 MGC ~ 1,000 USD</span>
        </div>
        <div className="ModalBuyLottery-pick-type flex items-center">
          {dataPickTypesOptions.map((item) => (
            <div
              className={classNames('ModalBuyLottery-pick-type-item flex items-start', {
                active: item.value === pickType,
              })}
              onClick={() => handleChangePickType(item.value)}
            >
              <div className="ModalBuyLottery-pick-type-item-circle" />
              {item.label}
            </div>
          ))}
        </div>

        {pickType === EPickTypesValue.MANUAL && (
          <>
            <div className="ModalBuyLottery-pick-numbers">
              <div className="ModalBuyLottery-pick-numbers-header flex items-center justify-between">
                <div className="ModalBuyLottery-pick-numbers-header-item">
                  <Button title="Random" onClick={handleRandomNumberDigits} />
                </div>
                <div className="ModalBuyLottery-pick-numbers-header-item">Select {numberDigits.length} digits</div>
              </div>

              <div className="ModalBuyLottery-pick-numbers-main flex flex-wrap justify-around">
                {getArrayFrom0To(LIMIT_NUMBER_DIGITS).map((item) => (
                  <div
                    key={item}
                    className={classNames('ModalBuyLottery-pick-numbers-main-circle', {
                      active: numberDigits.includes(item + 1),
                    })}
                    onClick={() => handleClickNumberDigit(item + 1)}
                  >
                    {item + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="ModalBuyLottery-pick-position">
              <div className="ModalBuyLottery-pick-position-header flex items-center justify-between">
                <div className="ModalBuyLottery-pick-position-header-item"></div>
                <div className="ModalBuyLottery-pick-position-header-item">1 Jackpot Ball</div>
              </div>

              <div className="ModalBuyLottery-pick-position-main flex flex-wrap justify-around">
                {getArrayFrom0To(LIMIT_NUMBER_POSITIONS).map((item) => (
                  <div key={item} className="ModalBuyLottery-pick-position-main-circle">
                    1
                  </div>
                ))}
              </div>
            </div>

            <div className="ModalBuyLottery-subtitle text-center">
              <strong>Chose 6 numbers to take part in the loterry draw</strong>
            </div>
          </>
        )}
      </div>

      <div className="ModalBuyLottery-buy flex justify-center">
        <Button className="electric-violet" title="Buy Tickes" onClick={onBuy} />
      </div>
    </Modal>
  );
};

export default ModalBuyLottery;
