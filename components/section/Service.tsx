import Link from "next/link"
import ServiceCard from "../section-element/ServiceCard"


const Service = () => {

    return (
        <div id="service" className="w-full h-full p-2 py-10 sm:p-10 flex flex-col space-y-10 items-center">
            <p className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
                Auf uns können Sie zählen!
            </p>

            <div className="w-full grid gird-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 2xl:gap-5 justify-items-center max-w-screen-2xl">
                <ServiceCard title="Individuelle Betreuung" text="Eine Photovoltaikanlage ist kein Produkt von der Stange. Jede Anlage muss sorgfältig geplant und auf die spezielle Umgebung angepasst werden. Wir planen Ihre Anlage zusammen mit Ihnen nach ihren Wünschen und Bedürfnissen." />
                <ServiceCard title="Professionelle Planung" text="Wir planen Ihr System persönlich und speziell auf Sie zugeschnitten, denn eine professionelle Planung ist die Grundlage für eine langjährige Funktionalität. So können Sie sicher sein, dass die Anlage effizient arbeitet und zu Ihren Bedürfnissen passt." />
                <ServiceCard title="Zuverlässige Montage" text="Unsere erfahrenen Montageteams installieren Ihre Photovoltaikanlage je nach Größe innerhalb weniger Tage. Von der Unterkonstruktion bis hin zum Wechselrichteranschluss, bei uns bekommen Sie alle Leistungen aus einer Hand." />
                <ServiceCard title="Zertifizierter Anschluss" text="Nach Fertigstellung der Montage ist Ihre Anlage bereit, um angeschlossen und in Betrieb genommen zu werden. Unsere zertifizierten Elektriker nehmen dabei den Netzanschluss zeitnah vor, Sie müssen sich um nichts kümmern." />
            </div>

            <Link href="/team">
                <a className="rounded-full z-10 border-2 font-medium border-black max-w-max px-5 py-3 text-xl cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                    Unser Team
                </a>
            </Link>
        </div>
    )

}

export default Service
