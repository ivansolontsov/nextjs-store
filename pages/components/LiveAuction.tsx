import React from 'react'
import ProductCard from './ProductCard'

type Props = {}

const LiveAuction = (props: Props) => {
  return (
    <section className="auction">
        <h2 className="section__title">Live Auction</h2>
        <p className="section__subtitle">The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
        <div className="auction__card-wrapper">
            <ProductCard isBig={true} />
            <ProductCard isBig={true} />
            <ProductCard isBig={true} />
        </div>
    </section>
  )
}

export default LiveAuction