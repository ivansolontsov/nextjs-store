import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IRootObject } from "./productTypes";

export const ProductApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getProducts: build.query<IRootObject, number>({query: (limit:number) => `products?limit=${limit}`})
    })
})

export const { useGetProductsQuery } = ProductApi