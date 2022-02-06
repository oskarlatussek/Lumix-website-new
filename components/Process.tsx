import Step from "./Step"

const Process = () => {

    return (

        <div id="process" className="w-full h-full justify-center flex flex-col p-5 sm:p-10 items-center py-44 sm:py-44">

            <p className="text-4xl lg:text-5xl font-medium text-center max-w-2xl mb-20"><span className="text-yellow-400 font-semibold">Schnell & Unkompliziert</span><br/> zu Ihrer neuen Solaranlage!</p>

            <div className="flex items-center relative">
                <div className="absolute top-0 left-44 h-full w-1 bg-yellow-400 hidden sm:block" />
                <div className="flex flex-col space-y-10">
                    <Step number="1" stepname="Kontakt" discription="Kontaktieren Sie uns! Wir besprechen vorab die Rahmenbedingungen und vereinbaren einen unverbindlichen Kundentermin." />
                    <Step number="2" stepname="Beratung" discription="Unsere ExpertInnen besichtigen gemeinsam mit Ihnen den Anlagenstandort und nehmen die für ein Angebot notwendigen Daten auf." />
                    <Step number="3" stepname="Planung" discription="Wir planen Ihre Anlage individuell und professionell nach Ihren Vorgaben und Bedürfnissen." />
                    <Step number="4" stepname="Montage" discription="Eines unserer Montageteams installiert Ihre Anlage je nach Größe innerhalb von wenigen Tagen." />
                </div>
            </div>

        </div>
    )

}

export default Process
