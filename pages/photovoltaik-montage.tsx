
import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";

import { Helmet, HelmetProvider } from "react-helmet-async";


const PhotovoltaikMontage: NextPage = () => {

    return (
        <>
        <HelmetProvider>
          <Helmet>
          <title>Photovoltaik-Montage in Mannheim │ Lumix Solar GmbH</title>
          <meta
          name="description"
          content="Photovoltaik-Montage Mannheim: innovative Solartechnik 🌞 Regionaler Anbieter ✔️ Experten für PV-Anlagenbau ➡️ Jetzt informieren❕"/>
          </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/produkte.webp' title='Experten für Photovoltaik-Montage in Mannheim' text='Wir bieten Ihnen verschiedene Optionen der Photovoltaik-Montage an, sodass die Solarmodule in Mannheim an fast jedem Gebäude einsetzbar sind. Gerne informieren wir Sie über Alternativen zur bekannten Dachmontage von PV-Anlagen.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Photovoltaik-Montage – profitieren Sie in Mannheim von Kompetenz & Erfahrung:</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Fachgerechte Montage durch Profis</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Bedarfsgerechte Konfiguration</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Verschiedene Solarmodule verfügbar</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Unterschiedliche Montagesysteme</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Verwendung modernster Solarmodule</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Engagiertes Team erfahrener Experten</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Umfassende Betreuung nach dem Kauf</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Service inkl. Reparatur und Wartung</span>
                            </div>                                                
                        </div>
                        <p className='text-justify text-base lg:text-lg'>

                        Das Team von Lumix Solar begleitet Sie auf Ihrem Weg zur klimaneutralen Stromerzeugung mit einem ganzheitlichen Service. Unsere zuverlässigen Experten werden Ihnen im Rahmen der Photovoltaik-Beratung die Vorteile einer Photovoltaik-Anlage erläutern und dann eine bedarfsorientierte Planung vornehmen. Anschließend sorgen wir mit der fachgerechten Photovoltaik-Montage dafür, dass die PV-Anlage in Mannheim einen maximalen Ertrag erwirtschaftet. Es ist wichtig, die Solaranlage professionell montieren zu lassen, damit eine lange Lebensdauer erreicht wird und sich die Anlage zudem optimal in das Erscheinungsbild des Hauses einfügt. Beauftragen Sie deshalb mit der Photovoltaik-Montage unsere zuverlässige Firma in Mannheim – wir betreuen Ihr Projekt von der Planung bis zur Inbetriebnahme und stehen Ihnen auch danach mit umfassendem Service zur Verfügung.
                        </p>    
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Photovoltaik Montagesysteme & Gebäudeintegration</h2>

                        <p className='text-justify text-base lg:text-lg'>
                        Es gibt verschiedene Möglichkeiten der Photovoltaik-Anlagen-Montage, die wir unseren Kunden in Mannheim zur Verfügung stellen. Am bekanntesten ist die Dachmontage, wobei die PV-Anlage wiederum in drei verschiedenen Stufen ins Dach integriert werden kann. 
                        </p>
                        <ul className="text-justify text-base lg:text-lg">
                            <b>
                              Möglichkeiten der Gebäudeintegration von PV-Anlagen auf dem Dach:
                            </b>
                            <li>Aufdachmontage der PV-Anlage</li>
                            <li>Integration der PV-Anlage ins Dach</li>
                            <li>Vollständig gebäudeintegrierte PV-Anlage</li>
                        </ul>
                        <p className='text-justify text-base lg:text-lg'>
                        Die Aufdachmontage der Solarmodule ist am günstigsten und eine gängige Variante, wenn keine Dachsanierung geplant ist. Bei der nächsten Stufe der Photovoltaik-Integration erfolgt die Montage in Mannheim mit Solarmodulen, die einzelne Dachziegel ersetzen und somit eine gerade Fläche mit dem Dach bilden. Eine vollständige Dachintegration entsteht, wenn das Dach komplett durch Solarmodule ersetzt wird. Darüber hinaus ist es möglich, die Photovoltaik-Montage an der Fassade Ihres Hauses vorzunehmen. 
                        </p>
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                          Jetzt Angebot in Mannheim erstellen lassen!
                        </a>
                        <p className='text-justify text-base lg:text-lg'>
                        Auch hinsichtlich der Montagesysteme gibt es verschiedene Varianten für jede Dachform und -eindeckung. Das Team von Lumix Solar kennt sich bestens mit den Optionen der Photovoltaik-Montage aus und wird in Mannheim geeignete Montagevorrichtungen (z. B. Schienensysteme) auswählen. 
                        </p>
                    </div>

                    <ImageSection image='https://as1.ftcdn.net/v2/jpg/03/57/20/80/1000_F_357208029_wP5Qtrs1MuqRbiJIuYg3BQtiw4WfROZD.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/gewerbe.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Professioneller PV-Anlagenbau in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                        Der moderne PV-Anlagenbau bietet Ihnen in Mannheim verschiedene Optionen. Grundlage für die Gestaltung einer effizienten Photovoltaik-Anlage ist die Auswahl der Solarmodule sowie des Stromspeichers. Wir verwenden für Ihre Photovoltaik-Montage ausschließlich Produkte bester Qualität von renommierten Herstellern. Als führender Anbieter im Bereich des PV-Anlagenbaus haben wir in Mannheim bereits zahlreiche Solaranlagen für Privatkunden und Gewerbebetriebe konfiguriert und installiert. Profitieren Sie von den Vorteilen einer ganzheitlichen Betreuung – von der Feststellung des Bedarfs über die Konfiguration bis zur Photovoltaik-Montage.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        Die naheliegende Frage: Lohnt sich PV?, beantworten wir Ihnen mit einer detaillierten Wirtschaftlichkeitsberechnung. Photovoltaik-Anlagen der neuesten Generation amortisieren sich in weniger als zehn Jahren und helfen Ihnen, unabhängig von Stromlieferanten zu werden sowie einen Beitrag zur Energiewende zu leisten. Investieren Sie jetzt in Ihre eigene kleine Energiewende – mit Lumix Solar.
                        </p>
                    </div>
                </div>

                <Contact />

            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikMontage

