import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchUser, postUser } from '../thunks/UsersFetch';

const initialState = {
  allUsers: [],
  isLoading: false,
  loadingError: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
        state.loadingError = '';
      })
      .addCase(postUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.loadingError = '';
        state.allUsers = action.payload;
      })
      .addCase(postUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.loadingError = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
          
      })
  },
});

export default userSlice.reducer;

export const {} = userSlice.actions;
