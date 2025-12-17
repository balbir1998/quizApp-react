import Group4svg from "../assets/Group_4.svg";

const Home = ({ highScore, questionLength, handleCurrentState }) => {
    return (
        <div className="initial-state">
            <div className="state-content">
                <div className="img-container">
                    <img src={Group4svg} alt="images" />
                </div>
                <button
                    className="start-now"
                    onClick={() => handleCurrentState("quiz-state")}
                >
                    Start Now &gt; &gt; &gt;</button>
                {
                    highScore !== 0 &&
                    <p className="highest-score" >
                        Highest Score:
                        {highScore < 10 ? `0${highScore}` : highScore} /
                        {questionLength < 10 ? `0${questionLength}` : questionLength}
                    </p>
                }
            </div>
        </div>
    )
}

export default Home;