import { useEffect, useState } from 'react';

import { init as companyInit } from '../slices/companyInfo';
import { get } from '../utils/request';
import { init as paymentInit } from '../slices/paymentInfo';
import { useDispatch } from 'react-redux';

const useSetup = () => {
  let _mount = true;
  const dispatch = useDispatch();
  const setupTick = 10 * 1000;
  const [refreshTimer, setRefreshTimer] = useState(null);
  const getPaymentInfo = () => {
    get('/api/Payment').then((res) => {
      const payment = res.data;
      _mount && dispatch(paymentInit(payment));
    });
    getPaymentInfoTimeout();
  };
  const getCompanyInfo = () => {
    get('/api/Company').then((res) => {
      const company = res.data;
      _mount && dispatch(companyInit(company));
    });
  };
  const getPaymentInfoTimeout = () => {
    const timer = setTimeout(() => {
      getPaymentInfo();
    }, setupTick);
    _mount && setRefreshTimer(timer);
  };
  useEffect(() => {
    getPaymentInfo();
    getCompanyInfo();
    return () => {
      !refreshTimer && clearTimeout(refreshTimer);
      // eslint-disable-next-line
      _mount = false;
    };
  }, []);
};

export default useSetup;
