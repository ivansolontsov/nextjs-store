import React from 'react'
import Header from './Header'
import { Inter } from '@next/font/google'
import Footer from './Footer'

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    style: ['normal'],
})
type Props = {
    children: JSX.Element
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <>
            
            <div className={`container ${inter.className}`}>
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Container