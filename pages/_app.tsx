
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Footer, Toolbar } from '../components'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Lumix Solar | Solaranlagen & Batteriespeicher</title>
        <meta name="description" content="Solaranlagen und Batteriespeicher in Mannheim, der Pfalz und der Rhein-Neckar Region. Individuelle Beratung, Planung und professionelle Montage." />
        <meta name="robots" content="noodp,noydir" />
      </Head>
      <Toolbar dark />
      <main className=''>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
