import Head from 'next/head'
import React from 'react'
import styles from '../styles/Products.module.css'
import ProductCard from '../components/ProductCard'
import { useGetProductsQuery } from '../store/products/ProductApi'
import { useState } from 'react'

const Products = () => {

  const [more, setMore] = React.useState(18)
  const { data, isLoading, error } = useGetProductsQuery(more)
  

  const handleClick = () => {
    setMore(prev => prev + 18)
  }

  if (error) {
    alert('ERROR')
  }
  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }
  if (data) {
    return (
      <>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="My page title" key="title" />
          <meta property="og:description" content="Lorem ipsum" key="description" />
        </Head>
        <section className={styles['products']}>
            {data.products.slice(0, more).map((item) => (
              <ProductCard cardInfo={item} isBig={true} />
            ))}
        </section>
        <button onClick={() => handleClick()}>More Products</button>
      </>
    )
  }
}

export default Products