import Head from 'next/head';
import React from 'react';
import Creators from '../components/Creators';
import Hero from '../components/Hero';
import LiveAuction from '../components/LiveAuction';
import Roadmap from '../components/Roadmap';
import TopCollection from '../components/TopCollection';
import Why from '../components/Why';

const App: React.FC = () => {

  return (
    <>
      <Head>
        <title>Next.Js Mainpage - Ivan Solontsov</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Next.Js Mainpage - Ivan Solontsov" key="title" />
        <meta property="og:description" content="React + Next.js + TypeScript + ANTD + Redux Toolkit" key="description" />
      </Head>
      <Hero />
      <Why />
      <LiveAuction />
      <Roadmap />
      <TopCollection />
      <Creators />
    </>
  );
};

export default App;
