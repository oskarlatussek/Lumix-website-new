import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"


const PhotovoltaikWiesbaden: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Photovoltaik in Wiesbaden │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik Wiesbaden: regionaler Anbieter 🌞 Aktiver Klimaschutz ✔️ Stromkosten minimieren 💶 Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                            Mit Photovoltaik in Wiesbaden Stromkosten senken
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                            Photovoltaik bietet Ihnen die Möglichkeit, sich in Wiesbaden unabhängig von öffentlichen Stromanbietern zu machen und den Strom für Ihren Haushalt oder Ihren Betrieb ganz einfach auf dem Dach selbst zu produzieren.
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
                    yellowTitle ='Photovoltaik-Anlage '
                    title='in Wiesbaden – zukunftsfähige Technologie von Lumix Solar:'
                    bullet1='Solarstrom selbst produzieren'
                    bullet2='Schutz vor steigenden Strompreisen'
                    bullet3='Hohe Eigenverbrauchsquote'
                    bullet4='Auch mit Wallbox & Wärmepumpe'
                    bullet5='Bedarfsgerechte Anlagen-Planung'
                    bullet6='Renommierter regionaler Anbieter'
                    bullet7='Wirtschaftlichkeitsberechnung'
                    bullet8='Komplett-Service & Liefergarantie'
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
											Sie möchten zum Klimaschutz beitragen und gleichzeitig Ihre Energiekosten senken? Der Umstieg auf regenerative Energien wird dank moderner Photovoltaik-Anlagen für Privathaushalte und Gewerbebetriebe in Wiesbaden immer attraktiver. Fortschreitende Technik auf dem Gebiet der Stromspeicher und bessere Wirkungsgrade führen dazu, dass Photovoltaik-Anlagen immer beliebter werden. Das Team von Lumix Solar ist im Raum Wiesbaden Ihr ansprechpartner für innovative Lösungen im Bereich Solartechnik. Lassen Sie sich von uns qualifiziert beraten.
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
								yellowTitle='Photovoltaik – '
								title='Zukunftstechnologie, die sich für Sie rechnet'
                text='Wenn Sie sich entscheiden, eine Photovoltaik-Anlage zu kaufen, profitieren Sie in Wiesbaden von zukunftsweisender Technologie und realisieren maximale Einsparpotenziale. Lohnt sich PV? Diese Frage kann man mittlerweile tatsächlich uneingeschränkt mit „Ja“ beantworten und die Antwort mit Wirtschaftlichkeitsberechnungen untermauern. Innovative Photovoltaik-Anlagen von Lumix Solar amortisieren sich für Sie in Wiesbaden durchschnittlich in weniger als zehn Jahren und überzeugen mit einer langen Haltbarkeit von mindestens 25 Jahren.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='PV-Anlage '
								title='mit Speicher nahe Wiesbaden kaufen'
                text='Eine PV-Anlage mit Speicher in der Region Wiesbaden zu kaufen, ist eine lohnende Investition. Stromspeicher der neuesten Generation sind extrem leistungsstark und ermöglichen Ihnen, selbst dann den eigenen Solarstrom zu nutzen, wenn die Sonne nicht scheint. Damit entfällt das Hauptargument gegen Photovoltaik-Anlagen: Der meiste Sonnenstrom wird in der Mittagszeit produziert, aber morgens und abends benötigt. Eine PV-Anlage mit Speicher stellt den Solarstrom hingegen jederzeit bedarfsgerecht zur Verfügung.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='PV-Anlage – '
								title='Beratung zu weiteren Möglichkeiten'
                text='PV-Anlagen mit Speicher können mit einer Wärmepumpe und/oder einer Wallbox gekoppelt werden, um die Energieeffizienz noch weiter zu steigern. Möchten Sie sich näher darüber informieren, ob sich eine Photovoltaik-Anlage für Sie in Wiesbaden rechnet? Unser Team steht Ihnen jederzeit für eine individuelle Beratung zur Verfügung und wird dabei sowohl Ihren Stromverbrauch als auch künftige Entwicklungen und örtliche Gegebenheiten bei zu planenden Anlagen einbeziehen.'
                image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
                link='/konfigurator'
								linkText='Jetzt Solarcheck starten!'
                 />

                
                <Service />
                <SubpageLandingpages
								yellowTitle ='PV-Anlage '
								title='vom renommierten Hersteller bei Wiesbaden'
                text='Wenn Sie Ihre PV-Anlage vom renommierten Hersteller Lumix Solar kaufen, profitieren Sie in Wiesbaden von einem praktischen Rundum-Service, der mit der unverbindlichen Beratung startet. Darüber hinaus planen wir die Photovoltaik-Anlage mit innovativen Produkten und verwenden ausschließlich hochwertige Solarmodule und Stromspeicher. Unsere Photovoltaik-Anlagen werden bedarfsorientiert geplant, wobei wir Ihnen in Wiesbaden raten, die Kapazität der PV-Anlage etwas größer als derzeit benötigt zu wählen, um beispielsweise später eine Wärmepumpe oder eine Wallbox anzuschließen.'
                image='/Images/gewerbe.webp'
								linkText='Jetzt Informieren!'
                link='/konfigurator'
                left />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>
                <SubpageLandingpages
								yellowTitle='Photovoltaik-Anlagen '
								title='von Lumix Solar – unser Service für Wiesbaden:'
                bullet1='Persönliche Beratung'
                bullet2='Individuelle Planung der PV-Anlage'
                bullet3='Berechnung der Wirtschaftlichkeit'
                bullet4='Montage der PV-Anlage'
                bullet5='Prüfung und Inbetriebnahme'
                bullet6='Wartung und Reparatur'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                icons />

                

                {/* <FAQ /> */}
            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikWiesbaden
