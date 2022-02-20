import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"


const Question = ({ question, answer }: any) => {

    return (
        <div className="p-3 cursor-pointer w-full flex flex-col">
            <label className="cursor-pointer grid grid-cols-12 place-items-start">
                <input type="checkbox" className="hidden peer" />

                <AiFillPlusCircle className="block text-black text-3xl peer-checked:hidden" />

                <AiFillMinusCircle className=" text-black text-3xl hidden peer-checked:block max-w-min peer-checked:mb-3" />

                <p className="text-black font-medium text-xl sm:text-2xl peer-checked:mb-3 col-span-11 select-none">{question}</p>

                <div className="hidden peer-checked:block text-gray-600 col-span-full whitespace-pre-wrap pl-16">
                    {answer}
                </div>
            </label>
            {/* <hr className="border w-3/4 mt-5 self-center" /> */}
        </div>
    )
}

export default Question