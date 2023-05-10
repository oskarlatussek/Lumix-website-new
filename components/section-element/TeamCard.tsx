import "animate.css"


interface TeamCardProps {
    name: string;
    img_src: string;
}

const TeamCard = ({ name, img_src }: TeamCardProps) => {

    return (
        <div className='min-w-xl self-start relative max-w-2xl overflow-hidden rounded-xl z-20 group'>
        <img src={img_src} className='group-hover:scale-105 max-w-xs transition duration-300 ease-linear rounded-xl w-full h-full' />
        <p className='absolute w-full bottom-0 text-xs xs:text-base text-center backdrop-blur-lg bg-black/60 p-1 xs:p-2 text-yellow-400 font-medium'>{name}</p>
    </div>
    )

}

export default TeamCard
