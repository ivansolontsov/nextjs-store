import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IRootObject } from "../products/productTypes";


export const SearchApi = createApi({
    reducerPath: 'searchApi',
    tagTypes: ['Search'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getSearchResults: build.query<IRootObject, string>({
            query: (request) => `https://dummyjson.com/products/search?q=${request}`,
            providesTags: ['Search'],
        }),
    })
})

export const { useGetSearchResultsQuery } = SearchApi