import { createSlice } from '@reduxjs/toolkit';

const initialStore = {
  langugeList: [
    { lang: 'Azərbaycan', desc: 'AZ' },
    { lang: 'Rus', desc: 'RU' },
    { lang: 'İnglis', desc: 'EN' },
  ],
};

const langSlice = createSlice({
  name: 'lang',
  initialState: initialStore,
  reducers: {
    
  },
});

export default langSlice.reducer;

export const {} = langSlice.actions;
