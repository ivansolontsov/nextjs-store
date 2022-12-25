import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const CategoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Category'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getCategories: build.query<[], string>({
            query: () => `products/categories`,
            providesTags: ['Category'],
        }),
    })
})

export const { useGetCategoriesQuery } = CategoryApi