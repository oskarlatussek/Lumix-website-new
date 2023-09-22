import type { NextPage } from 'next'

import Hero from '../components/general/Hero'
import Contact from '../components/general/Contact'
import ImageSection from '../components/section/ImageSection'
import Process from '../components/section/Process'
import KonfiguratorAddress from '../components/section/KonfiguratorAddress'
import SubpageLandingpages from '../components/section/SubpageLandingpages'

const Produkte: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center max-w-full">
        <div
          style={{
            backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-full bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center"
        >
          <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

          <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
            <h3
              className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}
            >
              Unsere Produkte
            </h3>
            <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">
              Individuelle Komplettlösungen, maßgeschneidert auf Ihre
              Bedürfnisse.
            </p>

            {/* <Link href="#first_section">
                            <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s z-10 border border-gray-300 text-gray-300 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                                Mehr Erfahren
                            </a>
                        </Link> */}
          </div>
          <KonfiguratorAddress />
        </div>
        <Process />

        <SubpageLandingpages
          yellowTitle="Solarmodule"
          text="Effiziente und verlässliche Solarmodule sind essentiell für den maximalen Ertrag Ihrer Solaranlage. Deshalb arbeiten wir ausschließlich mit namhaften Herstellern zusammen. Welches Modul für Ihre Gegebenheiten am besten geeignet ist, bietet die Grundlage jeder unserer individuellen Kaufempfehlungen. Unser Angebot umfasst selbstverständlich auch hochqualitative Glas/Glas Module für besonders lange Haltbarkeit."
          logo1="/Logos/Module/solarfabrik.png"
          logo2="/Logos/Module/ibc.jpg"
          logo3="/Logos/Module/meyerburger.png"
          logo4="/Logos/Module/jinko.svg"
          logo5="/Logos/Module/jolywood.webp"
          logo6="/Logos/Module/jasolar.png"
          image="/Images/module.webp"
          left
        />

        <SubpageLandingpages
          yellowTitle="Wechselrichter"
          text="Auch bei dieser wichtigen Komponente setzen wir ausschließlich auf hochwertige Produkte. Es unser Anspruch Ihnen einen optimal dimensionierten Wechselrichter anzubieten, denn davon hängen Wirtschaftlichkeit und Effizienz jeder Anlage entscheidend ab. In Kombination mit Batteriespeichern bieten wir auch Hybridwechselrichter an."
          logo1="/Logos/Wechselrichter/sma.png"
          logo2="/Logos/Wechselrichter/solaredge.png"
          logo3="/Logos/Wechselrichter/fox.png"
          logo4="/Logos/Wechselrichter/sofar.jpg"
          logo5="/Logos/Wechselrichter/kaco.png"
          logo6="/Logos/Wechselrichter/fenecon.png"
          image="/Images/wechselrichter.webp"
        />

        <SubpageLandingpages
          yellowTitle="Wallboxen"
          text="Passend zu Ihrer Solaranlage bieten wir Ihnen auch gerne E-Ladestationen für Ihr Eigenheim oder Gewerbe an. Dabei achten wir stets auf eine einfache und intuitive Bedienbarkeit, sowie die passende Monitoring- und Abrechnungssoftware. Selbstverständlich kann eine Wallbox auch ohne Photovoltaikanlage verbaut werden."
          logo1="/Logos/Wallboxen/abl.png"
          logo2="/Logos/Wallboxen/keba.png"
          logo3="/Logos/Wallboxen/myenergi.png"
          logo4="/Logos/Wechselrichter/sma.png"
          image="/Images/wallbox.webp"
          left
        />

        <SubpageLandingpages
          yellowTitle="Batteriesysteme"
          text="Der Batteriespeicher erhöht den Eigenverbrauch Ihres Anlagesystems enorm und wird mit zunehmend steigenden Strompreisen immer rentabler. Da das Batteriesystem einer der größten Investitionspunkte eines Anlagesystems ist, ist das Preis-Leistungsverhältnis besonders wichtig. Daher arbeiten wir ausschließlich mit namenhaften Herstellern zusammen, die für Qualität und lange Haltedauer stehen."
          logo1="/Logos/Batteriespeicher/byd.png"
          logo2="/Logos/Batteriespeicher/sonnen.png"
          logo3="/Logos/Batteriespeicher/e3dc.png"
          logo4="/Logos/Batteriespeicher/fox.png"
          logo5="/Logos/Batteriespeicher/fenecon.png"
          logo6="/Logos/Batteriespeicher/sofar.jpg"
          image="/Images/batterie.webp"
        />

        <SubpageLandingpages
          yellowTitle="Montagegestelle"
          text="Das Montagegestell dient zur Befestigung der Module. Bei Anlagenlaufzeiten von 30 Jahren und mehr ist nur beste Qualität aus korrosionsfestem Material und eine hochwertige Konstruktion geeignet, um die Sicherheit der Anlage über die komplette Lebensdauer zu gewährleisten. Um Dach und Anlage optimal aufeinander abzustimmen, arbeiten wir mit mehreren Herstellern zusammen, die unterschiedliche Systemformate anbieten. Dank unserer Partner im Bereich Metallbau und unsere internen Kompetenzen können wir auch Sonderlösungen realisieren."
          logo1="/Logos/Montagegestell/corab.png"
          logo2="/Logos/Montagegestell/k2.png"
          logo3="/Logos/Montagegestell/tritec.png"
          logo4="/Logos/Montagegestell/viessmann.svg.png"
          logo5="/Logos/Montagegestell/altec.png"
          logo6="/Logos/Montagegestell/venturama.png"
          image="/Images/montage.webp"
          left
        />

        <Contact />
      </div>
    </>
  )
}

export default Produkte
