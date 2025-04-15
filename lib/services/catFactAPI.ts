import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type CatFactResponse = {
    fact: string;
    length: number;
};

export const catFactApi = createApi({
    reducerPath: 'catFactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://catfact.ninja/' }),
    endpoints: (builder) => ({
        getCatFact: builder.query<CatFactResponse, number>({
            query: (maxLength) => `fact?max_length=${maxLength}`,
        }),
    }),
});

export const { useGetCatFactQuery } = catFactApi;
