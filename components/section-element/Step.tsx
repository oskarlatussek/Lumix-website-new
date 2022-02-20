interface StepProps {
    number: number;
    stepname: string;
    description: string;
}

const Step = ({ number, stepname, description, }: StepProps) => {

    return (

        <div className="relative flex items-start">
            <p className="text-[12rem] xl:text-[15rem] font-bold opacity-5 -mt-16 xl:-mt-24 absolute">{number}</p>
            <div className="flex flex-col mt-12 ml-16">
                <p className="text-4xl xl:text-5xl text-[#215250] font-medium mb-3">{stepname}</p>
                <p className="max-w-xs text-sm xl:text-base">{description}</p>
            </div>
        </div>
    )

}

export default Step