import ProgressBar from '../../components/general/ProgressBar'
import Link from 'next/link'

const barData = [
  { bgcolor: '#FACC15', completed: 100, label: 'Leidenschaft' },
  { bgcolor: '#FACC15', completed: 95, label: 'Mitarbeiter Schulung' },
  { bgcolor: '#1e4e5f', completed: 34, label: 'Solarstrom in Deutschland' },
]

const Experts = () => {
  return (
    <div className="w-full flex flex-wrap sm:px-5 px-2 items-start items-center py-20">
      <div className="md:pr-10 basis-full md:basis-1/2 py-10 md:py-0 ">
        <p className=" hyphenate text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-left w-full">
          <span className="drop-shadow-none">
            Photovoltaik-Experten aus Mannheim -{' '}
          </span>
          <span className="text-yellow-400 drop-shadow-none font-bold">
            unsere Leistungen
          </span>
        </p>
        <div className="py-10 hidden  md:block">
          <Link href="./konfigurator">
            <a className="text-lg bg-yellow-400 rounded-full font-bold max-w-max px-5 py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
              Jetzt Solarcheck starten!
            </a>
          </Link>
        </div>
      </div>

      <div className="basis-full md:basis-1/2 ">
        <ul className="font-bold font-medium text-sm sm:text-base lg:text-lg   max-w-2xl text-zinc-800 ">
          <li className="text-xl">
            Ausführliche{' '}
            <a className="expertlink" href="./photovoltaik-beratung">
              Beratung
            </a>
          </li>
          <li className="text-xl">
            Passgenaue{' '}
            <a className="expertlink" href="./photovoltaik-planung">
              Planung
            </a>
          </li>
          <li className="text-xl">Wirtschaftlichkeitsberechnung</li>
          <li className="text-xl">
            <a className="expertlink" href="./photovoltaik-montage">
              Montage
            </a>{' '}
            & Inbetriebnahme
          </li>
          <li className="text-xl">Netz- & Zähleranmeldung</li>
          <li className="text-xl">Wartung & Instandhaltung</li>
        </ul>
        {barData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
            label={item.label}
          />
        ))}
        <div className="py-10 block  md:hidden">
          <Link href="./konfigurator">
            <a className="text-lg bg-yellow-400 rounded-full font-bold max-w-max px-5 py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
              Jetzt Solarcheck starten!
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Experts
