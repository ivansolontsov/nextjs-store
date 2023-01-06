import Head from 'next/head'
import React, { FC, useState, useEffect } from 'react'
import styles from '../../styles/Catalog.module.css'
import { Col, Row, Button, Spin } from 'antd'
import CategoryBar from '../../components/catalog/CategoryBar'
import ProductList from '../../components/catalog/ProductList'
import { useGetProductsByParametersQuery } from '../../store/products/ProductApi'
import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['400'], subsets: ['latin'], style: ['normal'], })


type Props = {
  categoryName: string
}

const Catalog: React.FC<Props> = ({ categoryName }) => {
  const [limit, setLimit] = React.useState<number>(21);
  const [total, setTotal] = React.useState<number>(0);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const { data, isLoading, isFetching } = useGetProductsByParametersQuery([categoryName || '', limit]);

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
        <title>{categoryName || 'Catalog'}</title>
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
              {categoryName
                ? categoryName
                : 'Catalog'
              }
            </h1>
            {isLoading
              ? <ProductList />
              : <ProductList productList={data?.products.slice(0, limit)} />
            }
            {isFetching
              ? <Spin size='large' style={{ width: '100%', margin: '0 auto', padding: '80px 0px' }} />
              : ''
            }
            <Button disabled={disabled} onClick={() => handleShowMore()} type='default' style={{ marginTop: '40px' }} className={`section__more-button ${inter.className}`}>
              {isFetching
                ? (
                  <>
                    More
                    <Spin style={{ marginLeft: '10px' }} size='small' />
                  </>
                )
                : 'More'
              }
            </Button>
          </Col>
        </Row>
      </section>
    </>
  )
}


export default Catalog