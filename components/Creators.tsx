import React from 'react'
import { Button } from 'antd'
import CreatorCard from './CreatorCard'
import { Inter } from '@next/font/google'
import styles from '../styles/Creators.module.css'

const inter = Inter({ weight: ['500'], subsets: [] })

type Props = {}

const Creators = (props: Props) => {
    return (
        <section className={styles['creators']}>
            <h2 className={styles['section__title']}>Our Creators</h2>
            <p className={styles['section__subtitle']}>
                The largest and unique Super rare NFT marketplace
                For crypto-collectibles</p>
            <div className={styles['creators__user-list']}>
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
            </div>
            <Button type="default" className={`section__more-button ${inter.className}`}>Explore More</Button>
        </section>
    )
}

export default Creators