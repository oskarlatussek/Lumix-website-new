const TeamCard = ({ name, discription, img_src, }: any) => {

    return (



        <div className="border relative  h-1/4 w-1/3 max-w-lg border-gray-400 rounded-xl" >
            <img className="rounded-xl" src={img_src} alt="" />

            <div className="absolute flex flex-col items-center bottom-0 w-full p-3 bg-gray-50/60 rounded-b-xl">
                <p className="font-medium">{name}</p>
                <p className="font-light">{discription}</p>

            </div>

        </div>








    )

}

export default TeamCard