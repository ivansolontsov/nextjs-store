import Head from 'next/head'
import React from 'react'
import styles from '../styles/Favorites.module.css'
import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import Image from 'next/image'
import { Button } from 'antd'
import { IProduct } from '../store/products/productTypes'


const Category: FC = () => {
    const { favorites, cart } = useTypedSelector(state => state);
    const { removeFromFavorites } = useActions()
    const { addItem } = useActions()

    const isAlreadyAddedCart = (product: IProduct) => cart.some((i) => i.product.id === product.id) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ

    const handleRemoveFromFavorites = (id: number) => {
        removeFromFavorites({ id: id })
    }

    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="My page title" key="title" />
                <meta property="og:description" content="Lorem ipsum" key="description" />
            </Head>
            <section className={styles.favorites}>
                <h1 className="section__title">Favorites</h1>
                <div className={styles['favorites__cards-list']}>
                    {favorites.length === 0 && (
                        <h2>Your favorites list is empty...</h2>
                    )}
                    {favorites
                        ? favorites.map((item) => (
                            <div key={item.product.id} className={styles.favorites__card}>
                                <div className={styles['favorites__card-bottom']}>
                                    <h2>{item.product.title}</h2>
                                    <div className={styles['favorites__card-buttons']}>
                                        <Button className={styles.favorites__button} onClick={() => handleRemoveFromFavorites(item.product.id)}>
                                            Remove from Favorites
                                        </Button>
                                        <Button disabled={isAlreadyAddedCart(item.product)} className={styles.favorites__button} onClick={() => addItem(item.product)}>
                                            {isAlreadyAddedCart(item.product) ? 'Added' : 'Add To Cart'}
                                        </Button>
                                    </div>
                                </div>
                                <Image src={item.product.thumbnail} alt={item.product.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                        ))
                        : null}
                </div>
            </section>
        </>
    )
}


export default Category