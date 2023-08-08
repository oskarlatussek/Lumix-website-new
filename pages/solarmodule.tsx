
import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";

import { Helmet, HelmetProvider } from "react-helmet-async";


const Solarmodule: NextPage = () => {

    return (
        <>
        <HelmetProvider>
          <Helmet>
          <title>Solarmodule in Mannheim │ Lumix Solar GmbH</title>
          <meta
          name="description"
          content="Solarmodule Mannheim: modernste Solartechnik 🌞 Regionaler Anbieter ✔️ Persönliche Beratung ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
          </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/produkte.webp' title='Solarmodule in höchster Qualität aus Mannheim' text='Die Qualität der Solarmodule bestimmt die Effizienz Ihrer Photovoltaik-Anlage – entscheiden Sie sich deshalb für Module von Lumix Solar aus Mannheim. Wir verwenden ausschließlich Module renommierter Hersteller, die sowohl mit Energieeffizienz als auch mit langer Haltbarkeit überzeugen.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solarmodule von Lumix Solar in Mannheim – profitieren Sie von:</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Hoher Energieeffizienz</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Langer Haltbarkeit</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Geringem Wartungsbedarf</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Exzellenter Qualität</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Mono- & polykristallinen Modulen</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Fachgerechter Montage</span>
                            </div>                                                
                        </div>
                        <p className='text-justify text-base lg:text-lg'>
                        Die Solarmodule bilden das Herzstück Ihrer PV-Anlage. Deshalb verwenden wir ausschließlich Module namhafter Hersteller, deren Qualität bereits in zahlreichen Photovoltaik-Anlagen unter Beweis gestellt wurde. 
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        In den Modulen wird das Sonnenlicht in elektrische Energie umgewandelt. Jedes Solarmodul besteht wiederum aus Solarzellen und die Module werden zu Strings (Gruppen) verschaltet und bilden als Gesamtheit den Solargenerator der PV-Anlage. Gerne konfigurieren wir in Mannheim eine individuell auf Ihre Bedürfnisse und die örtlichen Gegebenheiten abgestimmte Photovoltaik-Anlage. Unser erfahrenes Team installiert PV-Anlagen unter Verwendung hochwertiger Produkte, sowohl für Privatkunden als auch für Gewerbebetriebe, und bietet Ihnen einen vorbildlichen und umfangreichen Service. 
                        </p>    
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Solarmodule kaufen – Lumix Solar in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                        Es lohnt sich, Solarmodule (Solarpanels) vom Qualitätsanbieter Lumix Solar zu kaufen, denn wir sorgen in Mannheim mit optimalem Service dafür, dass Sie mit Ihrer PV-Anlage den maximalen Ertrag erzielen. Aus diesem Grund verwenden wir Solarmodule von renommierten Herstellern und unterstützen Sie versiert bei der Auswahl der Module. Dank unserer langjährigen Erfahrung mit der Konfiguration und Montage von Photovoltaik-Anlagen wissen wir genau, welche Solarmodule sich am besten für die Installation auf Ihrem Dach eignen. Wenden Sie sich deshalb an die Experten von Lumix Solar, um Solarpanels zu kaufen, die in Mannheim perfekt Ihre Anforderungen erfüllen und einen maximalen Ertrag erzielen. 
                        </p>
                    </div>

                    <ImageSection image='https://as1.ftcdn.net/v2/jpg/03/57/20/80/1000_F_357208029_wP5Qtrs1MuqRbiJIuYg3BQtiw4WfROZD.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/gewerbe.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solarmodule namhafter Hersteller in Mannheim!</h2>

                        <p className='text-justify text-base lg:text-lg'>
                        Als Anbieter moderner PV-Anlagen verwenden wir ausschließlich Solarmodule namhafter Hersteller, sodass Sie in Mannheim von einer hervorragenden Qualität profitieren. Sie können zwischen mono- und polykristallinen Solarmodulen verschiedener Hersteller wählen und die PV-Anlage auch optisch an Ihr Haus anpassen. Mittlerweile stehen sogar Solarmodule zur Verfügung, die von der Denkmalschutzbehörde genehmigt werden. Alle in unseren Photovoltaik-Anlagen verbauten Module garantieren Ihnen in Mannheim eine sehr lange Haltbarkeit sowie einen optimalen Ertrag und benötigen zudem nur wenig Wartung.
                        </p>
                        <p className='text-justify text-base lg:text-lg'>
                        Lohnt sich PV? Diese Frage können wir Ihnen anhand einer Wirtschaftlichkeitsberechnung ganz genau beantworten. Die meisten PV-Anlagen amortisieren sich heutzutage in weniger als zehn Jahren und der Effekt der Reduzierung Ihrer Stromkosten wirkt lange darüber hinaus. Profitieren Sie von unserem exzellenten Service, der neben der Beratung auch die Planung der PV-Anlage sowie des Stromspeichers und die Montage der Solarmodule in Mannheim umfasst.  
                        </p>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Lumix Solar – Ihr Anbieter für:</h2>

                        <ul className='text-justify text-base lg:text-lg'>
                            <li>Solarmodule</li>
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


export default Solarmodule

