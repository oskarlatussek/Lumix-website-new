import { useState } from "react"


const Products = ({ products, setProducts }) => {

    return (
        <div className='flex flex-col space-y-5 md:space-y-10'>
            <p className='font-bold text-xl md:text-4xl text-center select-none'>Gewünschtes Solarprodukt</p>

            <div className="flex space-x-2 md:space-x-10">
                <div onClick={() => setProducts(products => ({ ...products, "Solaranlage": !products.Solaranlage }))} className="flex flex-col items-center space-y-2 sm:space-y-5 cursor-pointer">
                    <div className={`${products.Solaranlage ? "grayscale-0 opacity-100 border-yellow-400" : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100 border-white/0"} relative transition duration-200 ease-linear rounded-lg shadow-lg bg-white/30 w-24 md:w-36 xl:w-44 h-40 md:h-48 xl:h-56 border`}>
                        <img src="/Images/module.webp" className="rounded-lg shadow-lg h-full w-full object-cover" />
                    </div>
                    <p className={`text-sm md:text-lg ${products.Solaranlage && "font-medium text-yellow-400"}`}>Solaranlage</p>
                </div>

                <div onClick={() => setProducts(products => ({ ...products, "Batteriespeicher": !products.Batteriespeicher }))} className="flex flex-col items-center space-y-2 sm:space-y-5 cursor-pointer">
                <div className={`${products.Batteriespeicher ? "grayscale-0 opacity-100 border-yellow-400" : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100 border-white/0"} relative transition duration-200 ease-linear rounded-lg shadow-lg bg-white/30 w-24 md:w-36 xl:w-44 h-40 md:h-48 xl:h-56 border`}>
                        <img src="/Images/batterie.webp" className="rounded-lg shadow-lg h-full w-full object-cover" />
                    </div>
                    <p className={`text-sm md:text-lg ${products.Batteriespeicher && "font-medium text-yellow-400"}`}>Batteriespeicher</p>
                </div>

                <div onClick={() => setProducts(products => ({ ...products, "Wallbox": !products.Wallbox }))} className="flex flex-col items-center space-y-2 sm:space-y-5 cursor-pointer">
                <div className={`${products.Wallbox ? "grayscale-0 opacity-100 border-yellow-400" : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100 border-white/0"} relative transition duration-200 ease-linear rounded-lg shadow-lg bg-white/30 w-24 md:w-36 xl:w-44 h-40 md:h-48 xl:h-56 border`}>
                        <img src="/Images/wallbox.webp" className="rounded-lg shadow-lg h-full w-full object-cover" />
                    </div>
                    <p className={`text-sm md:text-lg ${products.Wallbox && "font-medium text-yellow-400"}`}>Wallbox</p>
                </div>

            </div>

        </div>
    )
}

export default Products