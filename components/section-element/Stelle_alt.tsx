interface StelleProps {
    title: String;
    tasks: Array<String>;
    qualifications: Array<String>;
}

const Stelle = ({ title, tasks, qualifications }: StelleProps) => {

    return (
        <div className='p-2 sm:p-5 rounded-lg border md:hover:scale-105 transition-all ease-in-out duration-300 border-yellow-400 max-w-lg min-w-fi'>
            <p className='text-yellow-400 font-bold text-3xl w-full text-center'>{title}</p>
            <div className='flex flex-col space-y-5 text-white p-5'>
                <div className='p-2 md:p-5'>
                    <p className='text-2xl pb-5'>Aufgaben</p>
                    <ul className='list-disc marker:text-yellow-400 space-y-2 text-sm md:text-base'>
                        {tasks.map((task: string) => {
                            return <li>{task}</li>
                        })}
                    </ul>
                </div>
                <div className='p-2 md:p-5'>
                    <p className='text-2xl pb-5'>Qualifikationen</p>
                    <ul className='list-disc marker:text-yellow-400 space-y-2 text-sm md:text-base'>
                        {qualifications.map((qualification: string) => {
                            return <li>{qualification}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Stelle