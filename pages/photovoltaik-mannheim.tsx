import type { NextPage } from 'next'

import Process from '../components/section/Process'
import SubpageLandingpages from '../components/section/SubpageLandingpages'

import KonfiguratorAddress from '../components/section/KonfiguratorAddress'
import Link from 'next/link'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  FaSolarPanel,
  FaHandHoldingDollar,
  FaEarthAmericas,
} from 'react-icons/fa6'
import CountUp from 'react-countup'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import Contact from '../components/general/Contact'

const PhotovoltaikMannheim: NextPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Photovoltaik in Mannheim │ Lumix Solar GmbH</title>
          <meta
            name="description"
            content="Photovoltaik Mannheim: kompetenter Anbieter 🌞 Regionaler Partner ✔️ Individuelle Projekte ✔️ Liefergarantie ➡️ Jetzt starten❕"
          />
        </Helmet>
        <div className="flex flex-col items-center max-w-full">
          <div
            style={{
              backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/05/29/27/59/1000_F_529275953_MnISE2r90Y2WNNhyWH249QqIxPfFkAnb.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full test bg-cente min-h-screen group relative h-full flex flex-col justify-center items-center"
          >
            <div className="absolute w-full h-full z-0 bg-black/50 backdrop-blur-s animate__animated animate__fadeIn animate__delay-1s" />

            <div className="p-5 sm:p-10 flex flex-col items-center relative space-y-5 sm:space-y-10 py-10 mt-20 text-center">
              <h3
                className={`w-full sm:w-4/5 z-10 animate__animated animate__fadeIn animate__delay-2s pb-0 md:pb-5`}
              >
                Photovoltaik in Mannheim – Ihr regionaler Partner
              </h3>
              <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">
                Photovoltaik bietet Kunden in Mannheim die Möglichkeit,
                umweltfreundlich Strom selbst zu produzieren. Informieren Sie
                sich darüber, wie wir Sie beim Umstieg auf eine klimaneutrale
                Stromerzeugung unterstützen und Ihnen dabei helfen, Stromkosten
                nachweislich zu senken.
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
            yellowTitle="Solaranlage "
            title=" vom regionalen Anbieter aus Mannheim"
            bullet1="Klimaneutrale Stromerzeugung"
            bullet2="Unabhängigkeit von hohen Stromkosten"
            bullet3="Senkung des Stromausfallrisikos"
            bullet4="Hohe Eigenverbrauchsquote"
            bullet5="Effiziente Kombination mit Wallbox"
            bullet6="Individuelle Projektierung"
            bullet7="Regionaler Ansprechpartner"
            bullet8="Zuverlässige Liefergarantie"
            image="https://as2.ftcdn.net/v2/jpg/06/06/35/13/1000_F_606351333_2E2KZd5gZDejot9kVR11E4ntFpYOpR5q.jpg"
            link="/konfigurator"
            linkText="Heute noch Termin vereinbaren!"
            icons2
            left
          />

          <div className="items-center w-full justify-center pt-10 p-2 sm:p-5">
            <p className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl pb-8 text-center lg:text-center">
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Ihre Vorteile
              </span>{' '}
              wenn Sie mit uns zusammenarbeiten
            </p>
            <p className="text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] p-5 sm:p-10 text-center lg:text-center">
              Photovoltaik ist nicht weniger als eine optimale Lösung des
              drängenden Energieproblems und bietet Ihnen in Mannheim
              faszinierende Möglichkeiten. Mit einer innovativen
              Photovoltaik-Anlage der Firma Lumix Solar machen Sie sich endlich
              unabhängig von stetig steigenden Stromkosten, denn dank moderner
              Stromspeicher und hervorragender Effizienz können Sie 80 Prozent
              des Solarstroms für den eigenen Haushalt und das Aufladen Ihres
              E-Autos verwenden. Als leistungsstarker Photovoltaik-Anbieter
              stellen wir Ihnen ebenso ausgereifte wie innovative Lösungen zur
              Verfügung und konfigurieren Ihre PV-Anlage in Mannheim
              individuell. Wir bieten hochwertige Photovoltaik-Lösungen für
              Privathaushalte und Gewerbebetriebe in Mannheim. Unser engagiertes
              Team überzeugt mit vorbildlichem Service und steht Ihnen auch nach
              der Montage der Photovoltaik-Anlage jederzeit mit Rat und Tat zur
              Seite. Sie wünschen eine persönliche Beratung und fragen sich:
              Lohnt sich PV? Nutzen Sie unsere ausführliche Beratung, bei der
              wir Ihnen die Optionen der Photovoltaik-Technologie erläutern und
              Sie hinsichtlich der Konfiguration einer PV-Anlage in Mannheim
              informieren. Selbstverständlich können Sie auch direkt ein Angebot
              für Ihre Photovoltaik-Anlage anfordern.
            </p>
            <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
              <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                <FaSolarPanel className=" text-yellow-400 text-7xl" />
                <CountUp
                  enableScrollSpy={true}
                  prefix=">"
                  className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center"
                  end={700}
                />
                <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                  Installationen
                </p>
              </div>
              <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                <FaHandHoldingDollar className="text-yellow-400 text-7xl" />
                <CountUp
                  enableScrollSpy={true}
                  suffix="Mio"
                  prefix=">"
                  decimal="."
                  decimals={1}
                  className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center"
                  end={1.3}
                />
                <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                  Kundenersparnis (€)
                </p>
              </div>
              <div className="flex sm:p-0 p-7 flex-col items-center w-full justify-center">
                <FaEarthAmericas className="text-yellow-400 text-7xl" />
                <CountUp
                  enableScrollSpy={true}
                  separator=""
                  suffix="t"
                  className="font-semibold w-full text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl py-5 text-center lg:text-center"
                  end={1300}
                />
                <p className="font-semibold text-xl text-xl w-full leading-tight sm:leading-tight lg:leading-tight font-medium max-w-[100%] text-center lg:text-center">
                  Co2 Einsparungen
                </p>
              </div>
            </div>
            <div className="flex items-center w-full justify-center py-10">
              <Link href={{ pathname: '/konfigurator' }}>
                <a className="self-center flex text-xl items-center space-x-2 md:self-start bg-yellow-400 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                  <span>Hier Angebot anfordern!</span>
                  <HiOutlineArrowSmRight className="text-xl" />
                </a>
              </Link>
            </div>
          </div>

          <SubpageLandingpages
            yellowTitle="Innovativer Photovoltaik-Anbieter"
            title=" in Mannheim"
            text="Als kompetenter Photovoltaik-Anbieter aus Mannheim haben wir es uns zum Ziel gemacht, einen Beitrag zur Energiewende zu leisten. Photovoltaik ermöglicht es sowohl Privathaushalten als auch Unternehmen, selbst und völlig eigenständig grüne Energie aus Sonnenlicht herzustellen. Somit unterstützt Sie Ihr regionaler Photovoltaik-Anbieter dabei, in Mannheim unabhängig von den Preissteigerungen der Stromkonzerne zu werden. Darüber hinaus trägt Photovoltaik dazu bei, dass Sie Stromausfällen im öffentlichen Stromnetz gelassen entgegenblicken können. Photovoltaik-Anlagen überzeugen mittlerweile mit ausgereifter Technologie, zudem profitieren Sie in Deutschland von steuerlichen Vorteilen, sodass sich die Investition in eine Photovoltaik-Anlage in jedem Fall lohnt – entscheiden Sie sich für einen Qualitätsanbieter aus Mannheim, der Ihnen nicht nur hochwertige Produkte liefert, sondern auch den perfekten Service für die Montage, Wartung und Reparatur der Solartechnologie bietet. Kurze Wege, Liefergarantien und eine unkomplizierte Kommunikation machen Lumix Solar zum idealen Partner, wenn Sie eine Photovoltaik-Anlage in Mannheim installieren möchten."
            image="https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg"
            link="/konfigurator"
            linkText="Jetzt Solarcheck starten!"
          />

          <div className="flex items-center w-full justify-center py-10">
            {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
            <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
              <span className="drop-shadow-none">
                Unabhängige, effiziente und nachhaltige{' '}
              </span>
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Stromerzeugung
              </span>
              <span className="drop-shadow-none"> für alle!</span>
            </p>
          </div>
          <SubpageLandingpages
            yellowTitle="Photovoltaik-Anlage"
            title=" kaufen bei Ihrem vertrauensvollen Partner in Mannheim"
            text="Sie wollen eine Photovoltaik-Anlage kaufen und in Mannheim einen optimalen Service erhalten? Als renommierter Photovoltaik-Anbieter stellen wir unseren Kunden einen exzellenten Service zur Verfügung, der weit über die Lieferung der PV-Anlage hinausgeht.  Nach der Beratung werden wir unter Berücksichtigung der örtlichen Gegebenheiten und Ihrer Verbrauchsdaten planen, aus wie vielen Solarmodulen die Photovoltaik-Anlage in Mannheim bestehen sollte. Anschließend erfolgt eine Berechnung der Wirtschaftlichkeit. Wenn Sie uns nach der Planung den Auftrag erteilen, die Photovoltaik-Anlage zu installieren, übernehmen unsere Fachleute die Montage auf Ihrem Dach in Mannheim. Selbstverständlich erledigt unser Team auch die Montage von Wechselrichtern sowie Stromspeichern und installiert auf Wunsch die Backup-Box und die Wallbox für Ihr Elektroauto. Nach der Inbetriebnahme können Sie bequem mobil per App kontrollieren, wie viel Strom erzeugt und verbraucht wird. Gestalten Sie jetzt Ihre eigene persönliche Energiewende – mit Lumix Solar."
            image="https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg"
            linkText="Hier Angebot anfordern!"
            link="/konfigurator"
            left
          />

          <SubpageLandingpages
            yellowTitle="Photovoltaik-Anlage "
            title="kaufen in Mannheim – unsere Leistungen:"
            bullet1="Persönliche Beratung"
            bullet2="Individuelle Planung der PV-Anlage"
            bullet3="Berechnung der Wirtschaftlichkeit"
            bullet4="Montage der PV-Anlage"
            bullet5="Prüfung und Inbetriebnahme"
            bullet6="Wartung und Reparatur"
            video="https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4"
            linkText="Noch Fragen? Dann schreiben Sie uns"
            link="/konfigurator"
            icons
          />

          <Contact />
        </div>
      </HelmetProvider>
    </>
  )
}

export default PhotovoltaikMannheim
