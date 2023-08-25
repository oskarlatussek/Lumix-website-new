import Link from "next/link"
import { FiCheck, FiPhone } from "react-icons/fi";
import { PiHandHeartBold } from "react-icons/pi";
import { HiOutlineCalculator, HiOutlineHome, HiOutlineClipboard } from "react-icons/hi";



interface SubpageLandingpageProps {
    title: string;
    yellowTitle?: string;
    pretext?: string;
    bullet1?: string;
    bullet2?: string;
    bullet3?: string;
    bullet4?: string;
    bullet5?: string;
    bullet6?: string;
    bullet7?: string;
    bullet8?: string;
    text?: string; 
    video?: string;
    image?: string;
    link?: string;
    linkText?: string;
    left?: boolean;
    icons?: boolean;
    icons2?: boolean;
}

const SubpageLandingpages = ({ icons, icons2, title, yellowTitle, pretext, bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8, text, video, image, linkText, link, left }: SubpageLandingpageProps) => {
    return (
        <>
            <div className="min-h-screen w-full p-2 sm:p-5">

                <div className="h-screen w-full sticky top-0 flex items-center">
                    {/* <div className="absolute w-full h-[95%] bg-white/10 left-0 top-[2.5%] rounded-xl"/> */}
                    {video && (
                    <video className="object-cover h-[95%] w-full rounded-xl background-video" playsInline autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        {/* You can add additional source elements for other video formats */}
                        Your browser does not support the video tag.
                    </video>
                    )}
                    {image && (
                    <img src={image} className="object-cover h-[95%] w-full rounded-xl" />
                    )}
                </div>

                <div className={`h-screen w-full sticky top-0 flex items-center ${left ? "justify-start" : "justify-end"}`}>
                    <div className="w-full sectionHeight sm:min-h-unset h-auto lg:w-1/2 sm:h-[95%] bg-white/30 rounded-xl backdrop-blur-lg flex flex-col space-y-5 items-center justify-center text-center p-5">
                        <p className="font-semibold text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl">
                        <span className="text-yellow-400 drop-shadow-none font-bold">{yellowTitle}</span>{title}
                        </p>
                        <div className="flex flex-col">
                        <p className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">
                                {pretext}
                        </p>
                        {bullet1 && (

                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet1}</span>
                            </div>
                         )}
                        {bullet2 && (
                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet2}</span>
                            </div>
                        )}
                        {bullet3 && (
                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet3}</span>
                            </div>
                        )}
                        {bullet4 && (

                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet4}</span>
                            </div>
                        )}
                        {bullet5 && (
                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet5}</span>
                            </div>
                        )}
                        {bullet6 && (
                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet6}</span>
                            </div>
                        )}
                        {bullet7 && (
                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet7}</span>
                            </div>
                        )}
                        {bullet8 && (
                            <div className="flex items-center space-x-3 text-lg py-1">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">{bullet8}</span>
                            </div>
                        )}     
                        </div>   
                            <p className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-2xl text-zinc-800">
                                {text}
                            </p>
                            {icons && (
                            <div className="font-bold flex w-full justify-around items-center space-x-3  py-3">
                                <div className="flex flex-col items-center space-x-3 py-3">
                                <PiHandHeartBold className="text-yellow-400 text-5xl" />
                               <span className="text-lg">
                                Zufriedenheitsgarantie
                                </span>
                                </div>
                                <div className="flex flex-col items-center space-x-3 py-3">
                            <HiOutlineCalculator className="text-yellow-400 text-5xl" />
                            <span className="text-lg">
                            Förderung sichern
                                </span>
                                </div>
                        </div>                            
                        )}
                        {icons2 && (
                            <div className="font-bold flex w-full justify-around items-center space-x-3  py-3">
                                <div className="flex flex-col items-center space-x-3 py-3">
                                <HiOutlineHome className="text-yellow-400 text-5xl" />
                               <span className="text-lg">
                               Regional und überregional für Sie im Einsatz
                                </span>
                                </div>
                                <div className="flex flex-col items-center space-x-3 py-3">
                            <HiOutlineClipboard className="text-yellow-400 text-5xl" />
                            <span className="text-lg">
                            Komplett-Service von der Planung bis zur Wartung
                                </span>
                                </div>
                        </div>                            
                        )}
                        {link && (
                            <div className="flex w-full sm:flex-row items-center flex-col justify-around" >
                            <Link href={link} className="pt-4">
                                <a className="text-lg bg-yellow-400 rounded-full font-bold max-w-max px-5 py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                                    {linkText}
                                </a>
                                </Link>
                            {icons && (
                                <div className="flex items-center space-x-3 text-lg sm:mt-0 mt-10">
                                <FiPhone className="text-yellow-400 text-4xl " />
                                <a href="tel:+49621150350" className="text-yellow-400 font-bold hover:scale-105 transition duration-200 ease-linear">
                                <span className="text-lg">+49 621 150 350</span>
                                </a>
                                </div>
                                 
                                 )}
                            </div>
                        )}     
                    </div>
                </div>

            </div>

        </>
    )
}

export default SubpageLandingpages
