interface FörderungProps {
    title: string;
    text: string;
}

const Förderung = ({ title, text }: FörderungProps) => {
    return (
        <div className="h-full w-full max-w-7xl p-5 flex flex-col lg:flex-row space-x-0 justify-between bg-gray-100 lg:space-x-24 space-y-5 lg:space-y-0 items-center rounded-xl">
            <h2 className="min-w-[25%] text-4xl">{title}</h2>
            <p className="text-base xl:text-lg text-justify">
                {text}
            </p>
        </div>
    )
}

export default Förderung