import Link from "next/link"

const Hero = () => {

    return (
        <div style={{backgroundImage: 'url(/Images/hero-2.jpg)', backgroundSize: "cover"}} className=" w-full min-h-screen relative h-full flex justify-between p-5 sm:p-10 items-center">

            <div className="pr- flex flex-col relative space-y-10 pt-0 sm:pt-20">
                <div className="absolute w-full h-full z-0 bg-white/100 blur-3xl -ml-5 rounded-br-full"></div>

                <h1 className="text-4xl lg:text-6xl font-medium max-w-lg z-10"><span className="text-yellow-400 text-5xl lg:text-8xl font-semibold">Solaranlagen</span><br/> in Mannheim, Rhein-Neckar und der Pfalz</h1>

                <p className="text-base sm:text-xl text-gray-600 max-w-md z-10">In wenigen Schritten zu Ihrer Solaranlage. Individuell und speziell auf Sie zugeschnitten. Wir bieten Ihnen persönliche Beratung vor Ort und eine professionelle Planung mit anschließender Montage.</p>

                <Link href="#process">
                    <a className="rounded-full z-10 border border-black max-w-max px-3 py-2 cursor-pointer hover:scale-110 transition duration-500 ease-in-out">
                        Mehr Erfahren
                    </a>
                </Link>

            </div>
            {/* <div className="absolute h-auto top-0 left-0 z-[-2]">
                <img src="/Images/hero-2.jpg" className="object-cover w-screen h-auto" />
            </div> */}

        </div>
    )

}

export default Hero
