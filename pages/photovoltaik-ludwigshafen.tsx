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


const PhotovoltaikLudwigshafen: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Photovoltaik in Ludwigshafen │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik in Ludwigshafen: regionaler Anbieter 🌞 Kompetenter Partner ✔️ Aktiver Klimaschutz ✔️ Liefergarantie ➡️ Jetzt starten❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Photovoltaik in Ludwigshafen – aktiver Klimaschutz</h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">
Mit einer modernen Photovoltaik-Anlage starten Sie in Ludwigshafen Ihre ganz persönliche Energiewende. Sparen Sie Stromkosten, schützen Sie sich vor Stromausfällen und beginnen Sie jetzt damit, klimaneutralen Strom selbst zu produzieren. </p>

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
										yellowTitle='Photovoltaik – '								
                    title='individuelle Energiekonzepte für Kunden aus Ludwigshafen:'
                    bullet1='Klimaneutralen Solarstrom erzeugen'
                    bullet2='Unabhängigkeit von Strompreissteigerungen'
                    bullet3='Eigenverbrauchsquote bis zu 80 Prozent'
                    bullet4='Kombination mit Wallbox & Wärmepumpe'
                    bullet5='Individuelle Planung der PV-Anlage'
                    bullet6='Leistungsstarker regionaler Anbieter'
                    bullet7='Genaue Wirtschaftlichkeitsberechnung'
                    bullet8='Liefergarantie und exzellenter Service'
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
											Die Photovoltaik-Technologie, insbesondere die Entwicklung moderner Speicher, hat in den letzten Jahren erhebliche Fortschritte gemacht – Photovoltaik-Anlagen von Lumix Solar ermöglichen die Steigerung der Eigenverbrauchsquote von 30 auf maximal 80 Prozent, sodass sich die Effizienz der PV-Anlage in Ludwigshafen drastisch erhöht. Dank einer modernen Photovoltaik-Anlage mit Stromspeicher werden Sie fast vollständig unabhängig von den öffentlichen Stromanbietern und schützen sich zudem effektiv vor Stromausfällen aufgrund überlasteter Stromnetze.
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
								yellowTitle='Ganzheitlicher Service '
								title=' mit Lumix Solar'
                text='Sie möchten mehr darüber erfahren, ob sich Photovoltaik für Sie lohnt? Wir bieten unseren Privat- und Gewerbekunden aus Ludwigshafen einen Rundum-sorglos-Service, der auch die kompetente Beratung und bedarfsgerechte Dimensionierung der PV-Anlage umfasst. Auf Wunsch erstellen wir außerdem direkt ein Angebot für eine Photovoltaik-Anlage.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='Photovoltaik-Anlage'
								title=' mit Speicher in Ludwigshafen'
                text='Der Wirkungsgrad einer Photovoltaik-Anlage mit Speicher ist in Ludwigshafen ungleich höher als der einer PV-Anlage ohne Stromspeicher. Eines der am häufigsten genannten Argumente gegen die Nutzung von Solarenergie zur Stromerzeugung bestand darin, dass Stromerzeugung und -verbrauch zeitlich nicht übereinstimmen. Ein Großteil der Stromerzeugung mittels Photovoltaik findet in den Mittagsstunden statt, Familien benötigen in Ludwigshafen jedoch vor allem morgens und in den Abendstunden Strom.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='Verfügbare Energie '
								title='dank Stromspeicher'
                text='Strom sollte gerade in tageszeitlichen Bedarfsspitzen zur Verfügung stehen: Das Problem wurde durch neue Speichertechnologien und die kostengünstigere Produktion der Stromspeicher gelöst. Eine Photovoltaik-Anlage mit Speicher ermöglicht Ihnen deshalb, fast den gesamten Solarstrom selbst zu verwenden. Wir verbauen in unseren Photovoltaik-Anlagen in Ludwigshafen ausschließlich hochwertige Produkte wie Stromspeicher und Solarmodule renommierter Produzenten, die mit optimaler Energieeffizienz und langer Haltbarkeit überzeugen.'
                image='https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
								/>

                
                <SubpageLandingpages
								yellowTitle='Photovoltaik '
								title='namhafter Hersteller in Ludwigshafen'
                text='Lumix Solar konfiguriert Photovoltaik-Anlagen aus Komponenten bekannter Hersteller und liefert Ihnen somit in Ludwigshafen individuelle Energielösungen höchster Qualität. Sie fragen sich: Lohnt sich PV? Wir werden anhand von Wirtschaftlichkeitsberechnungen den monetären Effekt einer Photovoltaik-Anlage verdeutlichen und Sie außerdem in Ludwigshafen dabei unterstützen, alle Fördermöglichkeiten auszuschöpfen. Auf diese Weise wird die Investition in zukunftsfähige Photovoltaik-Technologie erheblich erleichtert.'
                image='/Images/gewerbe.webp'
								linkText='Jetzt informieren!'
                link='/konfigurator'
                left />

                
                <Service />
                <SubpageLandingpages
								yellowTitle='Geldwerte Optionen '
								title='für die Zukunft'
                text='Einspareffekte lassen sich durch Koppelung der PV-Anlage mit einer Wärmpumpe und/oder einer Wallbox für Ihr E-Auto weiter steigern. Wenn Sie eine PV-Anlage von Lumix Solar kaufen, profitieren Sie in Ludwigshafen von hoher Qualität und bestem Service. Starten Sie jetzt Ihre ganz persönliche Energiewende. Unser Team freut sich darauf, Ihnen die Vorteile von Photovoltaik zu erläutern!'
                image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
								linkText='Jetzt Solarcheck starten!'
								link='/konfigurator'
								 />
                
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='PV-Anlage kaufen –'
								title='unser Service für Kunden aus Ludwigshafen:'
                bullet1='Persönliche Beratung'
                bullet2='Individuelle Planung der PV-Anlage'
                bullet3='Berechnung der Wirtschaftlichkeit'
                bullet4='Montage der PV-Anlage'
                bullet5='Prüfung und Inbetriebnahme'
                bullet6='Wartung und Reparatur'
								video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
               link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                left
                icons/>

                

                {/* <FAQ /> */}
                      <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikLudwigshafen
