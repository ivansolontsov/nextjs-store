import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '../styles/globals.css'
import AppLayout from '../components/Container';
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import { wrapper } from '../store/store';

let persistor = persistStore(store)

export function App({ Component, pageProps }: AppProps) {
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
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </PersistGate>
      </ConfigProvider>
    </Provider>
  )
}


export default wrapper.withRedux(App);