import Head from 'next/head'
import React, { FC, useState, useEffect } from 'react'
import styles from '../../styles/Catalog.module.css'
import { Col, Row, Button } from 'antd'
import CategoryBar from '../../components/catalog/CategoryBar'
import ProductList from '../../components/catalog/ProductList'
import { useGetProductsByParametersQuery } from '../../store/products/ProductApi'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
const inter = Inter({ weight: ['400'], subsets: ['latin'], style: ['normal'], })

const Catalog: FC = () => {
  const [limit, setLimit] = React.useState(21);
  const [total, setTotal] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const { query } = useRouter()
  const checkPage = () => query.name ? query.name : '' // если мы на странице категории, то передаем в запрос имя категории, если нет, то мы получим все товары
  const { data, isLoading, isFetching } = useGetProductsByParametersQuery([String(checkPage()), limit]);

  useEffect(() => {
    setTotal(data?.total || 0)
    if (limit >= total) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [isFetching, total, limit])

  const handleShowMore = () => {
    setLimit(prev => prev + 21)
  }

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="Lorem ipsum" key="description" />
      </Head>
      <section className={styles['catalog']}>
        <Row gutter={20}>
          <Col span={6}>
            <CategoryBar />
          </Col>
          <Col span={18}>
            <h1 className="section__title" style={{ textAlign: 'left' }}>
              {query.name
                ? query.name
                : 'Catalog'
              }
            </h1>
            {isLoading
              ? <ProductList />
              : <ProductList productList={data?.products.slice(0, limit)} />
            }
            <Button disabled={disabled} onClick={() => handleShowMore()} type='default' style={{ marginTop: '40px' }} className={`section__more-button ${inter.className}`}>More</Button>
          </Col>
        </Row>
      </section>
    </>
  )
}


export default Catalog