import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"

const HTMLContent = ({ content }) => <div dangerouslySetInnerHTML={{ __html: content }} />;


const PhotovoltaikBeratung: NextPage = () => {
  const text = `
  <p className='text-justify text-base lg:text-lg'>
    Die Solaranlagen-Beratung dient der Klärung offener Fragen und muss somit in Mannheim verschiedene Aspekte berücksichtigen. Erst nach einem ausführlichen Planungsgespräch ist es möglich, Photovoltaik-Anlagen zu dimensionieren und endgültig zu konfigurieren.
  </p>
  <ul className="text-justify text-base lg:text-lg">
    <b>
      Welche Fragen werden bei der Photovoltaik-Beratung in Mannheim geklärt?
    </b>
    <li>Ist eine ausreichende Sonneneinstrahlung vorhanden?</li>
    <li>Verschatten hohe Gebäude oder Bäume den Bereich?</li>
    <li>Ist eine nach Süden ausgerichtete Dachfläche vorhanden?</li>
    <li>Beträgt die Dachneigung ideale 30 bis 45 Grad?</li>
    <li>Möchten Sie den Solarstrom zum Großteil selbst nutzen?</li>
    <li>Ist die Dachfläche überhaupt groß genug?</li>
  </ul>
  <p className='text-justify text-base lg:text-lg'>
    Besonders lohnend ist die Installation einer PV-Anlage, wenn der Strom zum Großteil selbst verbraucht und nicht ins öffentliche Stromnetz eingespeist wird. Optimal ist somit die Kombination einer Photovoltaik-Anlage mit einer Wallbox zum Aufladen Ihres E-Autos sowie mit einer Wärmepumpe. Darüber hinaus sorgt ein leistungsstarker Stromspeicher dafür, dass Sie Ihren Sonnenstrom sogar nutzen können, wenn keine Sonne scheint. Die Photovoltaik-Beratung wird diese Effekte im Rahmen einer Wirtschaftlichkeitsberechnung in Mannheim quantifizieren und damit eindeutig die Frage beantworten: Lohnt sich PV?
  </p>
  `;
  

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Photovoltaik-Beratung in Mannheim │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik-Beratung Mannheim: Vorteile moderner Solartechnik 🌞 Aktuelle Förderung ✔️ Steuervorteile ➡️ Jetzt informieren❕"
              />
            </Helmet>

            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/03/64/73/95/1000_F_364739530_68jROK4etru4li46cEesCbU4tK842Foz.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Kompetente Photovoltaik-Beratung in Mannheim
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                        Profitieren Sie von einer fundierten Photovoltaik-Beratung, mit der wir Ihnen in Mannheim die Entscheidung erheblich erleichtern. Unsere Mitarbeiter beraten herstellerunabhängig über Solarmodule, Stromspeicher sowie Montageoptionen und orientieren sich dabei ausschließlich an Ihren Wünschen und Interessen.
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
                    yellowTitle ='Photovoltaik-Beratung – '
                    title='nutzen Sie in Mannheim unsere fachkompetente Unterstützung:'
                    bullet1='Herstellerunabhängige Beratung'
                    bullet2='Information über Fördermöglichkeiten'
                    bullet3='Wirtschaftlichkeitsberechnungen'
                    bullet4='Generierung individueller Konfigurationen'
                    bullet5='Rundum-Service inkl. Montage & Wartung'
                    bullet6='Garantierte Einhaltung von Lieferzusagen'
                    image='https://as2.ftcdn.net/v2/jpg/05/91/00/61/1000_F_591006161_PS4BBA6OLtDs1eGk4RlDuEMmNMLosJtl.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    left />

                  <div className="items-center w-full justify-center pt-10">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                    <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                    Wenn Sie erwägen, eine Photovoltaik-Anlage installieren zu lassen, sollten Sie zunächst eine fachkundige, herstellerunabhängige Beratung in Mannheim nutzen. Unser Team verfügt über langjährige Erfahrung in der Installation von PV-Anlagen für Privathaushalte sowie für Gewerbebetriebe und kann Ihnen somit eine kompetente Solaranlagen-Beratung in Mannheim bieten. Dabei verfolgen wir das Ziel, Ihnen durch die Photovoltaik-Beratung die Entscheidung zu erleichtern und gemeinsam mit Ihnen eine PV-Anlage zu konfigurieren, die perfekt zu Ihrem Haus und Ihren Anforderungen passt. Wenn Sie sich für unser Angebot entscheiden, übernehmen wir die konkrete Planung und die fachgerechte Montage Ihrer PV-Anlage.
                    </p>
                    <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
                            <div className="flex flex-col items-center w-full justify-center">
                            <FaSolarPanel className=" text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} prefix='>' className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={700} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Installationen
                            </p>
                        </div>
                        <div className="flex flex-col  items-center w-full justify-center">
                            <FaHandHoldingDollar className="text-yellow-400 text-7xl" />
                            <CountUp enableScrollSpy={true} suffix='Mio' prefix='>' decimal='.' decimals={1} className='font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center' end={1.3} />
                            <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                            Kundenersparnis (€)
                            </p>
                        </div>
                        <div className="flex flex-col  items-center w-full justify-center">
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
				yellowTitle='Aspekte '
                title='der Photovoltaik-Beratung in Mannheim'
                pretext='Welche Fragen werden bei der Photovoltaik-Beratung in Mannheim geklärt?'
                bullet1='Ist eine ausreichende Sonneneinstrahlung vorhanden?'
                bullet2='Verschatten hohe Gebäude oder Bäume den Bereich?'
                bullet3='Ist eine nach Süden ausgerichtete Dachfläche vorhanden?'
                bullet4='Beträgt die Dachneigung ideale 30 bis 45 Grad?'
                bullet5='Möchten Sie den Solarstrom zum Großteil selbst nutzen?'
                bullet6='Ist die Dachfläche überhaupt groß genug?'
                text='Besonders lohnend ist die Installation einer PV-Anlage, wenn der Strom zum Großteil selbst verbraucht und nicht ins öffentliche Stromnetz eingespeist wird. Optimal ist somit die Kombination einer Photovoltaik-Anlage mit einer Wallbox zum Aufladen Ihres E-Autos sowie mit einer Wärmepumpe. Darüber hinaus sorgt ein leistungsstarker Stromspeicher dafür, dass Sie Ihren Sonnenstrom sogar nutzen können, wenn keine Sonne scheint. Die Photovoltaik-Beratung wird diese Effekte im Rahmen einer Wirtschaftlichkeitsberechnung in Mannheim quantifizieren und damit eindeutig die Frage beantworten: Lohnt sich PV? '
                image='https://as1.ftcdn.net/v2/jpg/05/30/52/82/1000_F_530528267_LChGDs2uMNfZijiI2CYjjC2vHtzWyw5g.jpg'
                link='/konfigurator' 
				        linkText='Jetzt Solarcheck starten!'/>
                
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>    

                
                <SubpageLandingpages
								yellowTitle ='Welche Fördermöglichkeiten'
								title='  stehen zur Verfügung?'
                text='Wenn Sie vor der Entscheidung für eine bestimmte Photovoltaik-Anlage unsere Beratung in Mannheim nutzen, informieren wir Sie selbstverständlich auch über aktuelle Fördermöglichkeiten und innovative Produkte wie beispielsweise Solarmodule, die sich perfekt ins Dach integrieren lassen. Beachten Sie, dass die Förderung nur dann erfolgt, wenn der Antrag vor Projektbeginn gestellt wird. In diesem Fall ist eine Förderung durch einen zinsgünstigen Kredit möglich, der die Investition erleichtert. Darüber hinaus können seit Anfang 2023 auch Privathaushalte die PV-Anlage ohne Zahlung der 19 Prozent Mehrwertsteuer kaufen. Im Rahmen einer Photovoltaik-Beratung informieren wir Sie in Mannheim außerdem über Einspeisevergütungen und regionale Förderprogramme. Mit einer Photovoltaik-Anlage werden Sie unabhängig von Strompreiserhöhungen sowie von Stromausfällen und tragen erheblich dazu bei, dass die Energiewende gelingt – dank unserer Beratung erzielen Sie zudem in Mannheim maximale Einspareffekte und profitieren optimal von Förderprogrammen. Möchten Sie diese Vorteile nutzen und in Ihre eigene kleine Energiewende investieren?'
                image='https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left />

<SubpageLandingpages
								yellowTitle='Solaranlage von Lumix Solar –'
                title=' wir liefern und montieren:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                video='https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4'
                linkText='Noch Fragen? Dann schreiben Sie uns'
                link='/konfigurator'
                icons
                />

            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikBeratung
