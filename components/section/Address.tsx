

import SearchLocationInput from "../section-element/SearchLocationInput"

const Address = ({ address, setAddress }) => {

    return (
        <div className='flex flex-col items-center sm:items-stretch space-y-10 min-w-[25rem]'>
            <p className='font-bold text-xl md:text-4xl text-center'>Ihre Adresse</p>

            <SearchLocationInput address={address} setAddress={setAddress} />

            {/* <GooglePlacesAutocomplete
                apiKey="AIzaSyAFmOqbv_RrM6AmsEuEw940mlsrTEX2QnI"
                apiOptions={{ language: 'de', region: 'de' }}

                selectProps={{
                    address,
                    onChange: setAddress,
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            borderRadius: '9999px',
                            padding: '10px',
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

        </div>
    )
}

export default Address