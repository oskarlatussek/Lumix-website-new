const Vision = () => {

    return (
        <>
            <div className="h-screen -mb-10 flex items-stretch">
                <div className="flex items-center">
                    <p className="text-7xl font-semibold max-w-2xl text-right p-10">Unabhängige, effiziente und nachhaltige <span className="text-amber-400 font-bold">Stromerzeugung</span> für alle!</p>
                </div>

                <img src="/Images/solar-2.jpg" className="grayscale w-1/2 flex-grow object-cover" />
            </div>

            <div className="h-screen -mt-10 flex items-stretch">
                <img src="/Images/solar-1.jpg" className="grayscale w-1/2 flex-grow object-cover" />

                <div className="flex items-center">
                    <p className="text-4xl font-medium max-w-2xl p-10">Vertrieb und Montage von modernsten <span className="text-amber-400 font-semibold">Solarmodulen</span> und <span className="text-amber-400 font-semibold">Energiespeichersystemen</span>, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende.</p>
                </div>
            </div>
        </>
    )

}

export default Vision
