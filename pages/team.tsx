import type { NextPage } from 'next'

import Contact from '../components/general/Contact';
import TeamCard from '../components/section-element/TeamCard';


const Team: NextPage = () => {

    return (
        <>
            <div className="flex bg-black flex-col items-center max-w-full">
                <div className="w-full h-full flex flex-col space-y-10 justify-center items-center text-center pt-56 sm:pt-56 pb-20 sm:pb-20 p-5 sm:p-10">
                    <h1 className="animate__animated animate__fadeIn">Das Team</h1>
                    <p className="text-xl sm:text-2xl lg:text-4xl leading-tight sm:leading-tight lg:leading-tight text-gray-300 font-medium max-w-3xl animate__animated animate__fadeIn animate__delay-1s">Wir begleiten Sie persönlich von der ersten Kontaktaufnahme bis zum stolzen Solaranlagenbesitzer.</p>
                </div>

                <div className={`w-full flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-10 xl:space-x-16 space-y-10 lg:space-y-0 py-20 px-5 sm:px-10`}>
                    <TeamCard name='Johannes Gerstlauer' text='Lumix steht für vorausschauende Beratung für Ihr Erfolgsprojekt.' img_src="/Fotos/compressed/DSCF6984 Kopie.jpg" />
                    <TeamCard name='Maximilian Mühlhause' text='Lumix liefert Qualitätsprodukte die für Verlässlichkeit stehen.' img_src="/Fotos/compressed/DSCF6942.jpg" />
                    <TeamCard name='Oskar Latussek' text='Lumix bietet zuverlässigen Service für jedes Ihrer Anliegen.' img_src="/Fotos/compressed/DSCF6902 Kopie.jpg" />
                </div>

                <div className="flex items-center w-full justify-center py-10 pb-32 max-w-screen-2xl">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center text-gray-300">Die <span className="text-yellow-400 font-semibold">Solartechnologie</span> ist ein logischer und praktikabler Schritt hin zur kostengünstigen Energieversorgung für Zuhause.</p>
                </div>

                <div className='w-full flex justify-center h-full bg-white'>
                    <Contact />
                </div>

            </div>
        </>
    )
}


export default Team
