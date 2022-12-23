import axios from "axios";

const $host = axios.create({
    baseURL: 'https://dummyjson.com'
})


export const fetchAllProducts = async (limit = 24) => {
    const { data } = await $host.get('/products', {
        params: {
            limit
        }
    })
    return data
}

export const fetchAllCategories = async () => {
    const { data } = await $host.get('/products/categories')
    return data
}