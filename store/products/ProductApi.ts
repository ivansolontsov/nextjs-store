import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IRootObject } from "./productTypes";

export const ProductApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getProductsByCategory: build.query<IRootObject, string>({
            query: (name) => `products/category/${name}`,
            providesTags: ['Product'],
        }),
        getProducts: build.query<IRootObject, number>({
            query: (limit = 20) => `products?limit=${limit}`,
            providesTags: ['Product'],
        }),
        getProductById: build.query<IProduct, number>({
            query: (id) => `products/${id}`,
            providesTags: ['Product'],
        }),
    })
})

export const { useGetProductsByCategoryQuery, useGetProductsQuery, useGetProductByIdQuery } = ProductApi
