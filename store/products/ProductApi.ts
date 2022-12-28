import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IRootObject } from "./productTypes";

export const ProductApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getProductsByParameters: build.query<IRootObject, [string, number]>({
            query: ([name, limit]) => `products${name ? '/category/' + name : ''}?limit=${limit}`,
            providesTags: ['Product'],
        }),
        getProductById: build.query<IProduct, number>({
            query: (id) => `products/${id}`,
            providesTags: ['Product'],
        }),
    })
})

export const { useGetProductsByParametersQuery, useGetProductByIdQuery } = ProductApi