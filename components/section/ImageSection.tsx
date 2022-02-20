interface ImageSectionProps {
    image: string;
}

const ImageSection = ({ image }: ImageSectionProps) => {

    return (
        <div className='group max-w-3xl lg:max-w-full w-full lg:w-1/2 min-w-[50%] h-96 lg:h-auto max-h-full overflow-hidden flex items-center justify-center rounded-xl z-10 mb-5 lg:mb-0'>
            <img src={image} className='group-hover:scale-105 transition duration-300 ease-linear rounded-xl w-full h-full object-cover' />
        </div>
    )
}

export default ImageSection
