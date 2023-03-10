import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '../styles/globals.css'
import AppLayout from '../components/Layouts/AppLayout';
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import { wrapper } from '../store/store';
import Router from 'next/router'
import { useState, useEffect } from 'react';
import PreLoader from '../components/PreLoader/PreLoader';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { AnimatePresence } from 'framer-motion';

let persistor = persistStore(store)

export function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    isLoading ? disableBodyScroll(document.body) : enableBodyScroll(document.body)
  }, [isLoading])

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    });
    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    });
    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    });
  }, [Router])

  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        "token": {
          "borderRadius": 8,
          "colorPrimary": "#15bffd",
        },
        algorithm: theme.darkAlgorithm,
      }}>
        <PersistGate persistor={persistor}>
          {isLoading && <PreLoader />}
          <AppLayout>
            <AnimatePresence
              initial={true}
              mode='sync'
            >
              <Component {...pageProps} />
            </AnimatePresence>
          </AppLayout>
        </PersistGate>
      </ConfigProvider>
    </Provider>
  )
}

export default wrapper.withRedux(App);