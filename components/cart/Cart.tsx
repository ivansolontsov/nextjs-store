import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Cart.module.css'
import { Button, Drawer, } from 'antd';
import { CloseCircleFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { ICart } from '../../store/cart/cartType';

type Props = {

}

const Cart: React.FC<Props> = ({ }) => {
    const { removeItem, incrementCount, decrementCount } = useActions()
    const { cart } = useTypedSelector(state => state)
    const { cartModal } = useTypedSelector(state => state)
    const { closeModal } = useActions()

    const handlePlus = (item: ICart) => {
        incrementCount({ id: item.product.id })
    }

    const handleMinus = (item: ICart) => {
        if (item.amount === 1) {
            removeItem({ id: item.product.id })
        } else {
            decrementCount({ id: item.product.id })
        }

    }

    return (
        <>
            <Drawer
                title="Shopping Cart"
                placement='right'
                width={500}
                closable={true}
                onClose={() => closeModal()}
                open={cartModal.isOpen}
                style={{
                    background: 'rgb(0 0 0 / 62%)',
                    backdropFilter: 'blur(3px)',
                }}
            >
                {cart.length === 0 ? 'Your shopping cart is empty...' : ''}
                {cart.length > 0 && (
                    <div className={styles['cart']}>
                        {cart.map((e) => (
                            <div key={e.product.id} className={styles['cart__item']}>
                                <div className={styles['cart__item-left']}>
                                    <div className={styles['cart__item-image']}>
                                        <Image src={e.product.thumbnail} alt={e.product.title} width={50} height={50} style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles['cart__item-info']}>
                                        <h4 className={styles['cart__item-name']}>{e.product.title}</h4>
                                        <p className={styles['cart__item-price']}>${e.product.price}</p>
                                    </div>
                                </div>
                                <div className={styles['cart__amount']}>
                                    <Button onClick={() => handleMinus(e)} type="ghost" size='middle' shape="circle" style={{ fontSize: '8px' }} icon={<MinusOutlined />} />
                                    <span>
                                        {e.amount}
                                    </span>
                                    <Button onClick={() => handlePlus(e)} type="ghost" size='middle' shape="circle" style={{ fontSize: '8px' }} icon={<PlusOutlined />} />
                                </div>
                                <Button className={styles['cart__remove']} onClick={() => removeItem({ id: e.product.id })} type="ghost" size='large' shape="circle" icon={<CloseCircleFilled />} />
                            </div>
                        ))}
                        <div className={styles['cart__total']}>
                            ${cart.reduce((summary, cartItem) => summary + (cartItem.product.price * cartItem.amount), 0)}
                        </div>
                    </div>
                )}
            </Drawer>
        </>
    )
}

export default Cart