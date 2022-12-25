import React, { useEffect } from 'react'
import Image from 'next/image';
import logo from '../public/image/logo.svg'
import Link from 'next/link';
import Cart from './Cart';

const Header: React.FC = () => {

    const [scrolled, setScrolled] = React.useState(false)

    const listenScrollEvent = () => {
        if (window.scrollY >= 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])


    return (
        <header className={`${scrolled ? 'header__scrolled' : ''}`}>
            <div className="header__left-side">
                <Link href='/'><Image src={logo} width={247} height={48} alt={'logo'} /></Link>
                <nav className='header__nav'>
                    <Link href='/catalog' className='header__nav-link'>Catalog</Link>
                </nav>
            </div>
            <div className="header__buttons">
                <Cart />
            </div>
        </header>
    )
}

export default Header