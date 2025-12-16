import { useEffect, useState } from "react";

const Timer = ({ timeWarning, setTimeWarning, intervalRef, quizData, question, setQuizData }) => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });

    useEffect(() => {
        window.scrollTo(0, 0);
        let { minute, second } = question.duration;
        setTimeLeft({ minutes: minute, seconds: second });

        const totalSeconds = minute * 60 + second;
        let remainingSeconds = totalSeconds;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            second--;
            remainingSeconds--;

            // change background color on half time and one sixth time
            if (remainingSeconds === Math.floor(totalSeconds / 2)) {
                setTimeWarning(prevState => ({ ...prevState, halfTime: true }))
            }

            if (remainingSeconds === Math.floor(totalSeconds / 6)) {
                setTimeWarning(prevState => ({ ...prevState, oneSixthTime: true }))
            }

            if (minute <= 0 && second < 0) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setQuizData(prevState => ({ ...prevState, currentQuesNo: prevState.currentQuesNo + 1 }))
                setTimeWarning({ halfTime: false, oneSixthTime: false });
                return;
            }

            if (second < 0) {
                minute--;
                second = 59;
            }
            setTimeLeft({ minutes: minute, seconds: second });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [quizData.currentQuesNo]);

    return (
        <div className={`timer ${timeWarning.halfTime ? "beige-background" : ""} ${timeWarning.oneSixthTime ? "red-background" : ""}`}>
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </div>
    )
}

export default Timer;