import { configureStore } from '@reduxjs/toolkit';
import houseSlice from './slices/HouseSlice';

export const store = configureStore({
  reducer: {
    houseSlice,
  },
});
