import Image from 'next/image'
import React from 'react'
import iphImg from '../../assets/image/iphone.jpeg'


import { HeartOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd'
import { Poppins, Inter } from '@next/font/google'

const poppins = Poppins({ weight: ['500', '600'], subsets: [] })
const inter = Inter({ weight: ['600'], subsets: [] })

type Props = {
    rotated?: boolean,
    isBig?: boolean
}


const ProductCard: React.FC<Props> = ({ rotated, isBig }) => {


    let orders: number[];
    orders = [1, 2, 3, 4]

    return (
        <div className={`card ${poppins.className} ${isBig ? 'card_large' : ''} ${rotated ? 'card__rotated' : ''}`}>
            <div className="card__header">
                <div className="card__header-info">
                    <small className='card__header-category-name'>Category</small>
                    <small className='card__header-product-price'><span>$</span>399</small>
                </div>
                {!isBig && (
                    <Tooltip title="Add to Wishlist">
                        <Button size='large' type="ghost" icon={<HeartOutlined />} className='card__header-wishlist-add' />
                    </Tooltip>
                )}
                {isBig && (
                    <Button type="primary" className={`card__large-button ${inter.className}`}>Add To Cart</Button>
                )}
            </div>
            <div className="card__image">
                <Image src={iphImg} fill alt="IphoneX" style={{ objectFit: 'cover' }} />
            </div>
            <div className="card__bottom">
                <div className="card__bottom-product-info">
                    <h3 className='card__product-name'>ProductName</h3>
                    <span className='card__product-brand'>Brand</span>
                </div>
                {isBig && (
                    <ul className="card__bottom-product-avatars">
                        {orders.map((order) => (
                            <li className="card__bottom-product-avatars-item" key={order} style={{ zIndex: `${order}` }}>
                                <div className="card__bottom-product-avatars-image">
                                    <Image src={iphImg} fill alt="IphoneX" style={{ objectFit: 'cover' }} />
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
