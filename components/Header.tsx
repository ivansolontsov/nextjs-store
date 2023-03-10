import React, { useEffect, useState } from 'react'
import { externalRoutes, navRoutes } from '../utils/routes'
import Image from 'next/image';
import logo from '../public/image/logo.svg'
import Link from 'next/link';
import CartButton from './actionButtons/CartButton';
import SearchButton from './actionButtons/SearchButton';
import Search from './Search';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const { query, pathname } = useRouter()
    return (
        <header className={`header`}>
            <div className="header__left-side">
                <Link href='/'><Image priority={true} src={logo} width={247} height={48} alt={'logo'} /></Link>
                <nav className='header__nav'>
                    {navRoutes.map((route, index) => (
                        <Link key={index} href={route.path} className={`header__nav-link ${pathname === route.path ? 'header__nav-link_active' : ''}`}>{route.name}</Link>
                    ))}
                    {externalRoutes.map((route, index) => (
                        <a key={index} href={route.path} className={`header__nav-link`} target="_blank" rel='noreferrer'>{route.name}</a>
                    ))}
                </nav>
            </div>
            <Search />
            <div className="header__buttons">
                <SearchButton />
                <CartButton />
            </div>
        </header>
    )
}

export default Header