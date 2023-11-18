import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  loadingError: '',
};

const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    housesFetching(state) {
      state.isLoading = true;
    },
    housesFetchingSuccess(state) {
      state.isLoading = false;
    },
    housesFetchingError(state, action: PayloadAction<any>) {
      state.isLoading = true;
      state.loadingError = action.payload;
    },
  },
});

export default houseSlice.reducer;

export const { housesFetching, housesFetchingSuccess, housesFetchingError } = houseSlice.actions;
