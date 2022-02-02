import Card from "./Card"

const Service = () => {

    return (
        <div id="service" className="w-full h-full p-10 pb-20 pt-44 ">
            <p className="text-center text-8xl font-medium mb-10">
                Auf uns können Sie zählen!
            </p>

            <div className="w-full flex justify-center p-10 items-start">
                <Card title="Individualität" text="Eine Photovoltaikanlage ist kein Produkt von der Stange. Jede Anlage muss sorgfältig geplant und auf die spezielle Umgebung angepasst werden. Wir planen Ihre Anlage zusammen mit Ihnen nach Ihren Wünschen und Bedürfnissen." />
                <Card title="Professionelle Planung" text="Die Planung einer Solaranlage ist die Grundlage für einen reibungslosen Betrieb. Wir planen Ihre Solaranlage persönlich und von Hand. Ob reine Solaranlage oder in kombination mit einer Batteriespeicheranlage, nach Abschluss ist Ihre Solaranlage auf Sie zugeschnitten und angepasst." />
                <Card title="Zuverlässige Montage" text="Unsere erfahrenen Montageteams montieren die Gleichstromanlage je nach Anlagengröße in wenigen Tagen und nehmen auch die Montage von Wechselrichter und Batteriespeicher vor." />
                <Card title="Zertifizierter Anschluss" text="Unsere zertifizierten Partner nehmen den Netzanschluss Ihrer Anlage zeitnah vor." />
            </div>
        </div>
    )

}

export default Service
