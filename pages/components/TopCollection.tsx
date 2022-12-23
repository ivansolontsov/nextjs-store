import Image from 'next/image'
import React from 'react'
import iphImg from '../../assets/image/iphone.jpeg'

type Props = {}

const TopCollection = (props: Props) => {
    return (
        <section className={`collection`}>
            <h2 className="section__title">Top Collection</h2>
            <p className="section__subtitle">
                The largest and unique Super rare NFT marketplace
                For crypto-collectibles
            </p>
            <div className="collection__cards">
                <div className="collection__cards-item">
                    <div className="collection__card-header">
                        <small className='collection__card-created-text'>Created by</small>
                        <h3 className="collection__card-creator">James Watson</h3>
                    </div>
                    <div className="collection__card-images">
                        <div className="collection__card-image-item">
                            <Image src={iphImg} fill alt="IphoneX" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="collection__card-image-item">
                            <Image src={iphImg} fill alt="IphoneX" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="collection__card-title">Punk Art Collection</div>
                    <div className="collection__card-created-by">
                        Created by
                        <a href="#" className='collection__card-created-name'>James Watson</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCollection