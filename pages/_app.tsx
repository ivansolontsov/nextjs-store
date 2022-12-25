import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '../styles/globals.css'
import Container from '../components/Container';
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd';
import { useActions } from '../hooks/useActions';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        "token": { "borderRadius": 8 },
        algorithm: theme.darkAlgorithm,
      }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ConfigProvider>
    </Provider>
  )
}
