import Link from "next/link"
import { FiCheck } from "react-icons/fi";


interface SubpageLandingpageProps {
    title: string;
    yellowTitle?: string;
    bullet1?: string;
    bullet2?: string;
    bullet3?: string;
    bullet4?: string;
    bullet5?: string;
    bullet6?: string;
    bullet7?: string;
    bullet8?: string;
    text?: string; 
    video?: string; // Add the video field
    image?: string;
    link?: string;
    linkText?: string;
    left?: boolean;
}

const SubpageLandingpages = ({ title, yellowTitle, bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8, text, video, image, linkText, link, left }: SubpageLandingpageProps) => {
    return (
        <>
            <div className="min-h-screen w-full p-2 sm:p-5">

                <div className="h-screen w-full sticky top-0 flex items-center">
                    {/* <div className="absolute w-full h-[95%] bg-white/10 left-0 top-[2.5%] rounded-xl"/> */}
                    {video && (
                    <video className="object-cover h-[95%] w-full rounded-xl background-video" autoPlay loop muted>
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
                    <div className="w-full md:w-1/2 h-[95%] bg-white/30 rounded-xl backdrop-blur-lg flex flex-col space-y-5 items-center justify-center text-center p-5">
                        <p className="font-semibold text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8">
                        <span className="text-yellow-400 drop-shadow-none font-bold">{yellowTitle}</span>{title}
                        </p>
                        <div className="flex flex-col">
                        {bullet1 && (

                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet1}</span>
                            </div>
                         )}
                        {bullet2 && (
                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet2}</span>
                            </div>
                        )}
                        {bullet3 && (
                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet3}</span>
                            </div>
                        )}
                        {bullet4 && (

                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet4}</span>
                            </div>
                        )}
                        {bullet5 && (
                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet5}</span>
                            </div>
                        )}
                        {bullet6 && (
                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet6}</span>
                            </div>
                        )}
                        {bullet7 && (
                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet7}</span>
                            </div>
                        )}
                        {bullet8 && (
                            <div className="flex items-center space-x-3 text-xl py-3">
                                <FiCheck className="text-yellow-400 text-3xl" /><span className="space-x-3">{bullet8}</span>
                            </div>
                        )}     
                        </div>   
                            <p className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-lg text-zinc-800">
                                {text}
                            </p>
                        {link && (
                            <Link href={link} className="pt-4">
                                <a className="text-lg bg-yellow-400 rounded-full font-bold max-w-max px-5 py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                                    {linkText}
                                </a>
                            </Link>
                        )}     
                    </div>
                </div>

            </div>

        </>
    )
}

export default SubpageLandingpages
