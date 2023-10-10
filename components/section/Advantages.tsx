import Link from "next/link"


const Advantages = () => {
    return (

        <div className="w-full flex flex-col sm:px-5 px-2 items-center py-10">
          <p className="hyphenate text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-semibold text-center p-5 sm:p-10 w-full">
              <span className="drop-shadow-none">
              Grüner Strom? -
              </span>
              <span className="text-yellow-400 drop-shadow-none font-bold">
                Lumix Solar
              </span>
            </p>
            <div className="w-full flex flex-wrap items-stretch px-0 md:px-10 xl:px-20">

                <div className="  flex basis-full sm:basis-1/2 xl:basis-1/3 flex-1 flex-1 ">
                <div className=" border-2 mr-0 sm:mr-8 mt-8 flex-1  rounded-xl border-black flex flex-row max-w-3xl  items-center">

                  <div className="p-4">
                    <img src="./Graphiken/graph.svg" alt="graph" className="w-8 min-w-[32px] text-yellow-400" />
                  </div>
                  <div className="p-4">
                  <p className="font-bold font-medium text-sm sm:text-base lg:text-lg   max-w-2xl text-zinc-800 ">
                    Seit Gründung stetig auf Wachstumskurs
                    </p>
                  </div>
                  </div>
                </div>
                <div className=" flex basis-full sm:basis-1/2 xl:basis-1/3 flex-1 flex-1">
                <div className=" border-2 mr-0 xl:mr-8 mt-8 flex-1  rounded-xl border-black flex flex-row max-w-3xl  items-center">
                  
                  <div className="p-4">
                    <img src="./Graphiken/house.svg" alt="graph" className="w-8 min-w-[32px] text-yellow-400" />
                  </div>
                  <div className="p-4">
                  <p className="font-bold font-medium text-sm sm:text-base lg:text-lg  max-w-2xl text-zinc-800">
                  Regional und überregional für Sie im Einsatz
                    </p>
                  </div>
                </div>
                </div>

                <div className=" flex basis-full sm:basis-1/2 xl:basis-1/3 flex-1 flex-1">
                <div className=" border-2 mr-0 sm:mr-8 mt-8 flex-1  rounded-xl border-black flex flex-row max-w-3xl  items-center">

                  <div className="p-4">
                    <img src="./Graphiken/tools.svg" alt="graph" className="w-8 min-w-[32px] text-yellow-400" />
                  </div>
                  <div className="p-4">
                  <p className="font-bold font-medium text-sm sm:text-base lg:text-lg  max-w-2xl text-zinc-800">
                  Montage in exzellenter handwerklicher Qualität
                    </p>
                  </div>
</div>
                </div>

                <div className=" flex basis-full sm:basis-1/2 xl:basis-1/3 flex-1 flex-1">
                <div className=" border-2 mr-0 xl:mr-8 mt-8 flex-1  rounded-xl border-black flex flex-row max-w-3xl  items-center">

                  <div className="p-4">
                    <img src="./Graphiken/person.svg" alt="graph" className="w-8 min-w-[32px] text-yellow-400" />
                  </div>
                  <div className="p-4">
                  <p className="font-bold font-medium text-sm sm:text-base lg:text-lg   max-w-2xl text-zinc-800 ">
                  Komplett-Service von der Planung bis zur Wartung
                    </p>
                  </div>
                  </div>
                </div>
                <div className=" flex basis-full sm:basis-1/2 xl:basis-1/3 flex-1 flex-1">
                <div className=" border-2 mr-0 sm:mr-8 mt-8 flex-1  rounded-xl border-black flex flex-row max-w-3xl  items-center">

                  <div className="p-4">
                    <img src="./Graphiken/check.svg" alt="graph" className="w-8 min-w-[32px] text-yellow-400" />
                  </div>
                  <div className="p-4">
                  <p className="font-bold font-medium text-sm sm:text-base lg:text-lg  max-w-2xl text-zinc-800">
                  Photovoltaikanlagen von herausragender Qualität
                    </p>
                  </div>
</div>
                </div>

                <div className=" flex basis-full sm:basis-1/2 xl:basis-1/3 flex-1 flex-1">
                <div className=" border-2 mr-0 xl:mr-8 mt-8 flex-1  rounded-xl border-black flex flex-row max-w-3xl  items-center">

                  <div className="p-4">
                    <img src="./Graphiken/men.svg" alt="graph" className="w-8 min-w-[32px] text-yellow-400" />
                  </div>
                  <div className="p-4">
                  <p className="font-bold font-medium text-sm sm:text-base lg:text-lg  max-w-2xl text-zinc-800">
                  Inhabergeführtes mittelständisches Unternehmen
                    </p>
                  </div>
</div>
                </div>


            </div>


        </div >

    )
}

export default Advantages
