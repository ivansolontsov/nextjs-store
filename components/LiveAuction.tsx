import React from 'react'
import ProductCard from './productCards/ProductCard'

import styles from '../styles/Auction.module.css'
import { useGetProductsByParametersQuery } from '../store/products/ProductApi'
import LazyViewAnimate from './Layouts/LazyViewAnimate'

type Props = {}

const LiveAuction = (props: Props) => {

  const { data, isLoading, error } = useGetProductsByParametersQuery(['', 6])

  return (
    <LazyViewAnimate classes={styles['auction']}>
      <h2 className='section__title'>Live Auction</h2>
      <p className='section__subtitle'>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
      <div className={styles['auction__card-wrapper']}>
        {
          isLoading
            ? (
              <>
                <ProductCard isBig={true} />
                <ProductCard isBig={true} />
                <ProductCard isBig={true} />
              </>
            )
            : data
              ? data.products.slice(3, 6).map((item, index) => (
                <ProductCard key={index} productInfo={item} isBig={true} />
              ))
              : null
        }
      </div>
    </LazyViewAnimate>
  )
}

export default LiveAuction