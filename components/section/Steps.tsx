const Steps = ({ step }) => {
    return (
        <div className='flex w-full items-center justify-center px-5 sm:px-10 absolute top-7'>

            <div className={`relative flex flex-col items-center space-y-2 ${step >= 1 ? "text-black" : "text-gray-300"}`}>
                <div className={`rounded-full flex items-center justify-center ${step >= 1 ? "bg-yellow-400" : "bg-white/20"} w-10 md:w-14 h-10 md:h-14 shadow-xl`}>
                    <span className='font-bold text-md sm:text-xl md:text-3xl'>1</span>
                </div>
                <p className='absolute -bottom-9 min-w-max text-xs xs:text-sm md:text-base'>Adresse</p>
            </div>

            <div className={`border ${step > 1 ? "border-yellow-400" : "border-black/10"} w-1/4 h-0`} />

            <div className={`relative flex flex-col items-center space-y-2 ${step >= 2 ? "text-black" : "text-gray-400"}`}>
                <div className={`rounded-full flex items-center justify-center ${step >= 2 ? "bg-yellow-400" : "bg-white/20"} w-10 md:w-14 h-10 md:h-14 shadow-xl`}>
                    <span className='font-bold text-md sm:text-xl md:text-3xl'>2</span>
                </div>
                <p className='absolute -bottom-9 min-w-max text-xs xs:text-sm md:text-base'>Produktauswahl</p>
            </div>

            <div className={`border ${step > 2 ? "border-yellow-400" : "border-black/10"} w-1/4 h-0`} />

            <div className={`relative flex flex-col items-center space-y-2 ${step === 3 ? "text-black" : "text-gray-400"}`}>
                <div className={`rounded-full flex items-center justify-center ${step === 3 ? "bg-yellow-400" : "bg-white/20"} w-10 md:w-14 h-10 md:h-14 shadow-xl`}>
                    <span className='font-bold text-md sm:text-xl md:text-3xl'>3</span>
                </div>
                <p className='absolute -bottom-9 min-w-max text-xs xs:text-sm md:text-base'>Stromverbrauch</p>
            </div>

        </div>
    )
}

export default Steps
