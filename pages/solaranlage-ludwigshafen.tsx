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


const SolaranlageLudwigshafen: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Ludwigshafen │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Ludwigshafen: effiziente Technik 🌞 Regionaler Anbieter ✔️ Maßgeschneiderte PV-Anlagen ✔️ Liefergarantie ➡️ Informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>Solaranlage – klimaneutraler Strom in Ludwigshafen</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                            Mit den innovativen Solaranlagen aus dem Hause Lumix Solar machen Sie sich in Ludwigshafen unabhängig von Strompreiserhöhungen und tragen aktiv zum Klimaschutz bei. Infomieren Sie sich über die Optionen moderner PV-Anlagen für die Stromerzeugung.
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

                <SubpageLandingpages title='Klimaneutraler Strom – Ihr regionaler Partner für Solaranlagen nahe Ludwigshafen:'
                    bullet1='Klimafreundlicher Solarstrom'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Schutz vor Stromausfällen'
                    bullet4='Maximale Eigenverbrauchsquote'
                    bullet5='Modernste Stromspeicher'
                    bullet6='Maßgeschneiderte Lösungen'
                    bullet7='Verlässliche Liefergarantien'
                    bullet8='Fundierte individuelle Beratung'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                    Mit einer leistungsstarken Solaranlage von Lumix Solar werden Sie in Ludwigshafen endlich unabhängig von den Stromversorgern und produzieren Ihren eigenen Strom. Dadurch schützen Sie sich optimal vor den gefürchteten Blackouts, die aufgrund einer zunehmenden Überlastung der öffentlichen Stromnetze immer wahrscheinlicher werden. Außerdem ist es aus Gründen des Klimaschutzes sinnvoll, eine Solaranlage zu kaufen, denn dadurch tragen Sie in Ludwigshafen aktiv dazu bei, dass die Energiewende gelingt. Als renommierter regionaler Anbieter konfigurieren wir maßgeschneiderte PV-Anlagen.#
                    </p>
                </div>

                <Subpage title='Solaranlagen mit Speicher – effizient, ökologisch vernünftig'
                text='Hochwertige Solaranlagen mit Speicher ermöglichen Ihnen, den Eigenverbrauch in Ludwigshafen auf bis zu 80 Prozent zu steigern und auch dann den umweltfreundlichen Strom zu nutzen, wenn die Sonne nicht scheint. Unser Team überzeugt mit Erfahrung und Expertise im Bereich der klimafreundlichen Stromerzeugung – wir planen und montieren bedarfsgerechte Solaranlagen mit Speicher sowohl für Privathaushalte als auch für Gewerbebetriebe in Ludwigshafen. Fordern Sie jetzt Ihr individuelles Angebot an. '
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Modernste Solartechnik in Ludwigshafen nutzen'
                text='Die Solartechnik hat sich in den letzten Jahren weiterentwickelt, sodass wir leistungsstarke Solaranlagen anbieten, mit denen unsere Kunden aus Ludwigshafen ihren Stromverbrauch fast vollständig durch selbstproduzierten Sonnenstrom decken können. Insbesondere im Bereich der Speichertechnik sind entscheidende Fortschritte erreicht worden, denn die Solartechnik ist mittlerweile extrem effizient und zudem sind die Stromspeicher wesentlich günstiger als noch vor einigen Jahren – gerne unterbreiten wir Ihnen in Ludwigshafen ein Angebot.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='Komplett-Service mit Lumix Solar'
                text='Unser Service umfasst weitaus mehr als die Lieferung der Solartechnik – wir begleiten Sie auf dem Weg zum klimafreundlichen Strom von der bedarfsorientierten Planung über die Konfiguration der Solaranlage und der fachgerechten Montage bis zur Wartung und Reparatur, die wir in Ludwigshafen selbstverständlich ebenfalls übernehmen. Profitieren Sie vom praktischen Rundum-Service Ihres zuverlässigen regionalen Anbieters von Photovoltaik-Anlagen. Wir verwenden ausschließlich Produkte namhafter Hersteller und konzipieren die Photovoltaik-Anlagen mit modernsten Stromspeichern und Solarmodulen.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='Solaranlagen-Beratung vom Experten bei Ludwigshafen'
                text='In klimafreundliche Solartechnik zu investieren ist mit Sicherheit ein gute Entscheidung. Wenn Sie dabei nichts dem Zufall überlassen wollen, ist unsere kompetente Solaranlagen-Beratung in Ludwigshafen die optimale Lösung. Unsere Experten werden die Solaranlage individuell konfigurieren und dabei die örtlichen Gegebenheiten ebenso berücksichtigen wie Ihren Energiebedarf. Die Beratung schließt auch Wirtschaftlichkeitsberechnungen ein, mit denen die Frage: Lohnt sich PV?, objektiv beantwortet wird. Erfahrungsgemäß ist es empfehlenswert, einen zukünftig wachsenden Energiebedarf bei der Planung der Solaranlage in Ludwigshafen zu antizipieren – dann sind Sie bestens vorbereitet, um später eine Wärmepumpe mit Solarstrom zu betreiben oder Ihr E-Auto mit Sonnenstrom aufzuladen.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />


                <SubpageLandingpages title='Konfigurieren Sie Ihre eigene Energiewende – Lumix Solar liefert Ihnen:'
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


export default SolaranlageLudwigshafen
