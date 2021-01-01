import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  pageIndex: 0,
  isPostLoad: true,
  pageFlipTick: 1000 * 10 * 1,
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
    setPageFlipTick(state, action) {
      const { tick } = action.payload;
      tick &&
        (() => {
          state.pageFlipTick = tick;
        })();
    },
  },
});

export const {
  init,
  hide,
  setPageIndex,
  setQueuePageLoad,
  setPageFlipTick,
} = queueHistSlice.actions;

export default queueHistSlice.reducer;
