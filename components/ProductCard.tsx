import Image from 'next/image'
import React from 'react'

import styles from '../styles/Card.module.css'

import iphImg from '../assets/image/iphone.jpeg'
import { HeartOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd'
import { Poppins, Inter } from '@next/font/google'
import { IProduct } from '../store/products/productTypes';

const poppins = Poppins({ weight: ['500', '600'], subsets: [] })
const inter = Inter({ weight: ['600'], subsets: [] })

type Props = {
    cardInfo: IProduct,
    rotated?: boolean,
    isBig?: boolean
}


const ProductCard: React.FC<Props> = ({ rotated, isBig, cardInfo }) => {

    let orders: number[];
    orders = [1, 2, 3, 4]

    return (
        <div className={`${styles['card']} ${poppins.className} ${isBig ? styles['card__large'] : ''} ${rotated ? styles['card__rotated'] : ''}`}>
            <div className={styles['card__header']}>
                <div className={styles['card__header-info']}>
                    <small className={styles['card__header-category-name']}>{cardInfo.category}</small>
                    <small className={styles['card__header-product-price']}><span>$</span>{cardInfo.price}</small>
                </div>
                {!isBig && (
                    <Tooltip title='Add to Wishlist'>
                        <Button size='large' type='ghost' icon={<HeartOutlined />} className={styles['card__header-wishlist-add']} />
                    </Tooltip>
                )}
                {isBig && (
                    <Button type='primary' className={`${styles['card__large-button']} ${inter.className}`}>Add To Cart</Button>
                )}
            </div>
            <div className={`${styles['card__image']} ${isBig ? styles['card__large-image'] : null }`}>
                <Image src={cardInfo.thumbnail} fill alt={cardInfo.title} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles['card__bottom']}>
                <div className={styles['card__bottom-product-info']}>
                    <h3 className={styles['card__product-name']}>{cardInfo.title}</h3>
                    <span className={styles['card__product-brand']}>{cardInfo.brand}</span>
                </div>
                {isBig && (
                    <ul className={styles['card__bottom-product-avatars']}>
                        {orders.map((order) => (
                            <li className={styles['card__bottom-product-avatars-item']} key={order} style={{ zIndex: `${order}` }}>
                                <div className={styles['card__bottom-product-avatars-image']}>
                                    <Image src={iphImg} fill alt='IphoneX' style={{ objectFit: 'cover' }} />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ProductCard
