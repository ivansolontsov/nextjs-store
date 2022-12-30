import { Button } from 'antd'
import React from 'react'
import styles from '../styles/Collection.module.css'
import CollectionCard from './productCards/CollectionCard'

import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['500'], subsets: [] })

type Props = {}

const TopCollection = (props: Props) => {
    return (
        <section className={styles['collection']}>
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
        </section>
    )
}

export default TopCollection