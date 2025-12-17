import { useState } from 'react';
import './App.css'
import Home from "./components/Home";
import QuizState from './components/QuizState';
import ResultState from './components/ResultState';
import questions from '../questions';
import { useLocalStorage } from './components/hooks/useLocalStorage';

function App() {
  const [questionsList, setQuestionsList] = useState(questions);
  const [currentState, setCurrentState] = useLocalStorage("state", "home");
  const [quizData, setQuizData] = useLocalStorage("quizData", {
    currentQuesNo: 0,
    score: 0,
    questionAttempt: false,
    isMute: true,
    highScore: 0,
    isResultState: false
  });

  return (
    <>
      <main className="main-Container">
        {
          currentState === "home" &&
          <Home
            handleCurrentState={setCurrentState}
            highScore={quizData.highScore}
            questionLength={questionsList.length}
          />
        }
        {
          currentState === "quiz-state" &&
          <QuizState
            handleCurrentState={setCurrentState}
            question={questionsList[quizData.currentQuesNo]}
            quizData={quizData}
            setQuizData={setQuizData}
            questionsLength={questionsList.length}
          />
        }
        {
          currentState === "result-state" &&
          <ResultState
            handleCurrentState={setCurrentState}
            quizData={quizData}
            setQuizData={setQuizData}
            questionLength={questionsList.length}
          />
        }
      </main>
    </>
  )
}

export default App;
