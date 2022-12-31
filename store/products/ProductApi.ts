import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IProductRootObject } from "./productTypes";
import { HYDRATE } from 'next-redux-wrapper'

export const ProductApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        getProductsByParameters: build.query<IProductRootObject, [string, number]>({
            query: ([name, limit]) => `products${name ? '/category/' + name : ''}?limit=${limit}`,
            providesTags: ['Product'],
        }),
        getProductById: build.query<IProduct, number>({
            query: (id) => `products/${id}`,
            providesTags: ['Product'],
        }),
        getAllProducts: build.query<IProductRootObject, void>({
            query: () => `products?limit=1000`,
            providesTags: ['Product'],
        }),
    })
})

export const { useGetProductsByParametersQuery, useGetProductByIdQuery, useGetAllProductsQuery } = ProductApi