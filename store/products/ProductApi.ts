import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IRootObject } from "./productTypes";

export const ProductApi = createApi({
    reducerPath: 'apiProduct',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getProducts: build.query<IRootObject, number>({
            query: (limit) => `products?limit=${limit}`,
            providesTags: ['Product'],
        }),
        getProductById: build.query<IProduct, number>({
            query: (id) => `products/${id}`,
            providesTags: ['Product'],
        })
    })
})

export const { useGetProductsQuery } = ProductApi
