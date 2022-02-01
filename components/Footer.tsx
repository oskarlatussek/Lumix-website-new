import { useState } from "react";
import { FaLinkedin, FaTelegramPlane, FaDiscord, FaEthereum, FaInstagram, FaTwitter, FaMedium, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";


const Footer = () => {


    return (
        <footer className="bg-gray-50 flex flex-col mt-20 p-10 items-center space-y-20">
            <div className="flex justify-evenly items-center space-x-44">
                <a href="/" className="">
                    <img src="/Logos/lumix-logo_gr.svg" className="h-40" />
                </a>
                <div className="flex flex-col space-y-3">
                    <p className="text-2xl font-semibold mb-2">Kontaktieren Sie uns!</p>
                    <div className="flex items-center space-x-2">
                        <FiMail />
                        <a href="mailto:info@lumix.solar" className="">info@lumix.solar</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FiPhone />
                        <a href="tel:+4915783651735" className="">+49 1578 3651735</a>
                    </div>
                </div>

            </div>
            <div className="flex text-gray-600 items-center space-x-2 text-lg">

                <a href="/impressum" className=' hover:text-yellow-400 transition ease-in-out duration-300'>Impressum</a>
                <hr className="border-gray-600 w-5 rotate-90" />
                <a href="/datenschutz" className=' hover:text-yellow-500 transition ease-in-out duration-300'>Datenschutz</a>

            </div>
        </footer>
    )
}

export default Footer