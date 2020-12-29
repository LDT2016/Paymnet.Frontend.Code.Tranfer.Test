import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  sub_line0: '',
  sub_line1: '',
  sub_line2: '',
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
