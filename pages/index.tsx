import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Ocean from '../components/Ocean';
import Toolbar from '../components/Toolbar';


const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Lumix Solar</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
                {/* <meta name="robots" content="noodp,noydir" /> */}
            </Head>

            <main className="flex flex-col items-center">
                <Toolbar />
                <Hero />

                <div className="max-w-full 2xl:max-w-screen-2xl overflow-x-hidden">

                    <Ocean />

                </div>

            </main>

            <Footer />

        </>
    )
}


export default Home
