const Step = ({ number, stepname, discription, }: any) => {

    return (


<div className="flex items-center space-x-20">
                <div className="h-20 w-20 rounded-full flex items-center justify-center bg-yellow-400">
                 <p className="text-4xl font-semibold">{number}</p>

                </div>
                <div className="flex flex-col p-3">
                <p className="font-medium text-4xl mb-4">{stepname}</p>
                <p className="font-light text-xl max-w-md">{discription}</p>
                    
                </div>

            </div>








    )

}

export default Step