import "animate.css"


interface TeamCardProps {
    name: string;
    text: string;
    img_src: string;
}

const TeamCard = ({ name, text, img_src }: TeamCardProps) => {

    return (
        <div className='group w-full lg:w-1/3 relative max-w-sm animate__animated animate__fadeInUp animate__delay-1s animate__slow'>
            <div className='bg-black/10 absolute z-20 inset-0 w-full h-full group-hover:opacity-0 opacity-100 transition duration-500 ease-linear' />

            <div className='min-w-xs h-full overflow-hidden relative rounded-xl z-10'>
                <img src={img_src} className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full' />
            </div>

            <div className='absolute z-20 bottom-0 left-0 w-full flex text-center flex-col space-y-1 items-center justify-center py-3 px-2 backdrop-blur bg-black/50 rounded-b-xl'>
                <p className='text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-yellow-400 font-medium'>{name}</p>
                <p className="text-gray-300 px-4 text-sm sm:text-lg lg:text-sm xl:text-lg">{text}</p>
            </div>
        </div>
    )

}

export default TeamCard
