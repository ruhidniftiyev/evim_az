import { createSlice } from '@reduxjs/toolkit';

const initialStore = {};

const houseSlice = createSlice({
  name: 'house',
  initialState: initialStore,
  reducers: {},
});

export default houseSlice.reducer;

export const {} = houseSlice.actions;
