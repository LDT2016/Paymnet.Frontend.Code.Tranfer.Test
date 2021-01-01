import { QUEUE_LIST_PAGESIZE } from '../utils/constants';
import { createSelector } from 'reselect';

export const getPaymentInfo = createSelector(
  (state) => state,
  (state) => state.paymentInfo
);

export const getCompanyInfo = createSelector(
  (state) => state,
  (state) => state.companyInfo
);

export const getQueueList = createSelector(
  (state) => state.queueHist,
  (queueHist) => {
    const { list, pageIndex } = queueHist;
    const effectList = list.filter((x) => x.remainMins > 0);
    const pgNumber = pageIndex;
    const pageSize = QUEUE_LIST_PAGESIZE;
    const totalCount = effectList.length;
    const sliceStart = pgNumber * pageSize;
    const sliceEnd = Math.min((pgNumber + 1) * pageSize, totalCount);
    const datalist = effectList.slice(sliceStart, sliceEnd);
    return datalist;
  }
);
export const getCurrentQueueListPageIndex = createSelector(
  (state) => state.queueHist,
  (queueHist) => queueHist.pageIndex
);

export const getCurrentQueueListPageLoad = createSelector(
  (state) => state.queueHist,
  (queueHist) => queueHist.isPostLoad
);
