import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import line from '../public/image/lightning.svg'
import arrowRight from '../public/image/icons/arrow-right.svg'
import Link from 'next/link'
import ProductCard from './productCards/ProductCard'
import { useGetCategoriesQuery } from '../store/categories/categoryApi'
import { Skeleton } from 'antd'
import { CATALOG_ROUTE, FAVORITES_ROUTE } from '../utils/consts'
import { useGetProductsByParametersQuery } from '../store/products/ProductApi'
import MotionLayout from './Layouts/MotionLayout'

type Props = {}

const Hero = (props: Props) => {

    const fetchCategories = useGetCategoriesQuery();
    const fetchProducts = useGetProductsByParametersQuery(['', 2])

    return (
        <div className={styles.hero}>
            <div className={styles['hero__info']}>
                <div className={styles['hero__info-header']}>
                    <h1 className={styles['hero__title']}>
                        Next Js <span>Pet Project</span>
                    </h1>
                    <div className={styles['hero__line-wrapper']}>
                        <Image src={line} fill alt='line' sizes='(max-width: 1600px) 427px' style={{ objectFit: 'contain', objectPosition: 'top left' }} />
                    </div>
                </div>
                <p className={styles['hero__subtitle']}>
                    Used React & Next.js, Redux Toolkit, RTK Query, Redux Persist, Antd, TypeScript.
                </p>
                <div className={styles['hero__button-group']}>
                    <Link href={CATALOG_ROUTE} className={styles['hero__button_primary']}>Catalog</Link>
                    <Link href={FAVORITES_ROUTE} className={styles['hero__button_secondary']}>Your Wish List <Image src={arrowRight} width={28} alt='Arrow Right' /></Link>
                </div>

                <div className={styles['hero__categories']}>
                    <h2 className={styles['hero__categories-title']}>
                        Categories that may be useful
                    </h2>
                    {fetchCategories.error ? (
                        <>
                            Error
                        </>
                    ) : fetchCategories.isLoading ? (
                        <ul className={styles['hero__categories-list']}>
                            <Skeleton.Button active size='small' shape='round' block={true} />
                        </ul>
                    ) : fetchCategories.data ? (
                        <div className={styles['hero__categories-list']}>
                            <Link href={`${CATALOG_ROUTE}`} className={`${styles['hero__categories-list-item_primary']} ${styles['hero__categories-list-item']} `}>All</Link>
                            {
                                fetchCategories.data.slice(0, 5).map((name, index) => (
                                    <Link key={index} href={`${CATALOG_ROUTE}/${name}`} className={styles['hero__categories-list-item']}>{name}</Link>
                                ))
                            }
                        </div>
                    ) : null}
                </div>
            </div>
            <MotionLayout classes={styles.hero__cards}>
                {fetchProducts.isLoading
                    ? (
                        <>
                            <ProductCard />
                            <ProductCard rotated={true} />
                        </>
                    )
                    : fetchProducts ? fetchProducts.data?.products.slice(0, 2).map((item, index) => (
                        <ProductCard productInfo={item} key={index} rotated={index > 0 ? true : false} />
                    )) : null}
            </MotionLayout>
        </div>
    )
}

export default Hero