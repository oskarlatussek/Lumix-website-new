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


const SolaranlageMainz: NextPage = () => {

    return (
        <>
        <HelmetProvider>
            <Helmet>
              <title>Solaranlage in Mainz │ Lumix Solar GmbH</title>
              <meta
                name="description"
                content="Solaranlagen Mainz: moderne Solartechnik 🌞 Maßgeschneiderte Lösungen ✔️ Regionaler Anbieter ✔️ Liefergarantie ➡️ Jetzt informieren❕"/>
            </Helmet>
            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

                    <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                        <h3 className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}>
                            Solaranlage – Strom in Mainz selbst erzeugen
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-44 animate__animated animate__fadeIn animate__delay-3s">
                            Mit einer Solaranlage von Lumix Solar produzieren Sie Ihren Strom in Mainz auf dem eigenen Dach oder an der Fassade. Informieren Sie sich über die Möglichkeiten der modernen Solartechnik und reduzieren Sie dauerhaft Ihre Energiekosten.
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

                <SubpageLandingpages title='Solaranlage in Mainz – Ihr regionaler Partner Lumix Solar:'
                    bullet1='Klimaneutraler Solarstrom'
                    bullet2='Reduzierung der Stromrechnung'
                    bullet3='Keine Gefahr von Blackouts'
                    bullet4='Maximale Eigenverbrauchsquote'
                    bullet5='Leistungsstarke Stromspeicher'
                    bullet6='Individuelle Energielösungen'
                    bullet7='Zuverlässige Liefergarantien'
                    bullet8='Persönliche Beratung'
                    image='/Images/privat.webp' 
                    left />

                <div className="flex items-center w-full justify-center py-10">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
                        Mit den hochwertigen Solaranlagen von Lumix Solar werden Sie in Mainz endlich unabhängig von den Stromkonzernen und deren mehr oder weniger willkürlichen Strompreiserhöhungen. Wenn Sie sich dafür entscheiden, eine Solaranlage zu kaufen, generieren wir eine individuelle Lösung, die sich an Ihrem Verbrauch und den örtlichen Gegebenheiten in Mainz orientiert. Unsere Solarexperten werden beispielsweise die Dachneigung und -ausrichtung berücksichtigen und Ihnen bei der Konfiguration der Anlage eine geeignete Montageoption vorschlagen.
                    </p>
                </div>

                <Subpage title='Solaranlage fachgerecht planen lassen   '
                text='Eine Solaranlage mit Speicher ermöglicht Eigenverbrauchsquoten von bis zu 80 Prozent, sodass Sie in Mainz von einer optimalen Wirtschaftlichkeit Ihrer PV-Anlage profitieren und Ihren Strombedarf fast vollständig mit dem klimafreundlichen Sonnenstrom decken können. Unser fachkompetentes Team unterstützt Sie bereits bei der Planung der Solaranlage – als renommierter Fachbetrieb für Solartechnik erarbeiten wir sowohl für Privathaushalte als auch für Gewerbebetriebe in Mainz maßgeschneiderte Energiekonzepte und sorgen für eine perfekte Montage sowie Wartung der Photovoltaik-Anlagen.'
                image='/Images/produkte.webp'
                link='/produkte' />

                <div className="flex items-center w-full justify-center py-10">
                    {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full"><span className="drop-shadow-none">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-none"> für alle!</span></p>
                </div>

                <Subpage title='Individuelle Solaranlagen-Beratung in Mainz'
                text='Unser Service im Raum Mainz beginnt mit der kompetenten Solaranlagen-Beratung, denn dies ist die Voraussetzung dafür, dass sich die Investition auszahlt. Im Rahmen der Solaranlagen-Beratung führen wir Wirtschaftlichkeitsberechnungen basierend auf den Verbrauchsdaten und der möglichen Solaranlagen-Konfiguration durch und können Ihnen somit die berechtigte Frage: Lohnt sich PV?, objektiv beantworten.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />

                <Subpage title='Einsparpotenziale mit Zukunftsperspektive '
                text='Im Durchschnitt amortisiert sich die Anlage nach weniger als zehn Jahren. Die restlichen 15 oder mehr Jahre Nutzungsdauer macht sich Ihre Anlage dann doppelt bezahlt: Sie erhalten eine Vergütung für Strom, den Sie ins öffentliche Stromnetz einspeisen und reduzieren Ihre eigene Stromrechnung auf ein Minimum. Damit Sie mit Ihrer Solaranlage in Mainz die maximalen Effekte erzielen, begleiten wir Ihr Projekt mit einer umfassenden Beratung, übernehmen die Planung und die Montage, aber auch die Wartung sowie anfallende Reparaturen. Sie erhalten also alle Leistungen für Ihre Solaranlage aus einer Hand und können sich jederzeit an Ihren persönlichen Ansprechpartner in der Nähe von Mainz wenden.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                />

                
                <Subpage title='Solartechnik – aktiver Klimaschutz in Mainz'
                text='Die Solartechnik wurde in den letzten Jahren immer weiter verbessert, sodass Sie mit Ihrer Solaranlage in Mainz einen nicht unerheblichen Beitrag zur Bekämpfung des Klimawandels leisten. Dank leistungsstärkerer Stromspeicher, die darüber hinaus mittlerweile wesentlich günstiger sind, erreicht man hohe Eigenverbrauchsquoten. Haushalte rund um Mainz werden damit in die Lage versetzt, ihren Stromverbrauch vollständig mit der Solaranlage zu decken. Das bedeutet außerdem, dass Sie nicht von Stromausfällen aufgrund überlasteter Stromnetze betroffen sind und ein nie dagewesenes Maß an Unabhängigkeit genießen. Lumix Solar konfiguriert Solaranlagen in Mainz aus hochwertigen Produkten, denn die Qualität der Stromspeicher und Solarmodule hat großen Einfluss auf die Effizienz und Langlebigkeit der PV-Anlage. Wagen Sie jetzt den entscheidenden Schritt und investieren Sie in Ihre eigene kleine Energiewende.'
                image='/Images/gewerbe.webp'
                link='/gewerbe'
                left />


                <SubpageLandingpages title='Lumix Solar – Experten für:'
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


export default SolaranlageMainz
