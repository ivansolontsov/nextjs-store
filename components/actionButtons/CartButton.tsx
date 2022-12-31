import { Badge, Button } from 'antd'
import React, { useEffect } from 'react'
import { ShoppingOutlined } from '@ant-design/icons';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const CartButton = () => {
    const { cart } = useTypedSelector(state => state)
    const { openModal } = useActions()

    return (
        <Badge count={cart.length} offset={[-1, 0]} size={'small'}>
            <Button
                onClick={() => openModal()}
                size='large'
                type="ghost"
                icon={
                    <ShoppingOutlined style={{ fontSize: '24px' }} />
                }
                className='header__cart-button' />
        </Badge>
    )
}

export default CartButton