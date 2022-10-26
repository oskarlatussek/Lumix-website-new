import React from "react";
import { NextPage } from "next";

import { Toolbar } from "../components";


const ImpressumPage: NextPage = () => {
    return (
        <>
            <Toolbar />
            <div className="flex flex-col p-5 sm:p-10 w-full 2xl:max-w-screen-2xl mt-44">
                <h1 className="mb-10 sm:mb-20 font-normal">Impressum</h1>

                <h4 className="text-3xl font-semibold mb-1 mt-3">Lumix Solar GmbH</h4>
                <p>Jungbuschstraße 28<br /> 68159 Mannheim <br /> Deutschland</p>
                <p className="pt-2">HRB 743111<br />Amtsgericht Mannheim</p>
                <p className="pt-2">USt-IdNr: DE351644554</p>

                <h5 className="text-xl font-medium mb-1 mt-3">Geschäftsführung</h5>
                <p>Johannes Gerstlauer <br />Maximilian Mühlhause <br />Oskar Latussek</p>

                <h5 className="text-xl font-medium mb-1 mt-3">Website</h5>
                <a className="text-yellow-400" href="/">www.lumix.solar</a>

                <h5 className="text-xl font-medium mb-1 mt-3">Kontakt</h5>
                <a className="text-yellow-400" href="mailto:info@lumix.solar">info@lumix.solar</a>

                {/* <h5 className="text-xl font-medium mb-1 mt-3">Ust.-IdNr.</h5>
                    <p className="font-light">DE338994705</p> */}

                <h5 className="text-xl font-medium mb-1 mt-3">Verbraucherinformationen</h5>
                <p className="font-light">
                    Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    Die Europäische Kommission stellt jedoch eine Plattform zur Online-Streitbeilegung unter
                    <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a> bereit.
                    <br />Kontakt per Mail: <a className="text-yellow-400" href="mailto:info@lumix.solar">info@lumix.solar</a>
                </p>
                <h5 className="text-xl font-medium mb-1 mt-3">Haftung für Inhalte</h5>
                <p className="font-light">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
                <h5 className="text-xl font-medium mb-1 mt-3">Haftung für Links</h5>
                <p className="font-light">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                <h5 className="text-xl font-medium mb-1 mt-3">Urheberrecht</h5>
                <p className="font-light">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </div>
        </>
    )
};

export default ImpressumPage;
