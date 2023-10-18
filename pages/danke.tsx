import type { NextPage } from 'next'

import { IoConstructSharp } from "react-icons/io5"

import Contact from '../components/general/Contact';

import { Toolbar } from '../components';

import { BsFillSunFill, BsPeopleFill } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import ImageSection from '../components/section/ImageSection';


const Danke: NextPage = () => {

    return (
        <>

            <Toolbar />

            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/title.jpg)`, backgroundSize: "cover" }} className="w-full min-h-screen group relative h-full flex justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50" />

                    <div className='bg-white/100 backdrop-blur-md min-h-screen w-full z-10 flex flex-col items-center p-5 sm:p-10 pt-44 sm:pt-44'>

                        <div className='flex flex-col items-center'>
                            <p className='font-bold text-xl sm:text-3xl md:text-5xl text-center mb-5'>Vielen Dank für Ihr Vertrauen!</p>
                            {/* <GiPartyPopper className='text-9xl text-yellow-400 mt-32' /> */}
                            <p className='text-center py-5 max-w-2xl text-sm sm:text-base'>Wir freuen uns Sie auf Ihrem Weg zu einer finanziell unabhängigen und nachhaltigen Stromerzeugung zu begleiten.</p>
                            <p className='text-center py-10 max-w-3xl text-sm sm:text-base'>Ihre Kontaktdaten sind bei uns eingegangen. Innerhalb von 24h werden sich unsere Solarexperten telefonisch mit Ihnen in Verbindung setzen um die von uns ermittelte Preiskalkulation zu besprechen und all Ihre Fragen rund um Ihr gewünschtes Solarprojekt zu beantworten.</p>

                            <p className='font-bold text-xl sm:text-2xl mt-10 sm:mt-20 text-center'>Ihr individuelles Solarprojekt in nur 8 Wochen realisiert</p>
                            <div className='flex items-center justify-center sm:max-w-[50rem] max-w-[100vw] mt-10'>

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <BsPeopleFill className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Persönliches Beratungsgespräch</p>
                                </div>

                                <div className={`border border-yellow-400 flex-grow min-w-[3rem] sm:min-w-[5rem] h-0`} />

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <HiOutlineDocumentText className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Individuelles Angebot</p>
                                </div>

                                <div className={`border border-yellow-400 flex-grow min-w-[3rem] sm:min-w-[5rem] h-0`} />

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <IoConstructSharp className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Zuverlässige Montage</p>
                                </div>

                                <div className={`border border-yellow-400 flex-grow min-w-[3rem] sm:min-w-[5rem] h-0`} />

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <BsFillSunFill className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Nutzung der kostenlosen Sonnenenergie</p>
                                </div>
                            </div>

                            <div className={`image-section-left mt-10 -mb-20`}>
                                <ImageSection image='/Images/Team/Team.png' />

                                <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                                    <h2>Das ist Lumix</h2>

                                    <p className='text-justify'>
                                        Wir sind Ihr zuverlässiger Partner für Solarprodukte in der Region. Ob Solaranlagen, Stromspeicher, Wallboxen oder eine Ladestation für Ihr e-Auto, wir begleiten Sie von der <b>Planung bis zur Projektierung Ihres Photovoltaik Vorhabens</b>.<br /><br />
                                        Dabei setzen wir auf <b>flexible und qualitativ hochwertige Lösungen</b> in Zusammenarbeit mit namhaften Partnern wie Solar Fabrik oder SMA.<br /><br />
                                        Durch die enge Vernetzung mit sowohl Fachhändlern als auch Monteuren, garantieren wir Ihnen eine <b>zeitnahe Realisierung Ihres Projekts</b>. So konnten wir bereits über 500 Projekte in der Region erfolgreich umsetzen.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <Contact />

            </div>
        </>
    )
}


export default Danke
