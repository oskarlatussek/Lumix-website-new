import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import Förderung from '../components/section-element/Förderung';


const Rendite: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-full">
                <Hero image='/Fotos/compressed/DSCF6789.jpg' title='Lohnt sich PV?' text='Die Solartechnologie fasziniert durch Ihre Wirtschaftlichkeit und Umweltverträglichkeit.' />

                <div className='flex flex-col justify-center space-y-10 py-20 px-2 sm:px-10 w-full max-w-screen-2xl'>

                    <div className={`w-full flex flex-col space-y-5 sm:space-y-10 max-w-4xl bg-gray-100 rounded-xl p-2 sm:p-5`}>
                        <p className='text-3xl sm:text-4xl xl:text-5xl text-[#215250]'>Die Rendite hängt von vielen Faktoren ab</p>
                        <p className='text-justify text-sm sm:text-base'>
                            Eine Photovoltaikanlage lohnt sich fast immer. Allerdings gibt es mehrere Stellschrauben, die die Rendite einer Anlage maßgeblich beeinflussen. Zunächst sind Grundvoraussetzungen wie verfügbare Dachflächen, der durchschnittliche Energiebedarf des Gebäudes und natürlich auch das zur Verfügung stehende Budget zu berücksichtigen. Hierbei gibt es oftmals nur wenig Anpassungsmöglichkeiten. Bei der Anlage wiederum gibt es eine Vielzahl von Möglichkeiten, um den finanziellen Ertrag bzw. die Ersparnis zu maximieren.
                        </p>
                    </div>

                    <img src="/Graphiken Website/Strompreisentwicklung.svg" className='self-end w-full max-w-4xl' />

                    <div className={`w-full flex flex-col space-y-5 sm:space-y-10 max-w-4xl bg-gray-100 rounded-xl p-2 sm:p-5`}>
                        <p className='text-3xl sm:text-4xl xl:text-5xl text-[#215250]'>Wie trägt die EEG-Einspeisevergütung zur Rendite einer Anlage bei?</p>
                        <p className='text-justify text-sm sm:text-base'>
                            Nach dem Erneuerbare Energien Gesetz (EEG) sind die Netzbetreiberunternehmen dazu verpflichtet, den von einer PV-Anlage produzierten Strom abzunehmen und den zu diesem Zeitpunkt gültigen EEG-Vergütungssatz zu entrichten. Dabei bleibt der Vergütungssatz zum Zeitpunkt der Anlageninbetriebnahme fix und läuft für 20 Jahre.
                            Die Einspeisevergütung hat sich in den letzten 20 Jahren von fast 60 Cent pro kWh auf nur noch knapp 8 Cent bei kleinen Anlagen bis zu 10kWp geschmälert. Dieser negative Trend ist zwar schade, allerdings werden PV-Anlagen deshalb noch lange nicht lukrativ. Durch die sinkende Anschaffungskosten und dem Paradigmenwechsel zum Eigenverbrauch als Renditetreiber, sind PV-Anlage in Zukunft weiterhin ein tolles Investment.
                            Durch die rasant steigenden Stromkosten wird die Ersparnis durch Kostenvermeidung zum Hautfaktor bei der Nutzung von Solarstrom. Bei Bezugskosten von 30 Cent pro kWh und umgerechnet 7 – 11 Cent pro kWh über eine Laufzeit von 25 Jahren, ergeben sich Kostenersparnisse von bis zu 23 Cent pro kWh, was im vergleich zur Einspeisevergütung von aktuell 8 Cent eine fast doppelt so hohe Rendite bedeutet. Allerdings lassen sich bei dieser kleinen Anlagengröße ohne Batteriespeicher nur schwer Eigenverbrauchszahlen von über 30% erreichen, weshalb eine solche Anlage trotzdem auf die EEG-Einspeisevergütung angewiesen wäre.
                        </p>
                    </div>

                    <img src="/Graphiken Website/Eigenverbrauchsanteil.svg" className='self-end w-full max-w-4xl' />
                </div>


                <div className={`w-full flex flex-col items-center text-center space-y-10 py-20 px-2 sm:px-10`}>
                    <p className='text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight'>Förderungen für Photovoltaikanlagen und Batteriespeicher</p>

                    <Förderung title='Bundesebene' text='Auf Bundesebene werden Photovoltaikanlagen seit 2000 durch die EEG-Einspeisevergütung gefördert. Das EEG verpflichtet die Netzbetreiber, Solarstrom abzunehmen und den aktuellen Vergütungssatz für 20 Jahre dafür zu entrichten. Bundesweit werden Photovoltaikanlange zusätzlich durch das Kreditförderprogramm 270 der KfW gefördert. Mit Kreditlaufzeiten zwischen 5 und 20 Jahren und im günstigen Fall mit einem effektiven Jahreszins von 0,55 sind diese Förderkredite sehr sinnvoll. Sie können über die Hausbank beantragt' />
                    <Förderung title='Länderebene' text='In Baden-Württemberg wurde im Jahr 2021 das Förderprogramm “Netzdienliche Batteriespeicher” aufgelegt, welches aber aufgrund hoher Nachfrage bis auf Weiteres erschöpft ist. Daher können derzeit keine neuen Anträge mehr gestellt werden. Es bleibt abzuwarten, ob im Laufe des Jahres neue Mittel bereitgestellt werden. Weiterhin gibt es auf Länderebene verschiedenste Förderprogramme der einzelnen Bundesländer, die aber meist auf kommunaler Ebene zum Tragen kommen. Dabei werden Gelder vom Land bereitgestellt und durch kommunal aufgelegte Förderprogramme verteilt. Somit ist die Fördersituation je nach Anlagenstandort oft sehr unterschiedlich.' />
                    <Förderung title='Kommunale Ebene' text='Auf kommunaler Ebene gibt es verschiedenste Förderprogramme die ja nach Anlagestandort stark variieren können. Generell sind Zuschüsse zwischen 100€ und 200€ pro kWp zu erwarten, vorausgesetzt, dass die jeweiligen Fördermittel nicht schon erschöpft sind. Kunden können sich über Ihre  Fördersituation im Internet oder direkt bei der Kommune informieren. Zum Beispiel gibt es für die Stadt Mannheim einen Zuschuss in Form eines Solar Bonus in Höhe von 120 Euro pro kWp installierte Leistung, maximal 1.200 Euro pro Anlage.' />
                    <Förderung title='Speicher' text='Batteriespeicher werden, ähnlich wie PV-Anlagen, hauptsächlich auf lokaler Ebene gefördert. Hier ist allerdings Vorsicht geboten, da die Bedingungen der Förderungen teilweise eine maximale Netzeinspeisung von 50% der Anlagennennleistung beinhalten, was bei hoher Einstrahlung in den Sommermonaten oftmals dazu führt, dass die Einspeiseerlöse auf einem niedrigen Niveau gedeckelt sind. Wir empfehlen daher eine genaue Abwägung, ob sich die Inanspruchnahme der etwaigen Förderung auch wirklich lohnt.' />
                    <Förderung title='Wallboxen' text='Wallboxen wurden seit 2021 bundesweit durch das Förderprogramm KfW440 „Ladestationen für Elektroautos – Wohngebäude“  mit einem Zuschuss gefördert. Allerdings wurde dieses Förderprogramm ab dem 27.10.2021 ausgesetzt und es können bis auf Weiteres keine neuen Anträge mehr gestellt werden, da alle bereitgestellten Mittel bereits erschöpft wurden. Es bleibt abzuwarten, ob das Programm neu aufgelegt wird und neue Mittel bereitgestellt werden. Abgesehen von Förderungen für Ladestationen in Wohngebäude, gibt es die Förderungen KfW 439 und KfW 441 die gewerbliche sowie der kommunale Ladeinfrastruktur weiterhin bezuschussen.' />
                </div>

                <div className={`w-full flex flex-col items-center text-center space-y-5 py-20 px-5 sm:px-10`}>
                    <p className='text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight text-[#215250]'>Die PV bei Steuern und Finanzamt</p>
                    <p className='max-w-4xl'>
                        Viele unserer Kunden sind durch die verschiedenen steuerlichen Regelungen etwas verunsichert. Wobei es in Grunde nicht viel zu beachten gibt:
                        In der Realität gibt Gerne helfen wir Ihnen einen klaren Blick auf die Thematik zu erlangen und zeigen, warum PV-Anlagen sogar helfen können, Steuern zu sparen!
                    </p>
                </div>


                <Contact />

            </div>
        </>
    )
}


export default Rendite
