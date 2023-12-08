import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IHouse } from '../../models/IHouse';

export const fetchHouses = createAsyncThunk('house/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IHouse[]>('http://localhost:5000/houses');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Uğursuz cəhd!');
  }
});

