import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { get } from '../utils/request';
import { getPaymentInfo as getPaymentInfoSelector } from './selector';
import { init } from '../slices/paymentInfo';

const useSetup = () => {
  let _mount = true;
  const dispatch = useDispatch();
  const paymentInfo = useSelector(getPaymentInfoSelector);
  const setupTick = 10 * 1000;
  const [refreshTimer, setRefreshTimer] = useState(null);
  const getPaymentInfo = () => {
    get('/api/Payment').then((res) => {
      const payment = res.data;
      _mount && dispatch(init(payment));
    });
    getPaymentInfoTimeout();
  };
  const getPaymentInfoTimeout = () => {
    const timer = setTimeout(() => {
      getPaymentInfo();
    }, setupTick);
    _mount && setRefreshTimer(timer);
  };
  useEffect(() => {
    getPaymentInfo();
    return () => {
      !refreshTimer && clearTimeout(refreshTimer);
      // eslint-disable-next-line
      _mount = false;
    };
  }, []);
};

export default useSetup;
