import Option from "./Option"

const OptionsContainer = ({ question, handleCheck, quizData, setQuizData, correctOptId, choosedOptId }) => {
    return (
        <div className="options-container">
            {
                question.choices.map((option, idx) => {
                    return <Option
                        key={idx}
                        id={idx}
                        option={option}
                        quizData={quizData}
                        setQuizData={setQuizData}
                        handleCheck={handleCheck}
                        correctOptId={correctOptId}
                        choosedOptId={choosedOptId}
                    />
                })
            }
        </div>
    )
}

export default OptionsContainer