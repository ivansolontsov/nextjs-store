import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '../styles/globals.css'
import Container from '../components/Container';
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        "token": {
          "borderRadius": 8,
          "colorPrimary": "#15bffd",
          "wireframe": true,
        },
        algorithm: theme.darkAlgorithm,
      }}>
        <PersistGate persistor={persistor}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </PersistGate>
      </ConfigProvider>
    </Provider>
  )
}
