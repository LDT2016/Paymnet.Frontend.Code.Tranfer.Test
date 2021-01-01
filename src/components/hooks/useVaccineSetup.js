import { filterParams, getHiddenValue } from '../../utils/common';
import {
  getCurrentQueueListPageIndex,
  getCurrentQueueListPageLoad,
} from '../selector';
import {
  init as queueHistInit,
  setPageFlipTick,
  setPageIndex as setQueuePageIndex,
  setQueuePageLoad,
} from '../../slices/queueHistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { QUEUE_LIST_PAGESIZE } from '../../utils/constants';
import { init as companyInit } from '../../slices/companyInfo';
import { get } from '../../utils/request';

const useVaccineSetup = () => {
  let _mount = true;
  const dispatch = useDispatch();

  const listQueryTick = 10 * 1000 * 2;
  const [refreshTimer, setRefreshTimer] = useState(null);

  const pageFlipTick = useSelector((state) => state.queueHist.pageFlipTick);
  const [pageFlipTimer, setPageFlipTimer] = useState(null);

  const getCompanyInfo = () => {
    const company = filterParams({
      title: getHiddenValue('company_title'),
      sub_line0: getHiddenValue('company_sub_line0'),
    });
    const pageFlipTick = filterParams({
      tick: parseInt(getHiddenValue('hidPageFlipSecond')) * 1000,
    });
    dispatch(companyInit(company));
    dispatch(setPageFlipTick(pageFlipTick));
    get('/api/Company').then((res) => {
      const companyData = Object.assign({}, res.data, company);
      _mount && dispatch(companyInit(companyData));
    });
  };

  const getQueueList = () => (dispatch) => {
    get('/api/Vaccine').then((res) => {
      dispatch(queueHistInit({ list: res.data }));
      //dispatch(getQueueListPageFlip());
    });
    getQueueListTimeout();
  };

  const getQueueListTimeout = () => {
    !refreshTimer && clearTimeout(refreshTimer);
    const timer = setTimeout(() => {
      dispatch(getQueueList());
    }, listQueryTick);
    _mount && setRefreshTimer(timer);
  };

  const getQueueListPageFlip = () => (dispatch, getState) => {
    const state = getState();
    const list = state.queueHist.list;
    if (list.length > 0) {
      const totalPages = Math.ceil(list.length / QUEUE_LIST_PAGESIZE);
      const isPostLoad = getCurrentQueueListPageLoad(state);
      if (totalPages > 1) {
        const currentQueueListPageIndex = getCurrentQueueListPageIndex(state);
        const currentPageNumber = currentQueueListPageIndex + 1;
        if (currentPageNumber >= totalPages || isPostLoad) {
          dispatch(setQueuePageIndex({ index: 0 }));
        } else {
          dispatch(setQueuePageIndex({ index: currentPageNumber }));
        }
      } else {
        dispatch(setQueuePageIndex({ index: 0 }));
      }
      isPostLoad && dispatch(setQueuePageLoad());
    }
    getQueueListPageFlipTimeout();
  };

  const getQueueListPageFlipTimeout = () => {
    !pageFlipTimer && clearTimeout(pageFlipTimer);
    const timer = setTimeout(() => {
      dispatch(getQueueListPageFlip());
    }, pageFlipTick);
    _mount && setPageFlipTimer(timer);
  };

  useEffect(() => {
    getCompanyInfo();
    dispatch(getQueueList());
    dispatch(getQueueListPageFlip());
    return () => {
      !refreshTimer && clearTimeout(refreshTimer);
      // eslint-disable-next-line
      _mount = false;
    };
  }, []);
};

export default useVaccineSetup;
