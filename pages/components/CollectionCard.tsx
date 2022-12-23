import React from 'react'
import Image from 'next/image'
import iphImg from '../../assets/image/iphone.jpeg'

type Props = {}

const CollectionCard = (props: Props) => {
    return (
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
                Created by <a href="#" className='collection__card-created-name'>James Watson</a>
            </div>
        </div>
    )
}

export default CollectionCard