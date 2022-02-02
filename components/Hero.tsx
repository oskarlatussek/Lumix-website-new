import Link from "next/link"

const Hero = () => {

    return (
        <div className=" w-full min-h-screen flex justify-between p-10 items-center">

            <div className="pr-44 flex flex-col relative space-y-10 pt-20">
                <div className="absolute w-full h-full z-[-1] bg-white/100 blur-3xl rounded-br-full"></div>

                <h1 className="text-6xl font-medium max-w-lg"><span className="text-amber-400 text-8xl font-semibold">Solaranlagen</span> in Mannheim, Rhein-Neckar und der Pfalz</h1>

                <p className="text-xl text-gray-600 max-w-lg">In wenigen Schritten zu Ihrer Solaranlage. Individuell und speziell auf Sie zugeschnitten. Wir bieten Ihnen persönliche Beratung vor Ort und eine professionelle Planung mit anschließender Montage.</p>

                <Link href="#process">
                    <a className="rounded-full border border-black max-w-max px-3 py-2 cursor-pointer hover:scale-110 transition duration-500 ease-in-out">
                        Mehr Erfahren
                    </a>
                </Link>

            </div>
            <div className="absolute h-screen overflow-y-hidden top-0 left-0 z-[-2]">
                <img src="/Images/hero-2.jpg" className="object-cover w-full min-h-screen" />
            </div>

        </div>
    )

}

export default Hero
