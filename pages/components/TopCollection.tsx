import { Button } from 'antd'
import React from 'react'
import CollectionCard from './CollectionCard'

import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['500'], subsets: [] })

type Props = {}

const TopCollection = (props: Props) => {
    return (
        <section className={`collection`}>
            <h2 className="section__title">Top Collection</h2>
            <p className="section__subtitle">
                The largest and unique Super rare NFT marketplace
                For crypto-collectibles
            </p>
            <div className="collection__cards">
               <CollectionCard />
               <CollectionCard />
               <CollectionCard />
            </div>
            <Button type="default" className={`section__more-button ${inter.className}`}>Explore More</Button>
        </section>
    )
}

export default TopCollection