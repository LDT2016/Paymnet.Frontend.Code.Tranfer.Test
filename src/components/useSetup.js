import { useEffect, useState } from 'react';

import { get } from '../utils/request';
import { init } from '../slices/paymentInfo';
import { useDispatch } from 'react-redux';

const useSetup = () => {
  let _mount = true;
  const dispatch = useDispatch();
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
