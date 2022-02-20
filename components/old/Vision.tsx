const Vision = () => {

    return (
        <>
            {/* <div className="h-screen mb-20 lg:-mb-0 flex left-0 sticky flex-col-reverse lg:flex-row items-center lg:items-stretch">
                <div className="flex items-center border w-screen h-screen">
                    <p className="text-9xl font-semibold text-left p-10 w-full leading-[1.1] drop-shadow-text text-white">Unabhängige, effiziente und nachhaltige <span className="text-yellow-400 font-bold">Stromerzeugung</span> für alle!</p>
                </div>

                <img src="/Images/solar-2.jpg" className="grayscale w-full lg:w-1/2 flex-grow object-cover overflow-hidden" />
            </div> */}

            <div className="h-screen mb-20 lg:-mb-0 flex left-0 sticky flex-col-reverse lg:flex-row items-center lg:items-stretch">
                <div className="flex items-center border w-screen h-screen">
                    <p className="text-9xl font-semibold text-left p-10 w-full leading-[1.1] text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-custom font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p>
                </div>

                {/* <img src="/Images/solar-2.jpg" className="grayscale w-full lg:w-1/2 flex-grow object-cover overflow-hidden" /> */}
            </div>

            <div className="h-screen mt-0 lg:-mt-0 left-0 sticky flex flex-col lg:flex-row items-center lg:items-stretch">
                <img src="/Images/solar-1.jpg" className="grayscale w-full lg:w-1/2 flex-grow object-cover overflow-hidden" />

                <div className="flex items-center">
                    <p className="text-2xl sm:text-4xl font-medium max-w-2xl p-10 text-center lg:text-left">Vertrieb und Montage von modernsten <span className="text-yellow-400 font-semibold">Solarmodulen</span> und <span className="text-yellow-400 font-semibold">Energiespeichersystemen</span>, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende.</p>
                </div>
            </div>
        </>
    )

}

export default Vision
