import Head from 'next/head'
import React from 'react'
import { FC } from 'react'
import styles from '../styles/Products.module.css'
import ProductCard from '../components/ProductCard'
import { useGetProductsQuery } from '../store/products/ProductApi'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['500'], subsets: [] })


const Products: FC = () => {
  const [more, setMore] = React.useState(20)
  const [disabled, setDisabled] = React.useState(false);
  const { data, isLoading, error } = useGetProductsQuery(more, { skip: !more })

  const handleClick = () => {
    setMore(prev => prev + 20)
  }

  useEffect(() => {
    if (more >= 100) {
      setDisabled(true)
    }
  }, [more])

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="Lorem ipsum" key="description" />
      </Head>
      <h2 className="section__title">Products</h2>
      <section className={styles['products']}>

        {error ? (
          <h2>
            Error
          </h2>
        ) : isLoading ? (
          <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </>
        ) : data ? (
          <>
            {data.products.slice(0, more).map((item) => (
              <ProductCard
                isBig={true}
                key={item.id}
                productInfo={item} />
            ))}
          </>
        ) : null}
      </section>
      <Button disabled={disabled} onClick={() => handleClick()} type='default' className={`section__more-button ${inter.className}`}>More</Button>
    </>
  )
}


export default Products