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


const Konfigurator: NextPage = () => {
    const router = useRouter()
    const addressObject = !isEmpty(router.query) && JSON.parse(Object.keys(router.query)[0])

    const [step, setStep] = useState(addressObject ? 2 : 1)
    const [address, setAdress] = useState(addressObject)
    const [products, setProducts] = useState({ "Solaranlage": true, "Batteriespeicher": false, "Wallbox": false })
    const [consumption, setConsumption] = useState(4000)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState({ message: "", error: false })
    const [processing, setProcessing] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setProcessing(true)

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
                    message: message
                })
            });
            const result = await res.json()
            if (result.err) {
                setResponse({ message: "Da ist etwas schiefgelaufen!", error: true })
            } else {
                setStep(step => step + 1)
            }
            setProcessing(false);

        } catch (e) {
            setResponse({ message: "Da ist etwas schiefgelaufen!", error: true })
            setProcessing(false);
        }

    }

    return (
        <>
            {step < 5 ? (
                <div className={`text-md lg:text-xl absolute top-0 left-0 justify-center text-center w-full p-3 lg:p-8 flex z-50 backdrop-blur-md bg-yellow-400`}>

                    <div className="flex flex-grow space-x-8 items-center justify-start">
                        <a href="/" className="block mr-5 transform hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src="/Logos/lumix-logo-schwarz.png" className={`w-36`} />
                        </a>
                        <p className='max-w-[18rem] text-left'><b>In einer Minute</b> zu Ihrem unverbindlichen Angebot!</p>
                    </div>
                </div>
            ) : (
                <Toolbar />
            )}

            <div className="flex flex-col items-center max-w-full">
                <div style={{ backgroundImage: `url(/Images/title.jpg)`, backgroundSize: "cover" }} className="w-full min-h-screen group relative h-full flex justify-center items-center">
                    <div className="absolute w-full h-full z-0 bg-black/50" />

                    {step <= 3 && <div className='relative rounded-xl bg-white/100 backdrop-blur-md h-[70vh] w-[95vw] lg:w-[80vw] max-w-screen-xl z-10 mt-32 flex flex-col items-center justify-start p-10 pt-32 md:pt-44'>
                        <Steps step={step} />

                        {step === 1 && <Address address={address} setAddress={setAdress} />}
                        {step === 2 && <Products products={products} setProducts={setProducts} />}
                        {step === 3 && <Consumption consumption={consumption} setConsumption={setConsumption} />}

                        <div className='flex w-full justify-between px-5 sm:px-10 absolute bottom-7'>
                            <button type='button' disabled={step < 1} onClick={step > 1 ? () => setStep(step => step - 1) : () => router.back()} className="border border-black rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Zurück</button>
                            <button disabled={!address || step === 2 && isEmpty(pickBy(products) || step > 3)} onClick={() => setStep(step => step + 1)} className="bg-yellow-400 disabled:bg-gray-300 disabled:opacity-50 disabled:hover:scale-100 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Weiter</button>
                        </div>

                    </div>}

                    {step === 4 && <div className='relative rounded-xl bg-white/100 backdrop-blur-md h-[70vh] w-[95vw] lg:w-[80vw] z-10 mt-32 flex flex-col items-center justify-start p-5 sm:p-10'>

                        <p className='font-bold text-xl md:text-4xl text-center pb-5 sm:pb-10'>Ihre Kontaktdaten</p>

                        <form onInput={() => setResponse({ message: "", error: false })} className="relative flex flex-col space-y-2 sm:space-y-5 justify-between w-full max-w-lg">
                            <input required id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name*" className={`w-full p-2 sm:p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />

                            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-5 space-y-2 sm:space-y-0">
                                <input required id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Telefonnummer*" className={`w-full p-2 sm:p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Mail Adresse" className={`w-full p-2 sm:p-4 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />
                            </div>

                            <textarea required id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Anmerkungen" className={`w-full p-2 sm:p-4 h-24 md:h-36 focus:outline-none border border-black border-opacity-30 hover:border-opacity-100 focus:border-opacity-100 transition duration-300 ease-in-out rounded-lg`} />

                            {response.message && <p className={`${response.error ? "text-red-500" : "text-green-500"} pl-1`}>{response.message}</p>}

                            <button disabled={step > 4 || !name || !phone} onClick={handleSubmit} className="bg-yellow-400 self-center disabled:bg-gray-300 disabled:opacity-50 disabled:hover:scale-100 rounded-full font-medium text-lg max-w-max px-3 sm:px-6 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Abschließen</button>

                        </form>

                        <div className='flex w-full justify-between px-5 sm:px-10 absolute bottom-7'>
                            <button onClick={() => setStep(step => step - 1)} className="border border-black rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Zurück</button>
                            {/* <button disabled={step > 4 || !name || !phone} onClick={handleSubmit} className="bg-yellow-400 disabled:bg-gray-300 disabled:opacity-50 disabled:hover:scale-100 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">Abschließen</button> */}
                        </div>

                    </div>}

                    {step === 5 && <div className='bg-white/100 backdrop-blur-md min-h-screen w-full z-10 flex flex-col items-center p-5 sm:p-10 pt-44 sm:pt-44'>

                        <div className='flex flex-col items-center'>
                            <p className='font-bold text-xl sm:text-3xl md:text-5xl text-center mb-5'>Vielen Dank für Ihr Vertrauen!</p>
                            {/* <GiPartyPopper className='text-9xl text-yellow-400 mt-32' /> */}
                            <p className='text-center py-5 max-w-2xl text-sm sm:text-base'>Wir freuen uns Sie auf Ihrem Weg zu einer finanziell unabhängigen und nachhaltigen Stromerzeugung zu begleiten.</p>
                            <p className='text-center py-10 max-w-3xl text-sm sm:text-base'>Ihre Kontaktdaten sind bei uns eingegangen. Innerhalb von 24h werden sich unsere Solarexperten telefonisch mit Ihnen in Verbindung setzen um die von uns ermittelte Preiskalkulation zu besprechen und all Ihre Fragen rund um Ihr gewünschtes Solarprojekt zu beantworten.</p>

                            <p className='font-bold text-xl sm:text-2xl mt-10 sm:mt-20 text-center'>Ihr individuelles Solarprojekt in nur 8 Wochen realisiert</p>
                            <div className='flex items-center justify-center sm:max-w-[50rem] max-w-[100vw] mt-10'>

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <BsPeopleFill className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Persönliches Beratungsgespräch</p>
                                </div>

                                <div className={`border border-yellow-400 flex-grow min-w-[3rem] sm:min-w-[5rem] h-0`} />

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <HiOutlineDocumentText className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Individuelles Angebot</p>
                                </div>

                                <div className={`border border-yellow-400 flex-grow min-w-[3rem] sm:min-w-[5rem] h-0`} />

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <IoConstructSharp className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Zuverlässige Montage</p>
                                </div>

                                <div className={`border border-yellow-400 flex-grow min-w-[3rem] sm:min-w-[5rem] h-0`} />

                                <div className={`relative flex flex-col items-center space-y-2`}>
                                    <div className={`rounded-full flex items-center justify-center border border-yellow-400 w-10 sm:w-14 h-10 sm:h-14`}>
                                        <BsFillSunFill className='text-xl sm:text-3xl' />
                                    </div>
                                    <p className='absolute top-10 sm:top-14 max-w-min text-center text-xs sm:text-sm'>Nutzung der kostenlosen Sonnenenergie</p>
                                </div>
                            </div>

                            <div className={`image-section-left mt-10 -mb-20`}>
                                <ImageSection image='/Images/team.JPG' />

                                <div className='flex flex-col space-y-5 max-w-3xl self-center'>
                                    <h2>Das ist Lumix</h2>

                                    <p className='text-justify'>
                                        Wir sind Ihr zuverlässiger Partner für Solarprodukte in der Region. Ob Solaranlagen, Stromspeicher, Wallboxen oder eine Ladestation für Ihr e-Auto, wir begleiten Sie von der <b>Planung bis zur Projektierung Ihres Photovoltaik Vorhabens</b>.<br /><br />
                                        Dabei setzen wir auf <b>flexible und qualitativ hochwertige Lösungen</b> in Zusammenarbeit mit namhaften Partnern wie Solar Fabrik oder SMA.<br /><br />
                                        Durch die enge Vernetzung mit sowohl Fachhändlern als auch Monteuren, garantieren wir Ihnen eine <b>zeitnahe Realisierung Ihres Projekts</b>. So konnten wir bereits über 100 Projekte in der Region erfolgreich umsetzen.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>}
                </div>

                <Contact />
            </div>
        </>
    )
}


export default Konfigurator
