import { useState } from "react";
import { FaLinkedin, FaTelegramPlane, FaDiscord, FaEthereum, FaInstagram, FaTwitter, FaMedium, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";


const Footer = () => {


    return (
        <footer id="contact" className="bg-gray-50 mt-20 p-10 py-20 flex justify-center items-center space-x-36">

            <div className="flex flex-col space-y-3 items-end">
                <p className="text-3xl font-semibold pb-2">Kontaktieren Sie uns!</p>

                <div className="flex items-center space-x-3 text-xl">
                    <FiMail className="text-amber-400 text-3xl"/>
                    <a href="mailto:info@lumix.solar" className="">info@lumix.solar</a>
                </div>
                <div className="flex items-center space-x-3 text-xl">
                    <FiPhone className="text-amber-400 text-3xl"/>
                    <a href="tel:+4915783651735" className="">+49 1578 3651734</a>
                </div>

                <div className="flex text-gray-600 items-center space-x-1 pt-4">
                    <a href="/impressum" className=' hover:text-amber-400 transition ease-in-out duration-300'>Impressum</a>
                    <hr className="border-gray-600 w-5 rotate-90" />
                    <a href="/datenschutz" className=' hover:text-amber-400 transition ease-in-out duration-300'>Datenschutz</a>
                </div>
            </div>

            <a href="/" className="w-2/4 ">
                <img src="/Logos/lumix-logo_gr.svg" className="" />
            </a>
        </footer>

    )
}

export default Footer