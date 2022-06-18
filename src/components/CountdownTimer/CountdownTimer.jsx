import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CountdownTimer = () => {
  const [currentValue, setCurrentValue] = useState(null);

  const eventTime = moment().add(3, 'd').unix();
  const currentTime = moment().unix();
  const diffTime = eventTime - currentTime;
  const interval = 1000;

  const addZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const formatValue = () => {
    if (!currentValue) return '';

    return `${currentValue?.days()}d:${addZero(currentValue?.hours())}h:${addZero(currentValue?.minutes())}m:${addZero(
      currentValue?.seconds(),
    )}s`;
  };

  useEffect(() => {
    let duration = moment.duration(diffTime * 1000, 'milliseconds');

    setInterval(() => {
      duration = moment.duration(duration - interval, 'milliseconds');
      setCurrentValue(duration);
    }, interval);
  }, []);

  return <>{formatValue()}</>;
};

export default CountdownTimer;
