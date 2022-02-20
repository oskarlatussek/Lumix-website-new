import type { NextPage } from 'next'

import Hero from "../components/general/Hero";
import Contact from '../components/general/Contact';
import ImageSection from '../components/section/ImageSection';


const Angebot: NextPage = () => {

    return (
        <>
            <div className="flex flex-col items-center max-w-full">
                <Hero image='/Images/markus-spiske-pwFr_1SUXRo-unsplash.jpg' title='Unser Angebot' text='Individuelle Komplettlösungen, maßgeschneidert auf Ihre Bedürfnisse.' />

                <div id="first_section" className={`image-section-left`}>
                    <ImageSection image='/Images/solar-3.jpg' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Solarmodule</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Die Solarmodule sind eine der entscheidenden Komponenten für den Ertrag Ihrer Anlage. Deshalb arbeiten wir ausschließlich mit namhaften Herstellern zusammen. Welches Modul für Ihre Gegebenheiten am besten geeignet ist, wägen wir sorgfältig ab und bieten es Ihnen entsprechend an.
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
                            Auch bei dieser wichtigen Komponente setzen wir ausschließlich hochwertige Produkte ein: Mit Ihrer Solarstromanlage erhalten Sie einen optimal dimensionierten Wechselrichter, der ausgezeichnete Wirkungsgrade erreicht. Aber wir achten auch ganz besonders auf die bestmögliche Abstimmung zwischen den Modulen und Wechselrichtern jeder Anlage. Denn davon hängen Wirtschaftlichkeit und Effizienz entscheidend ab.
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

                    <ImageSection image='/Fotos/compressed/DSCF6764 Kopie.JPG' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Fotos/compressed/DSCF7235.JPG' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Batteriesysteme</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Der Batteriespeicher erhöht den Eigenverbrauch Ihres Anlagesystems enorm und wird mit zunehmend ansteigendes Strompreisen immer rentabler. Da das Batteriesystem einer größten Investitionspunkte eines Anlagesystems ist, ist das Preisleistungsverhältnis besonders wichtig. Wir arbeiten mit namenhaften Herstellern zusammen, die für Qualität und lange Haltedauer stehen.
                        </p>

                        <div className='flex flex-wrap items-center justify-center pt-0 lg:pt-10'>
                            <img src="/Logos/Batteriespeicher/Download (14).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/Download (15).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/Download (16).png" className='w-20 xl:w-32 mx-5 my-2' />
                            <img src="/Logos/Batteriespeicher/Download (17).png" className='w-20 xl:w-32 mx-5 my-2' />
                        </div>
                    </div>
                </div>

                <div className={`image-section-right`}>
                    <div className='flex flex-col space-y-5 max-w-3xl text-left lg:text-right self-center'>
                        <h2>Montagegestelle</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Das Montagegestell dient zur Befestigung der Module. Bei Anlagenlaufzeiten von 30 Jahren und mehr ist nur beste Qualität aus korrosionsfestem Material und eine hochwertige Konstruktion geeignet, um die Sicherheit der Anlage über die komplette Lebensdauer zu gewährleisten - allen Witterungsbedingungen zum Trotz. Um Dach und Anlage optimal aufeinander abzustimmen, arbeiten wir mit mehreren Herstellern zusammen, die unterschiedliche Systemformate anbieten. Dank unserer Partner im Bereich Metallbau und unsere internen Kompetenzen können wir auch Sonderlösungen realisieren.
                        </p>

                    </div>

                    <ImageSection image='/Fotos/compressed/DSCF6730.JPG' />
                </div>

                <div className={`image-section-left`}>
                    <ImageSection image='/Fotos/compressed/DSCF7220 Kopie.JPG' />

                    <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                        <h2>Wallboxen</h2>

                        <p className='text-justify text-base lg:text-lg'>
                            Der Batteriespeicher erhöht den Eigenverbrauch Ihres Anlagesystems enorm und wird mit zunehmend ansteigendes Strompreisen immer rentabler. Da das Batteriesystem einer größten Investitionspunkte eines Anlagesystems ist, ist das Preisleistungsverhältnis besonders wichtig. Wir arbeiten mit namenhaften Herstellern zusammen, die für Qualität und lange Haltedauer stehen.
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

                <Contact />

            </div>
        </>
    )
}


export default Angebot
