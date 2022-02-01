import Question from "./Question"

const FAQ = () => {
    return (

        <div className="border w-full min-h-screen flex flex-col p-10 items-center">
            <p className="text-4xl font-medium pb-5">Häufig gestellte Fragen</p>
            <div className="flex flex-col max-w-lg space-y-5">
                <Question question="Frage" answer="Antwort"></Question>
                <Question question="Frage" answer="Antwort"></Question>
                <Question question="Frage" answer="Antwort"></Question>
                <Question question="Frage" answer="Antwort"></Question>
                <Question question="Frage" answer="Antwort"></Question>

                <a href="/faq" className="bg-gray-200 p-2 px-4 text-xl font-semibold shadow-lg text-center rounded-full">Mehr dazu</a>

            </div> 
            

        </div>





    )
}
export default FAQ