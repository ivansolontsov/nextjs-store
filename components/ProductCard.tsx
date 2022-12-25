import Image from 'next/image'
import React from 'react'
import styles from '../styles/Card.module.css'
import iphImg from '../public/image/iphone.jpeg'
import { HeartOutlined } from '@ant-design/icons';
import { Button, Tooltip, message, Space } from 'antd'
import { Poppins, Inter } from '@next/font/google'
import { IProduct } from '../store/products/productTypes';
import { Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const poppins = Poppins({ weight: ['500', '600'], subsets: [] })
const inter = Inter({ weight: ['600'], subsets: [] })

type Props = {
    productInfo?: IProduct,
    rotated?: boolean,
    isBig?: boolean,
    skeleton?: boolean
}

const ProductCard: React.FC<Props> = ({ rotated, isBig, productInfo }) => {

    const [messageApi, contextHolder] = message.useMessage();
    const { addItem } = useActions() // ВЫЗЫВАЕМ ЭКШН ДОБАВИТЬ В КОРЗИНУ
    const { cart } = useTypedSelector(state => state) // ВЫЗЫВАЕМ СЕЛЕКТОР СТОРА
    const isAlreadyInCart = cart.some(el => el.id === productInfo?.id) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ

    // ПЛЕЙСХОЛДЕР ДЛЯ АВАТАРОК В БОЛЬШОЙ КАРТОЧКЕ
    let orders: number[];
    orders = [1, 2, 3, 4]

    // РЕНДЕР СКЕЛЕТОНА, ЕСЛИ ИНФОРМАЦИИ О ПРОДУКТЕ НЕТ
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    if (!productInfo) {
        return (
            <div className={`${styles['card']} ${poppins.className} ${isBig ? styles['card__large'] : ''} ${rotated ? styles['card__rotated'] : ''}`}>
                <Skeleton.Image active />
                <Skeleton active />
                <Spin indicator={antIcon} />
            </div>
        )
    }

    // SUCCESS MESSAGE
    const success = (productInfo: IProduct) => {
        messageApi.open({
            type: 'success',
            content: `You've successfully added ${productInfo.title} in your shopping cart.`,
        });
    };

    // РЕНДЕР ЕСЛИ ИНФОРМАЦИЯ ЕСТЬ
    return (
        <div className={`${styles['card']} ${poppins.className} ${isBig ? styles['card__large'] : ''} ${rotated ? styles['card__rotated'] : ''}`}>
            <div className={styles['card__header']}>
                <div className={styles['card__header-info']}>
                    <small className={styles['card__header-category-name']}>{productInfo.category}</small>
                    <small className={styles['card__header-product-price']}><span>$</span>{productInfo.price}</small>
                </div>
                {isBig && (
                    <Button
                        disabled={isAlreadyInCart}
                        type='primary'
                        className={`${styles['card__large-button']} ${inter.className}`}
                        onClick={() => {
                            addItem(productInfo)
                            success(productInfo)
                        }}
                    >
                        {isAlreadyInCart ? 'Product Added' : 'Add In Cart'}
                    </Button>
                )}
            </div>
            <div className={`${styles['card__image']} ${isBig ? styles['card__large-image'] : null}`}>
                <Tooltip title='Add to Wishlist'>
                    <Button size='middle' type='ghost' icon={<HeartOutlined />} className={styles['card__header-wishlist-add']} />
                </Tooltip>
                <Image src={productInfo.thumbnail} fill alt={productInfo.title} sizes='(max-width: 1600px) 241px' style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles['card__bottom']}>
                <div className={styles['card__bottom-product-info']}>
                    <h3 className={styles['card__product-name']}>{productInfo.title}</h3>
                    <span className={styles['card__product-brand']}>{productInfo.brand}</span>
                </div>
                {isBig && (
                    <ul className={styles['card__bottom-product-avatars']}>
                        {orders.map((order) => (
                            <li className={styles['card__bottom-product-avatars-item']} key={order} style={{ zIndex: `${order}` }}>
                                <div className={styles['card__bottom-product-avatars-image']}>
                                    <Image src={iphImg} fill alt='IphoneX' sizes='(max-width: 1600px) 343px' style={{ objectFit: 'cover' }} />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {contextHolder}
        </div>
    )
}

export default ProductCard
