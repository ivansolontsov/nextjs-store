import Head from 'next/head';
import React from 'react';
import Creators from '../components/Creators';
import Hero from '../components/Hero';
import LiveAuction from '../components/LiveAuction';
import TopCollection from '../components/TopCollection';
import Why from '../components/Why';

const App: React.FC = () => {

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="Lorem ipsum" key="description" />
      </Head>
      <Hero />
      {/* <Why />
      <LiveAuction />
      <TopCollection />
      <Creators /> */}
    </>
  );
};

export default App;
