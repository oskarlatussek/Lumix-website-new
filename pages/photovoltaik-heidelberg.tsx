import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";


import Service from '../components/section/Service';import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Contact from '../components/general/Contact';
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"

const PhotovoltaikHeidelberg: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Photovoltaik in Heidelberg │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik Heidelberg: renommierter Anbieter 🌞 Regionaler Partner ✔️ Individuelle Lösungen ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Photovoltaik-Anlage in Heidelberg – Lumix Solar</h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                          Moderne Photovoltaik-Anlagen ermöglichen Privat- und Geschäftskunden in Heidelberg, einen Großteil der Stromkosten zu sparen und endlich unabhängig von gängigen Stromanbietern zu werden. Unser Team hilft Ihnen, den Umstieg auf Photovoltaik in Heidelberg zu bewältigen.
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
                    yellowTitle ='Solar'
                    title=' für Zuhause' 
                    bullet1='Klimaneutrale Erzeugung von Strom' 
                    bullet2='Drastische Reduzierung der Stromkosten' 
                    bullet3='Eigenverbrauchsquote bis zu 80 Prozent'
                    bullet4='Kombination mit Wallbox & Wärmepumpe'
                    bullet5='Individuelle Konfiguration der PV-Anlage'
                    bullet6='Zuverlässiger regionaler Ansprechpartner'
                    bullet7='Kompetente Wirtschaftlichkeitsberechnung'
                    bullet8='Liefergarantie und vorbildlicher Service'
                    image='https://as2.ftcdn.net/v2/jpg/06/06/35/13/1000_F_606351333_2E2KZd5gZDejot9kVR11E4ntFpYOpR5q.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    icons2
                    left />

                <div className="items-center w-full justify-center pt-10 p-2 sm:p-5">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                    <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Die Photovoltaik-Technologie trägt entscheidend zur Lösung des Energieproblems bei, denn damit wird es Privathaushalten und Gewerbebetrieben in Heidelberg ermöglicht, klimaneutral eigenen Strom zu erzeugen. Wenn Sie sich für die Installation einer Photovoltaik-Anlage entscheiden, machen Sie sich unabhängig von den ständigen Erhöhungen des Strompreises und senken Ihre Stromkosten erheblich. Die Entwicklung neuer Stromspeicher und die günstigere Herstellung dieser Komponenten führen dazu, dass Sie das Potenzial Ihrer Photovoltaik-Anlage in Heidelberg wesentlich besser nutzen können, denn es werden nun Eigenverbrauchsquoten von bis zu 80 Prozent erreicht. Möchten Sie mehr über die Möglichkeiten der Photovoltaik erfahren und sich in Heidelberg individuell beraten lassen oder direkt ein Angebot anfordern?
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
								yellowTitle='PV-Anlage mit Speicher'
								title=' in Heidelberg installieren'
                text='Wenn Sie sich für eine PV-Anlage mit Speicher entscheiden, erstellen wir für Ihr Gebäude in Heidelberg eine maßgeschneiderte Energielösung. Unsere PV-Anlagen werden bedarfsgerecht dimensioniert und aus hochwertigen Produkten namhafter Hersteller konfiguriert. Sowohl die Solarmodule als auch die Stromspeicher überzeugen mit optimaler Energieeffizienz und langer Haltbarkeit.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages 
								yellowTitle ='Ganzheitliche Lösungen'
								title=' – effeketiver Nutzen'
                text='Als erfahrener Anbieter für Photovoltaik-Anlagen bieten wir unseren Kunden aus Heidelberg einen vorbildlichen Service, der die kompetente Beratung, die detaillierte Planung, die fachgerechte Montage ebenso wie die Betreuung nach dem Kauf einschließt. Photovoltaik-Anlagen aus dem Hause Lumix Solar bilden einen effektiven Beitrag zur Energiewende und schützen Sie gleichzeitig vor Stromausfällen aufgrund von Netzüberlastungen. Falls Sie eine PV-Anlage kaufen, verliert der vieldiskutierte Blackout in Heidelberg endlich seinen Schrecken.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <Service />
                <SubpageLandingpages 
								yellowTitle ='PV-Anlage '
								title='mit Speicher kaufen – unsere Leistungen für Kunden aus Heidelberg:'
                bullet1='Persönliche Beratung'
                bullet2='Individuelle Planung der PV-Anlage'
                bullet3='Berechnung der Wirtschaftlichkeit'
                bullet4='Montage der PV-Anlage'
                bullet5='Prüfung und Inbetriebnahme'
                bullet6='Wartung und Reparatur'
                image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
               link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                icons/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle='Lumix Solar -'
								title=' Photovoltaik-Anbieter nahe Heidelberg'
                text='Sie möchten klimafreundlichen Sonnenstrom selbst produzieren und suchen nach einem kompetenten Photovoltaik-Anbieter, der Ihnen einen überzeugenden Service bietet? Das Team von Lumix Solar kennt sich bestens mit der Konfiguration und Installation von Photovoltaik Anlagen aus und betreut Ihr Projekt in Heidelberg bereits im Planungsstadium. Anhand von realistischen Wirtschaftlichkeitsberechnungen können wir Ihnen sogar die Frage: Lohnt sich PV?, ganz genau beantworten. Darüber hinaus informieren wir über aktuelle Förderprogramme und unterstützen Sie bei der Beantragung der Photovoltaik-Förderung in Heidelberg.'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
                left />

                {/* <FAQ /> */}
                      <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikHeidelberg
