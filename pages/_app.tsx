import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Toolbar } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toolbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
export default MyApp
