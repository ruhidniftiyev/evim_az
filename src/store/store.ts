import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { houseAPI } from '../services/HouseService';
import houseSlice from './slices/HouseSlice';
import langSlice from './slices/LanguageSlice';
import favoritesSlice from './slices/FavoritesSlice';

const rootReducer = combineReducers({
  houseSlice,
  langSlice,
  favoritesSlice,
  [houseAPI.reducerPath]: houseAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(houseAPI.middleware),
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
