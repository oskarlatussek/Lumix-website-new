// pages/index.js
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
function HomePage() {
    const googlemap = useRef(null);
    useEffect(() => {
        const loader = new Loader({
            apiKey: 'AIzaSyAFmOqbv_RrM6AmsEuEw940mlsrTEX2QnI'
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