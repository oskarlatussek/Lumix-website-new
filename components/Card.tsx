const Card = ({ title, text }: any) => {

    return (


        <div className={`p-0 sm:p-5 flex flex-col items-center w-full lg:w-1/4 max-w-sm`}>
            <div className="flex flex-col items-stretch mb-10">
                <div className="flex justify-center items-center py-5 px-2 bg-yellow-400/30 min-h-[7rem]">
                    <p className="text-3xl font-medium text-center">{title}</p>
                </div>
                <div className="border-2 rounded-ful border-yellow-400" />

                <p className="text-xl mt-4 px-2 text-gray-700">{text}</p>
            </div>
        </div>

    )

}

export default Card