
import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"



const PhotovoltaikMontage: NextPage = () => {

    return (
        <>
        <HelmetProvider>
          <Helmet>
          <title>Photovoltaik-Montage in Mannheim │ Lumix Solar GmbH</title>
          <meta
          name="description"
          content="Photovoltaik-Montage Mannheim: innovative Solartechnik 🌞 Regionaler Anbieter ✔️ Experten für PV-Anlagenbau ➡️ Jetzt informieren❕"/>
          </Helmet>
            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/06/06/35/13/1000_F_606351333_2E2KZd5gZDejot9kVR11E4ntFpYOpR5q.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Experten für Photovoltaik-Montage in Mannheim
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">

                        Wir bieten Ihnen verschiedene Optionen der Photovoltaik-Montage an, sodass die Solarmodule in Mannheim an fast jedem Gebäude einsetzbar sind. Gerne informieren wir Sie über Alternativen zur bekannten Dachmontage von PV-Anlagen.
												 </p>

                        {/* <Link href="#first_section">
                            <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                                Mehr Erfahren
                            </a>
                        </Link> */}

                    </div>
                    <KonfiguratorAddress />

                </div>
                <Process />
								<SubpageLandingpages
                    yellowTitle ='Photovoltaik-Montage – '
                    title='profitieren Sie in Mannheim von Kompetenz & Erfahrung:'
                    bullet1='Fachgerechte Montage durch Profis'
                    bullet2='Bedarfsgerechte Konfiguration'
                    bullet3='Verschiedene Solarmodule verfügbar'
                    bullet4='Unterschiedliche Montagesysteme'
                    bullet5='Verwendung modernster Solarmodule'
                    bullet6='Engagiertes Team erfahrener Experten'
                    bullet7='Umfassende Betreuung nach dem Kauf'
                    bullet8='Service inkl. Reparatur und Wartung'
                    image='https://as2.ftcdn.net/v2/jpg/06/09/94/73/1000_F_609947338_6ecL1u2CcvOktKowB8xG93RUrEZnO4qQ.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    icons2
                    left />

<div className="items-center w-full justify-center pt-10">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                    <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                     Das Team von Lumix Solar begleitet Sie auf Ihrem Weg zur klimaneutralen Stromerzeugung mit einem ganzheitlichen Service. Unsere zuverlässigen Experten werden Ihnen im Rahmen der Photovoltaik-Beratung die Vorteile einer Photovoltaik-Anlage erläutern und dann eine bedarfsorientierte Planung vornehmen. Anschließend sorgen wir mit der fachgerechten Photovoltaik-Montage dafür, dass die PV-Anlage in Mannheim einen maximalen Ertrag erwirtschaftet. Es ist wichtig, die Solaranlage professionell montieren zu lassen, damit eine lange Lebensdauer erreicht wird und sich die Anlage zudem optimal in das Erscheinungsbild des Hauses einfügt. Beauftragen Sie deshalb mit der Photovoltaik-Montage unsere zuverlässige Firma in Mannheim – wir betreuen Ihr Projekt von der Planung bis zur Inbetriebnahme und stehen Ihnen auch danach mit umfassendem Service zur Verfügung.
                     </p>
                    <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
                            <div className="flex flex-col items-center w-full justify-center">
                            <FaSolarPanel className=" text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} prefix='>' className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={700} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Installationen
                            </p>
                        </div>
                        <div className="flex flex-col  items-center w-full justify-center">
                            <FaHandHoldingDollar className="text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} suffix='Mio' prefix='>' decimal='.' decimals={1} className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={1.3} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Kundenersparnis (€)
                            </p>
                        </div>
                        <div className="flex flex-col  items-center w-full justify-center">
                            <FaEarthAmericas className="text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} separator='' suffix='t' className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={1300} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Co2 Einsparungen
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-center py-10">   
                        <Link href={{ pathname: '/konfigurator' }}>
                            <a className="self-center flex text-xl items-center space-x-2 md:self-start bg-yellow-400 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                                <span>Hier Angebot anfordern!</span>
                                <HiOutlineArrowSmRight className="text-xl"/>
                            </a>
                        </Link>
                    </div>
                </div>

                <SubpageLandingpages
				yellowTitle='Photovoltaik '
                title='Montagesysteme & Gebäudeintegration'
                text='Es gibt verschiedene Möglichkeiten der Photovoltaik-Anlagen-Montage, die wir unseren Kunden in Mannheim zur Verfügung stellen. Am bekanntesten ist die Dachmontage, wobei die PV-Anlage wiederum in drei verschiedenen Stufen ins Dach integriert werden kann. Die Aufdachmontage der Solarmodule ist am günstigsten und eine gängige Variante, wenn keine Dachsanierung geplant ist. Bei der nächsten Stufe der Photovoltaik-Integration erfolgt die Montage in Mannheim mit Solarmodulen, die einzelne Dachziegel ersetzen und somit eine gerade Fläche mit dem Dach bilden. Eine vollständige Dachintegration entsteht, wenn das Dach komplett durch Solarmodule ersetzt wird. Darüber hinaus ist es möglich, die Photovoltaik-Montage an der Fassade Ihres Hauses vorzunehmen. '
                bullet1='Aufdachmontage der PV-Anlage'
                bullet2='Integration der PV-Anlage ins Dach'
                bullet3='Vollständig gebäudeintegrierte PV-Anlage'
                image='https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg'
                link='/konfigurator' 
				        linkText='Jetzt Angebot in Mannheim erstellen lassen!'/>
                
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>    

								<SubpageLandingpages
								yellowTitle='Professioneller  '
                title='PV-Anlagenbau in Mannheim'
                text='Der moderne PV-Anlagenbau bietet Ihnen in Mannheim verschiedene Optionen. Grundlage für die Gestaltung einer effizienten Photovoltaik-Anlage ist die Auswahl der Solarmodule sowie des Stromspeichers. Wir verwenden für Ihre Photovoltaik-Montage ausschließlich Produkte bester Qualität von renommierten Herstellern. Als führender Anbieter im Bereich des PV-Anlagenbaus haben wir in Mannheim bereits zahlreiche Solaranlagen für Privatkunden und Gewerbebetriebe konfiguriert und installiert. Profitieren Sie von den Vorteilen einer ganzheitlichen Betreuung – von der Feststellung des Bedarfs über die Konfiguration bis zur Photovoltaik-Montage. Die naheliegende Frage: Lohnt sich PV?, beantworten wir Ihnen mit einer detaillierten Wirtschaftlichkeitsberechnung. Photovoltaik-Anlagen der neuesten Generation amortisieren sich in weniger als zehn Jahren und helfen Ihnen, unabhängig von Stromlieferanten zu werden sowie einen Beitrag zur Energiewende zu leisten. Investieren Sie jetzt in Ihre eigene kleine Energiewende – mit Lumix Solar.'
                video='https://v.ftcdn.net/06/05/71/29/700_F_605712905_Zdo4J0LjhuytJITJiUSEzxO4JBMuoEOl_ST.mp4'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                icons/>

          

            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikMontage

