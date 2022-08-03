import type { NextPage } from 'next'
import { IoIosRocket } from 'react-icons/io';

import Contact from '../components/general/Contact';
import TeamCard from '../components/section-element/TeamCard';
import ImageSection from '../components/section/ImageSection';


const Team: NextPage = () => {

    return (
        <>
            <div className="flex bg-black flex-col items-center max-w-full">
                <div className="w-full h-full flex flex-col space-y-10 justify-center items-center text-center pt-56 sm:pt-56 pb-20 sm:pb-20 p-5 sm:p-10">
                    <h3 className="animate__animated animate__fadeIn">Starte jetzt deine Karriere bei Lumix Solar</h3>
                    <p className="pb-10 text-lg sm:text-xl lg:text-3xl leading-tight sm:leading-tight lg:leading-tight text-gray-300 font-medium max-w-5xl animate__animated animate__fadeIn animate__delay-1s">Bist auch du elektrisiert von der Sonne? Dann werde Sonnenheld:in und unterstütze uns dabei, unsere Kunden mit erneuerbaren Energien eine unabhängige und nachhaltige Stromerzeugung zu ermöglichen.</p>
                    <a href='https://join.com/companies/lumix' target="_blank" className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                        <span>Offene Stellen</span>
                        <IoIosRocket />
                    </a>
                </div>

                <div className='w-full z-10 flex flex-col items-center p-0 sm:p-10 pt-24 sm:pt-24 md:pt-44'>

                    <div className={`image-section-left -mt-44`}>
                        <ImageSection image='/Images/team.JPG' />

                        <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                            <p className='text-white text-2xl font-bold'><span className='text-5xl'>Hi,</span><br /><br /> wir sind Johannes, Maximilian und Oskar von Lumix Solar, einem jungen, dynamischen Unternehmen für Solar-Produkte und Erneuerbare Energien.</p>

                            <p className='text-justfy text-white'>
                                Bei Lumix Solar bieten wir die gesamte Palette an Produkten an, die dieser Markt zu bieten hat – von Solaranlagen und Batteriespeichern bis zu Ladestationen für Elektroautos. Unsere Kunden erhalten bei uns eine individuelle und ganzheitliche Beratung, Planung und Montage für ihr Projekt. In Zusammenarbeit mit namhaften Herstellern haben wir so schon über 100 Projekte erfolgreich umgesetzt. <br /><br />
                                Mit unserem Start-Up ist es uns nach dem Abschluss unseres BWL-Studiums gelungen, das erlernte theoretische Wissen mit unserer Leidenschaft zu verbinden. Als Gründer sind wir zu Beginn noch selbst auf die Dächer gestiegen, um Solarpanels anzubringen. Dank neuer, engagierter Teammitglieder und zahlreicher Projekte haben wir uns nun zu einem schnell wachsenden Unternehmen entwickelt. <br /><br />
                                Jetzt wollen wir Dich als Held:in der Energiewende beruflich ganz weit nach oben bringen!<br /><br />
                                Wir bieten Dir einen Job mit Verantwortung, der Deine Stärken fördert und sich mit Deinen Interessen deckt. Lass uns gemeinsam wachsen und Lumix Solar, sowie den gesamten Markt der Erneuerbaren Energien, weiterentwickeln. Werde ein Teil unseres jungen Teams und gestalte mit uns die Energieversorgung für eine elektrifizierte Zukunft nachhaltig um.<br /><br />
                            </p>
                        </div>
                    </div>

                </div>

                <a href='https://join.com/companies/lumix' target="_blank" className="-mt-20 rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 flex items-center space-x-2 bg-yellow-400 text-black text-base sm:text-xl font-medium max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                    <span>Offene Stellen</span>
                    <IoIosRocket />
                </a>

                <div className="flex flex-col space-y-5 items-start justify-center py-10 pb-32 w-full max-w-screen-2xl mt-10 px-5 sm:px-20">
                    <h3 className='mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>Deine Benefits</h3>
                    <div className='flex space-x-5 items-center'>
                        <IoIosRocket className='text-yellow-400 text-2xl' />
                        <p className='text-white text-xl'>Festanstellung in einem zukunftsorientierten Unternehmen</p>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <IoIosRocket className='text-yellow-400 text-2xl' />
                        <p className='text-white text-xl'>Flache Hierarchien und schnelle Entscheidungswege</p>
                    </div>
                    <div className='flex space-x-5 items-center'>
                        <IoIosRocket className='text-yellow-400 text-2xl' />
                        <p className='text-white text-xl'>Interessante und abwechslungsreiche Projekte</p>
                    </div>
                    <div className='flex space-x-5 items-center'>
                        <IoIosRocket className='text-yellow-400 text-2xl' />
                        <p className='text-white text-xl'>Perspektiven zur persönlichen Entwicklung</p>
                    </div>
                    <div className='flex space-x-5 items-center'>
                        <IoIosRocket className='text-yellow-400 text-2xl' />
                        <p className='text-white text-xl'>Offene Arbeitskultur eines jungen Unternehmens</p>
                    </div>

                </div>

                <div className='w-full flex justify-center h-full bg-white'>
                    <Contact />
                </div>

            </div>
        </>
    )
}


export default Team
