
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
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-J9XX7FYSJP`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-J9XX7FYSJP');
                        `,
          }}
        /> */}
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
