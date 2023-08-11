import type { NextPage } from 'next'
import { IoIosRocket } from 'react-icons/io';
import { BsQuestionLg } from "react-icons/bs"

import Contact from '../components/general/Contact';
import TeamCard from '../components/section-element/TeamCard';
import ImageSection from '../components/section/ImageSection';
import Stelle from '../components/section-element/Stelle';
import Link from 'next/link';

const tasksHeizungsbauer = [
    "Bereichsverantwortlichkeit für den neuen Geschäftszweig „Wärmepumpen“",
    "Aufbau deines neuen Verantwortlichkeitsbereiches",
    "Installation und Inbetriebnahme von Wärmepumpen in Privathaushalten und Gewerbegebäuden",
    "Wartung und Reparatur bestehender Anlagen",
    "Kundenberatung und - betreuung rund um das Thema Wärmepumpen",
    "Zusammenarbeit mit unserem engagierten Team, um Projekte erfolgreich umzusetzen"
]

const qualificationsHeizungsbauer = [
    "Abgeschlossene Ausbildung als Heizungsbauer (m/w/d) oder vergleichbare Qualifikation",
    "Erfahrung in der Installation und Wartung von Heizungsanlagen, idealerweise mit Schwerpunkt auf Wärmepumpen",
    "Technisches Verständnis und handwerkliches Geschick",
    "Freundliches Auftreten und sehr gute kommunikative Fähigkeiten",
    "Motivation, Neues zu lernen und an innovativen Lösungen mitzuwirken",
    "Selbstständige, lösungsorientierte Arbeitsweise mit Verantwortungsbewusstsein",
    "Führerschein Klasse B"
]

const tasksElektromeister = [
    "Bereichsverantwortlichkeit für die AC-Montagen von Photovoltaikanlagen und Ladeparks",
    "Fachliche Führung der unterstellten Mitarbeiter",
    "AC-seitige Montage und Inbetriebnahme von Photovoltaikanlagen, Stromspeichern, Energiemanagementsystemen und Ladeinfrastruktur",
    "Wartung und Reparatur bestehender Anlagen",
    "Zusammenarbeit mit unserem engagierten Team, um Projekte erfolgreich umzusetzen"
]

const qualificationsElektromeister = [
    "Du bist Elektromeister:in",
    "Idealerweise Erfahrung im Bereich Photovoltaik",
    "Führerschein Klasse B",
    "Freundliches Auftreten und sehr gute kommunikative Fähigkeiten",
    "Motivation, Neues zu lernen und an innovativen Lösungen mitzuwirken",
    "Selbstständige, lösungsorientierte Arbeitsweise mit Verantwortungsbewusstsein"
]

const tasksSachbearbeiter = [
    "Durchführung und Koordination von Netzanmeldungen für Photovoltaikanlagen",
    "Erfassung und Verwaltung aller relevanten Daten und Dokumente für die Netzanmeldung",
    "Kommunikation und Abstimmung mit dem Netzbetreiber bezüglich technischer Anforderungen und Vertragsmodalitäten",
    "Erstellung und Prüfung von Antragsunterlagen und erforderlichen Dokumentationen",
    "Unterstützung bei der Abwicklung von Netzanschlussverträgen und dem Einholen von Genehmigungen",
    "Bearbeitung von Rückfragen und Anliegen seitens des Netzbetreibers oder Kund:innen",
    "Pflege von Datenbanken und Systemen zur Dokumentation und Verfolgung von Netzanmeldungen",
    "Mitwirkung bei der Optimierung interner Prozesse und Abläufe im Bereich der Netzanmeldungen"
]

const qualificationsSachbearbeiter = [
    "Dein Interesse an erneuerbaren Energien und Photovoltaikanlagen ist riesig",
    "Bestenfalls hast Du eine abgeschlossene Aus- und Weiterbildung und/oder praktische Erfahrung im kaufmännischen Bereich – andernfalls bringst Du viel bringst Motivation und Lernbereitschaft mit",
    "Selbst bei einer Vielzahl laufender Vorgänge können wir auf Deinen Überblick über die nötigen Aufgaben und Fristen als strukturiertes Organisationstalent zählen",
    "Du zeichnest Dich durch eine selbstständige und eigenverantwortliche Arbeitsweise aus und kannst Aufträge klar kommunizieren",
    "Der Umgang mit gängigen MS-Office Programmen ist für Dich kein Problem"
]

const tasksAusbildung = [
    "Du arbeitest mit jungen Menschen, die den Energiemarkt revolutionieren möchten",
    "Du lernst, wie ein Startup funktioniert, sogar ohne Investor",
    "Du bekommst tiefe Einblicke in alle relevanten Unternehmsabläufe",
]

