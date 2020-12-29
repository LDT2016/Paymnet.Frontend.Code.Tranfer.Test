import { filterParams, getHiddenValue } from '../utils/common';
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
    const company = filterParams({
      title: getHiddenValue('company_title'),
      sub_line0: getHiddenValue('company_sub_line0'),
      sub_line1: getHiddenValue('company_sub_line1'),
      sub_line2: getHiddenValue('company_sub_line2'),
    });

    _mount && dispatch(companyInit(company));
    get('/api/Company').then((res) => {
      const companyData = Object.assign({}, res.data, company);
      _mount && dispatch(companyInit(companyData));
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
