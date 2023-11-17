import { createSlice } from '@reduxjs/toolkit';

const initialStore = {};

const houseSlice = createSlice({
  name: 'house',
  initialState: initialStore,
  reducers: {
    add: () => 1 + 1,
  },
});

export default houseSlice.reducer;

export const { add } = houseSlice.actions;
