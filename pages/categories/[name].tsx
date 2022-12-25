import Head from 'next/head'
import React from 'react'
import { FC } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Category.module.css'
import ProductCard from '../../components/ProductCard'
import { useGetProductsByCategoryQuery } from '../../store/products/ProductApi'
import { useState, useEffect } from 'react'
import { Button, Skeleton } from 'antd'
import { Inter } from '@next/font/google'

const inter = Inter({ weight: ['500'], subsets: [] })

const Category: FC = () => {
    const router = useRouter()
    const { name } = router.query
    const [limit, setLimit] = React.useState(20)
    const [total, setTotal] = React.useState(0)
    const [disabled, setDisabled] = React.useState(true)
    const fetching = useGetProductsByCategoryQuery(name)

    useEffect(() => {
        setTotal(fetching.data?.total || 0)
    }, [fetching])

    useEffect(() => {
        if (limit >= total) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [total, limit])

    const handleClick = () => {
        setLimit(prev => prev + 20)
    }

    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="My page title" key="title" />
                <meta property="og:description" content="Lorem ipsum" key="description" />
            </Head>
            <section className={styles['products']}>
                {fetching.error ? (
                    <h2>
                        Error
                    </h2>
                ) : fetching.isLoading ? (
                    <>
                        <Skeleton.Input active style={{marginBottom: '30px'}}/>
                        <div className={styles['products__wrapper']}>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </>
                ) : fetching.data ? (
                    <>
                        <h2 className="section__title">{name} ({total})</h2>
                        <div className={styles['products__wrapper']}>
                            {fetching.data.products.slice(0, limit).map((item) => (
                                <ProductCard
                                    key={item.id}
                                    productInfo={item} />
                            ))}
                        </div>
                    </>
                ) : null}
            </section>
            <Button disabled={disabled} onClick={() => handleClick()} type='default' className={`section__more-button ${inter.className}`}>More</Button>
        </>
    )
}


export default Category