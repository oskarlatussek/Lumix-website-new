import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";

import Subpage from "../components/section/Subpage";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
const subtext: string = 'hello\nworld\nwhat';


const PhotovoltaikMannheim: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Photovoltaik in Mannheim – Ihr regionaler Partner</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">Photovoltaik bietet Kunden in Mannheim die Möglichkeit, umweltfreundlich Strom selbst zu produzieren. Informieren Sie sich darüber, wie wir Sie beim Umstieg auf eine klimaneutrale Stromerzeugung unterstützen und Ihnen dabei helfen, Stromkosten nachweislich zu senken.</p>

                        {/* <Link href="#first_section">
                            <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                                Mehr Erfahren
                            </a>
                        </Link> */}

                    </div>
                {/*<KonfiguratorAddress />*/}

                </div>
                <Process />
                <SubpageLandingpages title='Photovoltaik von Lumix Solar – Ihre Möglichkeiten in Mannheim:' 
                bullet1='Klimaneutrale Stromerzeugung' 
                bullet2='Unabhängigkeit von hohen Stromkosten' 
                bullet3='Senkung des Stromausfallrisikos' 
                bullet4='Hohe Eigenverbrauchsquote' 
                bullet5='Effiziente Kombination mit Wallbox'
                bullet6='Individuelle Projektierung' 
                bullet7='Regionaler Ansprechpartner'
                bullet8='Zuverlässige Liefergarantie'
                image='/Images/privat.webp'  left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Photovoltaik ist nicht weniger als eine optimale Lösung des drängenden Energieproblems und bietet Ihnen in Mannheim faszinierende Möglichkeiten. Mit einer innovativen Photovoltaik-Anlage der Firma Lumix Solar machen Sie sich endlich unabhängig von stetig steigenden Stromkosten, denn dank moderner
                        <span className="text-yellow-400 font-semibold">Stromspeicher</span>und hervorragender Effizienz können Sie 80 Prozent des Solarstroms für den eigenen Haushalt und das Aufladen Ihres E-Autos verwenden. Als leistungsstarker Photovoltaik-Anbieter stellen wir Ihnen ebenso ausgereifte wie innovative Lösungen zur Verfügung und konfigurieren Ihre PV-Anlage in Mannheim individuell. Wir bieten hochwertige Photovoltaik-Lösungen für Privathaushalte und
                         <span className="text-yellow-400 font-semibold">Gewerbebetriebe</span>
                         in Mannheim. Unser engagiertes Team überzeugt mit vorbildlichem Service und steht Ihnen auch nach der Montage der Photovoltaik-Anlage jederzeit mit Rat und Tat zur Seite.<br></br>
                         Sie wünschen eine persönliche Beratung und fragen sich: Lohnt sich PV?  Nutzen Sie unsere ausführliche Beratung, bei der wir Ihnen die Optionen der Photovoltaik-Technologie erläutern und Sie hinsichtlich der Konfiguration einer PV-Anlage in Mannheim informieren. Selbstverständlich können Sie auch direkt ein Angebot für Ihre Photovoltaik-Anlage anfordern.
                         </p>
                </div>

                <Subpage title='Innovativer Photovoltaik-Anbieter in Mannheim' text='Als kompetenter Photovoltaik-Anbieter aus Mannheim haben wir es uns zum Ziel gemacht, einen Beitrag zur Energiewende zu leisten. Photovoltaik ermöglicht es sowohl Privathaushalten als auch Unternehmen, selbst und völlig eigenständig grüne Energie aus Sonnenlicht herzustellen. Somit unterstützt Sie Ihr regionaler Photovoltaik-Anbieter dabei, in Mannheim unabhängig von den Preissteigerungen der Stromkonzerne zu werden. Darüber hinaus trägt Photovoltaik dazu bei, dass Sie Stromausfällen im öffentlichen Stromnetz gelassen entgegenblicken können. Photovoltaik-Anlagen überzeugen mittlerweile mit ausgereifter Technologie, zudem profitieren Sie in Deutschland von steuerlichen Vorteilen, sodass sich die Investition in eine Photovoltaik-Anlage in jedem Fall lohnt – entscheiden Sie sich für einen Qualitätsanbieter aus Mannheim, der Ihnen nicht nur hochwertige Produkte liefert, sondern auch den perfekten Service für die Montage, Wartung und Reparatur der Solartechnologie bietet. Kurze Wege, Liefergarantien und eine unkomplizierte Kommunikation machen Lumix Solar zum idealen Partner, wenn Sie eine Photovoltaik-Anlage in Mannheim installieren möchten.' image='/Images/produkte.webp' link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Gewerbliche Anlagen' text='Neben herkömmlich Photovoltaik-Anlagen für Wohngebäude planen und installieren wir auch gewerbliche Anlagen, sowie Photovoltaik für Parkplätze und landwirtschaftlich genutzte Flächen.' image='/Images/gewerbe.webp' link='/gewerbe' left />

                <Service />

                <Subpage title='Lohnt sich PV?' text='Eine Photovoltaikanlage lohnt sich fast immer. Finanziell, aber auch für die Umwelt. Wir zeigen Ihnen, welche Faktoren die Rendite einer Anlage maßgeblich beeinflussen und wie man einen möglichst großen Nutzen aus Förderungen und steuerlichen Aspekten ziehen kann.' image='/Images/rendite.webp' link='/rendite' />

                {/* <FAQ /> */}
                <Contact />
            </div>
        </>
    )
}


export default PhotovoltaikMannheim
