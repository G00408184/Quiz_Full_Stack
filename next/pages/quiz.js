import React, {useState, useContext} from "react";
import  {Questions} from "../components/generic/QuestionBank";
import GlobalContext from "../pages/store/globalContext";
import { useRouter } from 'next/router';

function Quiz(){
    const { score, updateScore } = useContext(GlobalContext);
    const router = useRouter();

    const [currQuestion, setQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            updateScore(score + 1);
        }
        alert(score)
        setQuestion(currQuestion + 1);
    }

    function finishQuiz() {
        if (Questions[currQuestion].answer === optionChosen) {
            updateScore(score + 1);
        }
        router.push('/end');
    }

    return <div className="Quiz">
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className="options">
            <button onClick={() => setOptionChosen("A")}>
                {Questions[currQuestion].optionA}</button>
            <button onClick={() => setOptionChosen("B")}>
                {Questions[currQuestion].optionB}</button>
            <button onClick={() => setOptionChosen("C")}>
                {Questions[currQuestion].optionC}</button>
            <button onClick={() => setOptionChosen("D")}>
                {Questions[currQuestion].optionD}</button>
        </div>
        {currQuestion == Questions.length -1 ? (
            <button onClick={finishQuiz}> Finish Quiz</button>
        ) : (
            <button onClick={nextQuestion}> Next Question </button>
        )}
    </div>
}

export default Quiz;