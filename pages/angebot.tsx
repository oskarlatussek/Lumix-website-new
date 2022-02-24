import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';


const Angebot: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/solar-1.jpg' title='Unser Angebot' text='Individuelle Komplettlösungen, maßgeschneidert auf Ihre Bedürfnisse.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/solar-3.jpg' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solarmodule</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Effiziente und verlässliche Solarmodule sind essentiell für den maximalen Ertrag Ihrer Solaranlage. Deshalb arbeiten wir ausschließlich mit namhaften Herstellern zusammen. Welches Modul für Ihre Gegebenheiten am besten geeignet ist, bietet die Grundlage jeder unserer individuellen Kaufempfehlungen.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Module/Download.png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (1).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (2).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (3).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (4).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (5).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (6).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Module/Download (7).png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Wechselrichter</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Auch bei dieser wichtigen Komponente setzen wir ausschließlich auf hochwertige Produkte. Mit Ihrer Solarstromanlage erhalten Sie einen optimal dimensionierten Wechselrichter, der ausgezeichnete Wirkungsgrade erreicht. Zusätzlich ist es unser Anspruch Ihnen einen optimal dimensionierten Wechselrichter anzubieten, denn davon hängen Wirtschaftlichkeit und Effizienz jeder Anlage entscheidend ab. 
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Wechselrichter/Download (8).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (9).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (10).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (11).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (12).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (13).png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>
                    </div>

                    <ImageSection image='/Fotos/compressed/DSCF6764 Kopie.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Images/chuttersnap-xJLsHl0hIik-unsplash.jpg' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Wallboxen</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Neben den Hauptanlagekomponenten, wie den Modulen, Wechselrichtern und Batteriespeichern haben wir eine große Palette an Bauteilen und Einheiten rund um die Elektrifizierung Ihres Eigenheims oder Ihrer Betriebsstätte. Die KfW440 Förderung „Ladestationen für Elektroautos – Wohngebäude“ wurde ab dem 27.10.2021 ausgesetzt, allerdings sind durch die Förderungen KfW 439 und KfW 441 gewerbliche sowie der kommunale Ladeinfrastruktur weiterhin förderfähig. Wir bieten eine große Palette an förderfähigen Wallboxen für gewerbliche und kommunale Dimensionen und natürlich weiterhin Einheiten für den privaten Gebrauch in Wohngebäuden.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Wallboxen/Download (18).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wallboxen/Download (19).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wallboxen/Download (20).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (8).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Wechselrichter/Download (9).png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>

                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Batteriesysteme</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Der Batteriespeicher erhöht den Eigenverbrauch Ihres Anlagesystems enorm und wird mit zunehmend steigenden Strompreisen immer rentabler. Da das Batteriesystem einer größten Investitionspunkte eines Anlagesystems ist, ist das Preis-Leistungsverhältnis besonders wichtig. Daher arbeiten wir ausschließlich mit Namen haften Herstellern zusammen, die für Qualität und lange Haltedauer stehen.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Batteriespeicher/Download (14).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/Download (15).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/Download (16).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/Download (17).png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>
                    </div>

                    <ImageSection image='/Fotos/compressed/DSCF7235.jpg' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Fotos/compressed/DSCF6730.jpg' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Montagegestelle</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Das Montagegestell dient zur Befestigung der Module. Bei Anlagenlaufzeiten von 30 Jahren und mehr ist nur beste Qualität aus korrosionsfestem Material und eine hochwertige Konstruktion geeignet, um die Sicherheit der Anlage über die komplette Lebensdauer zu gewährleisten. Um Dach und Anlage optimal aufeinander abzustimmen, arbeiten wir mit mehreren Herstellern zusammen, die unterschiedliche Systemformate anbieten. Dank unserer Partner im Bereich Metallbau und unsere internen Kompetenzen können wir auch Sonderlösungen realisieren.
                        </p>

                    </div>
                </div>

                <Contact />

            </div>
        </>
    )
}


export default Angebot
