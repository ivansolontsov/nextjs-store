import React from 'react'
import styles from '../../styles/ProductList.module.css'
import ProductCard from '../productCards/ProductCard'
import { IProduct } from '../../store/products/productTypes'

type Props = {
    productList?: IProduct[]
}

const ProductList: React.FC<Props> = ({ productList }) => {
    if (!productList) {
        return (
            <div className={styles['products__list']}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        )
    }
    return (
        <div className={styles['products__list']}>
            {productList?.map((product) => (
                <ProductCard
                    key={product.id}
                    productInfo={product} />
            ))}
        </div>
    )
}

export default ProductList