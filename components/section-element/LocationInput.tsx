// pages/index.js
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
function HomePage() {
    const googlemap = useRef(null);
    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
        });
        let map;
        loader.load().then(() => {
            map = new google.maps.Map(googlemap.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        });
    });
    return (
        <div id="map" ref={googlemap} />
    );
}
export default HomePage;