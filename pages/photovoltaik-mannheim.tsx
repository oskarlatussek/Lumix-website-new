import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';
import { FiCheck } from "react-icons/fi";

import { Helmet, HelmetProvider } from "react-helmet-async";


const PhotovoltaikMannheim: NextPage = () => {

    return (
        <>
          <HelmetProvider>
            <Helmet>
            <title>Photovoltaik in Mannheim │ Lumix Solar GmbH</title>
            <meta
            name="description"
            content="Photovoltaik Mannheim: kompetenter Anbieter 🌞 Regionaler Partner ✔️ Individuelle Projekte ✔️ Liefergarantie ➡️ Jetzt starten❕"
            />
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/produkte.webp' title='Photovoltaik in Mannheim – Ihr regionaler Partner' text='Photovoltaik bietet Kunden in Mannheim die Möglichkeit, umweltfreundlich Strom selbst zu produzieren. Informieren Sie sich darüber, wie wir Sie beim Umstieg auf eine klimaneutrale Stromerzeugung unterstützen und Ihnen dabei helfen, Stromkosten nachweislich zu senken.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Photovoltaik von Lumix Solar – Ihre Möglichkeiten in Mannheim:</h2>

                        <div className='text-justify text-base lg:text-lg'>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Klimaneutrale Stromerzeugung</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Unabhängigkeit von hohen Stromkosten</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Senkung des Stromausfallrisikos</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Hohe Eigenverbrauchsquote</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Effiziente Kombination mit Wallbox</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Individuelle Projektierung</span>
                            </div>                        
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Regionaler Ansprechpartner</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xl">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">Zuverlässige Liefergarantie</span>
                            </div>                        
                        </div>
                        <p className='text-justify text-base lg:text-lg'>

                            Photovoltaik ist nicht weniger als eine optimale Lösung des drängenden Energieproblems und bietet Ihnen in Mannheim faszinierende Möglichkeiten. Mit einer innovativen Photovoltaik-Anlage der Firma Lumix Solar machen Sie sich endlich unabhängig von stetig steigenden Stromkosten, denn dank moderner Stromspeicher und hervorragender Effizienz können Sie 80 Prozent des Solarstroms für den eigenen Haushalt und das Aufladen Ihres E-Autos verwenden. Als leistungsstarker Photovoltaik-Anbieter stellen wir Ihnen ebenso ausgereifte wie innovative Lösungen zur Verfügung und konfigurieren Ihre PV-Anlage in Mannheim individuell. Wir bieten hochwertige Photovoltaik-Lösungen für Privathaushalte und Gewerbebetriebe in Mannheim. Unser engagiertes Team überzeugt mit vorbildlichem Service und steht Ihnen auch nach der Montage der Photovoltaik-Anlage jederzeit mit Rat und Tat zur Seite.
                        </p>    
                        <p className='text-justify text-base lg:text-lg'>

                          Sie wünschen eine persönliche Beratung und fragen sich: Lohnt sich PV?  Nutzen Sie unsere ausführliche Beratung, bei der wir Ihnen die Optionen der Photovoltaik-Technologie erläutern und Sie hinsichtlich der Konfiguration einer PV-Anlage in Mannheim informieren. Selbstverständlich können Sie auch direkt ein Angebot für Ihre Photovoltaik-Anlage anfordern.
                        </p>
                        <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Hier Angebot anfordern!</a>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Innovativer Photovoltaik-Anbieter in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                          Als kompetenter Photovoltaik-Anbieter aus Mannheim haben wir es uns zum Ziel gemacht, einen Beitrag zur Energiewende zu leisten. Photovoltaik ermöglicht es sowohl Privathaushalten als auch Unternehmen, selbst und völlig eigenständig grüne Energie aus Sonnenlicht herzustellen. Somit unterstützt Sie Ihr regionaler Photovoltaik-Anbieter dabei, in Mannheim unabhängig von den Preissteigerungen der Stromkonzerne zu werden. Darüber hinaus trägt Photovoltaik dazu bei, dass Sie Stromausfällen im öffentlichen Stromnetz gelassen entgegenblicken können. Photovoltaik-Anlagen überzeugen mittlerweile mit ausgereifter Technologie, zudem profitieren Sie in Deutschland von steuerlichen Vorteilen, sodass sich die Investition in eine Photovoltaik-Anlage in jedem Fall lohnt – entscheiden Sie sich für einen Qualitätsanbieter aus Mannheim, der Ihnen nicht nur hochwertige Produkte liefert, sondern auch den perfekten Service für die Montage, Wartung und Reparatur der Solartechnologie bietet. Kurze Wege, Liefergarantien und eine unkomplizierte Kommunikation machen Lumix Solar zum idealen Partner, wenn Sie eine Photovoltaik-Anlage in Mannheim installieren möchten. 
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
                        <h2>Photovoltaik-Anlage kaufen bei Ihrem vertrauensvollen Partner in Mannheim</h2>

                        <p className='text-justify text-base lg:text-lg'>
                          Sie wollen eine Photovoltaik-Anlage kaufen und in Mannheim einen optimalen Service erhalten? Als renommierter Photovoltaik-Anbieter stellen wir unseren Kunden einen exzellenten Service zur Verfügung, der weit über die Lieferung der PV-Anlage hinausgeht.  Nach der Beratung werden wir unter Berücksichtigung der örtlichen Gegebenheiten und Ihrer Verbrauchsdaten planen, aus wie vielen Solarmodulen die Photovoltaik-Anlage in Mannheim bestehen sollte. Anschließend erfolgt eine Berechnung der Wirtschaftlichkeit. Wenn Sie uns nach der Planung den Auftrag erteilen, die Photovoltaik-Anlage zu installieren, übernehmen unsere Fachleute die Montage auf Ihrem Dach in Mannheim. Selbstverständlich erledigt unser Team auch die Montage von Wechselrichtern sowie Stromspeichern und installiert auf Wunsch die Backup-Box und die Wallbox für Ihr Elektroauto. Nach der Inbetriebnahme können Sie bequem mobil per App kontrollieren, wie viel Strom erzeugt und verbraucht wird. Gestalten Sie jetzt Ihre eigene persönliche Energiewende – mit Lumix Solar. 
                        </p>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Photovoltaik-Anlage kaufen in Mannheim – unsere Leistungen:</h2>

                        <ul className='text-justify text-base lg:text-lg'>
                            <li>Persönliche Beratung</li>
                            <li>Individuelle Planung der PV-Anlage</li>
                            <li>Berechnung der Wirtschaftlichkeit</li>
                            <li>Montage der PV-Anlage</li>
                            <li>Prüfung und Inbetriebnahme</li>
                            <li>Wartung und Reparatur</li>
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


export default PhotovoltaikMannheim
