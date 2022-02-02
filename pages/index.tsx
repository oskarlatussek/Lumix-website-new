import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Toolbar from '../components/Toolbar';
import Promiss from "../components/Service";
import Team from "../components/Team";
import Process from "../components/Process";
import Vision from  "../components/Vision";
import FAQ from "../components/FAQ";




const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Lumix Solar | Solaranalgen & Batteriespeicher</title>
                <meta name="description" content="Solaranlagen und Batteriespeicher in Mannheim, der Pfalz und in der Rhein-Neckar Region. Individuelle Beratung, Planung und professionelle Monatage." />
                <meta name="robots" content="noodp,noydir" />
            </Head>

            <div className="flex flex-col items-center w-screen overflow-x-hidden">
                <Hero />
                <Process/>
                <Vision/>
                <Promiss />
                <Team />
                <FAQ />
            </div>

        </>
    )
}


export default Home
