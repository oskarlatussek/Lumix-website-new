import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";


const Solaranlage: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/produkte.webp' title='Solaranlage vom regionalen Anbieter aus Mannheim' text='Profitieren Sie von den Vorteilen einer Solaranlage von Lumix Solar, Ihrem regionalen Partner in Mannheim. Wir liefern hochwertige Anlagen und unterstützen unsere Kunden zusätzlich mit einem hervorragenden und umfangreichen Service.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solaranlagen von Lumix Solar</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Klimafreundliche Stromerzeugung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Reduzierung der Stromrechnung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Schutz vor Stromausfällen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Sehr hohe Eigenverbrauchsquote</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Innovative Stromspeicher</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Individuelle Konfiguration der Anlage</span>
                            </div>                        
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Verlässliche Liefergarantie</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Persönliche Ansprechpartner</span>
                            </div>                        
                        </div>
                        <p>
                            Mit einer modernen Solaranlage aus dem Hause Lumix Solar werden Sie in Mannheim endlich unabhängig von den Versorgungsunternehmen, die ihre Preise teilweise willkürlich und nicht nachvollziehbar erhöhen. Darüber hinaus steigt mit zunehmender Belastung des Stromnetzes die Gefahr von Stromausfällen. Auch dagegen können Sie sich mit einer Solaranlage auf Ihrem Dach in Mannheim effektiv wappnen. Möchten Sie Ihren ökologischen Fußabdruck verkleinern, ohne auf den Komfort zu verzichten, der mit elektrischen Geräten einhergeht? Wir liefern Ihnen die passenden Solarmodule für Ihre Solaranlage und sorgen mit umfassenden Serviceleistungen dafür, dass Sie optimal von Ihrer persönlichen Energiewende in Mannheim profitieren. Wünschen Sie weitere Informationen zu den Solaranlagen für Privatkunden und Gewerbebetriebe? Unser Team steht Ihnen jederzeit für eine ausführliche Beratung und die Erstellung eines Angebots zur Verfügung. 
                        </p>    
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Jetzt innovative Solaranlage kaufen in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Ständig steigende Strompreise und eine zunehmende Versorgungsunsicherheit sind gute Gründe, um jetzt eine Solaranlage zu kaufen und sich damit in Mannheim größtenteils unabhängig von den Stromlieferanten zu machen. Dank ausgereifter Technik und verbesserten Stromspeichern können Sie mit einer modernen Solaranlage mittlerweile bis zu 80 Prozent des selbstproduzierten Stroms für den Eigenverbrauch nutzen. Es ist sogar möglich, das Elektroauto mit dem günstigen Solarstrom zu laden und somit ein noch größeres Einsparpotenzial zu realisieren. Die hochwertigen Photovoltaik-Anlagen sind leistungsstark und produzieren zuverlässig umweltfreundlichen Strom. Mit zusätzlichen Komponenten wie Backup-Boxen und Wallboxen erhöhen Sie die Effizienz Ihrer Anlage und profitieren maximal von den Vorteilen der innovativen Technologie. Darüber hinaus ist es ein gutes Gefühl, eine Solaranlage zu kaufen und in Mannheim damit einen aktiven Beitrag zur Bekämpfung des Klimawandels zu leisten.
                        </p>

                        
                    </div>

                    <ImageSection image='/Images/wechselrichter.webp' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/wallbox.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Die Vorteile der Solartechnik in Mannheim nutzen!</h2>

                        <p className='text-justify text-base lg:text-lg'>
                        Lohnt sich PV? Man kann ohne Übertreibung feststellen, dass sich die Solartechnik in den letzten Jahren rasant weiterentwickelt hat und deshalb Solaranlagen auch für Privatkunden in Mannheim eine lohnende Investition sind. Die Lebensdauer moderner Solaranlagen beträgt mehr als 25 Jahre und zudem verursacht Solartechnik auch nur geringe Wartungskosten. Außerdem erhalten Sie eine Einspeisevergütung für den in Ihrer Solaranlage erzeugten Strom, den Sie nicht selbst verbrauchen, sondern ins öffentliche Netz in Mannheim einspeisen. Wirtschaftlichkeitsberechnungen ergeben, dass die Amortisationsdauer einer Photovoltaik-Anlage nicht einmal zehn Jahre beträgt und Sie danach einen sehr hohen Kostenvorteil genießen.
                        Wir bieten Ihnen einen leistungsstarken Service, der neben der Beratung auch die Planung und Montage sowie die Wartung Ihrer Solaranlage umfasst und sind außerdem als regionaler Anbieter von Solartechnik Ihr zuverlässiger Ansprechpartner in Mannheim. Wagen Sie jetzt den Schritt und profitieren Sie von Ihrer persönlichen Energiewende.
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
        </>
    )
}


export default Solaranlage
