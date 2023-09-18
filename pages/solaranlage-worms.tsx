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


const SolaranlageWorms: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Worms │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen in Worms kaufen: zukunftsweisende Solartechnik 🌞 Maßgeschneiderte Konzepte ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Solaranlage für klimaneutralen Strom in Worms
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                        Wenn Sie eine Solaranlage von Lumix Solar installieren lassen, produzieren Sie in Worms Ihren eigenen Strom – klimaneutral aus sauberer Sonnenenergie. Gleichzeitig machen Sie sich unabhängig von Stromkonzernen, Stromausfällen und ständig steigenden Stromrechnungen.
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
                    yellowTitle ='Solaranlage'
										title=' in Worms – jetzt persönliche Energiewende starten:'
                    bullet1='Klimaneutral produzierter Sonnenstrom'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Kein Risiko mehr durch Blackouts'
                    bullet4='Optimale Eigenverbrauchsquote'
                    bullet5='Leistungsstarke Stromspeicher'
                    bullet6='Individuell konfigurierte PV-Anlagen'
                    bullet7='Verlässliche Liefergarantie'
                    bullet8='Vorbildlicher Rundum-Service'
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
                    Sie möchten unabhängig von den großen Stromkonzernen werden, die Ihre Strompreise teilweise willkürlich erhöhen? Sie fürchten Blackouts aufgrund wachsender Überlastung der öffentlichen Stromnetze? Sie wollen aktiv zum Klimaschutz beitragen, anstatt zu warten, dass endlich politische Entscheidungen getroffen werden? Das sind gute Gründe, um eine Solaranlage in Worms installieren zu lassen und künftig den Strombedarf mit klimaneutralem Sonnenstrom zu decken. Wenn Sie erwägen, eine PV-Anlage zu kaufen, sind Sie bei Lumix Solar genau richtig, denn wir bieten unseren Kunden einen ausgezeichneten ganzheitlichen Service.
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
								yellowTitle='Komplett-Service'
								title=' beim Kauf einer Solaranlage'
                text='Wenn Sie eine Solaranlage kaufen möchten, bieten wir Ihnen einen vorbildlichen Service, der von der Beratung über die detaillierte Planung und fachgerechte Montage bis weit über den Kauf hinausgeht. Unser Team sorgt für eine perfekte Wartung und ist auch zur Stelle, wenn die Solaranlage in Wiesbaden repariert werden muss. Gerne informieren wir Sie über vielen Möglichkeiten, die Ihnen eine Solaranlage mit Speicher bietet. Fordern Sie außerdem Ihr unverbindliches Angebot an – wir sind erfahrene Experten für die Konfiguration und die Montage von Solaranlagen mit Speicher für Privathaushalte, aber auch für Gewerbebetriebe in Wiesbaden.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='Ganzheitliche Bratung'
								title=' zu Ihrer Solaranlage '
                text='Unser Team plant und montiert Solaranlagen sowohl für Privatkunden als auch für Unternehmen und überzeugt mit Liefertreue und optimaler Servicequalität. Eine Solaranlage mit Speicher eröffnet Ihnen faszinierende Möglichkeiten, denn Sie können damit in Worms den günstigen Sonnenstrom sogar dann nutzen, wenn die Sonne gar nicht scheint. Möchten Sie mehr über die Vorteile unserer Anlagen erfahren, bevor Sie eine Entscheidung treffen? Nutzen Sie unsere herstellerunabhängige Photovoltaik-Anlagen-Beratung oder fordern Sie direkt ein Angebot an.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='Solaranlage '
								title='bedarfsorientiert planen in Worms'
                text='Wenden Sie sich an die Experten von Lumix Solar, die Ihre Solaranlage individuell planen und maßgeschneidert für Sie konfigurieren. Wir berücksichtigen bei der Planung der Solaranlage sowohl Ihren aktuellen als auch Ihren zukünftigen Strombedarf sowie die örtlichen Gegebenheiten in Worms. Wenn wir die Solaranlage planen und dimensionieren beziehen wir beispielsweise die Dachneigung und die Ausrichtung des Daches, einen eventuellen Sanierungsbedarf sowie alternative Montageoptionen in die Planung ein. Darüber hinaus führen wir bei der Planung der Solaranlage in Worms Wirtschaftlichkeitsberechnungen durch, um Ihnen die Frage: Lohnt sich PV?, exakt zu beantworten und Sie transparent darüber zu informieren, wann sich die PV-Anlage amortisiert.'
                image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
                link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                 />

                
<Service />
                <SubpageLandingpages
								yellowTitle='Solartechnik '
								title='in Worms bei Lumix Solar kaufen'
                text='Lumix Solar ist Ihr kompetenter regionaler Anbieter für modernste Solartechnik und konfiguriert für Kunden aus Worms maßgeschneiderte Lösungen. Unsere Solaranlagen werden mit hochwertigen Produkten renommierter Hersteller konstruiert, denn die Qualität von Solarmodulen und Stromspeichern ist entscheidend für eine lange Lebensdauer und die Energieeffizienz der Photovoltaik-Anlage. Profitieren Sie von umfassender Beratung, professioneller Planung, fachgerechter Montage und einem exzellenten Service im Bereich Wartung und Reparatur. Mit innovativer Solartechnik senken Sie dauerhaft Ihre Stromkosten und leisten in Worms einen wichtigen Beitrag zum Klima- und Umweltschutz. Unsere Solarexperten beraten Sie zudem hinsichtlich aktueller Förderprogramme für Ihre Solaranlage und unterstützen Sie bei der Beantragung der Fördermittel. Wagen Sie jetzt den Schritt in Ihre individuelle Energiewende – mit Lumix Solar.'
								video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
                left/>



<div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>
                <SubpageLandingpages
								yellowTitle='Lumix Solar – '
								title='Ihr kompetenter Ansprechpartner in der Region für:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                image='https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg'
                linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
                icons />

                

                {/* <FAQ /> */}
                      <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default SolaranlageWorms
