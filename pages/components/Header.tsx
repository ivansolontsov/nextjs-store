import React from 'react'
import Image from 'next/image';
import logo from '../../assets/image/logo.svg'
import searchIcon from '../../assets/image/icons/search.svg'
import Link from 'next/link';
import { Badge, Button } from 'antd';
import { ShoppingOutlined, SearchOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header__left-side">
                <Link href='/'><Image src={logo} width={247} height={48} alt={'logo'} /></Link>
                <nav className='header__nav'>
                    <Link href='/wishlist' className='header__nav-link'>My Favourites</Link>
                    <Link href='/products' className='header__nav-link'>Products</Link>
                </nav>
            </div>
            <div className="header__buttons">
                <Button size='large' type="ghost" icon={<SearchOutlined style={{ fontSize: '24px' }} />} className='header__search-button' />
                <Badge count={0} offset={[-1, 0]} size={'small'}>
                    <Button size='large' type="ghost" icon={<ShoppingOutlined style={{ fontSize: '24px' }} />} className='header__cart-button' />
                </Badge>
            </div>
        </header>
    )
}

export default Header