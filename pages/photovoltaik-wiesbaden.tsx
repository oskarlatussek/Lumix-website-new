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


const PhotovoltaikWiesbaden: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>PPhotovoltaik in Wiesbaden │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Photovoltaik Wiesbaden: regionaler Anbieter 🌞 Aktiver Klimaschutz ✔️ Stromkosten minimieren 💶 Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                            Mit Photovoltaik in Wiesbaden Stromkosten senken
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                            Photovoltaik bietet Ihnen die Möglichkeit, sich in Wiesbaden unabhängig von öffentlichen Stromanbietern zu machen und den Strom für Ihren Haushalt oder Ihren Betrieb ganz einfach auf dem Dach selbst zu produzieren.
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

                <SubpageLandingpages title='Photovoltaik-Anlage in Wiesbaden – zukunftsfähige Technologie von Lumix Solar:'
                    bullet1='Solarstrom selbst produzieren'
                    bullet2='Schutz vor steigenden Strompreisen'
                    bullet3='Hohe Eigenverbrauchsquote'
                    bullet4='Auch mit Wallbox & Wärmepumpe'
                    bullet5='Bedarfsgerechte Anlagen-Planung'
                    bullet6='Renommierter regionaler Anbieter'
                    bullet7='Wirtschaftlichkeitsberechnung'
                    bullet8='Komplett-Service & Liefergarantie'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                        Sie möchten zum Klimaschutz beitragen und gleichzeitig Ihre Energiekosten senken? Der Umstieg auf regenerative Energien wird dank moderner Photovoltaik-Anlagen für Privathaushalte und Gewerbebetriebe in Wiesbaden immer attraktiver. Fortschreitende Technik auf dem Gebiet der Stromspeicher und bessere Wirkungsgrade führen dazu, dass Photovoltaik-Anlagen immer beliebter werden. Das Team von Lumix Solar ist im Raum Wiesbaden Ihr ansprechpartner für innovative Lösungen im Bereich Solartechnik. Lassen Sie sich von uns qualifiziert beraten.
                    </p>
                </div>

                <Subpage title='Photovoltaik – Zukunftstechnologie, die sich für Sie rechnet'
                text='Wenn Sie sich entscheiden, eine Photovoltaik-Anlage zu kaufen, profitieren Sie in Wiesbaden von zukunftsweisender Technologie und realisieren maximale Einsparpotenziale. Lohnt sich PV? Diese Frage kann man mittlerweile tatsächlich uneingeschränkt mit „Ja“ beantworten und die Antwort mit Wirtschaftlichkeitsberechnungen untermauern. Innovative Photovoltaik-Anlagen von Lumix Solar amortisieren sich für Sie in Wiesbaden durchschnittlich in weniger als zehn Jahren und überzeugen mit einer langen Haltbarkeit von mindestens 25 Jahren.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='PV-Anlage mit Speicher nahe Wiesbaden kaufen'
                text='Eine PV-Anlage mit Speicher in der Region Wiesbaden zu kaufen, ist eine lohnende Investition. Stromspeicher der neuesten Generation sind extrem leistungsstark und ermöglichen Ihnen, selbst dann den eigenen Solarstrom zu nutzen, wenn die Sonne nicht scheint. Damit entfällt das Hauptargument gegen Photovoltaik-Anlagen: Der meiste Sonnenstrom wird in der Mittagszeit produziert, aber morgens und abends benötigt. Eine PV-Anlage mit Speicher stellt den Solarstrom hingegen jederzeit bedarfsgerecht zur Verfügung.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='PV-Anlagen – Beratung zu weiteren Möglichkeiten'
                text='PV-Anlagen mit Speicher können mit einer Wärmepumpe und/oder einer Wallbox gekoppelt werden, um die Energieeffizienz noch weiter zu steigern. Möchten Sie sich näher darüber informieren, ob sich eine Photovoltaik-Anlage für Sie in Wiesbaden rechnet? Unser Team steht Ihnen jederzeit für eine individuelle Beratung zur Verfügung und wird dabei sowohl Ihren Stromverbrauch als auch künftige Entwicklungen und örtliche Gegebenheiten bei zu planenden Anlagen einbeziehen.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='PV-Anlage vom renommierten Hersteller bei Wiesbaden'
                text='Wenn Sie Ihre PV-Anlage vom renommierten Hersteller Lumix Solar kaufen, profitieren Sie in Wiesbaden von einem praktischen Rundum-Service, der mit der unverbindlichen Beratung startet. Darüber hinaus planen wir die Photovoltaik-Anlage mit innovativen Produkten und verwenden ausschließlich hochwertige Solarmodule und Stromspeicher. Unsere Photovoltaik-Anlagen werden bedarfsorientiert geplant, wobei wir Ihnen in Wiesbaden raten, die Kapazität der PV-Anlage etwas größer als derzeit benötigt zu wählen, um beispielsweise später eine Wärmepumpe oder eine Wallbox anzuschließen.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
                    Informieren Sie sich jetzt darüber, wie Sie mit einer Photovoltaik-Anlage von Lumix Solar unabhängig von Stromanbietern und deren Preiserhöhungen werden, die Gefahr von Blackouts bannen und gleichzeitig in Wiesbaden zum Klimaschutz beitragen. Starten Sie jetzt in Ihre klimafreundliche Zukunft.
                    </p>
                </div>


                <SubpageLandingpages title='Photovoltaik-Anlagen von Lumix Solar – unser Service für Wiesbaden:'
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


export default PhotovoltaikWiesbaden
