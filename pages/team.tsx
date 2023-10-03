import type { NextPage } from 'next'

import Contact from '../components/general/Contact';
import TeamCard from '../components/section-element/TeamCard';


const Team: NextPage = () => {

    return (
        <>
            <div className="flex bg-black flex-col items-center max-w-full">
                <div className="w-full h-full flex flex-col space-y-10 justify-center items-center text-center pt-56 sm:pt-56 pb-20 sm:pb-20 p-5 sm:p-10">
                    <h1 className="animate__animated animate__fadeIn">Das Team</h1>
                    <p className="text-xl sm:text-2xl lg:text-4xl leading-tight sm:leading-tight lg:leading-tight text-gray-300 font-medium max-w-3xl animate__animated animate__fadeIn animate__delay-1s">Wir begleiten Sie persönlich von der ersten Kontaktaufnahme bis zum stolzen Solaranlagenbesitzer.</p>
                </div>

                {/* <div className={`w-full flex flex-col items-center justify-center space-x-0 -space-y-20 py-20 px-5 sm:px-10 max-w-8xl`}>
                    <img src="/Logos/Logo_Lumix_Solar_small Kopie.svg" className='absolute opacity-30 w-full' />
                    <div className='min-w-xs self-start h-full relative max-w-2xl overflow-hidden rounded-xl z-20 group'>
                        <img src="/Images/Team/DSC02349.jpg" className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
                        <p className='text-yellow-400 font-bold text-8xl bg-black/40 p-3 pb-6 backdrop-blur-xl px-8 rounded-tl-xl z-10 absolute bottom-0 right-0'>Operations</p>
                    </div>

                    <div className='min-w-xs h-full relative max-w-2xl overflow-hidden rounded-xl z-10 group'>
                        <img src="/Images/Team/DSC02394.jpg" className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
                        <p className='text-yellow-400 font-bold text-8xl bg-black/40 p-3 pb-6 backdrop-blur-xl px-8 rounded-tl-xl z-10 absolute bottom-0 right-0'>Back Office</p>
                    </div>

                    <div className='min-w-xs h-full self-end relative max-w-2xl overflow-hidden rounded-xl z-0 group'>
                        <img src="/Images/Team/DSC02362.jpg" className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
                        <p className='text-yellow-400 font-bold text-8xl bg-black/40 p-3 pb-6 backdrop-blur-xl px-8 rounded-tl-xl z-10 absolute bottom-0 right-0'>Sales</p>
                    </div>
                </div> */}

                <div className={`w-full flex flex-col items-center justify-center space-x-0 space-y-20 py-20 px-5 sm:px-10 max-w-8xl`}>

                    <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center w-full justify-center max-w-screen-2xl'>
                        <div className='min-w-[35%] self-center lg:self-start h-full relative max-w-2xl overflow-hidden rounded-xl z-20 group'>
                            <img src="/Images/Team/DSC02349.jpg" className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
                        </div>
                        <p className='text-yellow-400 ml-0 lg:-ml-44 font-bold text-4xl xs:text-6xl lg:text-6xl xl:text-8xl bg-black/40 z-50 self-center lg:self-end p-3 pb-3 lg:pb-6 backdrop-blur-xl px-8 rounded-tl-xl min-w-max'>Operations</p>

                        <div className='grid grid-cols-2 md:grid-cols-3 max-w-full md:max-w-1/2 gap-5 min-w-[50%] ml-0 lg:-ml-44'>
                            <div className='hidden lg:block'></div>
                            <TeamCard name="Maximilian Mühlhause" img_src='/Images/Team/DSC02339.jpg' />
                            <TeamCard name="Lucas Zacher" img_src='/Images/Team/DSC02274.jpg' />
                            <div className='hidden lg:block'></div>
                            <TeamCard name="Jens Maier" img_src='/Images/Team/DSC02262.jpg' />
                            <TeamCard name="Filippo Werner" img_src='/Images/Team/DSC02197.jpg' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center w-full justify-center max-w-screen-2xl'>
                        <div className='min-w-[35%] self-center lg:self-start h-full relative max-w-2xl overflow-hidden rounded-xl z-20 group'>
                            <img src="/Images/Team/DSC02394.jpg" className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
                        </div>
                        <p className='text-yellow-400 ml-0 lg:-ml-44 font-bold text-4xl xs:text-6xl lg:text-6xl xl:text-8xl bg-black/40 z-50 self-center lg:self-end p-3 pb-3 lg:pb-6 backdrop-blur-xl px-8 rounded-tl-xl min-w-max'>Back Office</p>

                        <div className='grid grid-cols-2 md:grid-cols-3 max-w-full md:max-w-1/2 gap-5 min-w-[50%] ml-0 lg:-ml-44'>
                            <TeamCard name="Oskar Latussek" img_src='/Images/Team/DSC02317.jpg' />
                            <TeamCard name="Sven Packhaeuser" img_src='/Images/Team/DSC02138.jpg' />
                            <TeamCard name="Linda Unser" img_src='/Images/Team/DSC02296.jpg' />
                            <div className='hidden lg:block'></div>
                            <TeamCard name="Mathea Preuß" img_src='/Images/Team/DSC02246.jpg' />
                            <TeamCard name="Louis Könneker" img_src='/Images/Team/DSC02149.jpg' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center w-full justify-center max-w-screen-2xl'>
                        <div className='min-w-[35%] self-center lg:self-start h-full relative max-w-2xl overflow-hidden rounded-xl z-20 group'>
                            <img src="/Images/Team/DSC02362.jpg" className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
                        </div>
                        <p className='text-yellow-400 ml-0 lg:-ml-44 font-bold text-4xl xs:text-6xl lg:text-6xl xl:text-8xl bg-black/40 z-50 self-center lg:self-end p-3 pb-3 lg:pb-6 backdrop-blur-xl px-8 rounded-tl-xl min-w-max'>Sales</p>

                        <div className='grid grid-cols-2 md:grid-cols-3 max-w-full md:max-w-1/2 gap-5 min-w-[50%] ml-0 lg:-ml-44'>
                            <div className='hidden lg:block'></div>
                            <TeamCard name="Johannes Gerstlauer" img_src='/Images/Team/DSC02307.jpg' />
                            <TeamCard name="Lux Hildebrandt" img_src='/Images/Team/DSC02209.jpg' />
                            {/* <TeamCard name="Mario Giacone" img_src='/Images/Team/DSC02160.jpg' /> */}
                            <div className='hidden lg:block'></div>
                            <TeamCard name="Kevin Langer" img_src='/Images/Team/DSC02224.jpg' />
                            <TeamCard name="David Bantschow" img_src='/Images/Team/DSC02186.jpg' />
                        </div>
                    </div>

                </div>

                <div className="flex items-center w-full justify-center py-10 pb-32 max-w-screen-2xl">
                    <p className="text-2xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center text-gray-300">Die <span className="text-yellow-400 font-semibold">Solartechnologie</span> ist ein logischer und praktikabler Schritt hin zur kostengünstigen Energieversorgung für Zuhause.</p>
                </div>

                <div className='w-full flex justify-center h-full bg-white'>
                    <Contact />

                </div>

            </div>
        </>
    )
}


export default Team
