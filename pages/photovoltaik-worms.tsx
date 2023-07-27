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


const PhotovoltaikWorms: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>PPhotovoltaik in Worms │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik in Worms: kompetenter Anbieter 🌞 aktiver Umweltschutz ✔️ Stromkosten reduzieren 💶 Liefergarantie ➡️ Hier informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                            Experte für Photovoltaik in Worms – Lumix Solar
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                            Als leistungsstarker Anbieter für Photovoltaik-Anlagen bieten wir unseren Kunden aus Worms einen vorbildlichen Service, der von der Planung bis zur Wartung der PV-Anlage reicht – werden Sie Ihr eigener Stromproduzent und nutzen Sie klimafreundlichen Sonnenstrom.
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

                <SubpageLandingpages title='Photovoltaik-Anlage bei Worms kaufen – innovative Energielösungen von Lumix Solar:'
                    bullet1='Solarstrom auf dem eigenen Dach produzieren'
                    bullet2='Optimaler Schutz vor Strompreiserhöhungen'
                    bullet3='Realisierung maximaler Eigenverbrauchsquoten' 
                    bullet4='Kombination mit Wärmepumpe und Wallbox'
                    bullet5='Bedarfsorientierte Dimensionierung der PV-Anlage'
                    bullet6='Renommierter regionaler Anbieter nahe Worms'
                    bullet7='Zuverlässige Wirtschaftlichkeitsberechnungen'
                    bullet8='Umfangreicher Rundum-Service & Liefergarantie'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                        Sie wollen aktiv zum Klimaschutz beitragen, vermehrt regenerative Energien nutzen und gleichzeitig in zukunftsfähige, kostensenkende Technologien investieren? Dann sollten Sie sich näher über die Möglichkeiten der Photovoltaik informieren. Mit modernen Photovoltaik-Anlagen decken Sie in Worms Ihren Stromverbrauch weitgehend selbst und müssen sich keine Gedanken über Strompreiserhöhungen oder Blackouts im öffentlichen Stromnetz machen. Gleichzeitig genießen Sie das gute Gefühl, den Stromverbrauch mit Ihrer PV-Anlage vom renommierten Hersteller Lumix Solar klimaneutral zu decken.
                    </p>
                </div>

                <Subpage title='Fortschritt durch Technik – nachhaltig, zukunftsfähig'
                text='Dank der zukunftsweisenden Technologie, die in unseren Photovoltaik-Anlagen zum Einsatz kommt, erreichen Sie hohe Eigenverbrauchsquoten und sparen in Worms einen Großteil der Stromkosten ein. Lohnt sich PV? Ja! Photovoltaik-Anlagen von Lumix Solar amortisieren sich in weniger als zehn Jahren und erreichen eine Lebensdauer von mehr als 25 Jahren.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='PV-Anlage mit modernem Speicher bei Worms kaufen '
                text='Eine PV-Anlage mit Speicher ermöglicht in Worms die Erreichung von Eigenverbrauchsquoten von bis zu 80 Prozent und damit eine optimale Wirtschaftlichkeit. Die Weiterentwicklung der Stromspeicher war ein entscheidender Schritt, damit sich eine Photovoltaik-Anlage auch für Privathaushalte in Worms rechnet. Zum einen verbesserte sich die Kapazität der Speicher und zum anderen sanken die Produktionskosten. Dadurch wurde das Problem gelöst, dass Stromerzeugung und Stromverbrauch zeitlich auseinanderfallen. Mittags produziert die Photovoltaik-Anlage den Großteil des Solarstroms – Familien in Worms benötigen diesen Strom jedoch eher morgens und abends, weil dann alle zuhause sind. Wenn Sie sich für eine PV-Anlage mit Speicher entscheiden, steht Ihnen der Sonnenstrom auch zur Verfügung, wenn die Sonne nicht scheint. Profitieren Sie von unserer Erfahrung und Expertise: Das Team von Lumix Solar plant und installiert Photovoltaik-Anlagen für Privatkunden und Gewerbebetriebe in Worms und bietet Ihnen einen exzellenten Service.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='Photovoltaik-Anlage kaufen - Klimaschutz in Worms'
                text='Wenn Sie eine Photovoltaik-Anlage kaufen, sparen Sie künftig in Worms Stromkosten, sind unabhängig von Strompreiserhöhungen und optimal vor Blackouts geschützt. Aber für viele unserer Kunden ist die Tatsache, dass eine Photovoltaik-Anlage einen aktiven Beitrag zum Klimaschutz darstellt, mindestens ebenso kaufentscheidend. Eine Photovoltaik-Anlage zu kaufen bedeutet, den eigenen Strombedarf vollkommen klimaneutral zu decken.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='Investieren Sie in hochwertige Produkte '
                text='Einen noch größeren Effekt für den Klimaschutz erzielen Sie, wenn Sie mit dem Strom der Photovoltaik-Anlage in Worms eine Wärmepumpe betreiben und über die Kopplung mit einer Wallbox Ihr Elektroauto aufladen. Entscheiden Sie sich für eine Anlage aus dem Hause Lumix Solar, denn wir konfigurieren PV-Anlagen ausschließlich aus hochwertigen Produkten (Solarmodule und Stromspeicher) renommierter Qualitätshersteller.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
                    Informieren Sie sich jetzt darüber, wie Sie mit einer Photovoltaik-Anlage von Lumix Solar unabhängig von Stromanbietern und deren Preiserhöhungen werden, die Gefahr von Blackouts bannen und gleichzeitig in Wiesbaden zum Klimaschutz beitragen. Starten Sie jetzt in Ihre klimafreundliche Zukunft.
                    </p>
                </div>


                <SubpageLandingpages title='Photovoltaik-Anlage von Lumix Solar – Portfolio für Kunden aus Worms:'
                bullet1='Persönliche Beratung'
                bullet2='Individuelle Planung der PV-Anlage'
                bullet3='Berechnung der Wirtschaftlichkeit'
                bullet4='Montage der PV-Anlage'
                bullet5='Prüfung und Inbetriebnahme'
                bullet6='Wartung und Reparatur'
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


export default PhotovoltaikWorms
