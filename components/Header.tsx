import React from 'react'
import Image from 'next/image';
import logo from '../public/image/logo.svg'
import Link from 'next/link';
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Cart from './Cart';

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
                <Cart />
            </div>
        </header>
    )
}

export default Header