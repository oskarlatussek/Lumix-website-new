import React from "react";
import { NextPage } from "next";


const DatenschutzPage: NextPage = () => {
    return (
        <>
            <div className="flex flex-col p-5 sm:p-10 w-full 2xl:max-w-screen-2xl mt-44">
                <h1 className="text-5xl md:text-9xl mb-10 sm:mb-20 text-yellow-400">Datenschutz</h1>

                <p className="">
                    Der Schutz Ihrer Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten in Übereinstimmung mit den anwendbaren Rechtsvorschriften zum Schutz personenbezogener Daten, insbesondere der EU-Datenschutzgrundverordnung (im Folgenden: EU-DSGVO) und den für unser Unternehmen geltenden deutschen Ausführungsvorschriften.
                    Im Folgenden möchten wir Sie darüber informieren, welche persönlichen Daten wir über unsere Internetseite von Ihnen erheben, wofür wir diese verwenden, wann wir diese löschen und wie Ihre Daten durch Sicherheitsmaßnahmen bestmöglich geschützt werden. Zudem teilen wir Ihnen die jeweilige Rechtsgrundlage mit, die uns die entsprechende Datenverarbeitung erlaubt. Im Folgenden erhalten Sie auch Informationen über Ihre gesetzlich festgelegten Rechte im Zusammenhang mit der Verarbeitung dieser Daten.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">1. Begriffsbestimmungen</h5>
                    Diese Datenschutzerklärung beruht auf den Begrifflichkeiten der europäischen Datenschutz- Grundverordnung (DSGVO) und soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
                    <h6 className="text-lg font-medium mt-2">Personenbezogene Daten</h6>
                    Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
                    <h6 className="text-lg font-medium mt-2">Betroffene Person</h6>
                    Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
                    <h6 className="text-lg font-medium mt-2">Verarbeitung</h6>
                    Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                    Einschränkung der Verarbeitung
                    Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.
                    <h6 className="text-lg font-medium mt-2">Profiling</h6>
                    Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
                    <h6 className="text-lg font-medium mt-2">Pseudonymisierung</h6>
                    Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.
                    Verantwortlicher oder für die Verarbeitung Verantwortlicher
                    Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
                    <h6 className="text-lg font-medium mt-2">Auftragsverarbeiter</h6>
                    Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                    <h6 className="text-lg font-medium mt-2">Empfänger</h6>
                    Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.
                    <h6 className="text-lg font-medium mt-2">Dritter</h6>
                    Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.
                    <h6 className="text-lg font-medium mt-2">Einwilligung</h6>
                    Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer
                    sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">2. Verantwortlicher und Datenschutzbeauftragter</h5>
                    Verantwortlicher für die Verarbeitung personenbezogener Daten gemäß Art. 4 Nr. 7 DSGVO ist: Lumix Solar GbR, Strahlenburgstraße 27, 68219 Mannheim, Deutschland, info@lumix.solar
                    Ist nachfolgend von "wir", "uns" oder "Lumix" die Rede, ist dieses Unternehmen gemeint. Datenschutzrechtliche Fragen können postalisch oder per E-Mail gestellt werden. Verwenden Sie bitte folgende E-Mail-Adresse: info@lumix.solar
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">3. Verarbeitung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h5>
                    Wir verarbeiten personenbezogene Daten ausschließlich im rechtmäßigen Rahmen der einschlägigen Rechtsnormen und ggfs. Ihrer Einwilligung. Personenbezogene Daten sind all jene Informationen, die sich auf eine natürliche Person beziehen oder zumindest beziehbar sind und so Rückschlüsse auf deren Persönlichkeit erlauben.
                    Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                    Unsere Webseite ist nicht für Personen unter 16 Jahren vorgesehen, und wir beabsichtigen nicht, personenbezogene Daten von Besuchern der Webseite, die unter 16 Jahre alt sind, zu erfassen. Wir haben jedoch keine Möglichkeit, das Alter der Besucher zu verifizieren. Daher empfehlen wir Eltern, die Online-Aktivitäten ihrer Kinder zu überwachen, um zu verhindern, dass deren personenbezogene Daten ohne elterliche Einwilligung erfasst werden. Wenn Sie vermuten, dass wir personenbezogene Daten eines Minderjährigen ohne Einwilligung erfasst haben, kontaktieren Sie uns bitte per E-Mail unter info@lumix.solar. Wir werden daraufhin die Löschung dieser Daten veranlassen.
                    <h6 className="text-lg font-medium mt-2">3.1 Kundendienst</h6>
                    Wenn Sie sich mit unserem Kundendienst in Verbindung setzen, verwenden wir die von Ihnen übermittelten personenbezogenen Daten, um Ihre Frage zu beantworten oder Ihre Beanstandung zu bearbeiten. Die Rechtsgrundlage für diese Verarbeitung von personenbezogenen Daten besteht darin, dass sie für die Erfüllung eines Vertrags, wie in der DSGVO definiert, erforderlich ist. Wir verarbeiten die folgenden personenbezogenen Daten für Kundendienstzwecke:
                    <br />• Name
                    <br />• Kontaktdaten
                    <br />• Kommentare (sofern zutreffend)
                    <h6 className="text-lg font-medium mt-2">3.2 Umfragen zur Kundenzufriedenheit</h6>
                    Um sicherzustellen, dass unsere Dienste auf Ihre Präferenzen abgestimmt sind, können personenbezogene Daten, die Sie an unsere Kundendienstabteilung übermitteln, für Aktivitäten wie beispielsweise Umfragen zur Kundenzufriedenheit verwendet werden. Die Rechtsgrundlage für diese Verarbeitungsaktivität besteht darin, dass sie erforderlich ist, um ein legitimes Interesse von Lumix (Kundenzufriedenheit), wie in der DSGVO definiert, zu verfolgen. Dies betrifft dieselben personenbezogenen Daten, wie unter Nr. 2 aufgelistet.
                    <h6 className="text-lg font-medium mt-2">3.3 Marketingmitteilungen</h6>
                    Wir verarbeiten Ihre personenbezogenen Daten auch, um Ihnen (personalisierte) Marketingmitteilungen und Benachrichtigungen zusenden zu können. Solche Mitteilungen umfassen die jüngsten Neuigkeiten, Rabattaktionen und Updates zu neuen Restaurants (per E-Mail oder Push- Benachrichtigung) unabhängig von dem Format, das wir für die Verteilung dieser Art von Mitteilungen verwenden (einschließlich E-Mail oder Push-Benachrichtigung). Die Rechtsgrundlage für diese Verarbeitung von personenbezogenen Daten, wie in der DSGVO definiert, besteht darin, dass Sie bei der Aufgabe einer Bestellung Ihre Einwilligung erteilt haben. Wenn Sie Ihre Präferenzen im Hinblick auf den Empfang solcher Mitteilungen und Benachrichtigungen ändern möchten, können Sie diese mit dem Link in der fraglichen Mitteilung abbestellen.
                    <br />Wir verarbeiten die folgenden personenbezogenen Daten für Marketingzwecke:
                    <br />• Name
                    <br />• Kontaktdaten 
                    <h6 className="text-lg font-medium mt-2">3.4 Cookies</h6>
                    Schließlich verarbeiten wir auch personenbezogene Daten, die Sie indirekt an uns übermitteln. Lumix verwendet Cookies für Funktions-, Analyse- und Marketingzwecke. Die Funktions-Cookies sind für die Nutzung der Webseite erforderlich. Cookies erfassen die folgenden personenbezogenen Daten:
                    <br />• Standortdaten
                    <br />• IP-Adresse
                    <br />• Internetbrowser und Gerätetyp • Sprache der Webseite
                    <br />In unserer Cookie-Erklärung finden Sie weitere Einzelheiten zu Cookies.
                    <h6 className="text-lg font-medium mt-2">3.5 Verhinderung von Betrug</h6>
                    Wir verarbeiten einen Teil der oben genannten personenbezogenen Daten auch, um Betrug und andere Formen des Missbrauchs zu verhindern. Die Rechtsgrundlage für diese Verarbeitungsaktivität besteht darin, dass sie erforderlich ist, um ein legitimes Interesse von Lumix (Verhinderung von Betrug), wie in der DSGVO definiert, zu verfolgen.
                    <h6 className="text-lg font-medium mt-2">3.6 Analyse</h6>
                    Wir verwenden Ihre personenbezogenen Daten auch, um unsere Berichtspflichten gegenüber Werbetreibenden erfüllen und unsere Webseite sowie unser Sortiment mit Produkten und Dienstleistungen verbessern zu können. Die Rechtsgrundlage für diese Verarbeitungsaktivität besteht darin, dass sie erforderlich ist, um ein legitimes Interesse von Lumix (Analyse & Berichterstattung), wie in der DSGVO definiert, zu verfolgen. Wir werden grundsätzlich sicherstellen, dass die Berichte keine Daten enthalten, die zu Ihrer Person zurückverfolgt werden können.
                    Nähere Erläuterungen über unsere Analysedienste erhalten Sie weiter unten in dieser Datenschutzerklärung.
                    <br />Weitergabe von Daten
                    <br />Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                    <br />• Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,
                    <br />• die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,
                    <br />• für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.
                    <br />Weitergabe an Restaurants
                    <br />Lumix gibt Ihre personenbezogenen Daten (Name, Kontaktdaten, Bestellung) an das von Ihnen ausgewählte Restaurant weiter, damit das Restaurant Ihre Bestellung liefern kann. Da Sie ein direkter Kunde des Restaurants sind, hat das Restaurant eine eigene Verantwortung und eigene Pflichten im Hinblick auf die Verarbeitung Ihrer personenbezogenen Daten. Sofern Sie Fragen zum Umgang mit Ihren personenbezogenen Daten seitens des Restaurants haben, sollten Sie sich direkt mit dem Restaurant in Verbindung setzen.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">4. Betroffenenrechte</h5>
                    Da wir Ihre personenbezogenen Daten verarbeiten, haben Sie die nachstehenden Rechte:
                    <h6 className="text-lg font-medium mt-2">Auskunftsrecht</h6>
                    Sie können gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Datenverlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;
                    <h6 className="text-lg font-medium mt-2">Berichtigung</h6>
                    Sie können gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                    <h6 className="text-lg font-medium mt-2">Löschung</h6>
                    Sie können gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
                    <h6 className="text-lg font-medium mt-2">Einschränkung</h6>
                    Sie können gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.
                    <h6 className="text-lg font-medium mt-2">Datenübertragbarkeit</h6>
                    Sie können gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format erhalten oder die Übermittlung an einen anderen Verantwortlichen verlangen.
                    <h6 className="text-lg font-medium mt-2">Widerrufsrecht</h6>
                    Sie können gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen.
                    <h6 className="text-lg font-medium mt-2">Beschwerderecht</h6>
                    Sie können sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen datenschutzrechtliche Bestimmungen verstößt. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">5. Widerspruchsrecht</h5>
                    Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an uns.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">6. Dauer, für die die personenbezogenen Daten gespeichert werden</h5>
                    Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">7. Bestehen einer automatisierten Entscheidungsfindung</h5>
                    Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">8. Datensicherheit</h5>
                    Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">9. Webseiten Dritter</h5>
                    Unsere Internetseite kann Links zu den Webseiten Dritter enthalten. Denken Sie beim Zugriff auf solche Webseiten Dritter daran, dass für jede dieser Webseiten eine eigene Datenschutzerklärung gilt. Wenngleich Lumix bei der Auswahl von Webseiten für solche Links äußerste Vorsicht walten lässt, können wir keine Verantwortung für den Umgang mit Ihren personenbezogenen Daten seitens der Betreiber dieser Webseiten übernehmen.
                    <br /><br /><h5 className="text-xl font-medium mb-1 mt-3">10. Änderung dieser Datenschutzerklärung</h5>
                    Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Internetseite und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf unserer Internetseite von Ihnen abgerufen und ausgedruckt werden.
                </p>
            </div>
        </>
    )
};

export default DatenschutzPage;
