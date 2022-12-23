import React from 'react';
import Hero from './components/Hero';
import LiveAuction from './components/LiveAuction';
import TopCollection from './components/TopCollection';
import Why from './components/Why';

// import type { RootState } from './store/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './features/CounterSlise'

const App: React.FC = () => {

  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <>
      <Hero />
      <Why />
      <LiveAuction />
      <TopCollection />
    </>
  );
};

export default App;
