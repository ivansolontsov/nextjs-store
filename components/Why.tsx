import React from 'react'

import styles from '../styles/Why.module.css'

import monkeyImg from '../public/image/why__monkey.png'
import Image from 'next/image';
import LazyViewAnimate from './Layouts/LazyViewAnimate';

type Props = {}

const Why = (props: Props) => {
    return (
        <section className={styles['why']}>
            <LazyViewAnimate classes={styles["why__glass-wrapper"]}>
                <div className={styles["why__pic"]}>
                    <div className={styles["why__monkey"]}>
                        <Image src={monkeyImg} fill alt='Why Us?' style={{ objectFit: 'contain' }} sizes='(max-width: 1600px) 482px' />
                    </div>
                </div>
                <div className={styles["why__text"]}>
                    <h2 className={styles["why__text-title"]}>Why choose us?</h2>
                    <p className={styles["why__text-info"]}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odit dolorum autem sit dolor unde dolorem consectetur sequi? Suscipit, ab odio quos nobis dolore earum tempore illo. Enim, asperiores debitis?
                    </p>
                    <p className={styles["why__text-info"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button className={styles["why__text-button"]}>
                        Connect Wallet
                    </button>
                </div>
            </LazyViewAnimate>
        </section>
    )
}

export default Why