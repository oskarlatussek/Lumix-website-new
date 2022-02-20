import Link from "next/link"
import Question from "../section-element/Question"


const FAQ = () => {
    return (

        <div id="faq" className="w-full flex flex-col p-10 items-center py-20">
            <div className="w-full flex space-x-24 items-center">
                <p className="text-8xl font-medium pb-5 max-w-min text-right leading-tight">Häufig gestellte <span className="text-yellow-400 text-9xl font-semibold">Fragen</span></p>

                <div className="flex flex-col max-w-3xl space-y-5 items-center">
                    <Question question="Frage wefqöi qwöefqw fqöwioef qweföoiqwef qwöeoin werfäkönwe " answer="Antwort" />
                    <Question question="Frage" answer="Antwort" />
                    <Question question="Frage" answer="Antwort" />
                    <Question question="Frage" answer="Antwort" />
                    <Question question="Frage" answer="Antwort" />
                </div>
            </div>

            <Link href="/faq">
                <a className="rounded-full mt-10 border border-black bg-black text-white max-w-max px-3 py-2 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                    Alle Fragen
                </a>
            </Link>

        </div >

    )
}

export default FAQ
