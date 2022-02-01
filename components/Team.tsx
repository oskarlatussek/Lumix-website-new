import TeamCard from "./TeamCard"

const Team = () => {

    return (
        <div className="w-full border h-full min-h-screen flex flex-col items-center p-6">
            <p className="text-7xl mb-20">Unser Team</p>
            <p className="text-lg text-gray-800 mb-20">Blablablablafotze</p>
            <div className="border space-x-20 w-full  flex justify-evenly p-10 items-center">
            <TeamCard name="Maximilian Maria Mühlhause" img_src="/Logos/IMG_4318.JPG"  discription="Millionär und BadBoy"/>
            <TeamCard name="Maximilian Maria Mühlhause" img_src="/Logos/IMG_4318.JPG"  discription="Millionär und BadBoy"/>
            <TeamCard name="Maximilian Maria Mühlhause" img_src="/Logos/IMG_4318.JPG"  discription="Millionär und BadBoy"/>
            </div>

            

        </div>
    )

}

export default Team
