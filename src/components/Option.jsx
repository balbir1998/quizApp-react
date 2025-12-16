import correctImg from "../assets/correct.svg";
import wrongImg from "../assets/wrong.svg";

const Option = ({ id, option, handleCheck, correctOptId, choosedOptId, quizData }) => {
    function getStatus() {
        if (!quizData.questionAttempt) return "";

        if (id === correctOptId) return "correct";
        if (choosedOptId === id && choosedOptId !== correctOptId) return "wrong";

        return null;
    }
    const status = getStatus();
    return (
        <div
            className={`option option-${id} ${status
                ? status === "correct"
                    ? "correct-ans"
                    : "wrong-ans"
                : ""
                }`}
            id={id}
            onClick={handleCheck}>
            <span>{option}</span>
            {
                quizData.questionAttempt && status && (
                    <div className="result">
                        {
                            status === "correct" ? (
                                <img src={correctImg} />
                            ) : (
                                <>
                                    <span>You Choose</span>
                                    <img src={wrongImg} alt="" />
                                </>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Option;