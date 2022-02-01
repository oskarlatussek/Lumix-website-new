const Card = ({ title, text, classes, img_src, button }: any) => {

    return (


        <div className={`w-1/6 h-96 ${classes} justify-between rounded-xl shadow-xl hover:scale-105 transition duration-100 ease-in-out p-5 flex flex-col items-center `}>
            <div className="flex flex-col space-y-3">
                <p className="text-2xl text-center object-top font-WorkSans italic py-1.5">
                    {title}

                </p>
                <p className="text-base font-WorkSans">
                    {text}
                </p>
            </div>
            <img src={img_src} alt="" />
            <div className=" bg-gray-100 p-2 px-4 text-lg font-WorkSans shadow-lg text-center rounded-full">
                {button}
            </div>




        </div>

    )

}

export default Card