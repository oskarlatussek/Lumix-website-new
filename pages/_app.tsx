import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Toolbar } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lumix Solar | Solaranalgen & Batteriespeicher</title>
        <meta name="description" content="Solaranlagen und Batteriespeicher in Mannheim, der Pfalz und in der Rhein-Neckar Region. Individuelle Beratung, Planung und professionelle Monatage." />
        <meta name="robots" content="noodp,noydir" />
      </Head>
      <Toolbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
export default MyApp
