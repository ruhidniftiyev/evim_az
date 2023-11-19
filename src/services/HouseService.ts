import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IHouse } from '../models/IHouse';

export const houseAPI = createApi({
  reducerPath: 'houseAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (build) => ({
    fetchAllHouses: build.query<IHouse[], number>({
      query: () => ({
        url: '/houses',
      }),
    }),
    createHouse: build.mutation<IHouse, IHouse>({
      query: (house) => ({
        url: '/houses',
        method: 'POST',
        body: house,
      }),
    }),
  }),
});
