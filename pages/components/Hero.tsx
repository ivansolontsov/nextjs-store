import React from 'react'


import Image from 'next/image';

import line from '../../assets/image/line.png'
import arrowRight from '../../assets/image/icons/arrow-right.svg'
import bgLine from '../../assets/image/line.svg'
import exclusiveImg from '../../assets/image/exclusive.svg'
import Link from 'next/link';
import ProductCard from './ProductCard';

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className="hero">
            <div className="hero__info">
                <div className="hero__info-header">
                    <h1 className='hero__title'>
                        Next Js <span>Pet Project</span>
                    </h1>
                    <div className="hero__line-wrapper">
                        <Image src={line} fill alt="line" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="hero__subtitle">
                    Not so large and unique, but looks cool 😂
                </div>
                <div className="hero__button-group">
                    <button className="hero__button hero__button_primary">Your Cart</button>
                    <Link href='/' className="hero__button hero__button_secondary">Your Wish List <Image src={arrowRight} width={28} alt="Arrow Right" /></Link>
                </div>

                <div className="hero__categories">
                    <h2 className="hero__categories-title">
                        Categories that may be useful
                    </h2>
                    <ul className="hero__categories-list">
                        <li className="hero__categories-list-item">Smartphones</li>
                        <li className="hero__categories-list-item">TVs</li>
                        <li className="hero__categories-list-item">Notebooks</li>
                        <li className="hero__categories-list-item">PC</li>
                        <li className="hero__categories-list-item">HardWare</li>
                        <li className="hero__categories-list-item">Software</li>
                        <li className="hero__categories-list-item">MiddleWare</li>
                    </ul>
                </div>
            </div>
            <div className="hero__cards">
                <div className="hero__cards-print">
                    <Image src={exclusiveImg} fill alt={'Exclusive'} style={{ objectFit: 'cover' }} />
                </div>
                <div className='hero__cards-spiral'>
                    <Image src={bgLine} fill alt={'Spiral'} />
                </div>
                <ProductCard />
                <ProductCard rotated={true} />
            </div>
        </section>
    )
}

export default Hero