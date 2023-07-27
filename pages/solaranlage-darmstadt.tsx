import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Process from "../components/section/Process";
import Subpage from "../components/section/Subpage";
import SubpageLandingpages from "../components/section/SubpageLandingpages";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import Link from 'next/link';
import { Helmet, HelmetProvider } from "react-helmet-async";


const SolaranlageDarmstadt: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Darmstadt │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Darmstadt: effiziente Solartechnik 🌞 Regionaler Anbieter ✔️ Maßgeschneiderte Lösungen ✔️ Liefergarantie ➡️ Informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Solaranlage zur Stromerzeugung in Darmstadt</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                        Die Solaranlagen von Lumix Solar bieten Ihnen die Möglichkeit, in Darmstadt klimaneutral Strom auf dem eigenen Dach zu erzeugen, sich damit unabhängig von den Preissteigerungen der Versorgungsunternehmen zu machen und gleichzeitig zum Klimaschutz beizutragen.
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

                <SubpageLandingpages title='Solaranlage von Lumix Solar – profitieren Sie in Darmstadt von:'
                    bullet1='Günstigem, klimaneutralen Solarstrom'
                    bullet2='Dauerhaft niedrigerer Stromrechnung'
                    bullet3='Schutz vor netzbedingten Blackouts'
                    bullet4='Sehr hoher Eigenverbrauchsquote'
                    bullet5='Innovativen Stromspeichern'
                    bullet6='Bedarfsorientierten Energielösungen'
                    bullet7='Einhaltung von Lieferzusagen'
                    bullet8='Kompetenter persönlicher Beratung'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                        Die innovativen Solaranlagen aus dem Haus Lumix Solar machen Sie in Darmstadt unabhängig von ständig steigenden Strompreisen der Versorgungsunternehmen und helfen Ihnen dabei, Ihre Energiekosten langfristig drastisch zu reduzieren. Ein weiterer Vorteil dieser Unabhängigkeit betrifft den Schutz vor Blackouts aufgrund immer stärker belasteter Stromnetze – wenn Sie eine Solaranlage kaufen, brauchen Sie sich darüber in Darmstadt keine Sorgen mehr zu machen, denn Sie decken Ihren Strombedarf zum größten Teil mit dem selbst produzierten Sonnenstrom ab. Neben dieser Sicherheit bietet eine Solaranlage mit integriertem Speicher Vorteile für den Klimaschutz. Sie tragen aktiv dazu bei, dass die Energiewende in Darmstadt erfolgreich umgesetzt wird.
                    </p>
                </div>

                <Subpage title='Rudum-Service für Ihre Solaranlage '
                text='Als renommierter regionaler Anbieter konfigurieren wir maßgeschneiderte PV-Anlagen für Ihre Bedürfnisse und sorgen für eine fachgerechte Montage. Unser zuverlässiges Team verfügt über jahrelange Erfahrung mit der Konfiguration von Solaranlagen für die Stromerzeugung und bietet sowohl Privatkunden als auch Gewerbebetrieben in Darmstadt einen praktischen Rundum-Service. Sie können hier direkt ein Angebot für eine Photovoltaik-Anlage anfordern und Ihre ganz persönliche Energiewende starten.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Solaranlage bedarfsgerecht planen in Darmstadt'
                text='Um mit dem selbstproduzierten Strom maximale Einsparpotenziale zu realisieren, sollte man die Solaranlage professionell planen und sich dabei von den Solarexperten der Firma Lumix Solar beraten lassen. Wir dimensionieren Ihre Solaranlage in Darmstadt individuell und liefern keine „PV-Anlagen von der Stange“. Damit schaffen wir optimale Voraussetzungen dafür, dass Sie mit Ihrer neuen Anlage eine Eigenverbrauchsquote von maximal 80 Prozent erreichen und nur ein Fünftel des Sonnenstroms ins öffentliche Stromnetz eingespeist wird.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='Fachdienstleistungen aus einer Hand'
                text='Als leistungsstarker Anbieter von Solaranlagen für die Stromerzeugung unterstützen wir unsere Kunden aus Darmstadt umfangreich: Wir beraten sie ausführlich und planen die PV-Anlage, sorgen für eine optimale Dimensionierung und eine fachgerechte Montage und übernehmen außerdem die Wartung nach der Installation. Kurz gesagt: Wir stehen Ihnen jederzeit als zuverlässiger Ansprechpartner zur Verfügung.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='Solartechnik – innovative PV-Anlagen in Darmstadt'
                text='Die Weiterentwicklung der Solartechnik bietet Ihnen in Darmstadt die Möglichkeit, den eigenen Strom klimafreundlich zu produzieren. Auch die immer wieder gestellte Frage: Lohnt sich PV?,  kann uneingeschränkt mit „Ja“ beantwortet werden, denn eine Solaranlage amortisiert sich in unter zehn Jahren und erreicht eine Lebensdauer von mehr als 25 Jahren. Dank der hohen Eigenverbrauchsquoten können Sie somit Ihre Stromkosten in Darmstadt dauerhaft minimieren. Für die Solaranlagen von Lumix Solar werden ausschließlich modernste Produkte verwendet – energieeffiziente Solarmodule und Stromspeicher optimieren den Wirkungsgrad der Solartechnik und überzeugen außerdem mit geringem Wartungsbedarf und Robustheit.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />


                <SubpageLandingpages title='Solaranlagen von Lumix Solar – Ihrem Experten für:'
                bullet1='Solartechnik'
                bullet2='Stromspeicher'
                bullet3='Wechselrichter'
                bullet4='Backup- & Wallboxen'
                image='/Images/gewerbe.webp'
                />

                <Service />
                

                {/* <FAQ /> */}
                <Contact />
            </div>
            </HelmetProvider>

        </>
    )
}


export default SolaranlageDarmstadt
