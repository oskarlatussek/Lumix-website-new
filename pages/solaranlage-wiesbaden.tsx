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


const SolaranlageWiesbaden: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Wiesbaden │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Wiesbaden: innovative Solartechnik 🌞 Individuell konfigurierte Anlage ✔️ Regionaler Anbieter ➡️ Hier informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                        Solaranlage in Wiesbaden: Strom selbst produzieren
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                            Mit einer Solaranlage werden Sie in Wiesbaden zum Produzenten Ihres eigenen Stroms. Nutzen Sie die Vorteile innovativer Solartechnik, um Stromkosten langfristig zu minimieren und einen Beitrag zum Klimaschutz zu leisten.
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

                <SubpageLandingpages title='Solaranlage in Wiesbaden vom renommierten Anbieter Lumix Solar:'
                    bullet1='Klimaschutz dank Solarstrom'
                    bullet2='Senkung der Energiekosten'
                    bullet3='Kein Risiko von Stromausfällen'
                    bullet4='Extrem hohe Eigenverbrauchsquote'
                    bullet5='Hochwertige Stromspeicher'
                    bullet6='Individuell konfigurierte PV-Anlagen'
                    bullet7='Einhaltung von Terminzusagen'
                    bullet8='Persönliche Beratung'
                    
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Dank moderner Photovoltaik-Technologie ist es ganz einfach, sich von Stromkonzernen unabhängig zu machen. Investieren Sie deshalb in eine Solaranlage aus dem Hause Lumix Solar und profitieren Sie in Wiesbaden von den Vorteilen: Sie reduzieren dauerhaft Ihre Stromkosten, müssen sich keine Gedanken über ständig steigende Strompreise machen, sind vor Stromausfällen aufgrund überlasteter Stromnetze geschützt und tragen mit der Solaranlage in Wiesbaden außerdem zum Gelingen der Energiewende bei.
                    </p>
                </div>

                <Subpage title='Komplett-Service beim Kauf einer Solaranlage'
                text='Wenn Sie eine Solaranlage kaufen möchten, bieten wir Ihnen einen vorbildlichen Service, der von der Beratung über die detaillierte Planung und fachgerechte Montage bis weit über den Kauf hinausgeht. Unser Team sorgt für eine perfekte Wartung und ist auch zur Stelle, wenn die Solaranlage in Wiesbaden repariert werden muss. Gerne informieren wir Sie über vielen Möglichkeiten, die Ihnen eine Solaranlage mit Speicher bietet. Fordern Sie außerdem Ihr unverbindliches Angebot an – wir sind erfahrene Experten für die Konfiguration und die Montage von Solaranlagen mit Speicher für Privathaushalte, aber auch für Gewerbebetriebe in Wiesbaden.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Experte für Solartechnik: Ihr Partner unweit von Wiesbaden'
                text='Die Fortschritte auf dem Gebiet der Solartechnik sind enorm – insbesondere die leistungsstarken Stromspeicher bieten Ihnen in Wiesbaden die Möglichkeit, den Sonnenstrom, der vorwiegend in der Mittagszeit produziert wird, bedarfsgerecht morgens oder abends zu nutzen. Dadurch werden wiederum mit der Solaranlage Eigenverbrauchsquoten von bis zu 80 Prozent erreicht und auf diese Weise die Wirtschaftlichkeit der PV-Anlage maximiert.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='Solartechnik – bedarfsgerecht und wirtschaftlich  '
                text='Viele Kaufinteressenten stellen sich die Frage: Lohnt sich PV? Wenn Sie die Solaranlage im Fachbetrieb Lumix Solar kaufen, werden wir die Photovoltaik-Anlage bedarfsorientiert dimensionieren und dabei Ihre Verbrauchswerte, aber auch die örtlichen Gegebenheiten in Wiesbaden berücksichtigen. Anhand detaillierter Wirtschaftlichkeitsberechnungen lässt sich feststellen, wann sich die Anlage amortisiert und welche Ersparnisse Sie realisieren. Es lohnt sich, einen renommierten Experten für Solartechnik zu beauftragen – wir bieten unseren Kunden aus Wiesbaden einen praktischen Rundum-Service.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='Kompetente Planung Ihrer Solaranlage in Wiesbaden'
                text='Die professionelle Dimensionierung und Planung Ihrer Solaranlage in Wiesbaden ist der entscheidende Erfolgsfaktor für das gesamte Projekt. Wir erstellen maßgeschneiderte Energiekonzepte und beraten Sie hinsichtlich der Kapazität der Anlage. Meist ist es sinnvoll, die Kapazität eher etwas größer als derzeit benötigt zu wählen, um Potenziale für die Zukunft zu schaffen. Vielleicht möchten Sie später eine Wärmepumpe mit Sonnenstrom betreiben, um auch klimaneutral zu heizen, oder ein Elektroauto über die hauseigene Wallbox aufladen. Eine vorausschauende Planung  Anlage eröffnet Ihnen in Zukunft alle Möglichkeiten. Wir planen die Solaranlage mit hochwertigen Produkten namhafter Hersteller und verwenden in Wiesbaden modernste Solarmodule und Stromspeicher. Unsere Photovoltaik-Anlagen überzeugen mit hervorragender Energieeffizienz und langer Lebensdauer von 25 und mehr Jahren.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />


                <SubpageLandingpages title='Lumix Solar – Ihr regionaler Ansprechpartner für:'
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


export default SolaranlageWiesbaden
