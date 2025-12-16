import Group4svg from "../assets/Group_4.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import { useEffect, useState } from "react";


const ResultState = ({ questionLength, quizData, setQuizData, handleCurrentState }) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        const score = quizData.score;
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

        setResult(prevState => ({ ...prevState, percentage, quote, score }));

        let cubicDegree = 360 - (percentage / 100 * 360);
        let degree = 360;
        if (degree === cubicDegree) {
            setResult(prevState => ({ ...prevState, degree }));
        } else {
            const id = setInterval(() => {
                degree--;
                if (degree < cubicDegree) {
                    clearInterval(id);
                    return;
                };
                setResult(prevState => ({ ...prevState, degree }));
            }, 5)
        }

        setQuizData(prevState => {
            const newData = { ...prevState, currentQuesNo: 0 };
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
                    <div
                        className="final-result"
                        style={{
                            backgroundImage: `conic-gradient(from 20deg, #FF7A7A ${result.degree}deg, #35BD3A 0deg)`
                        }}
                    >
                        <div className="attempted-questions" >
                            {result.score < 10 ? `0${result.score}` : result.score}
                            /{questionLength < 10 ? `0${questionLength}` : questionLength}
                        </div>
                    </div>
                    <div className="percentage" >
                        {result.percentage}%
                    </div>
                    <p className="quote" >{result.quote}</p>
                </div>
                <button className="retry-btn" onClick={() => handleCurrentState("quiz-state")}>&lt; &lt; &lt; Retry</button>
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