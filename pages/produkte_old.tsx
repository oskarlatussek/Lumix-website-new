import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';


const Produkte: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/produkte.webp' title='Unsere Produkte' text='Individuelle Komplettlösungen, maßgeschneidert auf Ihre Bedürfnisse.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/module.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solarmodule</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Effiziente und verlässliche Solarmodule sind essentiell für den maximalen Ertrag Ihrer Solaranlage. Deshalb arbeiten wir ausschließlich mit namhaften Herstellern zusammen. Welches Modul für Ihre Gegebenheiten am besten geeignet ist, bietet die Grundlage jeder unserer individuellen Kaufempfehlungen. Unser Angebot umfasst selbstverständlich auch hochqualitative Glas/Glas Module für besonders lange Haltbarkeit.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Module/solarfabrik.png" className='w-16 xl:w-28 mx-5 my-2' />
                            <img src="/Logos/Module/ibc.jpg" className='w-16 xl:w-28 mx-5 my-2' />
                            <img src="/Logos/Module/meyerburger.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/jinko.svg" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/jolywood.webp" className='w-20 xl:w-32 mx-5 my-2' />
                            {/* <img src="/Logos/Module/longi.png" className='w-20 xl:w-32 mx-5 my-2' /> */}
                            <img src="/Logos/Module/jasolar.png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Wechselrichter</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Auch bei dieser wichtigen Komponente setzen wir ausschließlich auf hochwertige Produkte. Es unser Anspruch Ihnen einen optimal dimensionierten Wechselrichter anzubieten, denn davon hängen Wirtschaftlichkeit und Effizienz jeder Anlage entscheidend ab. In Kombination mit Batteriespeichern bieten wir auch Hybridwechselrichter an.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Wechselrichter/sma.png" className='w-20 xl:w-32 mx-5 my-2' />
                            {/* <img src="/Logos/Wechselrichter/fronius.png" className='w-20 xl:w-32 mx-5 my-2' /> */}
                            <img src="/Logos/Wechselrichter/solaredge.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/fox.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/sofar.jpg" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/kaco.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/fenecon.png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>
                    </div>

                    <ImageSection image='/Images/wechselrichter.webp' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/wallbox.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Wallboxen</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Passend zu Ihrer Solaranlage bieten wir Ihnen auch gerne E-Ladestationen für Ihr Eigenheim oder Gewerbe an. Dabei achten wir stets auf eine einfache und intuitive Bedienbarkeit, sowie die passende Monitoring- und Abrechnungssoftware. Selbstverständlich kann eine Wallbox auch ohne Photovoltaikanlage verbaut werden.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Wallboxen/abl.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wallboxen/keba.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wallboxen/myenergi.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/sma.png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>

                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Batteriesysteme</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Der Batteriespeicher erhöht den Eigenverbrauch Ihres Anlagesystems enorm und wird mit zunehmend steigenden Strompreisen immer rentabler. Da das Batteriesystem einer der größten Investitionspunkte eines Anlagesystems ist, ist das Preis-Leistungsverhältnis besonders wichtig. Daher arbeiten wir ausschließlich mit namenhaften Herstellern zusammen, die für Qualität und lange Haltedauer stehen.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Batteriespeicher/byd.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/sonnen.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/e3dc.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/fox.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/fenecon.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/sofar.jpg" className='w-20 xl:w-32 mx-5 my-2' />

                        </div>
                    </div>

                    <ImageSection image='/Images/batterie.webp' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/montage.webp' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Montagegestelle</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Das Montagegestell dient zur Befestigung der Module. Bei Anlagenlaufzeiten von 30 Jahren und mehr ist nur beste Qualität aus korrosionsfestem Material und eine hochwertige Konstruktion geeignet, um die Sicherheit der Anlage über die komplette Lebensdauer zu gewährleisten. Um Dach und Anlage optimal aufeinander abzustimmen, arbeiten wir mit mehreren Herstellern zusammen, die unterschiedliche Systemformate anbieten. Dank unserer Partner im Bereich Metallbau und unsere internen Kompetenzen können wir auch Sonderlösungen realisieren.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Montagegestell/corab.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Montagegestell/k2.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Montagegestell/tritec.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Montagegestell/viessmann.svg.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Montagegestell/altec.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Montagegestell/venturama.png" className='w-20 xl:w-32 mx-5 my-2' />

                        </div>

                    </div>
                </div>

                {/*<Contact />*/}

            </div>
        </>
    )
}


export default Produkte
