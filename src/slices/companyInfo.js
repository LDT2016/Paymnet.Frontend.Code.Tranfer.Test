import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  subTitle: {
    line0: '',
    line1: '',
    line2: '',
  },
};

const companyInfoSlice = createSlice({
  name: 'companyInfo',
  initialState: initialState,
  reducers: {
    init(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { init } = companyInfoSlice.actions;

export default companyInfoSlice.reducer;
