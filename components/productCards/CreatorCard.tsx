import React from 'react'
import Image from 'next/image'
import iphImg from '../../public/image/iphone.jpeg'
import ethImg from '../../public/image/eth.svg'
import { Inter } from '@next/font/google'
import styles from '../../styles/Creators.module.css'


const inter = Inter({ weight: ['500'], subsets: [] })

type Props = {}

const CreatorCard = (props: Props) => {
    return (
        <div className={styles['creators__user-item']}>
            <div className={styles['creators__user-avatar']}>
                <Image src={iphImg} fill alt="Username" sizes='(max-width:1600px) 56px' />
            </div>
            <div className={styles['creators__user-info']}>
                <h3 className={styles['creators__username']}>Emerson Philips</h3>
                <h4 className={styles['creators__price']}><Image src={ethImg} width={16} height={16} alt="Etherum" /> 3.2 ETH</h4>
            </div>
            <button className={`${styles['creators__follow-button']} ${inter.className}`}>Follow</button>
        </div>
    )
}

export default CreatorCard