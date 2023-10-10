import type { NextPage } from 'next'

import Process from '../components/section/Process'
import SubpageLandingpages from '../components/section/SubpageLandingpages'
import Service from '../components/section/Service'
import KonfiguratorAddress from '../components/section/KonfiguratorAddress'
import Link from 'next/link'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Contact from '../components/general/Contact'
import {
  FaSolarPanel,
  FaHandHoldingDollar,
  FaEarthAmericas,
} from 'react-icons/fa6'
import CountUp from 'react-countup'
import Advantages from '../components/section/Advantages'
import Experts from '../components/section/Experts'
import Review from '../components/section/Reviews'

import { HiOutlineArrowSmRight } from 'react-icons/hi'

const PhotovoltaikDarmstadt: NextPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>PPhotovoltaik in Darmstadt │ Lumix Solar GmbH</title>
          <meta
            name="description"
            content="Photovoltaik Darmstadt: kompetenter regionaler Anbieter 🌞 Stromkosten reduzieren ✔️ Klimaschutz ✔️ Liefergarantie ➡️ Jetzt starten❕"
          />
        </Helmet>
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
                Photovoltaik-Anlage in Darmstadt installieren
              </h3>
              <p className="text-sm sm:text-lg lg:text-lg xl:text-lg leading-tight sm:leading-tight lg:leading-tight xl:leading-tight text-gray-300 font-medium max-w-4xl z-10 mb-44  sm:pb-0 pb-20 animate__animated animate__fadeIn animate__delay-3s">
                Eine leistungsstarke Photovoltaik-Anlage von Lumix Solar bietet
                Ihnen in Darmstadt die Möglichkeit, Strom klimaneutral selbst zu
                produzieren. Nutzen Sie die Solartechnik, um unabhängig von
                Stromanbietern zu werden – wir unterstützen Sie dabei mit
                unserem Rundum-Service.
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
            yellowTitle="Photovoltaik – "
            title="maßgeschneiderte Energielösungen für unsere Kunden:"
            bullet1="Erzeugen von umweltfreundlichem Sonnenstrom"
            bullet2="Unabhängigkeit von steigenden Strompreisen"
            bullet3="Kompetenter regionaler Anbieter nahe Darmstadt"
            bullet4="Maximale Eigenverbrauchsquote (bis zu 80 Prozent)"
            bullet5="Kombination mit Wallbox & Wärmepumpe möglich"
            bullet6="Bedarfsorientierte Planung der Photovoltaik-Anlage"
            bullet7="Detaillierte Wirtschaftlichkeitsberechnung"
            bullet8="Liefergarantie und Rundum-sorglos-Service"
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
              Photovoltaik ist eine mittlerweile ausgereifte Technologie, die
              Sie mit einer innovativen PV-Anlage von Lumix Solar in Darmstadt
              für sich nutzen können. Dank der Entwicklung moderner
              Stromspeicher werden mit Photovoltaik-Anlagen
              Eigenverbrauchsquoten von bis zu 80 Prozent erreicht. Sie können
              also den größten Teil Ihres Stromverbrauchs mit der Anlage decken
              und auf diese Weise Ihre Stromrechnung drastisch reduzieren.
              Dadurch wird die Wirtschaftlichkeit von Photovoltaik-Anlagen in
              Darmstadt enorm gesteigert.
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
            yellowTitle="Photovoltaik – "
            title="Investition in die Zukunft"
            text="Die Amortisationsdauer einer innovativen PV-Anlage beträgt weniger als zehn Jahre und die Lebensdauer mehr als 25 Jahre. Sind Sie daran interessiert, dauerhaft Energiekosten einzusparen und einen Beitrag zum Klimaschutz zu leisten? Fordern Sie jetzt Ihr Angebot für eine Photovoltaik-Anlage in Darmstadt an. "
            image="https://as2.ftcdn.net/v2/jpg/05/52/32/61/1000_F_552326147_QaFOH5cBtUxdtmLdDyhzAPjP3nfhYaAg.jpg"
            link="/konfigurator"
            linkText="Mehr erfahren"
          />

          <div className="flex items-center w-full justify-center py-10">
            {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
            <p className="hyphenate text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
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
            yellowTitle="PV-Anlage "
            title=" mit Speicher nahe Darmstadt kaufen"
            text="Für die Wirtschaftlichkeit einer Photovoltaik-Anlage ist es entscheidend, ob diese mit einem modernen Stromspeicher ausgestattet ist. Es lohnt sich somit in jedem Fall, eine PV-Anlage mit Speicher zu kaufen, um in Darmstadt einen optimalen Effekt zu erzielen. Die Speichertechnologie wurde in den letzten Jahren immer weiter verbessert und neue Produktionsverfahren tragen gleichzeitig dazu bei, dass die Kosten für eine PV-Anlage mit Speicher gesunken sind."
            image="https://as1.ftcdn.net/v2/jpg/05/54/39/78/1000_F_554397802_q8tSzs5NpQULONQpLxNy5aOMrtxut0Y8.jpg"
            linkText="Hier Angebot anfordern!"
            link="/konfigurator"
            left
          />
<Advantages />
          <SubpageLandingpages
            yellowTitle="Photovoltaik"
            title=" für eine bedarfsgerechte Stromversorgung"
            text="Ein häufiges Argument gegen die Nutzung von Photovoltaik in Privathaushalten besagt, dass Stromerzeugung und Stromverbrauch zeitlich nicht zusammenfallen. Denn die Stromproduktion der Photovoltaik-Anlage ist in den Mittagsstunden am größten, Familien verbrauchen jedoch morgens und abends den meisten Strom. Eine PV-Anlage mit Speicher stellt Ihnen den Sonnenstrom in Darmstadt stattdessen bedarfsgerecht zur Verfügung – auch im Dunkeln oder wenn die Sonne nicht scheint. Klingt das interessant?"
            image="https://as1.ftcdn.net/v2/jpg/06/19/46/00/1000_F_619460030_utbTTIw2Z4zTEgyt74Ci3S09owoqNjny.jpg"
            linkText="Jetzt Solarcheck starten!"
            link="/konfigurator"
          />
<Experts />
          <SubpageLandingpages
            yellowTitle="Photovoltaik-Anbieter"
            title=" für Kunden aus Darmstadt"
            text="Als kompetenter Photovoltaik-Anbieter überzeugt unser Team sowohl Privathaushalte als auch Gewerbebetriebe mit moderner Photovoltaik-Technologie und bietet Ihnen in Darmstadt zudem einen vorbildlichen Service. Wir unterstützen Sie mit einer individuellen Beratung und übernehmen die bedarfsorientierte Planung Ihrer Photovoltaik-Anlage. Dabei verwenden wir Produkte renommierter Hersteller, denn die Qualität der Stromspeicher und Solarmodule bestimmt die Qualität der PV-Anlage."
            image="/Images/gewerbe.webp"
            linkText="Jetzt informieren!"
            link="/konfigurator"
            left
          />

          <Service />

          <SubpageLandingpages
            yellowTitle="Photovoltaik "
            title="und Wirtschaftlichkeit "
            text="Sie fragen sich: Lohnt sich PV? Es ist verständlich, dass Sie sich vor einer derartigen Investition über den monetären Effekt informieren möchten. Deswegen führen wir basierend auf Ihrem Stromverbrauch eine Wirtschaftlichkeitsberechnung durch. Außerdem beraten wir Sie über aktuelle Fördermöglichkeiten für Photovoltaik-Anlagen und helfen Ihnen in Darmstadt, den Förderantrag zu stellen."
            image="https://as1.ftcdn.net/v2/jpg/03/16/90/16/1000_F_316901683_Biz4WZy12zLIysQMWUBGlp9CcfW2M57N.jpg"
            linkText="Jetzt Angebot anfordern!"
            link="/konfigurator"
          />
          <div className="flex items-center w-full justify-center py-10">
            {/* <p className="text-8xl font-bold text-center p-10 w-full leading-tight text-white"><span className="drop-shadow-custom">Unabhängige, effiziente und nachhaltige </span><span className="text-yellow-400 drop-shadow-none font-bold">Stromerzeugung</span><span className="drop-shadow-xl"> für alle!</span></p> */}
            <p className="hyphenate text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
              <span className="drop-shadow-none">Was unsere </span>
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Kunden{' '}
              </span>
              <span className="drop-shadow-none"> sagen!</span>
            </p>
          </div>
          <Review />
          <SubpageLandingpages
            yellowTitle="Photovoltaik-Anbieter"
            title=" – unser Service für Kunden aus Darmstadt:"
            bullet1="Persönliche & maßgeschneiderte Beratung"
            bullet2="Individuelle Planung der PV-Anlage"
            bullet3="Berechnung der Wirtschaftlichkeit"
            bullet4="Fachgerechte Montage der PV-Anlage"
            bullet5="Prüfung und Inbetriebnahme"
            bullet6="Wartung und Reparatur"
            video="https://v.ftcdn.net/06/07/83/49/700_F_607834919_fuv9bJd3VvakduLG4tWgyxksDwzIe299_ST.mp4"
            link="/konfigurator"
            linkText="Noch Fragen? Dann schreiben Sie uns"
            left
            icons
          />

          <Contact />
        </div>
      </HelmetProvider>
    </>
  )
}

export default PhotovoltaikDarmstadt
