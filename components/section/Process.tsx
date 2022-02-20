import Step from "../section-element/Step"

const Process = () => {

    return (

        <div id="first_section" className="w-full justify-center flex flex-col p-5 sm:p-10 pt-20 sm:pt-20 items-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl text-center max-w-2xl mb-20 leading-tight sm:leading-tight lg:leading-tight"><span className="text-yellow-400 font-semibold text-4xl sm:text-5xl lg:text-6xl">Schnell & Unkompliziert</span><br/> zu Ihrer neuen Solaranlage!</p>

            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-around w-full space-x-0 lg:space-x-5 xl:space-x-10 space-y-10 lg:space-y-0 max-w-screen-2xl">

                <Step number={1} stepname="Kontakt" description="Kontaktieren Sie uns! Wir besprechen vorab die Rahmenbedingungen und vereinbaren einen unverbindlichen Kundentermin." />
                <Step number={2} stepname="Beratung" description="Unsere Experten besichtigen gemeinsam mit Ihnen den Anlagenstandort und nehmen die für ein Angebot notwendigen Daten auf." />
                <Step number={3} stepname="Planung" description="Wir planen Ihre Anlage individuell und professionell nach Ihren Vorgaben und Bedürfnissen." />
                <Step number={4} stepname="Montage" description="Eines unserer Montageteams installiert Ihre Anlage je nach Größe innerhalb von wenigen Tagen." />

            </div>

        </div>
    )

}

export default Process
