import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  patients: '',
  accountReal: 0,
  accountDue: 0,
  accountChange: 0,
  accountRemain: 0,
  paymentType: '',
  doctorName: '',
  doctorNo: '',
  doctorPhoto: null,
};

const paymentInfoSlice = createSlice({
  name: 'paymentInfo',
  initialState: initialState,
  reducers: {
    init(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { init } = paymentInfoSlice.actions;

export default paymentInfoSlice.reducer;
