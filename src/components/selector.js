import { createSelector } from 'reselect';

export const getPaymentInfo = createSelector(
  (state) => state,
  (state) => state.paymentInfo
);

export const getCompanyInfo = createSelector(
  (state) => state,
  (state) => state.companyInfo
);
