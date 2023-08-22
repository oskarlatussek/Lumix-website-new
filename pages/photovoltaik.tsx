import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';


const Privat: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-full">
                <Hero image='/Images/privat.webp' title='Solar für Zuhause' text='Eigentümer einer Solaranlage zu sein bedeutet zusätzliche Unabhängigkeit von Energieversorgern und gleichzeitig die Flexibilität seinen eigenen Energieverbrauch zu managen.' />


                <div id="first_section" className={`w-full flex flex-col items-center space-y-44 pt-44 px-2 sm:px-10 max-w-screen-2xl`}>

                    <div className='flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-20 xl:space-x-32 space-y-5 lg:space-y-0 w-full'>
                        <img src='/Graphiken/Haus nur PV.svg' className='max-w-sm xl:max-w-md' />

                        <div className='flex flex-col space-y-10 lg:space-y-20 justify-center lg:justify-between items-center grow bg-gray-100 rounded-xl p-2 pt-5 sm:p-5 sm:pt-10'>

                            <div className='flex flex-col space-y-5 sm:space-y-10 items-center text-center'>
                                <p className='text-4xl xl:text-5xl text-[#215250] max-w-2xl text-left sm:text-center'>Die reine Photovoltaik-Anlage</p>
                                <p className='max-w-xl text-justify sm:text-center'>
                                    Der Fokus von Photovoltaikanlagen ohne angeschlossenen Batteriespeicher liegt auf der größtmöglichen Abdeckung des Stromeigenbedarfs. Durch die natürlich begrenzte, schwankende Sonneneinstrahlung ergibt sich folgende näherungsweise Abdeckung im Tagesverlauf.
                                </p>
                            </div>

                            <img src="/Graphiken/Lastkurve 2.svg" className='bg-white max-w-2xl rounded-lg w-full hover:scale-[1.03] transition duration-200 ease-linear' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-20 xl:space-x-32 space-y-5 lg:space-y-0 w-full'>
                        <img src='/Graphiken/Haus mit Batterie.svg' className='max-w-sm xl:max-w-md' />

                        <div className='flex flex-col space-y-10 lg:space-y-20 justify-center lg:justify-between items-center grow bg-gray-100 rounded-xl p-2 pt-5 sm:p-5 sm:pt-10'>

                            <div className='flex flex-col space-y-5 sm:space-y-10 items-center'>
                                <p className='text-4xl xl:text-5xl text-[#215250] max-w-2xl text-left sm:text-center'>PV-Anlage in Kombination mit Batteriespeicher</p>
                                <p className='max-w-xl text-justify sm:text-center'>
                                    In Kombination mit einem geeignet großen Batteriespeicher kann der über den Tag produzierte Strom auch über Nacht zum Eigenverbrauch genutzt werden. Zusätzlich lassen sich auch Leistungsspitzen glätten wodurch eine Abdeckung des Eigenbedarfs von bis zu 80% erreicht werden kann.
                                </p>
                            </div>

                            <img src="/Graphiken/Lastkurve 3.svg" className='bg-white max-w-2xl rounded-lg w-full hover:scale-[1.03] transition duration-200 ease-linear' />
                        </div>
                    </div>


                    <div className='flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-20 xl:space-x-32 space-y-5 lg:space-y-0 w-full'>

                        <div className='flex flex-col space-y-10 lg:space-y-20 justify-center w-full lg:justify-between items-center grow bg-gray-100 rounded-xl p-2 sm:p-5 sm:py-10'>

                            <div className='flex flex-col space-y-5 sm:space-y-10 items-center text-center'>
                                <p className='text-4xl xl:text-5xl text-[#215250] max-w-2xl text-left sm:text-center'>PV-Anlage in Kombination mit Batteriespeicher und Elektrofahrzeug</p>
                                <p className='max-w-xl text-justify sm:text-center'>
                                    Das regelmäßige Laden von Elektrofahrzeugen mit dem eigenen Sonnenstrom schafft ein ganzheitliches und nachhaltiges System. Jedoch sollte der zusätzliche Strombedarf in die Kaufentscheidung von Batteriespeichern mit einbezogen werden, um eine ideale Nutzung des produzierten Stroms sicherzustellen.
                                </p>
                            </div>
                        </div>

                        <img src='/Graphiken/Haus mit Auto.svg' className='max-w-lg xl:max-w-2xl pb-5 lg:pb-0' />

                    </div>

                </div>

                <div className='flex flex-col justify-center space-y-10 pt-44 pb-20 px-2 sm:px-10 w-full max-w-screen-2xl'>

                    <div className={`w-full flex flex-col space-y-5 sm:space-y-10 max-w-4xl bg-gray-100 rounded-xl p-2 sm:p-5`}>
                        <p className='text-3xl sm:text-4xl xl:text-5xl text-[#215250]'>Betrieb von Wärmepumpen und Klimaanlagen mit der Solaranlage</p>
                        <p className='text-justify text-sm sm:text-base'>
                            Durch steigende Rohstoffpreise und dem geplanten Auslaufen von ölbetrieben Heizungen werden Wärmepumpensysteme in Kombination mit erneuerbarem Strom langfristig zur Standardlösung für Gebäudeheizsysteme. Auch in den warmen Monaten werden in Europa Klimageräte immer beliebter.
                            Vor allem der Betrieb einer Klimaanlage mit dem eigenen Solarstrom lohnt sich, da sich die Leistungsspitze der PV-Anlage und die Hauptbetriebszeit des Klimageräts zeitlich decken und so der produzierte Strom direkt genutzt werden kann.
                            Auch eine Wärmepumpe kann in den Wintermonaten durch die PV-Anlage unterstützt werden. Da eine Solaranlage aber nur ca. 30% ihrer Stromerzeugung in den Wintermonaten generiert, kann eine Wärmepumpe realistischer Weise nicht komplett durch eine PV-Anlage betrieben werden. Dennoch sparen Sie bares Geld, da Sie durch eine Anlage den Bezug von teurem Netzstrom minimieren können.
                        </p>
                    </div>

                    <img src="/Graphiken/Autarkiegrade.svg" className='self-end w-full max-w-4xl' />

                    <div className={`w-full flex flex-col space-y-5 sm:space-y-10 max-w-4xl bg-gray-100 rounded-xl p-2 sm:p-5`}>
                        <p className='text-3xl sm:text-4xl xl:text-5xl text-[#215250]'>Autarkie und Notstromversorgung</p>
                        <p className='text-justify text-sm sm:text-base'>
                            Autarkie und Unabhängigkeit in der Stromversorgung werden für viele unserer Kunden ein immer wichtigerer Faktor. Dabei spielt die PV-Anlage eine zentrale Rolle, da sie die maßgebliche Stromertragsquelle darstellt und eine Netzbetreiber-unabhängige Stromversorgung unterstützt. Mit Batteriespeicher können bereits heute Autarkiegrade bis zu 80% erreicht werden, was bedeutet, das bis zu 80% des genutzten Strom aus der Photovoltaikanlage stammt.
                            Generell gilt, dass bei einem festgelegten Stromverbrauch, der Autarkiegrad zum Großteil durch die Anlagen- und Batteriespeichergröße bestimmt wird. Allerdings ist dabei die Wirtschaftlichkeit zu beachten, da eine Verdoppelung der Speicherkapazität nicht gleich ein Verdoppelung des Autarkiegrades bedeutet. Wir helfen Ihnen dabei, alle individuellen Faktoren Ihres Verbrauchs und der örtlichen Gegebenheiten in Ihre Entscheidung mit einfließen zu lassen.
                        </p>
                    </div>
                </div>


                {/* <div className={`w-full flex flex-col items-center text-center space-y-10 py-20 px-5 sm:px-10`}>
                    <p className='text-5xl max-w-5xl leading-tight'>Moderne Anlagenüberwachung und Steuerung</p>
                    <p className='max-w-4xl'>
                        Bei einer modernen PV-Anlage haben Sie die Möglichkeit, die anlagenbezogenen Daten abzurufen, zu vergleichen und zu analysieren. Dabei ist eine simple Anlagenüberwachung meist schon durch den Wechselrichter und die damit verbundene Überwachungsinfrastruktur möglich. Zusätzlich gibt es verschiedene Möglichkeiten, eine spezifischere Überwachung durch zusätzliche Bauteile zu integrieren.
                        Die Daten sind ganz einfach über Smartphone Apps oder online auf den Portalen der Anbieten ersichtlich.
                        Auf diese Weise, kann der aktuelle Stromfluss sogar auf der Ebene einzelner Verbraucher zeitgenau erfasst werden. Das bietet unter anderem die Möglichkeit, Ihren Stromverbrauch individuell nach der Sonneneinstrahlung und anderen relevanten Faktoren zu planen, um somit den Eigenverbrauch noch weiter zu erhöhen.
                        Zusätzlich ergibt sich die Möglichkeit, über mögliche Störungen per E-Mail oder SMS sofort informiert zu werden, damit umgehend Maßnahmen zur Fehlerbeseitigung veranlassen werden können und Sie keine längeren Anlagenausfälle in Kauf nehmen müssen, die wohlmöglich sonst für einige Zeit unentdeckt geblieben wären.
                    </p>
                </div> */}

                {/*<Contact />*/}

            </div>
        </>
    )
}


export default Privat
