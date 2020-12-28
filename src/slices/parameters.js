import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  areaNo: 0,
};

const parametersSlice = createSlice({
  name: 'parameters',
  initialState: initialState,
  reducers: {
    setAreaNo(state, action) {
      state.areaNo = action.payload;
    },
    // sliceImageClick: {
    //   reducer(state, action) {
    //     let payload = action.payload;
    //     state.selectedImage = payload.image;
    //     state.previewDisplay = payload.previewDisplay;
    //     state.pageIndex = payload.pageIndex;
    //   },
    //   prepare(image) {
    //     return { payload: { previewDisplay: true, pageIndex: 0, image } };
    //   },
    // },
  },
});

export const { setAreaNo } = parametersSlice.actions;

export default parametersSlice.reducer;
