import type { NextPage } from 'next'

import Process from "../components/section/Process";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaSolarPanel, FaHandHoldingDollar, FaEarthAmericas } from "react-icons/fa6";
import CountUp from "react-countup";
import { HiOutlineArrowSmRight } from "react-icons/hi"





const PhotovoltaikPlanung: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Planung Photovoltaik in Mannheim │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Planung der Photovoltaik-Anlage in Mannheim: Dimensionierung von PV-Anlagen 🌞 Wirtschaftlichkeitsberechnung ➡️ Jetzt informieren❕"/>
            </Helmet>

            <div className="flex flex-col items-center max-w-full">
								<div style={{ backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/06/15/30/72/1000_F_615307240_a58FZJ6gtc5qysfbwzvJMYRDQ1vEhuTq.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Exakte Planung Ihrer Photovoltaik-Anlage in Mannheim
                        </h3>
                        <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44 animate__animated animate__fadeIn animate__delay-3s">

                        Die professionelle Planung einer Photovoltaik-Anlage legt in Mannheim den Grundstein für eine optimale Investitionsentscheidung. Unsere Experten unterstützen Sie dabei, eine bedarfsgerechte PV-Anlage zu planen und entwickeln individuelle Lösungen für Privathaushalte und Unternehmen.
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
                    yellowTitle ='Planung von Photovoltaik-Anlagen –'
                    title=' eine Aufgabe für unsere Experten in Mannheim:'
                    bullet1='Herstellerunabhängige Beratung'
                    bullet2='Bedarfsgerechte Dimensionierung'
                    bullet3='Wirtschaftlichkeitsberechnungen'
                    bullet4='Generierung individueller Konfigurationen'
                    bullet5='Rundum-Service inkl. Montage & Wartung'
                    bullet6='Garantierte Einhaltung von Lieferzusagen'
                    image='https://as2.ftcdn.net/v2/jpg/03/64/73/95/1000_F_364739530_68jROK4etru4li46cEesCbU4tK842Foz.jpg'
                    link='/konfigurator'
                    linkText='Heute noch Termin vereinbaren!' 
                    icons2
                    left />



<div className="items-center w-full justify-center pt-10">   
                  <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
                    <span className="text-yellow-400 drop-shadow-none font-bold">Ihre Vorteile</span> wenn Sie mit uns zusammenarbeiten
                  </p>                 
                    <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Bevor die Entscheidung für eine Photovoltaik-Anlage getroffen wird, sollte eine differenzierte Planung der Anlage durch erfahrene Experten erfolgen. Unser zuverlässiges Team unterstützt Sie dabei, die Solaranlage zu planen und berücksichtigt in Mannheim die örtlichen Gegebenheiten, Ihren individuellen Strombedarf sowie Fördermöglichkeiten. Ziel der durchdachten Planung von Photovoltaik-Anlagen ist die Erstellung eines zukunftsfähigen Energiekonzepts für Ihren Privathaushalt oder Ihren Gewerbebetrieb in Mannheim. Basierend auf dem Planungskonzept wird die Photovoltaik-Anlage zusammengestellt und von unseren Fachkräften installiert. Sie erhalten von uns alle Leistungen aus einer Hand – von der kompetenten Beratung und der Planung der Photovoltaik-Anlage über die Montage in Mannheim bis zur Reinigung, Wartung und Reparatur. Sie sind an unserem Rundum-Service interessiert und möchten die Solaranlage mit unseren Experten planen? Hier können Sie direkt mit uns Kontakt aufnehmen sich und einfach und bequem ein Online-Angebot erstellen lassen.
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
				yellowTitle='Dimensionierung '
                title='von PV-Anlagen in Mannheim'
                text='Ziel der Installation einer Photovoltaik-Anlage ist zum einen, umweltfreundlich Strom selbst zu produzieren und sich unabhängig von Stromausfällen zu machen. Andererseits ist die Planung einer Photovoltaik-Anlage in Mannheim auch mit dem Wunsch verbunden, die Stromkosten dauerhaft zu senken. Deshalb ist es wichtig, Wirtschaftlichkeitsberechnungen durchzuführen und zu überprüfen, unter welchen Bedingungen Sie die größten Einsparpotenziale realisieren. Wir checken die Bedingungen bei Ihnen vor Ort. Manchmal ist es sinnvoll, zunächst eine Dachsanierung durchzuführen, wenn Sie eine Solaranlage planen, denn die PV-Anlagen überzeugen mit langer Nutzungsdauer, sodass Ihr Dach in Mannheim vor der Montage eventuell erneuert werden sollte. Bei der Dimensionierung der PV-Anlage wird Ihr Stromverbrauch zugrunde gelegt. Es ist jedoch empfehlenswert, bei der Planung der Photovoltaik-Anlage zukünftige Entwicklungen zu antizipieren und die Anlage in Mannheim eher etwas großzügiger zu konfigurieren, wenn es das Budget erlaubt. Dann können Sie künftig günstigen Solarstrom für ein Elektroauto oder eine Wärmepumpe nutzen. Um die Eigenverbrauchsquote und damit die Effizienz der PV-Anlage zu erhöhen, sollten Sie außerdem einen entsprechend großen Stromspeicher auswählen. Mit einer differenzierten Wirtschaftlichkeitsberechnung können wir Ihnen im Rahmen der Planung Ihrer Photovoltaik-Anlage in Mannheim die Frage: Lohnt sich PV? genau beantworten. Für unsere PV-Anlagen verwenden wir ausschließlich hochwertige Produkte und innovative Solarmodule renommierter Hersteller und sorgen mit umfassenden Serviceleistungen dafür, dass die Anlagen einen maximalen Ertrag erwirtschaften.'
                video='https://v.ftcdn.net/06/06/53/59/700_F_606535991_d72ukAYlWN4K2IFT8behDcZncmJKwNhu_ST.mp4'
                link='/konfigurator' 
				        linkText='Jetzt Solarcheck starten!'/>
                
                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>    


								<SubpageLandingpages
								yellowTitle ='Lumix Solar – '
                title='Ihr regionaler Ansprechpartner für:'
                bullet1='Solarmodule'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                video='https://v.ftcdn.net/06/18/06/10/700_F_618061093_VFYEgaSImEuoG8JpvoKUXkwV2LZgI0VF_ST.mp4'
								linkText='Hier Angebot anfordern!'
                link='/konfigurator'
                left 
                icons/>

            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikPlanung
