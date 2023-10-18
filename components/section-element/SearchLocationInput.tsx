import { Loader } from "@googlemaps/js-api-loader";
import React, { useState, useEffect, useRef } from "react";


let autoComplete: google.maps.places.Autocomplete;

function handleScriptLoad(setAddress, autoCompleteRef) {
  const options = {
    componentRestrictions: { country: "de" },
    fields: ["place_id", "geometry", "formatted_address"],
  };

  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    options
  );
  autoComplete.addListener('place_changed', () => handlePlaceSelect(setAddress));
}

function handlePlaceSelect(setAddress) {
  const addressObject = autoComplete.getPlace();
  setAddress(addressObject);
}

const SearchLocationInput = ({ address, setAddress }) => {
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      libraries: ["places"]
    });
    loader.load().then(() => { handleScriptLoad(setAddress, autoCompleteRef) });
  })

  return (
    <div>
      <input
        ref={autoCompleteRef}
        // onChange={event => setQuery(event.target.value)}
        placeholder="Straße, Hausnummer, Stadt"
        defaultValue={address ? address.formatted_address : undefined}
        className="px-4 py-2 rounded-full w-full sm:max-w-full bg-white/50 border border-black/20 outline-none autocomplete-style"
      />
    </div>
  );
}

export default SearchLocationInput;