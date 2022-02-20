interface ServiceCardProps {
    title: string;
    text: string;
}

const ServiceCard = ({ title, text }: ServiceCardProps) => {

    return (
        <>
            <div className={`w-full flex flex-row space-x-6 items-center p-5 min-h-[18rem] md:min-h-[22rem] max-w-sm`}>

                <div className="w-1 whitespace-nowrap -rotate-90 flex items-center justify-center">
                    <h1 className={`font-medium text-yellow-400 text-2xl md:text-3xl`}>{title}</h1>
                </div>

                <div className="flex flex-col justify-center grow w-full h-full hover:scale-105 transition duration-200 ease-linear rounded-lg shadow-custom">
                    <p className="text-base md:text-lg p-3 px-4 text-gray-700">{text}</p>
                </div>
            </div>


            {/* <div className={`relative flex flex-col items-center w-full max-w-sm rounded-lg shadow-custom border border-[#215250] hover:scale-105 transition duration-200 ease-linear`}>
                <p className="text-yellow-400 -rotate-90 origin-bottom-left absolute bottom-0.5 -left-2 min-w-max border w-full text-3xl font-medium">{title}</p>


                <div className="flex flex-col items-stretch mb-10">
                    <p className="text-lg p-3 px-4 text-gray-700">{text}</p>
                </div>
            </div> */}
        </>
    )

}

export default ServiceCard