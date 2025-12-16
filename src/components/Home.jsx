import { useState } from "react";
import Group4svg from "../assets/Group_4.svg";

const Home = ({ handleCurrentState }) => {
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
                <p className="highest-score" />
            </div>
        </div>
    )
}

export default Home;