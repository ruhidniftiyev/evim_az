import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import houseSlice from './slices/HouseSlice';
import { houseAPI } from '../services/HouseService';

export const store = () => {
  return configureStore({
    reducer: {
      houseSlice,
      [houseAPI.reducerPath]: houseAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(houseAPI.middleware),
  });
};
