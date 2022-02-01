const Card = ({title,text,classes,img_src}:any) => {

    return (


        <div className={`border w-72 h-96 ${classes} rounded-xl border-gray-600 shadow-xl hover:scale-105 transition duration-100 ease-in-out p-3 flex flex-col items-center justify-center`}>
            <p className="border">
            {title}
            
            </p>
            <p>
            {text}
            </p>
            <img src={img_src} alt="" />
    


        </div>

    )

}

export default Card