const qualificationsAusbildung = [
    "Du lebst eine Hands-on Mentalität und willst mit deiner Arbeit wirklich etwas bewegen",
    "Du entwickelst eigene Ideen, die du aktiv mit einbringst",
    "Selbst bei einer Vielzahl laufender Vorgänge können wir auf Deinen Überblick über die nötigen Aufgaben und Fristen als strukturiertes Organisationstalent zählen",
    "Du zeichnest Dich durch eine selbstständige und eigenverantwortliche Arbeitsweise aus und kannst Aufträge klar kommunizieren",
    "Der Umgang mit gängigen MS-Office Programmen ist für Dich kein Problem",
]

const tasksAssociate = [
    "Du entscheidest zusammen mit dem Team, wo unsere Reise hingeht",
    "Du arbeitest mit jungen Menschen, die den Energiemarkt revolutionieren möchten",
    "Du lernst, wie ein Startup funktioniert, sogar ohne Investor",
    "Du verantwortest Projekte, die direkt auf unsere Unternehmensziele einzahlen",
    "Du arbeitest auf Augenhöhe mit unseren Gründern zusammen"
]

const qualificationsAssociate = [
    "Du lebst eine Hands-on Mentalität und willst mit deiner Arbeit wirklich etwas bewegen",
    "Du entwickelst eigene Ideen, die du aktiv mit einbringst",
    "Selbst bei einer Vielzahl laufender Vorgänge können wir auf Deinen Überblick über die nötigen Aufgaben und Fristen als strukturiertes Organisationstalent zählen",
    "Du zeichnest Dich durch eine selbstständige und eigenverantwortliche Arbeitsweise aus und kannst Aufträge klar kommunizieren",
    "Der Umgang mit gängigen MS-Office Programmen ist für Dich kein Problem",
]

const tasksExpansion = [
    "Du hilfst dabei unser Geschäftsmodell in neuen Märkten und Regionen zu skalieren",
    "Du identifizierst spannende Märkte und potenzielle Wachstumsregionen",
    "Du entwickelst Strategien zum Markteintritt und planst Vertriebsaktivitäten",
    "Du arbeitest auf Augenhöhe mit unseren Gründern zusammen"
]

const qualificationsExpansion = [
    "Du lebst eine Hands-on Mentalität und willst mit deiner Arbeit wirklich etwas bewegen",
    "Du entwickelst eigene Ideen, die du aktiv mit einbringst",
    "Selbst bei einer Vielzahl laufender Vorgänge können wir auf Deinen Überblick über die nötigen Aufgaben und Fristen als strukturiertes Organisationstalent zählen",
    "Du zeichnest Dich durch eine selbstständige und eigenverantwortliche Arbeitsweise aus und kannst Aufträge klar kommunizieren",
    "Der Umgang mit gängigen MS-Office Programmen ist für Dich kein Problem",
]

const tasksMarketing = [
    "Du bist Verantwortlich für unsere Marketingkampagnen und unseren Branding-Auftritt",
    "Du optimierst bestehende Kampagenen und erstellst Neue",
    "Du hast alle Kennzahlen im Blick und reagierst auf sich ändernde Anforderungen",
    "Du optimierst unsere Außendarstellung bei Kunden und Bewerbern",
    "Du erstellst Werbematerial und designst Unternehmesdokumente"
]

const qualificationsMarketing = [
    "Du lebst eine Hands-on Mentalität und willst mit deiner Arbeit wirklich etwas bewegen",
    "Du entwickelst eigene Ideen, die du aktiv mit einbringst",
    "Idealerweise hast du bereits Erfahrung mit Google Ads, Social Ads und Print Ads",
    "Du hast ein Auge für das Detail und weißt was bei unserer Zielgruppen gut ankommt",
    "Du kannst erstklassige Visuals und Texte erstellen, die unsere Botschaft transportieren"
]


