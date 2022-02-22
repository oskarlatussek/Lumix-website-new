import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';


const Gewerbe: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-full">
                <Hero image="/Images/nuno-marques-0GbrjL3vZF4-unsplash.jpg" title="Gewerbliche Anlagen" text="Neben privaten Anlagen planen und montieren wir auch gewerbliche Anlagen mit und ohne Batteriespeicher mit Leistungen auch über 300 KWp." />

                <div id="first_section" className={`w-full flex flex-col lg:flex-row space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 py-20 px-2 sm:px-10 text-justify text-lg items-center max-w-screen-2xl`}>

                    <p className='w-full lg:w-1/2 px-5'>
                        Mit einer PV Anlage auf Ihren gewerblich Bauten können Sie Ihren selbst produzierten Strom direkt nutzen und können somit erhebliche Stromkosten sparen. Sie sollten keine geeignete Dachfläche ungenutzte lassen, denn diese bieten Ihnen jeden Tag das Potenzial, Stromkosten zu sparen in einem Umfeld immer weiter steigender Preise. Die durchschnittlichen Stromkosten für Gewerbetreibende liegen bei deutlich über 23 Cent pro KWh, mit einer stark steigenden Tendenz. Mit einer größeren Photovoltaikanlage können Sie Strom bereits für 4-9 Cent pro KWh produzieren. Dieser kurze Vergleich macht deutlich, dass bis weit über die Hälfte der immer weiter steigenden Stromkosten durch eine PV Anlage eingespart werden können.<br />
                        <br />Der Eigenverbrauch von Solarstrom wird in der Kombination einem Batteriespeicher immer interessanter, da hier deutlich höhere Autarkiegrade erreicht werden können, was bedeutet, dass weniger des teuren Netzstroms bezogen werden muss.
                    </p>
                    <p className='p-5 bg-gray-100 rounded-xl w-full lg:w-1/2'>
                        <b>Bei uns erhalten Sie die volle Unterstützung bei Ihrem Solarprojekt! Jede gewerbliche Anlage ist individuell und folgende Punkte werden wir zusammen mit Ihnen ausarbeiten:</b><br />

                        <br /><b>Ihre tatsächlichen Stromkosten:</b>
                        <br />Mit dieser Angabe können wir feststellen, wie hoch der Eigenversorgungsgrad bei Ihnen bestenfalls sein kann.<br />
                        <br /><b>Ihr Lastprofil:</b>
                        <br />Wir analysieren, wann Ihre Hauptverbrauchszeiten sind und erstellen eine Lastenkurve.<br />
                        <br /><b>Anlagengröße und Ausrichtung:</b>
                        <br />Wir legen zusammen mit Ihnen fest, wie groß die Solaranlage werden sollte und wählen den besten Montageort für die Solarmodule, Wechelrichtereinheiten und Speicher aus. Je nach Lastprofil ist zu überlegen, ob eine reine Südausrichtung oder eine Ost-West-Ausrichtung sinnvoller ist, z.B. wenn sie vor allem morgens und abends einen hohen Verbrauch haben.<br />
                    </p>

                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/pexels-kindel-media-9799756 Kopie.jpg' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solar für Parkplätze und Carports</h2>

                        <p className='text-justify'>
                            <b>Parkplätze bieten einen erstklassigen Standort für Photovoltaikanlagen, da so eine ohnehin schon versiegelte Fläche zur nachhaltigen Stromerzeugung genutzt werden kann.</b><br />
                            <br />Eine Photovoltaikanlage über einem Parkplatz bietet gleich mehrere Vorteile, die durch die gleiche Lösungen erreicht werden. Zunächst kann die durch den Parkplatz versiegelte Fläche genutzt werden, um nachhaltig Strom mit der Photovoltaikanlage zu produzieren. Durch die steigende Nachfrage an Ladestationen für Elektrofahrzeuge, kann der somit erzeugte Storm direkt für das Laden von E-Fahrzeugen genutzt werden. Zusätzlich bietet eine Anlage weiteren Schutz vor Regen und Sonne, für die darunter abgestellten Fahrzeuge.<br />
                            <br /><b>Besondere Regelung in Baden-Württemberg: </b>
                            <br />Im §8b des Klimaschutzgesetzes wurde eine PV-Pflicht für neue Parkplätze ab 2022 geregelt.
                            In Baden-Württemberg ist somit seit dem 1. Januar 2022 jeder der einen neuen offenen Parkplatz baut, dazu verpflichtet, eine Photovoltaik-Anlage zu installieren.<br />
                            <br /><b>Wir unterstützen Sie bei der Errichtung eine Photovoltaikanlage über offenen Parkplätzen!</b>
                        </p>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Photovoltaik auf landwirtschaftlich genutzten Flächen</h2>

                        <p className='text-justify'>
                            <b>Freilandanlagen und Anlagen auf landwirtschaftlich genutzten Flächen (Agri-PV) bieten eine ökologische Möglichkeit der Doppelnutzung von Freiflächen.</b><br />

                            <br />Photovoltaikanlagen auf Freiflächen und auf landwirtschaftlich genutzten Flächen haben das Potenzial, der Energiewende ein neues Stromerzeugungsprofil hinzufügen. Durch die neue Regelungen die für das  EEG-Förderung ab Ostern in Kraft treten sollen, werden PV-Anlagen auf landwirtschaftlichen Flächen durch das EEG gefördert werden.<br />

                            <br />Agri-PV bietet vielseitige Vorteile und ermöglicht die Nutzung von Ackerflächen für die Energiegewinnung. Dabei werden durch eine senkrechte Ost-West-Ausrichtung der Modulreihen die Lastspritzen in den Morgen- und Abendstunden erreicht. Dabei werden bifaciale PV-Module senkrecht in Reihen auf Stahlgestelle montiert. Diese bestehen, ähnlich wie bei einer herkömmlichen Zaunanlage, aus Pfosten und Riegeln.
                            Die Reihenzwischenräume sind variabel mit mindestens 8 Meter Abstand, um Verschattungen vorzubeugen. Dies ermöglicht vielfältige landwirtschaftliche Nutzungskonzepte, mit bis zu 90% der Solarparkfläche, die weiterhin durch die Landwirtschaft genutzt werden kann. Es bieten sich unterschiedlichste Nutzungsmodelle der Grünlandfläche an, z.B.  als Mähwiesen, für die Weidewirtschaft oder als Ackerflächen.<br />

                            <br /><b>Wir unterstützen Sie gerne in der Gestaltung und Umsetzung einer Freiland-Photovoltaikanlage! Wir planen Ihre Anlage nach Ihren Bedürfnissen und kümmern uns um Material, Montage und Inbetriebnahme.</b>
                        </p>
                    </div>

                    <ImageSection image='/Images/thomas-coker-Vza4joUQGgY-unsplash.jpg' />
                </div>

                <Contact />

            </div>
        </>
    )
}


export default Gewerbe
