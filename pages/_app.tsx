import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SearchProvider } from '../src/context/useSearch'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  )
}

export default MyApp
