import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQueryWithHeaders = fetchBaseQuery({
    baseUrl: process.env.API_HOST,
    prepareHeaders: (headers, { getState }) => {
        return headers;
    },
});

export const baseQuery: ReturnType<typeof fetchBaseQuery> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQueryWithHeaders(args, api, extraOptions);

    return result;
};
