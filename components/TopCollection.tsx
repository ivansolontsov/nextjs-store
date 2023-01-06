import { Button } from 'antd'
import React from 'react'
import styles from '../styles/Collection.module.css'
import CollectionCard from './productCards/CollectionCard'

import { Inter } from '@next/font/google'
import LazyViewAnimate from './Layouts/LazyViewAnimate'
const inter = Inter({ weight: ['500'], subsets: [] })

type Props = {}

const TopCollection = (props: Props) => {
    return (
        <LazyViewAnimate classes={styles.collection}>
            <h2 className="section__title">Top Collection</h2>
            <p className="section__subtitle">
                The largest and unique Super rare NFT marketplace
                For crypto-collectibles
            </p>
            <div className={styles['collection__cards']}>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
            <Button type="default" className={`section__more-button ${inter.className}`}>Explore More</Button>
        </LazyViewAnimate>
    )
}

export default TopCollection