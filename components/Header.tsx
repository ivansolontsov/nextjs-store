import React, { useEffect, useState } from 'react'
import { navRoutes } from '../utils/routes'
import Image from 'next/image';
import logo from '../public/image/logo.svg'
import Link from 'next/link';
import CartButton from './actionButtons/CartButton';
import SearchButton from './actionButtons/SearchButton';
import Search from './Search';

const Header: React.FC = () => {

    const [scrolled, setScrolled] = React.useState(false)

    const listenScrollEvent = () => {
        if (window.scrollY >= 1) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])




    return (
        <header className={`header ${scrolled ? 'header__scrolled' : ''}`}>
            <div className="header__left-side">
                <Link href='/'><Image priority={true} src={logo} width={247} height={48} alt={'logo'} /></Link>
                <nav className='header__nav'>
                    {navRoutes.map((route, index) => (
                        <Link key={index} href={route.path} className='header__nav-link'>{route.name}</Link>
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