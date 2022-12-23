import React from 'react'
import monkeyImg from '../../assets/image/why__monkey.png'
import Image from 'next/image';

type Props = {}

const Why = (props: Props) => {
    return (
        <section className="why">
            <div className="why__glass-wrapper">
                <div className="why__pic">
                    <div className="why__monkey">
                        <Image src={monkeyImg} fill alt='Why Us?' />
                    </div>
                </div>
                <div className="why__text">
                    <h2 className="why__text-title">Why choose us?</h2>
                    <p className="why__text-info">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odit dolorum autem sit dolor unde dolorem consectetur sequi? Suscipit, ab odio quos nobis dolore earum tempore illo. Enim, asperiores debitis?
                    </p>
                    <p className="why__text-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button className="why__text-button">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Why