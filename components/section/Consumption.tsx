import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import { FaPlug } from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import { useState } from "react"

const energyUsage = {
    1: 1500,
    2: 2800,
    3: 3800,
    4: 4500,
    5: 6000,
    6: 7500
}

const Consumption = ({ consumption, setConsumption }) => {
    const [people, setPeople] = useState(3)

    return (
        <div className='flex flex-col space-y-10 items-center'>
            <p className='font-bold text-xl md:text-4xl text-center'>Ihr aktueller Stromverbrauch</p>

            <div className="flex divide-x divide-gray-300">
                <div className="flex space-x-2 sm:space-x-5 items-center pr-3 md:pr-20">
                    <div className="flex flex-col items-center space-y-5">
                        <div onClick={() => setConsumption(consumption => consumption + 500)} className="shadow-lg bg-white/30 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer active:shadow-none select-none">
                            <IoIosArrowUp className="text-lg" />
                        </div>
                        <FaPlug className="text-xl" />
                        <div onClick={() => consumption >= 500 && setConsumption(consumption => consumption - 500)} className="shadow-lg bg-white/30 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer active:shadow-none select-none">
                            <IoIosArrowDown className="text-lg" />
                        </div>
                    </div>

                    <input id={`consumption`} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setConsumption(+event.target.value) }} value={consumption} type='number' className="rounded-lg max-h-fit bg-black/5 p-2 border border-black/0 w-20 shadow-none outline-none" />
                    <p>kWh</p>
                </div>

                <div className="flex space-x-2 sm:space-x-5 items-center pl-3 md:pl-20">
                    <div className="flex flex-col items-center space-y-5">
                        <div onClick={(e) => { setPeople(people => people + 1); setConsumption(energyUsage[people + 1]) }} className="shadow-lg bg-white/30 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer active:shadow-none select-none">
                            <IoIosArrowUp className="text-lg" />
                        </div>
                        <BsPeopleFill className="text-xl" />
                        <div onClick={() => { people > 1 && setPeople(people => people - 1); setConsumption(energyUsage[people - 1]) }} className="shadow-lg bg-white/30 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer active:shadow-none select-none">
                            <IoIosArrowDown className="text-lg" />
                        </div>
                    </div>

                    <input id={`people`} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPeople(+event.target.value); setConsumption(energyUsage[+event.target.value]) }} value={people} type='number' className="rounded-lg max-h-fit bg-black/5 p-2 border border-black/0 w-8 sm:w-16 shadow-none outline-none" />
                    <p>Personen</p>
                </div>
            </div>

        </div>
    )
}

export default Consumption
