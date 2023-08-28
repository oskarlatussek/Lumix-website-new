import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import Contact from './Contact';


const Footer = () => {


    return (<>

		<p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center pb-5 sm:pb-10 w-full"><span className="drop-shadow-none">Der </span><span className="text-yellow-400 drop-shadow-none font-bold">Startschuss</span><span className="drop-shadow-none"> für Ihr </span><span className="text-yellow-400 drop-shadow-none font-bold">Solarprojekt!</span></p>

        <footer style={{ top: 0, backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} id="contact" className="bg-black/50 backdrop-blur-s 2xl:p-20 flex relative flex-col-reverse justify-between items-center space-x-0">
           <div style={{ top: 0 }} className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />
				
					 <div className="w-full flex flex-col pb-16 relative ">

						<Contact />
						<div className="p-5 sm:p-5 sm:pt-16 flex flex-col md:flex-row justify-between">
						<a href="/" className="w-full sm:w-1/2 mb-10 sm:mb-0 max-w-sm">
								<img src="/Logos/lumix-logo-weiß.png" />
						</a>
						<div className="flex lg:flex-row flex-col lg:gap-2 gap-0 w-full max-w-full sm:max-w-max gap-x-10 text-lg py-20 md:py-0 min-w-max">

							<div  className="flex flex-col">
									<span className="font-semibold text-white w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] ">
										Wichtige Links
									</span>
									<Link href={`/`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Startseite</a>
									</Link>
									<Link href={`/photovoltaik`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik</a>
									</Link>
									<Link href={`/konfigurator`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Angebot einholen</a>
									</Link>
									<Link href={`/produkte`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Unsere Produkte</a>
									</Link>
									<Link href={`/team`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Das Team</a>
									</Link>
									<Link href={`/gewerbe`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Gewerbliche Anlagen</a>
									</Link>
									<Link href={`/karriere`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Karriere</a>
									</Link>
									<Link href={`/rendite`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Lohnt sich PV?</a>
									</Link>
									<Link href={`/`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Startseite</a>
									</Link>
									</div>
							</div>

							<div className="flex lg:flex-row flex-col lg:gap-2 gap-0 w-full max-w-full sm:max-w-max gap-x-10 text-lg py-20 sm:py-0 xl:py-0 min-w-max">
									<div  className="flex flex-col">
									<span className="font-semibold text-white w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] ">
										Regional
									</span>
									<Link href={`/solaranlage`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage</a>
									</Link>
									<Link href={`/solarmodule`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solarmodule</a>
									</Link>
									<Link href={`/stromspeicher`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Stromspeicher</a>
									</Link>
									<Link href={`/photovoltaik-mannheim`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Mannheim</a>
									</Link>
									<Link href={`/photovoltaik-beratung`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Beratung</a>
									</Link>
									<Link href={`/photovoltaik-planung`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Planung</a>
									</Link>
									<Link href={`/photovoltaik-montage`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Montage</a>
									</Link>
									<Link href={`/photovoltaik-heidelberg`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Heidelberg</a>
									</Link>
									<Link href={`/solaranlage-heidelberg`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage Heidelberg</a>
									</Link>
									<Link href={`/photovoltaik-ludwigshafen`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Ludwigshafen</a>
									</Link>
									</div>
									<div  className="lg:mt-7 mt-0 flex flex-col">
									<Link href={`/solaranlage-ludwigshafen`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage Ludwigshafen</a>
									</Link>
									<Link href={`/photovoltaik-darmstadt`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Darmstadt</a>
									</Link>
									<Link href={`/solaranlage-darmstadt`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage Darmstadt</a>
									</Link>
									<Link href={`/photovoltaik-mainz`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Mainz</a>
									</Link>
									<Link href={`/solaranlage-mainz`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage Mainz</a>
									</Link>
									<Link href={`/photovoltaik-wiesbaden`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Wiesbaden</a>
									</Link>
									<Link href={`/solaranlage-wiesbaden`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage Wiesbaden</a>
									</Link>
									<Link href={`/photovoltaik-worms`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Photovoltaik Worms</a>
									</Link>
									<Link href={`/solaranlage-worms`}>
											<a className="text-gray-400 hover:text-white transition duration-200 ease-linear">Solaranlage Worms</a>
									</Link>
									</div>
							</div>
						</div>
            {/*<div className="flex flex-col-reverse sm:flex-row space-x-0 sm:space-x-14 w-full xl:w-1/2 h-full justify-center items-start sm:items-center">
                <div className="flex flex-col space-y-3 items-start sm:items-end w-">
                    <p className="text-xl sm:text-3xl font-medium pb-2 min-w-max">Kontaktieren Sie uns!</p>

                    <div className="flex items-center space-x-3 text-xl">
                        <FiMail className="text-yellow-400 text-3xl" />
                        <a href="mailto:info@lumix.solar" className="text-gray-600 hover:text-white transition duration-200 ease-linear">info@lumix.solar</a>
                    </div>
                    <div className="flex items-center space-x-3 text-xl">
                        <FiPhone className="text-yellow-400 text-3xl" />
                         <a href="tel:+491627656187" className="text-gray-600 hover:text-white transition duration-200 ease-linear">+49 162 7656 187</a> 
                        <a href="tel:+49621150350" className="text-gray-600 hover:text-white transition duration-200 ease-linear">+49 621 150 350</a>

                    </div>
                </div>
            </div>*/}

            <div className="absolute bottom-3 right-5 text-gray-400 flex items-center space-x-1">
                <Link href={`/impressum`}>
                    <a className=' hover:text-yellow-400 transition ease-in-out duration-300'>Impressum</a>
                </Link>
                <hr className="border-gray-600 w-5 rotate-90" />
                <Link href={`/datenschutz`}>
                    <a className=' hover:text-yellow-400 transition ease-in-out duration-300'>Datenschutz</a>
                </Link>
            </div>
					</div>
        </footer>
</>
    )
}

export default Footer
