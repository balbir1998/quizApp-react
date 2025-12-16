const QuestionContainer = ({ question }) => {
    return (
        <>
            <div className="question-container">
                <div className="question" >{question.question}</div>
            </div>
        </>
    )
}

export default QuestionContainer;