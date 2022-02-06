import TeamCard from "./TeamCard"

const Team = () => {

    return (
        <div id="team" className="w-full h-full items-center flex flex-col p-10 py-20">

            <div className="flex space-x- items-stretch mb-10">
                <div className="flex items-center bg-yellow-400/30">
                    <p className="text-xl text-gray-800 text-right max-w-xs px-8">Lumix Solar ist ein in Mannheim ansässiges Photovoltaikunternehmen mit dem Scherpunkt auf Vertrieb und Montage.</p>
                </div>
                <div className="border-4 rounded-ful border-yellow-400 h-48" />
                <p className="text-8xl font-medium max-w-xs text-left pl-8">Das Team</p>
            </div>


            <div className="space-x-20 w-full flex justify-center p-10 items-center">
                <TeamCard name="Johannes Gerstlauer" img_src="/Images/Team/max.jpg" discription="Millionär und BadBoy bereit um die Welt zu erobern!" />
                <TeamCard name="Maximilian Mühlhause" img_src="/Images/Team/max.jpg" discription="Millionär und BadBoy bereit um die Welt zu erobern!" />
                <TeamCard name="Oskar Latussek" img_src="/Images/Team/max.jpg" discription="Millionär und BadBoy bereit um die Welt zu erobern!" />
            </div>

        </div>
    )

}

export default Team