const Team: NextPage = () => {

    return (
        <>
            <div className="flex bg-black flex-col items-center max-w-full">
                <div className="w-full h-full flex flex-col space-y-10 justify-center items-center text-center pt-56 sm:pt-56 pb-20 sm:pb-20 p-5 sm:p-10">
                    <h3 className="animate__animated animate__fadeIn">Entdecke deine berufliche Energie und starte jetzt deine Karriere bei Lumix Solar</h3>
                    <p className="pb-10 text-lg sm:text-xl lg:text-3xl leading-tight sm:leading-tight lg:leading-tight text-gray-300 font-medium max-w-5xl animate__animated animate__fadeIn animate__delay-1s">Bist auch du elektrisiert von der Sonne? Dann werde Sonnenheld:in und unterstütze uns dabei, unsere Kunden mit erneuerbaren Energien eine unabhängige und nachhaltige Stromerzeugung zu ermöglichen.</p>
                    <Link href="#stellen">
                        <a className="mb-20 lg:mb-0 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                            <span>Offene Stellen</span>
                            <IoIosRocket />
                        </a>
                    </Link>
                </div>

                <div className='w-full z-10 flex flex-col items-center p-0 sm:p-10 pt-24 sm:pt-24 md:pt-44'>

                    <div className={`image-section-left -mt-44`}>
                        <ImageSection image='/Images/karriere-1.jpg' />

                        <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                            <p className='text-white text-2xl font-bold'><span className='text-5xl'>Willkommen bei Lumix Solar</span><br /><br /> - dem Ort, an dem wir die Welt ein bisschen grüner machen!</p>

                            <p className='text-justfy text-white'>
                                Wir sind ein dynamisches und leidenschaftliches Team von engagierten Expert:innen, die sich für nachhaltige Energie einsetzen. Mit Stolz können wir auf über 500 erfolgreich abgeschlossene Projekte und zahlreiche zufriedene Kund:innen zurückblicken.<br /><br />
                                Bei Lumix Solar dreht sich alles um Teamwork und Zusammenarbeit. Mit unseren vielfältigen Fähigkeiten und unserem geballten Know-how in den Bereichen Photovoltaik, erneuerbare Energien und nachhaltige Technologien arbeiten wir daran, die Grenzen der Solarenergie zu erweitern und innovative Lösungen zu entwickeln.<br /><br />
                                Wir legen großen Wert auf eine inspirierende und freundliche Arbeitsatmosphäre, in der sich jeder Einzelne entfalten und wachsen kann. Wenn du die Welt nachhaltiger gestalten und Teil eines Teams sein möchtest, das mit Begeisterung an einer grünen Zukunft arbeitet, dann bist du bei uns genau richtig. Wir suchen engagierte Talente, die unsere Leidenschaft für erneuerbare Energien teilen und die Chance ergreifen möchten, gemeinsam mit uns Großes zu bewirken.<br /><br />
                                Unsere modernen Büroräume im Herzen des Mannheimer Hafengebiets bieten nicht nur einen inspirierenden Arbeitsplatz, sondern auch eine offene Startup-Kultur, in der Innovation und Teamgeist großgeschrieben werden.<br /><br />
                                Bist du schon elektrisiert? Wir wollen dich als Held:in der Energiewende ganz weit nach oben bringen.<br /><br />
                                Entdecke spannende Möglichkeiten, um bei Lumix Solar durchzustarten. Wir können es kaum erwarten, dich kennen zu lernen!<br /><br />
                            </p>
                        </div>
                    </div>

                </div>

                <Link href="#stellen">
                    <a className="mb-20 lg:mb-0 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                        <span>Offene Stellen</span>
                        <IoIosRocket />
                    </a>
                </Link>

                <div className='w-full z-10 flex flex-col items-center p-0 sm:p-10 pt-24 sm:pt-24 md:pt-44'>

                    <div className={`image-section-right -mt-44`}>
                        <div className='flex flex-col space-y-16 max-w-3xl self-center'>
                            <h3 className='text-4xl xl:text-5xl'>Deine Benefits</h3>
                            {/* <p className='text-white text-2xl font-bold'><span className='text-5xl'>Willkommen bei Lumix Solar</span><br /><br /> - dem Ort, an dem wir die Welt ein bisschen grüner machen!</p> */}

                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Festanstellung in einem zukunftsorientierten Unternehmen:<br /> </b>Bei Lumix Solar bieten wir langfristige Festanstellungen und die Sicherheit, Teil eines Unternehmens zu sein, das die Energiewende vorantreibt.</p>
                            </div>

                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Flache Hierarchien und schnelle Entscheidungswege:<br /> </b>Wir schätzen kurze Kommunikationswege und ermöglichen unseren Teammitgliedern, Ideen einzubringen und schnell Entscheidungen zu treffen.</p>
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Interessante und abwechslungsreiche Projekte:<br /> </b>Bei Lumix Solar arbeitest du an spannenden Projekten in der Solarbranche, die jeden Tag neue Herausforderungen und Möglichkeiten bieten.</p>
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Perspektiven zur persönlichen Entwicklung:<br /> </b>Wir unterstützen die individuelle Weiterentwicklung unserer Mitarbeiterinnen und Mitarbeiter durch regelmäßiges Feedback, Mentoring und gezielte Entwicklungsmöglichkeiten.</p>
                            </div>
                            <div className='flex space-x-5 items-center'>
                                <IoIosRocket className='text-yellow-400 text-2xl flex-none' />
                                <p className='text-white text-base'><b className='text-xl'>Offene Arbeitskultur eines jungen Unternehmens:<br /> </b>Wir pflegen eine offene und dynamische Arbeitskultur, in der frische Ideen willkommen sind und ein Raum für Austausch und Kreativität geschaffen wird.</p>
                            </div>
                        </div>
                        <ImageSection image='/Images/karriere-2.jpg' />
                    </div>

                </div>

                {/* <a href='https://join.com/companies/lumix' target="_blank" className="mb-40 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                    <span>Offene Stellen</span>
                    <IoIosRocket />
                </a> */}
                <div className='flex flex-col items-center px-5 sm:px-10 w-full my-10' id="stellen">
                    <h3 className='text-4xl xl:text-5xl pb-5'>Offene Stellen</h3>
                    <p className='text-white text-center max-w-2xl p-5 text-base md:text-xl pb-20'>Hier findest du unsere offenen Stellen. Bitte schick uns deine Bewerbung an <a href='mailto:karriere@lumix.solar' className='text-yellow-400'>karriere@lumix.solar</a>. Wenn aktuell keine passende Stelle für dich ausgeschrieben ist, kannst du uns auch gerne eine Initiativbewerbung schicken.</p>

                    <div className='flex flex-wrap justify-center gap-5 max-w-screen-xl'>
                        <Stelle title="Heizungsbauer (m/w/d) für Wärmepumpen" type="Vollzeit" tasks={tasksHeizungsbauer} qualifications={qualificationsHeizungsbauer} />
                        <Stelle title="Elektromeister (m/w/d)" type="Vollzeit" tasks={tasksElektromeister} qualifications={qualificationsElektromeister} />
                        <Stelle title="Solar Operations Specialist (m/w/d)" type="Vollzeit | Teilzeit" tasks={tasksSachbearbeiter} qualifications={qualificationsSachbearbeiter} />
                        <Stelle title="Kauffrau für Büromanagement (m/w/d)" type="Ausbildung" tasks={tasksAusbildung} qualifications={qualificationsAusbildung} />
                        <Stelle title="Founders Associate (m/w/d)" type="Praktikum | Werkstudent | Vollzeit" tasks={tasksAssociate} qualifications={qualificationsAssociate} />
                        <Stelle title="Company Expansion (m/w/d)" type="Praktikum" tasks={tasksExpansion} qualifications={qualificationsExpansion} />
                        <Stelle title="Brand & Performance Marketing (m/w/d)" type="Praktikum | Werkstudent | Vollzeit" tasks={tasksMarketing} qualifications={qualificationsMarketing} />
                    </div>
                </div>

                <div className='flex flex-col space-y-16 max-w-4xl self-center px-5 sm:px-10 mt-10 lg:mt-20'>
                    <h3 className='text-4xl xl:text-5xl'>Häufig gestelle Fragen</h3>
                    {/* <p className='text-white text-2xl font-bold'><span className='text-5xl'>Willkommen bei Lumix Solar</span><br /><br /> - dem Ort, an dem wir die Welt ein bisschen grüner machen!</p> */}

                    <div className='flex space-x-5 items-center'>
                        <BsQuestionLg className='text-yellow-400 text-2xl flex-none' />
                        <p className='text-white text-base'><b className='text-xl'>Wen suchen wir?<br /> </b>Wir suchen engagierte und talentierte Mitarbeitende, die sich für erneuerbare Energien und die Gestaltung einer nachhaltigen Zukunft begeistern. Vorkenntnisse sind toll, aber nicht zwingend erforderlich.</p>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <BsQuestionLg className='text-yellow-400 text-2xl flex-none' />
                        <p className='text-white text-base'><b className='text-xl'>Kann ich mich auch initiativ bewerben?<br /> </b>Ja, wir freuen uns über Initiativbewerbungen. Sende uns deine Bewerbungsunterlagen an <a href='mailto:karriere@lumix.solar' className='text-yellow-400'>karriere@lumix.solar</a> und lass uns wissen, für welche Art von Position du dich interessierst. Wir prüfen dann, ob es passende Möglichkeiten für dich gibt.</p>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <BsQuestionLg className='text-yellow-400 text-2xl flex-none' />
                        <p className='text-white text-base'><b className='text-xl'>Welche Bewerbungsunterlagen werden von mir benötigt?<br /> </b>In der Regel benötigen wir nur deinen Lebenslauf und prüfen in einem persönlichen Gespräch ob du zu uns passt. Über ein Anschreiben freuen wir uns natürlich auch!</p>
                    </div>

                </div>

                <Link href="#stellen">
                    <a className="my-20 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                        <span>Offene Stellen</span>
                        <IoIosRocket />
                    </a>
                </Link>

                <div className='w-full flex justify-center h-full bg-white'>
                    <Contact />
                </div>

            </div>
        </>
    )
}


export default Team
