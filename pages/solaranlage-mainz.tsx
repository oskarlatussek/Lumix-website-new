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

const SolaranlageMainz: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Mainz │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Mainz: moderne Solartechnik 🌞 Maßgeschneiderte Lösungen ✔️ Regionaler Anbieter ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                            Solaranlage – Strom in Mainz selbst erzeugen
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">

                            Mit einer Solaranlage von Lumix Solar produzieren Sie Ihren Strom in Mainz auf dem eigenen Dach oder an der Fassade. Informieren Sie sich über die Möglichkeiten der modernen Solartechnik und reduzieren Sie dauerhaft Ihre Energiekosten.
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
										title=' in Mainz – Ihr regionaler Partner Lumix Solar:'
                    bullet1='Klimaneutraler Solarstrom'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Keine Gefahr von Blackouts'
                    bullet4='Maximale Eigenverbrauchsquote'
                    bullet5='Leistungsstarke Stromspeicher'
                    bullet6='Individuelle Energielösungen'
                    bullet7='Zuverlässige Liefergarantien'
                    bullet8='Persönliche Beratung'
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
                    Mit den hochwertigen Solaranlagen von Lumix Solar werden Sie in Mainz endlich unabhängig von den Stromkonzernen und deren mehr oder weniger willkürlichen Strompreiserhöhungen. Wenn Sie sich dafür entscheiden, eine Solaranlage zu kaufen, generieren wir eine individuelle Lösung, die sich an Ihrem Verbrauch und den örtlichen Gegebenheiten in Mainz orientiert. Unsere Solarexperten werden beispielsweise die Dachneigung und -ausrichtung berücksichtigen und Ihnen bei der Konfiguration der Anlage eine geeignete Montageoption vorschlagen.
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
								yellowTitle='Solaranlage '
								title='fachgerecht planen lassen   '
                text='Eine Solaranlage mit Speicher ermöglicht Eigenverbrauchsquoten von bis zu 80 Prozent, sodass Sie in Mainz von einer optimalen Wirtschaftlichkeit Ihrer PV-Anlage profitieren und Ihren Strombedarf fast vollständig mit dem klimafreundlichen Sonnenstrom decken können. Unser fachkompetentes Team unterstützt Sie bereits bei der Planung der Solaranlage – als renommierter Fachbetrieb für Solartechnik erarbeiten wir sowohl für Privathaushalte als auch für Gewerbebetriebe in Mainz maßgeschneiderte Energiekonzepte und sorgen für eine perfekte Montage sowie Wartung der Photovoltaik-Anlagen.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='Individuelle '
								title='Solaranlagen-Beratung in Mainz'
                text='Unser Service im Raum Mainz beginnt mit der kompetenten Solaranlagen-Beratung, denn dies ist die Voraussetzung dafür, dass sich die Investition auszahlt. Im Rahmen der Solaranlagen-Beratung führen wir Wirtschaftlichkeitsberechnungen basierend auf den Verbrauchsdaten und der möglichen Solaranlagen-Konfiguration durch und können Ihnen somit die berechtigte Frage: Lohnt sich PV?, objektiv beantworten.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='Einsparpotenziale'
								title=' mit Zukunftsperspektive '
                text='Im Durchschnitt amortisiert sich die Anlage nach weniger als zehn Jahren. Die restlichen 15 oder mehr Jahre Nutzungsdauer macht sich Ihre Anlage dann doppelt bezahlt: Sie erhalten eine Vergütung für Strom, den Sie ins öffentliche Stromnetz einspeisen und reduzieren Ihre eigene Stromrechnung auf ein Minimum. Damit Sie mit Ihrer Solaranlage in Mainz die maximalen Effekte erzielen, begleiten wir Ihr Projekt mit einer umfassenden Beratung, übernehmen die Planung und die Montage, aber auch die Wartung sowie anfallende Reparaturen. Sie erhalten also alle Leistungen für Ihre Solaranlage aus einer Hand und können sich jederzeit an Ihren persönlichen Ansprechpartner in der Nähe von Mainz wenden.'
                image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
                link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                 />

                
                <SubpageLandingpages
								yellowTitle='Solartechnik – '
								title='aktiver Klimaschutz in Mainz'
                text='Die Solartechnik wurde in den letzten Jahren immer weiter verbessert, sodass Sie mit Ihrer Solaranlage in Mainz einen nicht unerheblichen Beitrag zur Bekämpfung des Klimawandels leisten. Dank leistungsstärkerer Stromspeicher, die darüber hinaus mittlerweile wesentlich günstiger sind, erreicht man hohe Eigenverbrauchsquoten. Haushalte rund um Mainz werden damit in die Lage versetzt, ihren Stromverbrauch vollständig mit der Solaranlage zu decken. Das bedeutet außerdem, dass Sie nicht von Stromausfällen aufgrund überlasteter Stromnetze betroffen sind und ein nie dagewesenes Maß an Unabhängigkeit genießen. Lumix Solar konfiguriert Solaranlagen in Mainz aus hochwertigen Produkten, denn die Qualität der Stromspeicher und Solarmodule hat großen Einfluss auf die Effizienz und Langlebigkeit der PV-Anlage. Wagen Sie jetzt den entscheidenden Schritt und investieren Sie in Ihre eigene kleine Energiewende.'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
                left />


                <SubpageLandingpages
								yellowTitle='Lumix Solar – '
								title='Experten für:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                image='https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                icons />

                <Service />
                

                {/* <FAQ /> */}
                {/*<Contact />*/}
            </div>
            </HelmetProvider>

        </>
    )
}


export default SolaranlageMainz
