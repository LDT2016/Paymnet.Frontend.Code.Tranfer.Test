import { createSelector } from 'reselect';

export const getAreaNo = createSelector(
  (state) => state,
  (state) => state.parameters.areaNo
);
