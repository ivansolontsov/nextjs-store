import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '../styles/globals.css'
import Container from '../components/Container';
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import { makeStore, wrapper } from '../store/store';



export function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  
  let persistor = persistStore(store)

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
          <Container>
            <Component {...pageProps} />
          </Container>
        </PersistGate>
      </ConfigProvider>
    </Provider>
  )
}


export default wrapper.withRedux(App);