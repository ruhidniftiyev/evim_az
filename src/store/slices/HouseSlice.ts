import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchHouses } from '../thunks/HousesFetch';
import { IHouse } from '../../models/IHouse';

interface IHouseState {
  isLoading: boolean;
  loadingError: string;
  allHouses: IHouse[];
  favorites: IHouse[];
}

const initialState: IHouseState = {
  isLoading: false,
  loadingError: '',
  allHouses: [],
  favorites: [],
};

const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    addToFavoritesAction(state, action: PayloadAction<number>) {
      let selectedHouse: any = state.allHouses.find((el) => el.id === action.payload);
      let isWasSelected = state.favorites.filter((el) => el.id === action.payload);
      if (isWasSelected.length === 0 && !selectedHouse.selected) {
        state.favorites.push({ ...selectedHouse, selected: true });
      } else {
        state.favorites = state.favorites.map((el) =>
          el.id === action.payload ? { ...el, selected: false } : el,
        );
        state.favorites = state.favorites.filter((el) => el.id !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.isLoading = true;
        state.loadingError = '';
      })
      .addCase(fetchHouses.fulfilled, (state, action: PayloadAction<IHouse[]>) => {
        state.isLoading = false;
        state.loadingError = '';
        state.allHouses = action.payload; // Используем иммутабельное обновление
      })
      .addCase(fetchHouses.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.loadingError = action.payload;
      });
  },
});

export default houseSlice.reducer;

export const { addToFavoritesAction } = houseSlice.actions;
