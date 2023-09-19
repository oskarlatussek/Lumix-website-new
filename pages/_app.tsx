
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Footer, Toolbar } from '../components'
import '../styles/globals.css'
import '../styles/review.css'; // Adjust the path to your CSS file
import Script from 'next/script'
import { getCookie } from 'cookies-next';
import Consent from '../components/general/Conset'


function MyApp({ Component, pageProps }: AppProps) {
  const consent = getCookie('localConsent');

  return (
    <>
      <Head>
        <title>Lumix Solar | Solaranlagen & Batteriespeicher</title>
        <meta name="description" content="Solaranlagen und Batteriespeicher in Mannheim, der Pfalz und der Rhein-Neckar Region. Individuelle Beratung, Planung und professionelle Montage." />
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-NNFZGHS`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GTM-NNFZGHS');
                        `,
          }}
        /> */}
      </Head>

      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-NNFZGHS');`,
        }}
      />

      {consent === true && (
        <Script
          id="consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}

      {/* <Script
        async
        src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"
        onLoad={() => handleScriptLoad()}
      /> */}
      {/* <Script
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
      /> */}
      <Toolbar dark />
      <Consent />
      <main className=''>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
