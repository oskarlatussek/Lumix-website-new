const Step = ({ number, stepname, discription, }: any) => {

    return (

        <div className="flex flex-col md:flex-row items-center h-full md:h-32 space-x-0 md:space-x-8">

            <div className="w-full md:w-44 pr-2 flex items-center p-5 h-full justify-center bg-yellow-400/30">
                <p className="text-7xl font-medium">{number}</p>
            </div>
            <div className="border-2 rounded-ful border-yellow-400 w-full block mb-5 md:hidden" />
            <div className="flex flex-col">
                <p className="font-medium text-4xl mb-2">{stepname}</p>
                <p className="font-light text-lg max-w-md">{discription}</p>
            </div>

        </div>
    )

}

export default Step