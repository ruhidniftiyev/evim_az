import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import LanguageSlice from './LanguageSlice';

const initialState = {
  allHouses: [],
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    fetchAllHousesAction(state, action: PayloadAction<any>) {
      state.allHouses = action.payload;
    },
    addToFavoritesAction(state, action: PayloadAction<number>) {
      let houseId = state.allHouses.findIndex((el: any) => el.id === action.payload);
      let checkCurrentHouse = state.favorites.find((el: any) => el.id === action.payload);
      if (!checkCurrentHouse) {
        state.favorites.push(state.allHouses[houseId]);
      }
    },
  },
});

export default favoritesSlice.reducer;

export const { fetchAllHousesAction, addToFavoritesAction } = favoritesSlice.actions;
