import Group4svg from "../assets/Group_4.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import { useEffect, useState } from "react";
import ResultProgressBar from "./ResultProgressBar";


const ResultState = ({ questionLength, quizData, setQuizData, handleCurrentState }) => {
    const [result, setResult] = useState({});

    function handleRetry() {
        setQuizData(prevState => ({ ...prevState, isResultState: false }));
        handleCurrentState("quiz-state");
        setResult({});
    }

    useEffect(() => {
        if (quizData.isResultState) {
            setQuizData(prevState => ({ ...prevState, isResultState: false }));
            handleCurrentState("home");
            setResult({});
            return;
        }
        const percentage = parseInt(quizData.score / questionLength * 100)
        let quote = null;
        if (percentage >= 70) {
            quote = "“Keep learning, you have a good score!”";
        } else if (percentage >= 60) {
            quote = "“Good effort! Keep learning”";
        } else if (percentage >= 50) {
            quote = "“You can do better, keep improving”";
        } else if (percentage >= 33) {
            quote = "“Put more effort to improve your score”";
        } else {
            quote = "“You need to work hard”";
        }
        setResult(prevState => ({ ...prevState, percentage, quote }));

        setQuizData(prevState => {
            const newData = { ...prevState, currentQuesNo: 0, isResultState: true };
            if (newData.highScore < newData.score) newData.highScore = newData.score;
            newData.score = 0;
            return newData;
        });
    }, []);
    return (
        <div className="result-state">
            <div className="result-state-content">
                <div id="print-result">
                    <div className="result-header">
                        <img src={Group4svg} alt="image" />
                        <h2>Result</h2>
                    </div>

                    <ResultProgressBar
                        quizData={quizData}
                        questionLength={questionLength}
                    />

                    <div className="percentage" >
                        {result.percentage}%
                    </div>
                    <p className="quote" >{result.quote}</p>
                </div>
                <button className="retry-btn" onClick={handleRetry}>&lt; &lt; &lt; Retry</button>
                <div className="social-links">
                    <p>Share Your Score:</p>
                    <div className="icons">
                        <img src={linkedin} className="linkedin" alt="image" />
                        <img src={twitter} className="twitter" alt="image" />
                        <img src={instagram} className="insta" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultState;