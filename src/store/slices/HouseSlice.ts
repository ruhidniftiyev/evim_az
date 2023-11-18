import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  isLoading: false,
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
  },
});

export default houseSlice.reducer;

export const { housesFetching, housesFetchingSuccess } = houseSlice.actions;
