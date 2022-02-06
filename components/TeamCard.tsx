const TeamCard = ({ name, discription, img_src, }: any) => {

    return (



        <div className="relative w-1/3 max-w-lg border-gray-400/30 rounded-md" >
            <img className="rounded-md" src={img_src} alt="" />

            <div className="absolute left-2/4 bottom-10 flex space-x-4 items-center bg-yellow-400/30 backdrop-blur">
                {/* <p className="text-xl text-gray-700 text-right max-w-[15rem]">{discription}</p> */}
                <div className="border-2 rounded-ful border-yellow-400 h-28"/>
                <p className="text-4xl font-medium max-w-xs text-left pr-4">{name}</p>
            </div>

{/* 
            <div className="absolute flex flex-col items-center bottom-0 w-full p-3 bg-gray-50/60 rounded-b-xl">
                <p className="font-semibold text-4xl max-w-xs">{name}</p>
                <p className="font-light">{discription}</p>
            </div> */}

        </div>








    )

}

export default TeamCard