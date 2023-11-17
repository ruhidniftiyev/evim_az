import { createSlice } from '@reduxjs/toolkit';

const initialStore = {
  favorites: [],
};

const houseSlice = createSlice({
  name: 'house',
  initialState: initialStore,
  reducers: {},
});

export default houseSlice.reducer;

export const {} = houseSlice.actions;
