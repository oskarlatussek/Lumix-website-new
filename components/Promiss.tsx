import Card from "./Card"

const Promiss = () => {

    return (
        <div className="w-full border h-full p-6 bg-gray-50 ">
<p className="border text-center font-WorkSans pt-5 pb-5 text-5xl font-normal antialiased text-gray-900"> 
                Unsere Versprechen und Leistungen
            </p>
    
        <div className="border w-full flex justify-evenly p-10 items-center">
            
            
        <Card title="Persönliche Beratung" classes="bg-gray-200" text="Wir bieten Ihnen eine persönlich Beratung durch unsere ExpertInnen vor Ort. Hier wird Ihre Anlage auf Ihre individuellen Bedüfnisse angepasst, denn eine Anlage kann nicht von der Stange geplant werden." button="Mehr Erfahren"/>
        <Card title="Individuelle Anpassung" classes="bg-gray-300" text="Anlagen, zugeschnitten auf Ihre Bedürfnisse." button="Mehr Erfahren"/>
        <Card title="Zeitnahe Montage" text="" classes="bg-yellow-200"button="Mehr Erfahren"/> 
        <Card title="Inbetriebnahme" classes="bg-yellow-100"text=""button="Mehr Erfahren"/>
        <Card title="Service" classes="bg-orange-100" text="" button="Mehr Erfahren"/>
        </div>
        </div> 
    )

}

export default Promiss
