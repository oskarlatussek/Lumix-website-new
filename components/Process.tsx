import Step from "./Step"

const Process = () => {

    return (
        
        <div className="border w-full h-full min-h-screen justify-center flex p-10 items-center">
            
            <div className="h-96 w-2 relative z-0 rounded-full bg-yellow-400"/>
            <div className="flex z-10 -ml-11 flex-col">
            <Step number="1" stepname="Kontakt" discription="Geben Sie über unser Online-Formular in wenigen Schritten die wichtigsten Eckdaten zu Ihrem Haus an.Millionär und BadBoy" />
            <Step number="2" stepname="Beratung" discription="Unsere Enpal-Engine konfiguriert anhand Ihrer Angaben und allen verfügbaren Technologien genau die richtige Solar-Lösung für Sie." />
            <Step number="3" stepname="Planung" discription="Geben Sie über unser Online-Formular in wenigen Schritten die wichtigsten Eckdaten zu Ihrem Haus an.Millionär und BadBoy" />
            <Step number="4" stepname="Montage" discription="Eines unserer erfahrenen Handwerker-Teams in Ihrer Region installiert Ihre neue Solaranlage binnen eines Tages." />





            </div>
        </div>
    )

}

export default Process
