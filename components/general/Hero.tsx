import Link from "next/link"
import "animate.css"

import KonfiguratorAddress from "../section/KonfiguratorAddress";


interface HeroProps {
    image: string;
    title: string;
    text: string;
    buttonLink?: string;
    classes?: string
}

const Hero = ({ image, title, text, buttonLink, classes }: HeroProps) => {

    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }} className="w-full min-h-screen group relative h-full flex justify-center items-center">
            <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

            <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">

                <div className="w-full sm:w-4/5">
                    <h1 className={`z-10 animate__animated animate__fadeIn animate__delay-2s pb-5 ${classes}`}>{title}</h1>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 pb-10 animate__animated animate__fadeIn animate__delay-3s">{text}</p>
                <Link href="#first_section">
                    <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                        Mehr Erfahren
                    </a>
                </Link>

            </div>

        </div>
    )

}

export default Hero
