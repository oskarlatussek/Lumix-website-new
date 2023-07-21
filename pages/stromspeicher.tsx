import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";
import { Helmet, HelmetProvider } from "react-helmet-async";



const Stromspeicher: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Stromspeicher Photovoltaik in Mannheim │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Stromspeicher für Photovoltaik-Anlagen in Mannheim ✔️ Moderne Speichertechnik 🌞 Eigenverbrauchsquote steigern ➡️ Hier informieren❕"/>
            </Helmet>

            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/produkte.webp' title='Stromspeicher für Photovoltaik-Anlagen in Mannheim' text='Mit einem innovativen Stromspeicher steigern Sie die Eigenverbrauchsquote und damit die Effizienz Ihrer Photovoltaik-Anlage in Mannheim erheblich. Dank moderner Stromspeicher sparen Sie den Großteil der Stromkosten ein und werden unabhängig von Versorgungsunternehmen und Netzausfällen.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Stromspeicher für Photovoltaik-Anlagen vom Experten aus Mannheim:</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Steigerung des Eigenverbrauchs</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Bedarfsorientierte Dimensionierung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Solarstrom selbst bei Dunkelheit verfügbar</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Perfekt für die Kombination mit Wärmepumpen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Notstromsystem zur Absicherung bei Stromausfällen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Beratung über aktuelle Fördermöglichkeiten</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Exakte Wirtschaftlichkeitsberechnungen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Alle Serviceleistungen aus einer Hand</span>
                            </div>                                  
                        </div>
                        <p className='text-justify text-base lg:text-lg'>
                        Die modernen Stromspeicher für Photovoltaik-Anlagen sorgen dafür, dass Sie das Potenzial Ihrer PV-Anlage in Mannheim optimal nutzen, denn damit steigern Sie Ihren Eigenverbrauch auf bis zu 80 Prozent und sparen somit einen Großteil der Stromkosten. Photovoltaik-Batteriespeicher schaffen die Voraussetzung dafür, dass die Unabhängigkeit vom Stromanbieter maximiert wird und Ihnen der umweltfreundliche Sonnenstrom auch dann zur Verfügung steht, wenn die Sonne nicht scheint. Wir liefern und montieren Stromspeicher für Photovoltaik, die mit Notstromsystemen ausgestattet sind und in Mannheim bestens vor Stromausfällen schützen.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        Unser Team konfiguriert bedarfsgerechte Photovoltaik-Anlagen für Privatkunden und Gewerbebetriebe und überzeugt mit einem umfassendem Service, der von der Beratung über die Planung und Montage bis zur Wartung der PV-Anlagen alle Leistungen umfasst.  
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        Wünschen Sie eine kompetente Beratung zu den Möglichkeiten, die Photovoltaik-Batteriespeicher vom regionalen Experten Lumix Solar aus Mannheim bieten? Wir stehen Ihnen jederzeit für ein persönliches Beratungsgespräch zur Verfügung oder unterbreiten Ihnen direkt ein Angebot.
                        </p>

                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                        Angebot online anfordern!
                        </a>    
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>PV-Anlage mit Speicher in Mannheim kaufen</h2>

                        <p className='text-justify text-base lg:text-lg'>
                          Ein Stromspeicher für Photovoltaik-Anlagen steigert die Effizienz der Anlage erheblich. Aus diesem Grund entscheiden sich immer mehr Kunden dafür, eine Solaranlage mit Speicher von Lumix Solar zu kaufen.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                          Wenn Sie in eine PV-Anlage mit Speicher investieren, können Sie in Mannheim Sonnenstrom, der nicht unmittelbar verbraucht wird, für eine spätere Nutzung speichern. Damit entfällt eines der wichtigsten Argumente gegen den Einsatz von Photovoltaik-Anlagen in privaten Haushalten: Es wird am meisten Strom produziert, wenn die Familie außer Haus ist. Das ist kein Problem, wenn Sie eine Photovoltaik-Anlage mit Speicher kaufen, denn dann können Sie in Mannheim in den frühen Morgenstunden und abends einfach den gespeicherten Solarstrom verwenden. 
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                          Auf diese Weise lässt sich der Eigenverbrauch auf bis zu 80 Prozent steigern und damit erreichen Privathaushalte eine noch nie dagewesene Unabhängigkeit von den Stromanbietern. Die größten Effekte erzielen Sie mit dem Stromspeicher der Photovoltaik-Anlage, wenn Sie den Sonnenstrom in Mannheim zusätzlich für die Ladung Ihres Elektroautos oder den Betrieb einer klimafreundlichen Wärmepumpe nutzen. Speicher für Photovoltaik führen dazu, dass sich Ihr Beitrag zum Klimaschutz in Mannheim drastisch erhöht.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>                        
                          Lumix Solar konfiguriert leistungsstarke PV-Anlagen aus hochwertigen Produkten renommierter Hersteller und verwendet ausschließlich energieeffiziente und lange haltbare Solarmodule.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>                        
                          Sie fragen sich dennoch: Lohnt sich PV? Unsere erfahrenen Experten werden anhand von Wirtschaftlichkeitsberechnungen den monetären Effekt kalkulieren und Sie außerdem hinsichtlich aktueller Fördermöglichkeiten für Stromspeicher und Photovoltaik in Mannheim beraten. 
                        </p>                        
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                          Über Angebot informieren!
                        </a>

                        
                    </div>

                    <ImageSection image='https://as1.ftcdn.net/v2/jpg/03/57/20/80/1000_F_357208029_wP5Qtrs1MuqRbiJIuYg3BQtiw4WfROZD.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/wallbox.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Lumix Solar – unser umfangreiches Portfolio:</h2>
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


export default Stromspeicher
