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

const SolaranlageLudwigshafen: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Ludwigshafen │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Ludwigshafen: effiziente Technik 🌞 Regionaler Anbieter ✔️ Maßgeschneiderte PV-Anlagen ✔️ Liefergarantie ➡️ Informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Solaranlage – klimaneutraler Strom in Ludwigshafen</h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                            Mit den innovativen Solaranlagen aus dem Hause Lumix Solar machen Sie sich in Ludwigshafen unabhängig von Strompreiserhöhungen und tragen aktiv zum Klimaschutz bei. Infomieren Sie sich über die Optionen moderner PV-Anlagen für die Stromerzeugung.
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
                    yellowTitle ='Klimaneutraler Strom'
                    title=' – Ihr regionaler Partner für Solaranlagen nahe Ludwigshafen:'
                    bullet1='Klimafreundlicher Solarstrom'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Schutz vor Stromausfällen'
                    bullet4='Maximale Eigenverbrauchsquote'
                    bullet5='Modernste Stromspeicher'
                    bullet6='Maßgeschneiderte Lösungen'
                    bullet7='Verlässliche Liefergarantien'
                    bullet8='Fundierte individuelle Beratung'
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
                    Mit einer leistungsstarken Solaranlage von Lumix Solar werden Sie in Ludwigshafen endlich unabhängig von den Stromversorgern und produzieren Ihren eigenen Strom. Dadurch schützen Sie sich optimal vor den gefürchteten Blackouts, die aufgrund einer zunehmenden Überlastung der öffentlichen Stromnetze immer wahrscheinlicher werden. Außerdem ist es aus Gründen des Klimaschutzes sinnvoll, eine Solaranlage zu kaufen, denn dadurch tragen Sie in Ludwigshafen aktiv dazu bei, dass die Energiewende gelingt. Als renommierter regionaler Anbieter konfigurieren wir maßgeschneiderte PV-Anlagen.
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
								yellowTitle='Solaranlagen mit Speicher'
                title=' – effizient, ökologisch vernünftig'
                text='Hochwertige Solaranlagen mit Speicher ermöglichen Ihnen, den Eigenverbrauch in Ludwigshafen auf bis zu 80 Prozent zu steigern und auch dann den umweltfreundlichen Strom zu nutzen, wenn die Sonne nicht scheint. Unser Team überzeugt mit Erfahrung und Expertise im Bereich der klimafreundlichen Stromerzeugung – wir planen und montieren bedarfsgerechte Solaranlagen mit Speicher sowohl für Privathaushalte als auch für Gewerbebetriebe in Ludwigshafen. Fordern Sie jetzt Ihr individuelles Angebot an. '
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
								linkText='Mehr erfahren!'/>

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <SubpageLandingpages
								yellowTitle ='Modernste Solartechnik'
                title='in Ludwigshafen nutzen'
                text='Die Solartechnik hat sich in den letzten Jahren weiterentwickelt, sodass wir leistungsstarke Solaranlagen anbieten, mit denen unsere Kunden aus Ludwigshafen ihren Stromverbrauch fast vollständig durch selbstproduzierten Sonnenstrom decken können. Insbesondere im Bereich der Speichertechnik sind entscheidende Fortschritte erreicht worden, denn die Solartechnik ist mittlerweile extrem effizient und zudem sind die Stromspeicher wesentlich günstiger als noch vor einigen Jahren – gerne unterbreiten wir Ihnen in Ludwigshafen ein Angebot.'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

                <SubpageLandingpages
								yellowTitle ='Komplett-Service'
                title=' mit Lumix Solar'
                text='Unser Service umfasst weitaus mehr als die Lieferung der Solartechnik – wir begleiten Sie auf dem Weg zum klimafreundlichen Strom von der bedarfsorientierten Planung über die Konfiguration der Solaranlage und der fachgerechten Montage bis zur Wartung und Reparatur, die wir in Ludwigshafen selbstverständlich ebenfalls übernehmen. Profitieren Sie vom praktischen Rundum-Service Ihres zuverlässigen regionalen Anbieters von Photovoltaik-Anlagen. Wir verwenden ausschließlich Produkte namhafter Hersteller und konzipieren die Photovoltaik-Anlagen mit modernsten Stromspeichern und Solarmodulen.'
                image='https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg'
                link='/konfigurator'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                 />

                
<Service />
                <SubpageLandingpages
								yellowTitle='Solaranlagen-Beratung'
                title=' vom Experten bei Ludwigshafen'
                text='In klimafreundliche Solartechnik zu investieren ist mit Sicherheit ein gute Entscheidung. Wenn Sie dabei nichts dem Zufall überlassen wollen, ist unsere kompetente Solaranlagen-Beratung in Ludwigshafen die optimale Lösung. Unsere Experten werden die Solaranlage individuell konfigurieren und dabei die örtlichen Gegebenheiten ebenso berücksichtigen wie Ihren Energiebedarf. Die Beratung schließt auch Wirtschaftlichkeitsberechnungen ein, mit denen die Frage: Lohnt sich PV?, objektiv beantwortet wird. Erfahrungsgemäß ist es empfehlenswert, einen zukünftig wachsenden Energiebedarf bei der Planung der Solaranlage in Ludwigshafen zu antizipieren – dann sind Sie bestens vorbereitet, um später eine Wärmepumpe mit Solarstrom zu betreiben oder Ihr E-Auto mit Sonnenstrom aufzuladen.'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
								linkText='Jetzt Solarcheck starten!'
                link='/konfigurator'
                left/>


                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>
                </div>
                <SubpageLandingpages
								yellowTitle='Konfigurieren'
                title=' Sie Ihre eigene Energiewende – Lumix Solar liefert Ihnen:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                image='https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg'
                linkText='Jetzt informieren!'
                link='/konfigurator'
                icons />

                

                {/* <FAQ /> */}
            </div>
            </HelmetProvider>

        </>
    )
}


export default SolaranlageLudwigshafen
