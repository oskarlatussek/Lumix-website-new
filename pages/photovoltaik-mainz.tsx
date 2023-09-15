import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import Service from '../components/section/Service';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"


const PhotovoltaikMainz: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>PPhotovoltaik in Mainz │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik Mainz: regionaler Anbieter 🌞 Stromkosten senken ✔️ Aktiver Klimaschutz ✔️ Liefergarantie ➡️ Jetzt Energiewende starten❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                            Moderne Photovoltaik-Anlage in Mainz kaufen
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                            Mit einer modernen Photovoltaik-Anlage starten Sie in Mainz in Ihre persönliche Energiewende. Werden Sie unabhängig von teuren Stromanbietern und produzieren Sie den Strom für Ihren Haushalt ganz einfach selbst.
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
                		yellowTitle='Solarstrom – '
                    title='individuelle Energielösungen:'
                    bullet1='Solarstrom auf dem Dach selbst herstellen'
                    bullet2='Steigende Strompreise ausbremsen'
                    bullet3='Eigenverbrauchsquote von maximal 80 Prozent' 
                    bullet4='Wallbox & Wärmepumpe anschließen'
                    bullet5='Photovoltaik-Anlage bedarfsgerecht planen'
                    bullet6='Erfahrener regionaler Anbieter bei Mainz'
                    bullet7='Exakte Wirtschaftlichkeitsberechnung'
                    bullet8='Rundum-sorglos-Service und Termintreue'
                    image='https://as2.ftcdn.net/v2/jpg/06/06/35/13/1000_F_606351333_2E2KZd5gZDejot9kVR11E4ntFpYOpR5q.jpg'
										link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    icons2
										left />

								<div className="items-center w-full justify-center pt-10">   
										<p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
											<span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
										</p>
										<p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
													Immer mehr Privathaushalte und Gewerbebetriebe entscheiden sich für eine innovative Photovoltaik-Anlage in Mainz. Insbesondere die Tatsache, dass sich der Wirkungsgrad von Photovoltaik-Anlagen stark erhöht hat und dadurch die Wirtschaftlichkeit enorm verbessert wurde, trägt zur steigenden Attraktivität von PV-Anlagen bei. Dank einer durchschnittlichen Amortisationsdauer der Photovoltaik-Anlage von unter zehn Jahren und einer Lebensdauer von mehr als 25 Jahren kann die Frage: Lohnt sich PV?, mittlerweile mit einem eindeutigen „Ja“ beantwortet werden. Gerne unterbreiten wir Ihnen für den Raum Mainz ein individuelles Angebot.
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
								yellowTitle='Photovoltaik-Anlage '
								title='mit Speicher unweit von Mainz kaufen'
                text='Es ist empfehlenswert, sich für eine Photovoltaik-Anlage mit Speicher zu entscheiden, denn dadurch sind in Mainz Eigenverbrauchsquoten von bis zu 80 Prozent erreichbar, wodurch sich die Wirtschaftlichkeit erheblich verbessert. Stromspeicher wurden in den vergangenen Jahren erstens immer leistungsstärker und zweitens kostengünstiger, sodass es sich lohnt, eine Photovoltaik-Anlage mit einem Speicher auszustatten – auf diese Weise profitieren Sie auch dann von günstigem Solarstrom, wenn die Sonne in Mainz nicht scheint.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='PV-Anlage '
								title='mit Speicher – zukunftsfähige Technologie'
                text='Das erfahrene Team von Lumix Solar dimensioniert Photovoltaik-Anlagen mit Speicher bedarfsorientiert und berät Sie hinsichtlich einer zukunftssicheren Ausstattung der PV-Anlage. Die Energieeffizienz Ihres Hauses lässt sich weiter steigern, wenn Sie die Anlage mit einer Wärmepumpe koppeln und auch für die Heizung umweltfreundlichen Solarstrom nutzen. Eine weitere Option zur Verbesserung des eigenen Beitrags zum Klimaschutz ist die Verwendung des Sonnenstroms zum Aufladen Ihres Elektroautos. Zu diesem Zweck koppeln wir die Photovoltaik-Anlage mit Speicher zusätzlich mit einer Wallbox. Gerne informieren wir Sie über die vielfältigen Möglichkeiten, Photovoltaik in Mainz wirtschaftlich einzusetzen.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='PV-Anlage'
								title=' kaufen in Mainz: Ihr Partner Lumix Solar'
                text='Sie möchten eine PV-Anlage kaufen, um künftig in Mainz unabhängig von Stromanbietern zu werden? Lumix Solar ist Ihr kompetenter Ansprechpartner und bietet Ihnen als regionaler Anbieter die Sicherheit einer perfekten Betreuung. Sie können sich jederzeit an unsere Photovoltaik-Experten wenden, wenn Sie eine Beratung vor dem Kauf benötigen oder später Fragen zum Betrieb der PV-Anlage haben.'
                image='https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
								/>

                
                <Service />
                <SubpageLandingpages
								yellowTitle='Komplett-Service'
								title=' von Ihrem Spezialisten für PV-Anlagen'
                text='Falls Sie sich dafür entscheiden, Ihre PV-Anlage bei Lumix Solar zu kaufen, profitieren Sie in Mainz von unserem vollumfänglichen Service, der von den Beratung bis zur Montage und Wartung reicht. Wir erstellen ein maßgeschneidertes Konzept und konfigurieren die Photovoltaik-Anlage in Mainz passend zu Ihren Anforderungen und örtlichen Gegebenheiten aus hochwertigen Produkten renommierter Hersteller und verwenden ausschließlich modernste Solarmodule und Stromspeicher.'
                image='/Images/gewerbe.webp'
								linkText='Jetzt informieren!'
                link='/konfigurator'
                left />
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle='Photovoltaik-Anlage'
								title=' von Lumix Solar – wir bieten Ihnen in Mainz:'
                bullet1='Persönliche & umfassende Beratung'
                bullet2='Individuelle Planung der PV-Anlage'
                bullet3='Berechnung der Wirtschaftlichkeit'
                bullet4='Fachgerechte Montage der Anlage'
                bullet5='Prüfung und Inbetriebnahme'
                bullet6='Wartung und Reparatur'
								video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
               link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                icons/>

                

                {/* <FAQ /> */}
            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikMainz
