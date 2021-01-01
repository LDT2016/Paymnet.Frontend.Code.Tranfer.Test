import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  pageIndex: 0,
  isPostLoad: true,
};

const queueHistSlice = createSlice({
  name: 'queueHist',
  initialState: initialState,
  reducers: {
    init(state, action) {
      const { list } = action.payload;
      state.list = list;
    },
    hide(state, action) {
      const { id } = action.payload;
      state.list = state.list.filter((x) => x.id !== id);
    },
    setPageIndex(state, action) {
      const { index } = action.payload;
      state.pageIndex = index;
    },
    setQueuePageLoad(state) {
      state.isPostLoad = false;
    },
  },
});

export const {
  init,
  hide,
  setPageIndex,
  setQueuePageLoad,
} = queueHistSlice.actions;

export default queueHistSlice.reducer;
