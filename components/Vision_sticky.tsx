const Vision = () => {

    return (
        <><div className="w-screen relative flex flex-col items-">
            <img src="/Images/solar-2.jpg" className="sticky top-0 h-screen translate-x-1/2 grayscale object-cover border border-red-500" />

            <div className="h-screen sticky top-0 flex items-center border">
                <p className="text-7xl font-semibold max-w-2xl text-right p-10">Unabhängige, effiziente und nachhaltige <span className="text-amber-400 font-bold">Stromerzeugung</span> für alle!</p>
            </div>


            {/* <div className="stick top-0 bg-yellow-600 z-10">
        <div className="h-screen  bg-red-700/10">
            <p className="text-7xl font-bold max-w-lg">Unabhängige, effiziente und nachhaltige Stromerzeugung für alle. </p>
        </div>

        <div className=" h-screen  bg-yellow-600/10">
            <p className="text-2xl text-gray-800 mb-20">Vertrieb und Montage von modernsten Solarmodulen und Energiespeichersystemen, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende. </p>

        </div>
    </div> */}

        </div>

            <div className="w-full relative flex flex-col items-end">
                <img src="/Images/solar-1.jpg" className="sticky top-0 h-screen -translate-x-1/2 grayscale" />


                <div className="h-screen sticky top-0 flex items-center">
                    <p className="text-5xl font-bold max-w-lg">Vertrieb und Montage von modernsten Solarmodulen und Energiespeichersystemen, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende.</p>

                </div>


                {/* <div className="stick top-0 bg-yellow-600 z-10">
        <div className="h-screen  bg-red-700/10">
            <p className="text-7xl font-bold max-w-lg">Unabhängige, effiziente und nachhaltige Stromerzeugung für alle. </p>
        </div>
    
        <div className=" h-screen  bg-yellow-600/10">
            <p className="text-2xl text-gray-800 mb-20">Vertrieb und Montage von modernsten Solarmodulen und Energiespeichersystemen, durch kundennahe, individuelle und ganzheitliche Projektplanung zugute der Energiewende. </p>
    
        </div>
    </div> */}

            </div></>


    )

}

export default Vision
