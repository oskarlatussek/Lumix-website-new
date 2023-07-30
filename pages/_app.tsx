
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Footer, Toolbar } from '../components'
import '../styles/globals.css'
import Script from 'next/script'
import { getCookie } from 'cookies-next';
import Consent from '../components/general/Conset'
// @ts-ignore 
import * as fbq from '../lib/fpixel'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const consent = getCookie('localConsent');

  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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

      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
            fbq('track', 'PageView');
          `,
        }}
      />

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
