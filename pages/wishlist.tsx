import React from 'react'
import Head from 'next/head'

type Props = {}

const Wishlist = (props: Props) => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="Lorem ipsum" key="description" />
      </Head>
      <div>WISHLIST</div>
    </>
  )
}

export default Wishlist