import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"





const Stromspeicher: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Stromspeicher Photovoltaik in Mannheim │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Stromspeicher für Photovoltaik-Anlagen in Mannheim ✔️ Moderne Speichertechnik 🌞 Eigenverbrauchsquote steigern ➡️ Hier informieren❕"/>
            </Helmet>

            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/06/17/34/44/1000_F_617344495_QSMOWUCIQOLMIXxSTGOgzPAsXRYxW6gp.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Stromspeicher für Photovoltaik-Anlagen in Mannheim
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44   sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                        Mit einem innovativen Stromspeicher steigern Sie die Eigenverbrauchsquote und damit die Effizienz Ihrer Photovoltaik-Anlage in Mannheim erheblich. Dank moderner Stromspeicher sparen Sie den Großteil der Stromkosten ein und werden unabhängig von Versorgungsunternehmen und Netzausfällen.
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
                    yellowTitle ='Stromspeicher '
                    title='für Photovoltaik-Anlagen vom Experten aus Mannheim:'
                    bullet1='Steigerung des Eigenverbrauchs'
                    bullet2='Bedarfsorientierte Dimensionierung'
                    bullet3='Solarstrom selbst bei Dunkelheit verfügbar'
                    bullet4='Perfekt für die Kombination mit Wärmepumpen'
                    bullet5='Notstromsystem zur Absicherung bei Stromausfällen'
                    bullet6='Beratung über aktuelle Fördermöglichkeiten'
                    bullet7='Exakte Wirtschaftlichkeitsberechnungen'
                    bullet8='Alle Serviceleistungen aus einer Hand'
                    image='https://as2.ftcdn.net/v2/jpg/05/21/20/51/1000_F_521205159_vw5PbN1jxO3uH2a9moyAwPKosdFJ9VmJ.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    icons2
                    left />

<div className="items-center w-full justify-center pt-10">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                    <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Die modernen Stromspeicher für Photovoltaik-Anlagen sorgen dafür, dass Sie das Potenzial Ihrer PV-Anlage in Mannheim optimal nutzen, denn damit steigern Sie Ihren Eigenverbrauch auf bis zu 80 Prozent und sparen somit einen Großteil der Stromkosten. Photovoltaik-Batteriespeicher schaffen die Voraussetzung dafür, dass die Unabhängigkeit vom Stromanbieter maximiert wird und Ihnen der umweltfreundliche Sonnenstrom auch dann zur Verfügung steht, wenn die Sonne nicht scheint. Wir liefern und montieren Stromspeicher für Photovoltaik, die mit Notstromsystemen ausgestattet sind und in Mannheim bestens vor Stromausfällen schützen.
                        Unser Team konfiguriert bedarfsgerechte Photovoltaik-Anlagen für Privatkunden und Gewerbebetriebe und überzeugt mit einem umfassendem Service, der von der Beratung über die Planung und Montage bis zur Wartung der PV-Anlagen alle Leistungen umfasst.  
                        Wünschen Sie eine kompetente Beratung zu den Möglichkeiten, die Photovoltaik-Batteriespeicher vom regionalen Experten Lumix Solar aus Mannheim bieten? Wir stehen Ihnen jederzeit für ein persönliches Beratungsgespräch zur Verfügung oder unterbreiten Ihnen direkt ein Angebot.
												</p>
                    <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
                            <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                            <FaSolarPanel className=" text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} prefix='>' className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={700} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Installationen
                            </p>
                        </div>
                        <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                            <FaHandHoldingDollar className="text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} suffix='Mio' prefix='>' decimal='.' decimals={1} className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={1.3} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Kundenersparnis (€)
                            </p>
                        </div>
                        <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
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
				yellowTitle='PV-Anlage '
                title=' mit Speicher in Mannheim kaufen'
                text='Ein Stromspeicher für Photovoltaik-Anlagen steigert die Effizienz der Anlage erheblich. Aus diesem Grund entscheiden sich immer mehr Kunden dafür, eine Solaranlage mit Speicher von Lumix Solar zu kaufen. Wenn Sie in eine PV-Anlage mit Speicher investieren, können Sie in Mannheim Sonnenstrom, der nicht unmittelbar verbraucht wird, für eine spätere Nutzung speichern. Damit entfällt eines der wichtigsten Argumente gegen den Einsatz von Photovoltaik-Anlagen in privaten Haushalten: Es wird am meisten Strom produziert, wenn die Familie außer Haus ist. Das ist kein Problem, wenn Sie eine Photovoltaik-Anlage mit Speicher kaufen, denn dann können Sie in Mannheim in den frühen Morgenstunden und abends einfach den gespeicherten Solarstrom verwenden. Auf diese Weise lässt sich der Eigenverbrauch auf bis zu 80 Prozent steigern und damit erreichen Privathaushalte eine noch nie dagewesene Unabhängigkeit von den Stromanbietern. Die größten Effekte erzielen Sie mit dem Stromspeicher der Photovoltaik-Anlage, wenn Sie den Sonnenstrom in Mannheim zusätzlich für die Ladung Ihres Elektroautos oder den Betrieb einer klimafreundlichen Wärmepumpe nutzen. Speicher für Photovoltaik führen dazu, dass sich Ihr Beitrag zum Klimaschutz in Mannheim drastisch erhöht. Lumix Solar konfiguriert leistungsstarke PV-Anlagen aus hochwertigen Produkten renommierter Hersteller und verwendet ausschließlich energieeffiziente und lange haltbare Solarmodule. Sie fragen sich dennoch: Lohnt sich PV? Unsere erfahrenen Experten werden anhand von Wirtschaftlichkeitsberechnungen den monetären Effekt kalkulieren und Sie außerdem hinsichtlich aktueller Fördermöglichkeiten für Stromspeicher und Photovoltaik in Mannheim beraten.'
                image='https://as2.ftcdn.net/v2/jpg/05/55/87/93/1000_F_555879301_JODEAbKlzcFxrksLoI6vQWsOwEPsMN2I.jpg'
                link='/konfigurator' 
				        linkText='Jetzt Solarcheck starten!'/>
                

								<div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>    

                <SubpageLandingpages
				yellowTitle ='Lumix Solar – '
                title='unser umfangreiches Portfolio:'
                bullet1='Solarmodule'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                video='https://v.ftcdn.net/06/18/06/10/700_F_618061093_VFYEgaSImEuoG8JpvoKUXkwV2LZgI0VF_ST.mp4'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                left 
                icons/>


            </div>
            </HelmetProvider>

        </>
    )
}


export default Stromspeicher
