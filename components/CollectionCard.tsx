import React from 'react'
import Image from 'next/image'
import iphImg from '../public/image/iphone.jpeg'
import styles from '../styles/Collection.module.css'


type Props = {}

const CollectionCard = (props: Props) => {
    return (
        <div className={styles['collection__cards-item']}>
            <div className={styles['collection__card-header']}>
                <small className='collection__card-created-text'>Created by</small>
                <h3 className={styles['collection__card-creator']}>James Watson</h3>
            </div>
            <div className={styles['collection__card-images']}>
                <div className={styles['collection__card-image-item']}>
                    <Image src={iphImg} fill alt='IphoneX' sizes='(max-width:1600px) 168px' style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles['collection__card-image-item']}>
                    <Image src={iphImg} fill alt='IphoneX' sizes='(max-width:1600px) 168px' style={{ objectFit: 'cover' }} />
                </div>
            </div>
            <div className={styles['collection__card-title']}>Punk Art Collection</div>
            <div className={styles['collection__card-created-by']}>
                Created by <a href='#' className={styles['collection__card-created-name']}>James Watson</a>
            </div>
        </div>
    )
}

export default CollectionCard