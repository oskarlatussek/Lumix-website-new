const Step = ({ number, stepname, discription, }: any) => {

    return (

        <div className="flex items-stretch space-x-8">

            <div className="w-44 pr-2 flex items-center justify-center bg-amber-400/30">
                <p className="text-7xl font-medium">{number}</p>
            </div>
            <div className="flex flex-col">
                <p className="font-medium text-4xl mb-2">{stepname}</p>
                <p className="font-light text-lg max-w-md">{discription}</p>

            </div>

        </div>
    )

}

export default Step