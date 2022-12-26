import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import line from '../public/image/line.png'
import arrowRight from '../public/image/icons/arrow-right.svg'
import bgLine from '../public/image/line.svg'
import exclusiveImg from '../public/image/exclusive.svg'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { useGetCategoriesQuery } from '../store/categories/categoryApi'
import { Skeleton } from 'antd'

type Props = {}

const Hero = (props: Props) => {

    const { data, isLoading, error } = useGetCategoriesQuery();

    return (
        <section className={`${styles['hero']}`} >
            <div className={styles['hero__info']}>
                <div className={styles['hero__info-header']}>
                    <h1 className={styles['hero__title']}>
                        Next Js <span>Pet Project</span>
                    </h1>
                    <div className={styles['hero__line-wrapper']}>
                        <Image src={line} fill alt='line' sizes='(max-width: 1600px) 427px' style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <div className={styles['hero__subtitle']}>
                    React, Next.js, Redux Toolkit, Antd, TypeScript
                </div>
                <div className={styles['hero__button-group']}>
                    <Link href='/catalog' className={styles['hero__button_primary']}>Catalog</Link>
                    <Link href='/' className={styles['hero__button_secondary']}>Your Wish List <Image src={arrowRight} width={28} alt='Arrow Right' /></Link>
                </div>

                <div className={styles['hero__categories']}>
                    <h2 className={styles['hero__categories-title']}>
                        Categories that may be useful
                    </h2>
                    {error ? (
                        <>
                            Error
                        </>
                    ) : isLoading ? (
                        <ul className={styles['hero__categories-list']}>
                            <Skeleton.Button active size='small' shape='round' block={true} />
                        </ul>
                    ) : data ? (
                        <div className={styles['hero__categories-list']}>
                            {
                                data.slice(0, 6).map((name, index) => (
                                    <Link key={index} href={`categories/${name}`} className={styles['hero__categories-list-item']}>{name}</Link>
                                ))
                            }
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={styles['hero__cards']}>
                <div className={styles['hero__cards-print']}>
                    <Image src={exclusiveImg} fill alt={'Exclusive'} sizes='(max-width: 1600px) 113px' style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles['hero__cards-spiral']}>
                    <Image src={bgLine} priority={true} width={711} height={571} alt={'Spiral'} sizes='(max-width: 1600px) 514px' />
                </div>
                <ProductCard />
                <ProductCard rotated={true} />
            </div>
        </section >
    )
}

export default Hero