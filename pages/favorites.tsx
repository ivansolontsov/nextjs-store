import Head from 'next/head'
import React from 'react'
import styles from '../styles/favorites.module.css'
import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'


const Category: FC = () => {
    const { favorites } = useTypedSelector(state => state);
    const { removeFromFavorites } = useActions()
    const { addItem } = useActions()

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
                    {
                        favorites.map((product) => (
                            <div key={product.id} className={styles['favorites__card']}>
                                {product.title}
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}


export default Category