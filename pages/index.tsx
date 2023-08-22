import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Process from "../components/section/Process";
import Subpage from "../components/section/Subpage";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';


const Home: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Ihr regionaler Solarpartner</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">Individuelle Projekte mit Liefergarantie in 8 Wochen</p>

                        {/* <Link href="#first_section">
                            <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                                Mehr Erfahren
                            </a>
                        </Link> */}

                    </div>
                    <KonfiguratorAddress />

                </div>
                <Process />

                <Subpage title='Solar für Zuhause' text='Mit einer Photovoltaikanlage können Sie nicht nur den Wert Ihres Gebäudes steigern, sondern auch Ihren eigenen Strom produzieren und sich dadurch von steigenden Stromkosten unabhängig machen. Wir zeigen Ihnen welche Anlagenoptionen sich bei Ihnen rentieren und auf welche Faktoren Sie achten müssen.' image='/Images/privat.webp' link="/photovoltaik" left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">Vertrieb und Montage von modernsten <span className="text-yellow-400 font-semibold">Solarmodulen</span> und <span className="text-yellow-400 font-semibold">Energiespeichersystemen</span>, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende.</p>
                </div>

                <Subpage title='Unsere Produkte' text='Zu unserer Philosophie gehört es, unseren Kunden ein bestmöglichstes Portfolio an hochwertigen Produkten anzubieten. Daher arbeiten wir mit einer Vielzahl an namenhaften Herstellern zusammen, deren Produkte wir für Sie zu einer optimalen Lösung kombinieren.' image='/Images/produkte.webp' link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Gewerbliche Anlagen' text='Neben herkömmlich Photovoltaik-Anlagen für Wohngebäude planen und installieren wir auch gewerbliche Anlagen, sowie Photovoltaik für Parkplätze und landwirtschaftlich genutzte Flächen.' image='/Images/gewerbe.webp' link='/gewerbe' left />

                <Service />

                <Subpage title='Lohnt sich PV?' text='Eine Photovoltaikanlage lohnt sich fast immer. Finanziell, aber auch für die Umwelt. Wir zeigen Ihnen, welche Faktoren die Rendite einer Anlage maßgeblich beeinflussen und wie man einen möglichst großen Nutzen aus Förderungen und steuerlichen Aspekten ziehen kann.' image='/Images/rendite.webp' link='/rendite' />

                {/* <FAQ /> */}
                {/*<Contact />*/}
            </div>
        </>
    )
}


export default Home
