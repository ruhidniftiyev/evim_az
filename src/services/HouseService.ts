import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const houseAPI = createApi({
  reducerPath: 'houseAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (build) => ({
    fetchAllHouses: build.query({
      query: () => ({
        url: '/houses',
      }),
    }),
  }),
});
