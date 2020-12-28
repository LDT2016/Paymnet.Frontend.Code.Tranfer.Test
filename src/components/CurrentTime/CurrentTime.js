import React, { useEffect, useState } from 'react';

import styles from './CurrentTime.module.scss';

const CurrentTimer = () => {
  let _mount = true;
  const refreshTick = 30 * 1000;
  const [currentTime, setCurrentTime] = useState(null);
  const [refreshTimer, setRefreshTimer] = useState(null);
  const getCurrentTime = () => {
    const nowTime = new Date();
    _mount &&
      setCurrentTime(
        `${nowTime
          .getHours()
          .toString()
          .padStart(2, '0')}:${nowTime
          .getMinutes()
          .toString()
          .padStart(2, '0')}`
      );
    getCurrentTimeTimeout();
  };
  const getCurrentTimeTimeout = () => {
    const timer = setTimeout(() => {
      getCurrentTime();
    }, refreshTick);
    _mount && setRefreshTimer(timer);
  };
  useEffect(() => {
    getCurrentTime();
    return () => {
      !refreshTimer && clearTimeout(refreshTimer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      _mount = false;
    };
  }, []);
  return (
    <>
      <div className={styles['currenttime']}>{currentTime}</div>
    </>
  );
};

export default CurrentTimer;
