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


const SolaranlageDarmstadt: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Darmstadt │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Darmstadt: effiziente Solartechnik 🌞 Regionaler Anbieter ✔️ Maßgeschneiderte Lösungen ✔️ Liefergarantie ➡️ Informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Solaranlage zur Stromerzeugung in Darmstadt</h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                        Die Solaranlagen von Lumix Solar bieten Ihnen die Möglichkeit, in Darmstadt klimaneutral Strom auf dem eigenen Dach zu erzeugen, sich damit unabhängig von den Preissteigerungen der Versorgungsunternehmen zu machen und gleichzeitig zum Klimaschutz beizutragen.
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
                    yellowTitle ='Solaranlage '
                    title='von Lumix Solar – profitieren Sie in Darmstadt von:'
                    bullet1='Günstigem, klimaneutralen Solarstrom'
                    bullet2='Dauerhaft niedrigerer Stromrechnung'
                    bullet3='Schutz vor netzbedingten Blackouts'
                    bullet4='Sehr hoher Eigenverbrauchsquote'
                    bullet5='Innovativen Stromspeichern'
                    bullet6='Bedarfsorientierten Energielösungen'
                    bullet7='Einhaltung von Lieferzusagen'
                    bullet8='Kompetenter persönlicher Beratung'
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
                     Die innovativen Solaranlagen aus dem Haus Lumix Solar machen Sie in Darmstadt unabhängig von ständig steigenden Strompreisen der Versorgungsunternehmen und helfen Ihnen dabei, Ihre Energiekosten langfristig drastisch zu reduzieren. Ein weiterer Vorteil dieser Unabhängigkeit betrifft den Schutz vor Blackouts aufgrund immer stärker belasteter Stromnetze – wenn Sie eine Solaranlage kaufen, brauchen Sie sich darüber in Darmstadt keine Sorgen mehr zu machen, denn Sie decken Ihren Strombedarf zum größten Teil mit dem selbst produzierten Sonnenstrom ab. Neben dieser Sicherheit bietet eine Solaranlage mit integriertem Speicher Vorteile für den Klimaschutz. Sie tragen aktiv dazu bei, dass die Energiewende in Darmstadt erfolgreich umgesetzt wird.
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
								yellowTitle='Rudum-Service '
								title='für Ihre Solaranlage '
                text='Als renommierter regionaler Anbieter konfigurieren wir maßgeschneiderte PV-Anlagen für Ihre Bedürfnisse und sorgen für eine fachgerechte Montage. Unser zuverlässiges Team verfügt über jahrelange Erfahrung mit der Konfiguration von Solaranlagen für die Stromerzeugung und bietet sowohl Privatkunden als auch Gewerbebetrieben in Darmstadt einen praktischen Rundum-Service. Sie können hier direkt ein Angebot für eine Photovoltaik-Anlage anfordern und Ihre ganz persönliche Energiewende starten.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='Solaranlage'
								title=' bedarfsgerecht planen in Darmstadt'
                text='Um mit dem selbstproduzierten Strom maximale Einsparpotenziale zu realisieren, sollte man die Solaranlage professionell planen und sich dabei von den Solarexperten der Firma Lumix Solar beraten lassen. Wir dimensionieren Ihre Solaranlage in Darmstadt individuell und liefern keine „PV-Anlagen von der Stange“. Damit schaffen wir optimale Voraussetzungen dafür, dass Sie mit Ihrer neuen Anlage eine Eigenverbrauchsquote von maximal 80 Prozent erreichen und nur ein Fünftel des Sonnenstroms ins öffentliche Stromnetz eingespeist wird.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='Fachdienstleistungen'
								title=' aus einer Hand'
                text='Als leistungsstarker Anbieter von Solaranlagen für die Stromerzeugung unterstützen wir unsere Kunden aus Darmstadt umfangreich: Wir beraten sie ausführlich und planen die PV-Anlage, sorgen für eine optimale Dimensionierung und eine fachgerechte Montage und übernehmen außerdem die Wartung nach der Installation. Kurz gesagt: Wir stehen Ihnen jederzeit als zuverlässiger Ansprechpartner zur Verfügung.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                linkText='Jetzt informieren'
                />
                <Service />

                
                <SubpageLandingpages
								yellowTitle ='Solartechnik – '
								title='innovative PV-Anlagen in Darmstadt'
                text='Die Weiterentwicklung der Solartechnik bietet Ihnen in Darmstadt die Möglichkeit, den eigenen Strom klimafreundlich zu produzieren. Auch die immer wieder gestellte Frage: Lohnt sich PV?,  kann uneingeschränkt mit „Ja“ beantwortet werden, denn eine Solaranlage amortisiert sich in unter zehn Jahren und erreicht eine Lebensdauer von mehr als 25 Jahren. Dank der hohen Eigenverbrauchsquoten können Sie somit Ihre Stromkosten in Darmstadt dauerhaft minimieren. Für die Solaranlagen von Lumix Solar werden ausschließlich modernste Produkte verwendet – energieeffiziente Solarmodule und Stromspeicher optimieren den Wirkungsgrad der Solartechnik und überzeugen außerdem mit geringem Wartungsbedarf und Robustheit.'
								image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
                link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                 left />
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle='Solaranlagen'
								title='von Lumix Solar – Ihrem Experten für:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
                icons />

                

                {/* <FAQ /> */}
            </div>
            </HelmetProvider>

        </>
    )
}


export default SolaranlageDarmstadt
