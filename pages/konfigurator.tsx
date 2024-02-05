import type { NextPage } from 'next'

import { IoConstructSharp } from "react-icons/io5"
import { pickBy, isEmpty } from "lodash"

import Hero from "../components/general/Hero";
import Process from "../components/section/Process";
import Subpage from "../components/section/Subpage";
import Contact from '../components/general/Contact';
import Service from '../components/section/Service';
import { Toolbar } from '../components';
import KonfiguratorAddress from '../components/section/KonfiguratorAddress';
import { useState } from 'react';
import Steps from '../components/section/Steps';
import Address from '../components/section/Address';
import Products from '../components/section/Products';
import Consumption from '../components/section/Consumption';
import { useRouter } from 'next/router';
import { BsFillSunFill, BsPeopleFill } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import ImageSection from '../components/section/ImageSection';
import { getCookie } from 'cookies-next';


const Konfigurator: NextPage = () => {
    const router = useRouter()
    const addressObject = !isEmpty(router.query.address) && JSON.parse(router.query.address as string)

    const [step, setStep] = useState(addressObject ? 2 : 1)
    const [address, setAdress] = useState(addressObject)
    const [products, setProducts] = useState({ "Solaranlage": true, "Batteriespeicher": false, "Wallbox": false })
    const [consumption, setConsumption] = useState(3800)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState({ message: "", error: false })
    const [processing, setProcessing] = useState(false)
    const origin = router.query.origin

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setProcessing(true)
        const gclid = getCookie('gclid')

        try {
            const res = await fetch("/api/monday", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                    products: pickBy(products),
                    consumption: consumption,
                    message: message,
                    origin: origin,
                    gclid: gclid
                })
            });
            const result = await res.json()
            if (result.err) {
                setResponse({ message: "Da ist etwas schiefgelaufen!", error: true })
            } else {
                window.location.href = "https://www.lumix.solar/danke";
                // setStep(step => step + 1)
            }
            setProcessing(false);

        } catch (e) {
            setResponse({ message: "Da ist etwas schiefgelaufen!", error: true })
            setProcessing(false);
        }

    }

    return (
        <>

            <div className={`text-md lg:text-xl absolute top-0 left-0 justify-center text-center w-full p-3 lg:p-8 flex z-50 backdrop-blur-md bg-yellow-400`}>

                <div className="flex flex-grow space-x-8 items-center justify-start">
                    <a href="/" className="block mr-5 transform hover:scale-105 transition-all duration-500 ease-in-out">
                        <img src="/Logos/lumix-logo-schwarz.png" className={`w-36`} />
                    </a>
                    <p className='max-w-[18rem] text-left'><b>In einer Minute</b> zu Ihrem unverbindlichen Angebot!</p>
                </div>
            </div>


            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/lumix-title.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full min-h-screen group relative h-full flex justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50" />

                    {step <= 3 && <div className='relative rounded-xl bg-white/100 backdrop-blur-md h-[70vh] w-[95vw] lg:w-[80vw] max-w-screen-xl z-10 mt-32 flex flex-col items-center justify-start p-10 pt-32 md:pt-44'>
                        <Steps step={step} />

                        {step === 1 && <Address address={address} setAddress={setAdress} />}
                        {step === 2 && <Products products={products} setProducts={setProducts} />}
                        {step === 3 && <Consumption consumption={consumption} setConsumption={setConsumption} />}

                        <div className='flex w-full justify-between px-5 sm:px-10 absolute bottom-7'>
                            <button type='button' disabled={step < 1} onClick={step > 1 ? () => setStep(step => step - 1) : () => router.back()} className="border border-black rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Zurück</button>
                            <button disabled={!address || step === 2 && isEmpty(pickBy(products) || step > 3)} onClick={() => setStep(step => step + 1)} className="bg-yellow-400 disabled:bg-gray-300 disabled:cursor-auto disabled:opacity-50 disabled:hover:scale-100 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Weiter</button>
                        </div>

                    </div>}

                    {step === 4 && <div className='relative rounded-xl bg-white/100 backdrop-blur-md h-[70vh] w-[95vw] lg:w-[80vw] z-10 mt-32 flex flex-col items-center justify-start p-5 sm:p-10'>

                        <p className='font-bold text-xl md:text-4xl text-center pb-5 sm:pb-10'>Ihre Kontaktdaten</p>

                        <form onSubmit={handleSubmit} onInput={() => setResponse({ message: "", error: false })} className="relative flex flex-col space-y-2 sm:space-y-5 justify-between w-full max-w-lg">
                            <input required id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name*" className={`w-full p-2 sm:p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />

                            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-5 space-y-2 sm:space-y-0">
                                <input required id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Telefonnummer*" className={`w-full p-2 sm:p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Mail Adresse" className={`w-full p-2 sm:p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                            </div>

                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Anmerkungen" className={`w-full p-2 sm:p-4 h-24 md:h-36 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />

                            {response.message && <p className={`${response.error ? "text-red-500" : "text-green-500"} pl-1`}>{response.message}</p>}

                            {/* <button disabled={step > 4 || !name || !phone} onClick={handleSubmit} className="bg-yellow-400 self-center disabled:bg-gray-300 disabled:opacity-50 disabled:hover:scale-100 rounded-full font-medium text-lg max-w-max px-3 sm:px-6 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Abschließen</button> */}

                            <button disabled={step > 4 || !name || !phone} type="submit" className="flex space-x-2 items-center justify-around group max-w-min bg-yellow-400 self-center disabled:bg-gray-300 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-auto rounded-full px-3 sm:px-6 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                                {processing && <svg className={`animate-spin-slow h-6 w-6 min-w-[1.5rem] border-4 border-t-gray-300 border-l-gray-300 border-gray-800 rounded-full`} />}
                                <span className="font-medium text-lg">Absenden</span>
                            </button>
                        </form>

                        <div className='flex w-full justify-between px-5 sm:px-10 absolute bottom-7'>
                            <button onClick={() => setStep(step => step - 1)} className="border border-black rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Zurück</button>
                            {/* <button disabled={step > 4 || !name || !phone} onClick={handleSubmit} className="bg-yellow-400 disabled:bg-gray-300 disabled:opacity-50 disabled:hover:scale-100 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Abschließen</button> */}
                        </div>

                    </div>}

                </div>

                <Contact />

            </div>
        </>
    )
}


export default Konfigurator
