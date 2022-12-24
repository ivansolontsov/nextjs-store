import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '../styles/globals.css'
import Container from '../components/Container';
import { store } from '../store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}
