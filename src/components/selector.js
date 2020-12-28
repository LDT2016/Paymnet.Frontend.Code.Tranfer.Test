import { createSelector } from 'reselect';

export const getPaymentInfo = createSelector(
  (state) => state,
  (state) => state.getPaymentInfo
);
