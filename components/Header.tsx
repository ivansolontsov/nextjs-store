import React, { useEffect } from 'react'
import { navRoutes } from '../utils/routes'
import Image from 'next/image';
import logo from '../public/image/logo.svg'
import Link from 'next/link';
import Cart from './Cart';

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
                <Link href='/'><Image src={logo} width={247} height={48} alt={'logo'} /></Link>
                <nav className='header__nav'>
                    {navRoutes.map((route, index) => (
                        <Link key={index} href={route.path} className='header__nav-link'>{route.name}</Link>
                    ))}
                </nav>
            </div>
            <div className="header__buttons">
                <Cart />
            </div>
        </header>
    )
}

export default Header