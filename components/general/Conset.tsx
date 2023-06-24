import React, { useEffect, useState } from 'react';

import { setCookie, hasCookie, deleteCookie } from 'cookies-next';

function Consent() {
    const [consent, setConsent] = useState(true);
    useEffect(() => {
        // console.log(hasCookie('localConsent'))
        setConsent(hasCookie('localConsent'));
    }, []);

    const acceptCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
        // console.log('accepting cookies');
    };
    const denyCookie = () => {
        setConsent(true);
        deleteCookie('localConsent', { maxAge: 60 * 60 * 24 * 365 });
        // console.log('denying cookie');
    };
    if (consent === true) {
        return null;
    }
    return (
        <div className={`fixed flex flex-row sm:flex-col items-center space-y-0 sm:space-y-5 space-x-2 sm:space-x-0 bottom-0 sm:bottom-3 z-50 max-w-[100%] sm:max-w-sm right-0 sm:right-3 p-2 sm:p-3 rounded-md bg-white/40 backdrop-blur-2xl ${consent ? 'hidden' : ''}`} >
            <p className='text-xs sm:text-sm max-h-[75px] lg:max-h-[100px] overflow-scroll'>Auf dieser Website nutzen wir Cookies und vergleichbare Funktionen zur Verarbeitung von Endgeräteinformationen und personenbezogenen Daten. Die Verarbeitung dient der Einbindung von Inhalten, externen Diensten und Elementen Dritter, der statistischen Analyse/Messung, personalisierten Werbung sowie der Einbindung sozialer Medien. Je nach Funktion werden dabei Daten an Dritte weitergegeben und von diesen verarbeitet.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-x-0 sm:space-x-5 space-y-2 sm:space-y-0 justify-center w-full">
                <button
                    onClick={(e) => denyCookie()}
                    className="text-xs p-2 sm:text-sm border border-black rounded-md"
                >
                    Ablehnen
                </button>
                <button
                    onClick={() => {
                        acceptCookie();
                    }}
                    className="text-xs p-2 sm:text-sm bg-yellow-400 border-yellow-400 border rounded-md"
                >
                    Akzeptieren
                </button>
            </div>
        </div>
    );
}

export default Consent;
