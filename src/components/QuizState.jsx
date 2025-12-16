import { useEffect, useRef, useState } from "react";
import Group4svg from "../assets/Group_4.svg";
import muteIcon from "../assets/icon _Volume_mute.svg";
import volumeIcon from "../assets/icon_Volume.svg";
import correctSound from "../assets/audio/correct_option.mp3"
import wrongSound from "../assets/audio/wrong_option.mp3"
import QuestionContainer from "./QuestionContainer";
import Timer from "./Timer";
import OptionsContainer from "./OptionsContainer";

const QuizState = ({ handleCurrentState, question, quizData, setQuizData, questionsLength, }) => {
    const [isMute, setIsMute] = useState(true);
    const [timeWarning, setTimeWarning] = useState({
        halfTime: false,
        oneSixthTime: false
    });
    const intervalRef = useRef(null);

    const correctAudio = useRef(null);
    const wrongAudio = useRef(null);

    useEffect(() => {
        correctAudio.current = new Audio(correctSound);
        wrongAudio.current = new Audio(wrongSound);
        correctAudio.current.preload = "auto";
        wrongAudio.current.preload = "auto";

        if (quizData.questionAttempt) {
            handleNext();
        }
    }, []);


    function handleNext() {
        setQuizData(prevState => {
            const newData = {
                ...prevState,
                currentQuesNo: prevState.currentQuesNo + 1
            };

            if (prevState.questionAttempt) newData.questionAttempt = false;
            return newData;
        });

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null;
        };

        if (timeWarning.halfTime || timeWarning.oneSixthTime) {
            setTimeWarning({ halfTime: false, oneSixthTime: false })
        }

        if (quizData.currentQuesNo === questionsLength - 1) handleCurrentState("result-state");
    }

    const [userAns, setUserAns] = useState(null);

    function handleCheck(e) {
        if (quizData.questionAttempt || intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        setQuizData(prevState => {
            let newData = {
                ...prevState,
                questionAttempt: true
            };
            if (question.ansIndex === parseInt(e.currentTarget.id)) {
                newData.score = newData.score + 1
            }
            return newData;
        });
        setUserAns(parseInt(e.currentTarget.id));

        if (!isMute) {
            question.ansIndex === parseInt(e.currentTarget.id) ? correctAudio.current.play() : wrongAudio.current.play();
        }
    }

    return (
        <div className={`quiz-state ${timeWarning.halfTime ? "beige-background" : ""} ${timeWarning.oneSixthTime ? "paleChestnut-background" : ""}`}>
            <div className="quiz-state-content">

                <div className="header-section">
                    <div className="quiz-logo">
                        <img src={Group4svg} alt="" />
                    </div>
                    <div className="right-section">
                        <div className="volume-icon" onClick={() => setIsMute(!isMute)}>
                            <img src={isMute ? muteIcon : volumeIcon} alt="image" />
                        </div>
                        <div className="question-count" >
                            {(quizData.currentQuesNo + 1) < 10 ? `0${quizData.currentQuesNo + 1}` : quizData.currentQuesNo + 1}
                            /{questionsLength < 10 ? `0${questionsLength}` : questionsLength}
                        </div>
                    </div>
                </div>

                <QuestionContainer question={question} />

                <Timer
                    timeWarning={timeWarning}
                    setTimeWarning={setTimeWarning}
                    intervalRef={intervalRef}
                    quizData={quizData}
                    setQuizData={setQuizData}
                    question={question}
                />

                <OptionsContainer
                    quizData={quizData}
                    setQuizData={setQuizData}
                    handleCheck={handleCheck}
                    question={question}
                    choosedOptId={userAns}
                    correctOptId={question.ansIndex}
                />

                <p
                    className={`next ${timeWarning.halfTime ? "golden-text" : ""} ${timeWarning.oneSixthTime ? "red-text" : ""}`}
                    onClick={handleNext}>
                    {quizData.currentQuesNo < questionsLength - 1 ? "Next" : "Submit"} &gt;
                </p>
            </div>
        </div>
    )
}

export default QuizState;