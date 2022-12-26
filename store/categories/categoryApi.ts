import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const CategoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['catgories'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getCategories: build.query<string[], void>({
            query: () => `products/categories`,
            providesTags: ['catgories'],
        }),
    })
})

export const { useGetCategoriesQuery } = CategoryApi