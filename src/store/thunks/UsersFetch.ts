import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postUser = createAsyncThunk('user/postUser', async (userData: any, thunkAPI) => {
  try {
    const response = await axios.post<any>('http://localhost:5000/users', userData);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Uğursuz cəhd!');
  }
});
