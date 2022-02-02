import type { NextPage } from 'next'

import Hero from "../components/Hero";
import Promiss from "../components/Service";
import Team from "../components/Team";
import Process from "../components/Process";
import Vision from  "../components/Vision";
import FAQ from "../components/FAQ";

const Home: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center w-screen overflow-x-hidden">
                <Hero />
                <Process/>
                <Vision/>
                <Promiss />
                {/* <Team />
                <FAQ /> */}
            </div>
        </>
    )
}


export default Home
