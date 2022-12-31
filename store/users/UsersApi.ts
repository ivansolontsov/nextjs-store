import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUsersRootObject } from "./usersType";
export const UsersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (build) => ({
        getAllUsers: build.query<IUsersRootObject, number>({
            query: (limit = 20) => `users?limit=${limit}`,
            providesTags: ['Users'],
        }),
    })
})

export const { useGetAllUsersQuery } = UsersApi