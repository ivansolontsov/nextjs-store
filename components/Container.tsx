import React from 'react'
import Header from './Header'
import { Inter } from '@next/font/google'
import Footer from './Footer'
import Cart from './cart/Cart'

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    style: ['normal'],
})
type Props = {
    children: JSX.Element
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className={`container ${inter.className}`}>
                <Header />
                <Cart />
                {children}
            </div>
            <Footer />
        </>
    )
}

export default AppLayout