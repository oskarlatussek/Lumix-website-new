import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Process from "../components/section/Process";
import Subpage from "../components/section/Subpage";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';


const Home: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Fotos/compressed/DSCF6833.jpg' title='Solaranlagen' text='Mannheim | Rhein-Neckar | Pfalz'/>
                <Process />

                <Subpage title='Solar für Zuhause' text='Mit einer Photovoltaikanlage können Sie nicht nur den Wert Ihres Gebäudes steigern, sondern auch Ihren eigenen Strom produzieren und sich dadurch von steigenden Stromkosten unabhängig machen. Wir zeigen Ihnen welche Anlagenoptionen sich bei Ihnen rentieren und auf welche Faktoren Sie achten müssen.' image='/Fotos/compressed/DSCF6857.jpg' link="/photovoltaik" left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">Vertrieb und Montage von modernsten <span className="text-yellow-400 font-semibold">Solarmodulen</span> und <span className="text-yellow-400 font-semibold">Energiespeichersystemen</span>, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende.</p>
                </div>

                <Subpage title='Unser Angebot' text='Zu unserer Philosophie gehört es, unseren Kunden ein bestmöglichstes Portfolio an hochwertigen Produkten anzubieten. Daher arbeiten wir mit einer Vielzahl an namenhaften Herstellern zusammen, deren Produkte wir für Sie zu einer optimalen Lösung kombinieren.' image='/Images/solar-1.jpg' link='/angebot' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Gewerbliche Anlagen' text='Neben herkömmlich Photovoltaik-Anlagen für Wohngebäude planen und installieren wir auch gewerbliche Anlagen, sowie Photovoltaik für Parkplätze und landwirtschaftlich genutzte Flächen.' image='/Images/nuno-marques-0GbrjL3vZF4-unsplash.jpg' link='/gewerbe' left/>

                <Service />

                <Subpage title='Lohnt sich PV?' text='Eine Photovoltaikanlage lohnt sich fast immer. Finanziell, aber auch für die Umwelt. Wir zeigen Ihnen, welche Faktoren die Rendite einer Anlage maßgeblich beeinflussen und wie man einen möglichst großen Nutzen aus Förderungen und steuerlichen Aspekten ziehen kann.' image='/Fotos/compressed/DSCF6789.jpg' link='/rendite' />

                {/* <FAQ /> */}
                <Contact />
            </div>
        </>
    )
}


export default Home
