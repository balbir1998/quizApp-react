const QuestionContainer = ({ question }) => {
    return (
        <>
            <div className="question-container">
                <div className="question" >
                    {question.question}
                    {
                        question.desc &&
                        <span
                            className="unselectable break-after-semicolon"
                        >{question.desc}</span>
                    }
                </div>
            </div>
        </>
    )
}

export default QuestionContainer;