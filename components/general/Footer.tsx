import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";


const Footer = () => {


    return (
        <footer id="contact" className="mt-10 p-5 sm:p-10 2xl:p-20 xl:pb-24 flex relative flex-col-reverse xl:flex-row justify-between items-center space-x-0 xl:space-x-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 flex-col gap-2 w-full max-w-full sm:max-w-max gap-x-10 text-2xl py-20 xl:py-0 min-w-max">
                <Link href={`/photovoltaik`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Photovoltaik</a>
                </Link>
                <Link href={`/gewerbe`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Gewerbliche Anlagen</a>
                </Link>
                <Link href={`/produkte`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Unsere Produkte</a>
                </Link>
                <Link href={`/team`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Das Team</a>
                </Link>
                <Link href={`/rendite`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Lohnt sich PV?</a>
                </Link>
                <Link href={`/`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Startseite</a>
                </Link>
                <Link href={`/konfigurator`}>
                    <a className="text-gray-400 hover:text-black transition duration-200 ease-linear">Angebot einholen</a>
                </Link>
            </div>

            <div className="flex flex-col-reverse sm:flex-row space-x-0 sm:space-x-14 w-full xl:w-1/2 h-full justify-center items-start sm:items-center">
                <div className="flex flex-col space-y-3 items-start sm:items-end w-">
                    <p className="text-xl sm:text-3xl font-medium pb-2 min-w-max">Kontaktieren Sie uns!</p>

                    <div className="flex items-center space-x-3 text-xl">
                        <FiMail className="text-yellow-400 text-3xl" />
                        <a href="mailto:info@lumix.solar" className="text-gray-600 hover:text-black transition duration-200 ease-linear">info@lumix.solar</a>
                    </div>
                    <div className="flex items-center space-x-3 text-xl">
                        <FiPhone className="text-yellow-400 text-3xl" />
                        <a href="tel:+491627656187" className="text-gray-600 hover:text-black transition duration-200 ease-linear">+49 162 7656 187</a>
                    </div>
                </div>

                <a href="/" className="w-full sm:w-1/2 mb-10 sm:mb-0 max-w-sm">
                    <img src="/Logos/lumix-logo-schwarz.png" />
                </a>
            </div>

            <div className="absolute bottom-3 right-5 text-gray-400 flex items-center space-x-1">
                <Link href={`/impressum`}>
                    <a className=' hover:text-yellow-400 transition ease-in-out duration-300'>Impressum</a>
                </Link>
                <hr className="border-gray-600 w-5 rotate-90" />
                <Link href={`/datenschutz`}>
                    <a className=' hover:text-yellow-400 transition ease-in-out duration-300'>Datenschutz</a>
                </Link>
            </div>

        </footer>

    )
}

export default Footer
