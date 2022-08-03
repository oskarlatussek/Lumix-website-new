
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Footer, Toolbar } from '../components'
import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Lumix Solar | Solaranlagen & Batteriespeicher</title>
        <meta name="description" content="Solaranlagen und Batteriespeicher in Mannheim, der Pfalz und der Rhein-Neckar Region. Individuelle Beratung, Planung und professionelle Montage." />
      </Head>
      {/* <Script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFmOqbv_RrM6AmsEuEw940mlsrTEX2QnI&libraries=places"
        onLoad={() => handleScriptLoad()}
      /> */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-NNFZGHS`}
        dangerouslySetInnerHTML={{
          __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GTM-NNFZGHS');
                        `,
        }}
      />
      <Toolbar dark />
      <main className=''>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
