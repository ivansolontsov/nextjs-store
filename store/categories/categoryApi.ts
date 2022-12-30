import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from 'next-redux-wrapper'

export const CategoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['catgories'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        getCategories: build.query<string[], void>({
            query: () => `products/categories`,
            providesTags: ['catgories'],
        }),
    })
})

export const { useGetCategoriesQuery } = CategoryApi