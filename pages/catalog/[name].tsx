import React, { FC } from "react"
import { CategoryApi } from "../../store/categories/categoryApi"
import { ProductApi } from "../../store/products/ProductApi"
import { makeStore, wrapper } from "../../store/store"
import { CATALOG_ROUTE } from "../../utils/consts"
import Catalog from "./index"

type Props = {
    name: { name: string }
}

const CategoryPage: React.FC<Props> = ({ name }) => { return <Catalog categoryName={name.name} /> }

export default CategoryPage

export async function getStaticPaths() {
    const store = makeStore();
    const result = await store.dispatch(CategoryApi.endpoints.getCategories.initiate());

    return {
        paths: result.data?.map((categoryName) => `${CATALOG_ROUTE}/${categoryName}`),
        fallback: false,
    };
}

export const getStaticProps = wrapper.getStaticProps(
    (store) => async (context) => {
        const name = context.params
        store.dispatch(ProductApi.endpoints.getProductsByParameters.initiate([String(name), 1000]));
        await Promise.all(store.dispatch(ProductApi.util.getRunningQueriesThunk()));
        return {
            props: {
                name
            },
        };
    }
);