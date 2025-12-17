import { useEffect, useState } from "react"

const ResultProgressBar = ({ quizData, questionLength }) => {
    const [resultProgress, setResultProgress] = useState({});

    useEffect(() => {
        setResultProgress({ score: quizData.score });

        const percentage = parseInt(quizData.score / questionLength * 100);
        let cubicDegree = 360 - (percentage / 100 * 360);
        let degree = 360;

        if (degree === cubicDegree) {
            setResultProgress(prevState => ({ ...prevState, degree }));
        } else {
            const id = setInterval(() => {
                degree--;
                if (degree < cubicDegree) {
                    clearInterval(id);
                    return;
                };
                setResultProgress(prevState => ({ ...prevState, degree }));
            }, 5)
        }

    }, []);
    return (
        <div
            className="final-result"
            style={{
                backgroundImage: `conic-gradient(from 20deg, #FF7A7A ${resultProgress.degree}deg, #35BD3A 0deg)`
            }}
        >
            <div className="attempted-questions" >
                {resultProgress.score < 10 ? `0${resultProgress.score}` : resultProgress.score}
                /{questionLength < 10 ? `0${questionLength}` : questionLength}
            </div>
        </div>
    )
}

export default ResultProgressBar