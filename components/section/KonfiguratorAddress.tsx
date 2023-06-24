import Link from "next/link"
import { useState } from "react"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import SearchLocationInput from "../section-element/SearchLocationInput"
// import GooglePlacesAutocomplete from "react-google-places-autocomplete"

const KonfiguratorAddress = () => {
    const [address, setAddress] = useState(null)
    // console.log(address)

    return (
        <div className="flex flex-col items-center absolute bottom-2 sm:bottom-5">
            <div className="bg-yellow-400 rounded-t-xl p-2 px-2 sm:px-5 max-w-[90vw]">
                <p className=" text-black font-medium text-xs xs:text-base">Bereits über 500 Projekte erfolgreich umgesetzt!</p>
            </div>
            <div className="bg-white/100 h-fit rounded-xl backdrop-blur-lg flex flex-col md:flex-row items-center p-2 sm:p-5 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-gray-300 mx-2">
                <p className="text-left text-md xs:text-lg sm:text-xl pr-0 md:pr-5 pb-2 sm:pb-5 md:pb-0">Jetzt <b>unverbindlich</b> Angebot für Ihr Solarprojekt <b>konfigurieren</b>.</p>
                {/* <div className="border border-black/80 w-0 h-5/6" /> */}
                <div className="flex flex-col items-stretch md:items-stretch space-y-2 sm:space-y-5 w-full pl-0 md:pl-5 pt-2 sm:pt-5 md:pt-0">
                    <p className="text-md xs:text-lg w-max pl-2 -mb-0 sm:-mb-4 font-medium self-center md:self-start">Ihre Adresse</p>

                    <SearchLocationInput address={address} setAddress={setAddress} />

                    {/* <GooglePlacesAutocomplete
                        apiKey=""
                        apiOptions={{ language: 'de', region: 'de' }}

                        selectProps={{
                            address,
                            onChange: setAdress,
                            styles: {
                                control: (provided) => ({
                                    ...provided,
                                    borderRadius: '9999px',
                                }),
                                option: (provided) => ({
                                    ...provided,
                                    textAlign: 'left'
                                })
                            }
                        }}
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['de'],
                            }
                        }}
                        minLengthAutocomplete={3} /> */}

                    <Link href={{ pathname: '/konfigurator', query: JSON.stringify(address) }}>
                        <a className="self-center flex text-sm xs:text-base items-center space-x-2 md:self-start bg-yellow-400 rounded-full font-medium max-w-max px-4 py-2 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                            <span>Zur Preisermittlung</span>
                            <HiOutlineArrowSmRight className="text-xl"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default KonfiguratorAddress