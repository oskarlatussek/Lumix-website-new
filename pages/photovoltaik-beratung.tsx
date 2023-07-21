import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";
import { Helmet, HelmetProvider } from "react-helmet-async";



const PhotovoltaikBeratung: NextPage = () => {

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
                <Hero image='/Images/produkte.webp' title='Kompetente Photovoltaik-Beratung in Mannheim' text='Profitieren Sie von einer fundierten Photovoltaik-Beratung, mit der wir Ihnen in Mannheim die Entscheidung erheblich erleichtern. Unsere Mitarbeiter beraten herstellerunabhängig über Solarmodule, Stromspeicher sowie Montageoptionen und orientieren sich dabei ausschließlich an Ihren Wünschen und Interessen.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Photovoltaik-Beratung – nutzen Sie in Mannheim unsere fachkompetente Unterstützung:</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Herstellerunabhängige Beratung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Information über Fördermöglichkeiten</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Wirtschaftlichkeitsberechnungen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Generierung individueller Konfigurationen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Rundum-Service inkl. Montage & Wartung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Garantierte Einhaltung von Lieferzusagen</span>
                            </div>                                    
                        </div>
                        <p className='text-justify text-base lg:text-lg'>

                        Wenn Sie erwägen, eine Photovoltaik-Anlage installieren zu lassen, sollten Sie zunächst eine fachkundige, herstellerunabhängige Beratung in Mannheim nutzen. Unser Team verfügt über langjährige Erfahrung in der Installation von PV-Anlagen für Privathaushalte sowie für Gewerbebetriebe und kann Ihnen somit eine kompetente Solaranlagen-Beratung in Mannheim bieten. Dabei verfolgen wir das Ziel, Ihnen durch die Photovoltaik-Beratung die Entscheidung zu erleichtern und gemeinsam mit Ihnen eine PV-Anlage zu konfigurieren, die perfekt zu Ihrem Haus und Ihren Anforderungen passt. Wenn Sie sich für unser Angebot entscheiden, übernehmen wir die konkrete Planung und die fachgerechte Montage Ihrer PV-Anlage.
                        </p>
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                          Angebot anfordern!
                        </a>    
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Aspekte der Photovoltaik-Beratung in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                          Die Solaranlagen-Beratung dient der Klärung offener Fragen und muss somit in Mannheim verschiedene Aspekte berücksichtigen. Erst nach einem ausführlichen Planungsgespräch ist es möglich, Photovoltaik-Anlagen zu dimensionieren und endgültig zu konfigurieren.
                        </p>
                        <ul className="text-justify text-base lg:text-lg">
                          <b>
                            Welche Fragen werden bei der Photovoltaik-Beratung in Mannheim geklärt? 
                          </b>
                        <li>Ist eine ausreichende Sonneneinstrahlung vorhanden?</li>
                        <li>
                          Verschatten hohe Gebäude oder Bäume den Bereich?
                        </li>
                        <li>
                          Ist eine nach Süden ausgerichtete Dachfläche vorhanden?
                        </li>
                        <li>
                          Beträgt die Dachneigung ideale 30 bis 45 Grad?
                        </li>
                        <li>
                          Möchten Sie den Solarstrom zum Großteil selbst nutzen?
                        </li>
                        <li>
                          Ist die Dachfläche überhaupt groß genug?
                        </li>
                        </ul>
                        <p className='text-justify text-base lg:text-lg'>
                         Besonders lohnend ist die Installation einer PV-Anlage, wenn der Strom zum Großteil selbst verbraucht und nicht ins öffentliche Stromnetz eingespeist wird. Optimal ist somit die Kombination einer Photovoltaik-Anlage mit einer Wallbox zum Aufladen Ihres E-Autos sowie mit einer Wärmepumpe. Darüber hinaus sorgt ein leistungsstarker Stromspeicher dafür, dass Sie Ihren Sonnenstrom sogar nutzen können, wenn keine Sonne scheint. Die Photovoltaik-Beratung wird diese Effekte im Rahmen einer Wirtschaftlichkeitsberechnung in Mannheim quantifizieren und damit eindeutig die Frage beantworten: Lohnt sich PV? 
                        </p>
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                        Jetzt informieren!
                        </a>

                        
                    </div>

                    <ImageSection image='https://as1.ftcdn.net/v2/jpg/03/57/20/80/1000_F_357208029_wP5Qtrs1MuqRbiJIuYg3BQtiw4WfROZD.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/wallbox.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Welche Fördermöglichkeiten stehen zur Verfügung?</h2>

                        <p className='text-justify text-base lg:text-lg'>
                        Wenn Sie vor der Entscheidung für eine bestimmte Photovoltaik-Anlage unsere Beratung in Mannheim nutzen, informieren wir Sie selbstverständlich auch über aktuelle Fördermöglichkeiten und innovative Produkte wie beispielsweise Solarmodule, die sich perfekt ins Dach integrieren lassen. Beachten Sie, dass die Förderung nur dann erfolgt, wenn der Antrag vor Projektbeginn gestellt wird. In diesem Fall ist eine Förderung durch einen zinsgünstigen Kredit möglich, der die Investition erleichtert.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        Darüber hinaus können seit Anfang 2023 auch Privathaushalte die PV-Anlage ohne Zahlung der 19 Prozent Mehrwertsteuer kaufen. Im Rahmen einer Photovoltaik-Beratung informieren wir Sie in Mannheim außerdem über Einspeisevergütungen und regionale Förderprogramme.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        Mit einer Photovoltaik-Anlage werden Sie unabhängig von Strompreiserhöhungen sowie von Stromausfällen und tragen erheblich dazu bei, dass die Energiewende gelingt – dank unserer Beratung erzielen Sie zudem in Mannheim maximale Einspareffekte und profitieren optimal von Förderprogrammen. Möchten Sie diese Vorteile nutzen und in Ihre eigene kleine Energiewende investieren?
                        </p>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Solaranlage von Lumix Solar – wir liefern und montieren:</h2>

                        <ul className='text-justify text-base lg:text-lg'>
                            <li>Solartechnik</li>
                            <li>Stromspeicher</li>
                            <li>Wechselrichter</li>
                            <li>Backup- & Wallboxen</li>
                        </ul>

                    </div>

                    <ImageSection image='/Images/batterie.webp' />
                </div>


                <Contact />

            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikBeratung
