import React from 'react'
import Header from '../Header'
import { Inter } from '@next/font/google'
import Footer from '../Footer'
import Cart from '../cart/Cart'

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    style: ['normal'],
})
type Props = {
    children: React.ReactNode
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <main className={`container ${inter.className}`}>
                <Header />
                <Cart />
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AppLayout