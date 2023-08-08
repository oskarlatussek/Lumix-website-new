import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";
import { Helmet, HelmetProvider } from "react-helmet-async";



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
                <Hero image='/Images/produkte.webp' title='Exakte Planung Ihrer Photovoltaik-Anlage in Mannheim' text='Die professionelle Planung einer Photovoltaik-Anlage legt in Mannheim den Grundstein für eine optimale Investitionsentscheidung. Unsere Experten unterstützen Sie dabei, eine bedarfsgerechte PV-Anlage zu planen und entwickeln individuelle Lösungen für Privathaushalte und Unternehmen.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Planung von Photovoltaik-Anlagen – eine Aufgabe für unsere Experten in Mannheim:</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Herstellerunabhängige Beratung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Bedarfsgerechte Dimensionierung</span>
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

                        Bevor die Entscheidung für eine Photovoltaik-Anlage getroffen wird, sollte eine differenzierte Planung der Anlage durch erfahrene Experten erfolgen. Unser zuverlässiges Team unterstützt Sie dabei, die Solaranlage zu planen und berücksichtigt in Mannheim die örtlichen Gegebenheiten, Ihren individuellen Strombedarf sowie Fördermöglichkeiten. Ziel der durchdachten Planung von Photovoltaik-Anlagen ist die Erstellung eines zukunftsfähigen Energiekonzepts für Ihren Privathaushalt oder Ihren Gewerbebetrieb in Mannheim. Basierend auf dem Planungskonzept wird die Photovoltaik-Anlage zusammengestellt und von unseren Fachkräften installiert. Sie erhalten von uns alle Leistungen aus einer Hand – von der kompetenten Beratung und der Planung der Photovoltaik-Anlage über die Montage in Mannheim bis zur Reinigung, Wartung und Reparatur. Sie sind an unserem Rundum-Service interessiert und möchten die Solaranlage mit unseren Experten planen? Hier können Sie direkt mit uns Kontakt aufnehmen sich und einfach und bequem ein Online-Angebot erstellen lassen.
                        </p>
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                        Angebot online anfordern!
                        </a>    
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Dimensionierung von PV-Anlagen in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                          Ziel der Installation einer Photovoltaik-Anlage ist zum einen, umweltfreundlich Strom selbst zu produzieren und sich unabhängig von Stromausfällen zu machen. Andererseits ist die Planung einer Photovoltaik-Anlage in Mannheim auch mit dem Wunsch verbunden, die Stromkosten dauerhaft zu senken. Deshalb ist es wichtig, Wirtschaftlichkeitsberechnungen durchzuführen und zu überprüfen, unter welchen Bedingungen Sie die größten Einsparpotenziale realisieren. Wir checken die Bedingungen bei Ihnen vor Ort. Manchmal ist es sinnvoll, zunächst eine Dachsanierung durchzuführen, wenn Sie eine Solaranlage planen, denn die PV-Anlagen überzeugen mit langer Nutzungsdauer, sodass Ihr Dach in Mannheim vor der Montage eventuell erneuert werden sollte.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                          Bei der Dimensionierung der PV-Anlage wird Ihr Stromverbrauch zugrunde gelegt. Es ist jedoch empfehlenswert, bei der Planung der Photovoltaik-Anlage zukünftige Entwicklungen zu antizipieren und die Anlage in Mannheim eher etwas großzügiger zu konfigurieren, wenn es das Budget erlaubt. Dann können Sie künftig günstigen Solarstrom für ein Elektroauto oder eine Wärmepumpe nutzen. Um die Eigenverbrauchsquote und damit die Effizienz der PV-Anlage zu erhöhen, sollten Sie außerdem einen entsprechend großen Stromspeicher auswählen.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                         Mit einer differenzierten Wirtschaftlichkeitsberechnung können wir Ihnen im Rahmen der Planung Ihrer Photovoltaik-Anlage in Mannheim die Frage: Lohnt sich PV? genau beantworten. Für unsere PV-Anlagen verwenden wir ausschließlich hochwertige Produkte und innovative Solarmodule renommierter Hersteller und sorgen mit umfassenden Serviceleistungen dafür, dass die Anlagen einen maximalen Ertrag erwirtschaften.
                        </p>
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                          Angebot konfigurieren lassen!
                        </a>

                        
                    </div>

                    <ImageSection image='https://as1.ftcdn.net/v2/jpg/03/57/20/80/1000_F_357208029_wP5Qtrs1MuqRbiJIuYg3BQtiw4WfROZD.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/batterie.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Lumix Solar – Ihr regionaler Ansprechpartner für:</h2>
                        <ul className="text-justify text-base lg:text-lg">
                          <li>Solarmodule</li>
                          <li>Stromspeicher</li>
                          <li>Wechselrichter</li>
                          <li>Backup- & Wallboxen</li>
                        </ul>  
                      </div>
                </div>
                <Contact />

            </div>
            </HelmetProvider>

        </>
    )
}


export default PhotovoltaikPlanung
