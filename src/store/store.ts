import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import houseSlice from './slices/HouseSlice';
import { houseAPI } from '../services/HouseService';

const rootReducer = combineReducers({
  houseSlice,
  [houseAPI.reducerPath]: houseAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(houseAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
