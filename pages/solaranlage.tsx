import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";

import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Contact from '../components/general/Contact';
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';


const Solaranlage: NextPage = () => {

    return (
        <>
          <HelmetProvider>
            <Helmet>
            <title>Solaranlage in Mannheim │ Lumix Solar GmbH</title>
            <meta
            name="description"
            content="Solaranlagen Mannheim: innovative Solartechnik 🌞 Regionaler Anbieter ✔️ Individuelle Projektierung ✔️ Liefergarantie ➡️ Informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
            <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/03/76/25/07/1000_F_376250785_CflXXEZfs1tCWm1b4nTBAVBTcA3eTNQW.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Solaranlagen von Lumix Solar
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">

                        Profitieren Sie von den Vorteilen einer Solaranlage von Lumix Solar, Ihrem regionalen Partner in Mannheim. Wir liefern hochwertige Anlagen und unterstützen unsere Kunden zusätzlich mit einem hervorragenden und umfangreichen Service.                        </p>

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
                    title=' vom regionalen Anbieter aus Mannheim'
                    bullet1='Klimafreundliche Stromerzeugung'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Schutz vor Stromausfällen'
                    bullet4='Sehr hohe Eigenverbrauchsquote'
                    bullet5='Innovative Stromspeicher'
                    bullet6='Individuelle Konfiguration der Anlage'
                    bullet7='Verlässliche Liefergarantien'
                    bullet8='Persönliche Ansprechpartner'
                    image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    icons2
                    left />

                <div className="items-center w-full justify-center pt-10 p-2 sm:p-5">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                  <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Mit einer modernen Solaranlage aus dem Hause Lumix Solar werden Sie in Mannheim endlich unabhängig von den Versorgungsunternehmen, die ihre Preise teilweise willkürlich und nicht nachvollziehbar erhöhen. Darüber hinaus steigt mit zunehmender Belastung des Stromnetzes die Gefahr von Stromausfällen. Auch dagegen können Sie sich mit einer Solaranlage auf Ihrem Dach in Mannheim effektiv wappnen. Möchten Sie Ihren ökologischen Fußabdruck verkleinern, ohne auf den Komfort zu verzichten, der mit elektrischen Geräten einhergeht? Wir liefern Ihnen die passenden Solarmodule für Ihre Solaranlage und sorgen mit umfassenden Serviceleistungen dafür, dass Sie optimal von Ihrer persönlichen Energiewende in Mannheim profitieren. Wünschen Sie weitere Informationen zu den Solaranlagen für Privatkunden und Gewerbebetriebe? Unser Team steht Ihnen jederzeit für eine ausführliche Beratung und die Erstellung eines Angebots zur Verfügung. 
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
				yellowTitle='Jetzt innovative'
                title=' Solaranlage kaufen in Mannheim'
                text='Ständig steigende Strompreise und eine zunehmende Versorgungsunsicherheit sind gute Gründe, um jetzt eine Solaranlage zu kaufen und sich damit in Mannheim größtenteils unabhängig von den Stromlieferanten zu machen. Dank ausgereifter Technik und verbesserten Stromspeichern können Sie mit einer modernen Solaranlage mittlerweile bis zu 80 Prozent des selbstproduzierten Stroms für den Eigenverbrauch nutzen. Es ist sogar möglich, das Elektroauto mit dem günstigen Solarstrom zu laden und somit ein noch größeres Einsparpotenzial zu realisieren. Die hochwertigen Photovoltaik-Anlagen sind leistungsstark und produzieren zuverlässig umweltfreundlichen Strom. Mit zusätzlichen Komponenten wie Backup-Boxen und Wallboxen erhöhen Sie die Effizienz Ihrer Anlage und profitieren maximal von den Vorteilen der innovativen Technologie. Darüber hinaus ist es ein gutes Gefühl, eine Solaranlage zu kaufen und in Mannheim damit einen aktiven Beitrag zur Bekämpfung des Klimawandels zu leisten.'
                image='https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg'
                link='/konfigurator' 
				        linkText='Jetzt Solarcheck starten!'/>
                
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>    

                <SubpageLandingpages
				yellowTitle ='Die Vorteile '
                title='der Solartechnik in Mannheim nutzen!'
                text='Lohnt sich PV? Man kann ohne Übertreibung feststellen, dass sich die Solartechnik in den letzten Jahren rasant weiterentwickelt hat und deshalb Solaranlagen auch für Privatkunden in Mannheim eine lohnende Investition sind. Die Lebensdauer moderner Solaranlagen beträgt mehr als 25 Jahre und zudem verursacht Solartechnik auch nur geringe Wartungskosten. Außerdem erhalten Sie eine Einspeisevergütung für den in Ihrer Solaranlage erzeugten Strom, den Sie nicht selbst verbrauchen, sondern ins öffentliche Netz in Mannheim einspeisen. Wirtschaftlichkeitsberechnungen ergeben, dass die Amortisationsdauer einer Photovoltaik-Anlage nicht einmal zehn Jahre beträgt und Sie danach einen sehr hohen Kostenvorteil genießen. Wir bieten Ihnen einen leistungsstarken Service, der neben der Beratung auch die Planung und Montage sowie die Wartung Ihrer Solaranlage umfasst und sind außerdem als regionaler Anbieter von Solartechnik Ihr zuverlässiger Ansprechpartner in Mannheim. Wagen Sie jetzt den Schritt und profitieren Sie von Ihrer persönlichen Energiewende.'
                image='https://as2.ftcdn.net/v2/jpg/03/95/91/37/1000_F_395913763_AP4ghUg5Qzj5N7hZC5XmniPh9nHWYyKZ.jpg'
				linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

             
              <SubpageLandingpages
								yellowTitle='Solaranlage'
                title=' von Lumix Solar – wir liefern und montieren:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                video='https://v.ftcdn.net/05/80/07/94/700_F_580079494_OsSIx8a8P5lS4Dtw1VvMi6mBIQ2kuoBB_ST.mp4'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                icons/>

                      <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default Solaranlage
