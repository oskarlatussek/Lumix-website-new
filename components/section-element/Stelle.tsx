import { BsClock } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";

interface StelleProps {
    title: String;
    type: String;
    tasks: Array<String>;
    qualifications: Array<String>;
}

const Stelle = ({ title, type, tasks, qualifications }: StelleProps) => {

    return (
        <label className='p-2 sm:p-5 hover:cursor-pointer  select-none rounded-lg border md:hover:scale-15 transition-all ease-in-out duration-300 border-yellow-400 w-full'>
            <input type="checkbox" className="hidden peer" />

            <div className="flex justify-between items-center">
                <div className="flex-col justify-between items-center">
                    <p className='text-yellow-400 font-bold text-3xl w-full'>{title}</p>
                    <div className="flex space-x-5">
                        <div className="flex items-center space-x-2 pl-2 pt-2">
                            <IoTimeOutline className="text-white" />
                            <p className="text-white">{type}</p>
                        </div>
                        <div className="flex items-center space-x-2 pl-2 pt-2">
                            <IoLocationOutline className="text-white" />
                            <p className="text-white">Mannheim</p>
                        </div>
                    </div>

                </div>
                {/* <IoIosArrowForward className="text-yellow-400 text-3xl block peer-checked:hidden" /> */}
                <IoIosArrowDown className="text-yellow-400 text-3xl" />

                {/* <div className="flex"> */}

                {/* </div> */}
            </div>

            <div className='hidden peer-checked:flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 text-white p-5'>
                <div className='p-2 md:p-5 w-full lg:w-1/2'>
                    <p className='text-2xl pb-5'>Aufgaben</p>
                    <ul className='list-disc marker:text-yellow-400 space-y-2 text-sm md:text-base'>
                        {tasks.map((task: string) => {
                            return <li>{task}</li>
                        })}
                    </ul>
                </div>
                <div className='p-2 md:p-5 w-full lg:w-1/2'>
                    <p className='text-2xl pb-5'>Qualifikationen</p>
                    <ul className='list-disc marker:text-yellow-400 space-y-2 text-sm md:text-base'>
                        {qualifications.map((qualification: string) => {
                            return <li>{qualification}</li>
                        })}
                    </ul>
                </div>
            </div>
        </label>
    )
}

export default Stelle