import React, { useState } from 'react';
import styles from '../styles/Cart.module.css'
import { Button, Badge, Drawer, } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ShoppingOutlined, CloseCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import { useActions } from '../hooks/useActions';

type Props = {
}

const Cart: React.FC<Props> = () => {
    const { removeItem } = useActions()
    const { cart } = useTypedSelector(state => state)

    console.log(cart);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Badge count={cart.length} offset={[-1, 0]} size={'small'}>
                <Button onClick={showDrawer} size='large' type="ghost" icon={<ShoppingOutlined style={{ fontSize: '24px' }} />} className='header__cart-button' />
            </Badge>
            <Drawer
                title="Shopping Cart"
                placement='right'
                closable={true}
                onClose={onClose}
                open={open}
                style={{
                    background: 'rgb(0 0 0 / 62%)',
                    backdropFilter: 'blur(3px)',
                }}
            >
                {cart.length === 0 ? 'Your shopping cart is empty...' : ''}
                {cart.length > 0 && (
                    <div className={styles['cart']}>
                        {cart.map((e) => (
                            <div key={e.id} className={styles['cart__item']}>
                                <div className={styles['cart__item-left']}>
                                    <div className={styles['cart__item-image']}>
                                        <Image src={e.thumbnail} alt={e.title} width={50} height={50} />
                                    </div>
                                    <div className={styles['cart__item-info']}>
                                        <h4 className={styles['cart__item-name']}>{e.title}</h4>
                                        <p className={styles['cart__item-price']}>${e.price}</p>
                                    </div>
                                </div>
                                <div className={styles['cart__remove']}>
                                    <Button onClick={() => removeItem({ id: e.id })} type="ghost" size='large' shape="circle" icon={<CloseCircleFilled />} />
                                </div>
                            </div>
                        ))}
                        <div className={styles['cart__total']}>
                            ${cart.reduce((total, amount) => total + amount.price, 0)}
                        </div>
                    </div>
                )}
            </Drawer>
        </>
    )
}

export default Cart