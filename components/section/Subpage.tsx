import Link from "next/link"


interface SubpageProps {
    title: string;
    text: string;
    image: string;
    link: string;
    left?: boolean;
}

const Subpage = ({ title, text, image, link, left }: SubpageProps) => {
    return (
        <>
            <div className="min-h-screen w-full p-2 sm:p-5">

                <div className="h-screen w-full sticky top-0 flex items-center">
                    {/* <div className="absolute w-full h-[95%] bg-white/10 left-0 top-[2.5%] rounded-xl"/> */}
                    <img src={image} className="object-cover h-[95%] w-full rounded-xl" />
                </div>

                <div className={`h-screen w-full sticky top-0 flex items-center ${left ? "justify-start" : "justify-end"}`}>
                    <div className="w-full md:w-1/2 h-[95%] bg-white/30 rounded-xl backdrop-blur-lg flex flex-col space-y-10 items-center justify-center text-center p-5">
                        <p className="font-semibold text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-">
                            {title}
                        </p>
                        <p className="font-medium text-sm sm:text-base lg:text-lg text-justify sm:text-center max-w-lg text-zinc-800">
                            {text}
                        </p>
                        <Link href={link}>
                            <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                                Mehr Erfahren
                            </a>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Subpage
