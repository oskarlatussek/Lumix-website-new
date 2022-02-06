const Vision = () => {

    return (
        <>
            <div className="h-screen mb-20 lg:-mb-10 flex flex-col-reverse lg:flex-row items-stretch">
                <div className="flex items-center">
                    <p className="text-4xl sm:text-7xl font-semibold max-w-2xl text-center lg:text-right p-10">Unabhängige, effiziente und nachhaltige <span className="text-yellow-400 font-bold">Stromerzeugung</span> für alle!</p>
                </div>

                <img src="/Images/solar-2.jpg" className="grayscale w-full lg:w-1/2 flex-grow object-cover" />
            </div>

            <div className="h-screen mt-0 sm:-mt-10 flex flex-col lg:flex-row items-stretch">
                <img src="/Images/solar-1.jpg" className="grayscale w-full lg:w-1/2 flex-grow object-cover" />

                <div className="flex items-center">
                    <p className="text-2xl sm:text-4xl font-medium max-w-2xl p-10 text-center lg:text-left">Vertrieb und Montage von modernsten <span className="text-yellow-400 font-semibold">Solarmodulen</span> und <span className="text-yellow-400 font-semibold">Energiespeichersystemen</span>, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende.</p>
                </div>
            </div>
        </>
    )

}

export default Vision
