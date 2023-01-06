import React from 'react'
import { Button } from 'antd'
import CreatorCard from './productCards/CreatorCard'
import { Inter } from '@next/font/google'
import styles from '../styles/Creators.module.css'
import { useGetAllUsersQuery } from '../store/users/UsersApi'
import LazyViewAnimate from './Layouts/LazyViewAnimate'

const inter = Inter({ weight: ['500'], subsets: [] })

type Props = {}

const Creators = (props: Props) => {

    const { data, isLoading, error } = useGetAllUsersQuery(9);

    return (
        <LazyViewAnimate classes={styles.creators}>
            <h2 className='section__title'>Our Creators</h2>
            <p className='section__subtitle'>
                The largest and unique Super rare NFT marketplace
                For crypto-collectibles</p>
            <div className={styles['creators__user-list']}>
                {error ? 'error'
                    : isLoading ? (
                        <>
                            Loading...
                        </>
                    )
                        : data ? (
                            <>
                                {data.users.map((user) => (
                                    <CreatorCard key={user.id} user={user} />
                                ))}
                            </>
                        ) : null}
            </div>
            <Button type="default" className={`section__more-button ${inter.className}`}>Explore More</Button>
        </LazyViewAnimate>
    )
}

export default Creators