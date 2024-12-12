import React, {useState, useContext} from "react";
import  {Questions} from "../components/generic/QuestionBank";
import GlobalContext from "../pages/store/globalContext";
import { useRouter } from 'next/router';
import styles from "../components/Quiz/Question.module.css";
import {router} from "next/client";

function Quiz() {
    const { score, updateScore } = useContext(GlobalContext);
    const {name, image  } = useContext(GlobalContext);
    const globalCtx = useContext(GlobalContext)//

    console.log("name:", name)
console.log("image:", image)

    const [currQuestion, setQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");


    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            updateScore(score + 1);
        }
        setQuestion(currQuestion + 1);
        setOptionChosen(""); // Reset chosen option
    };

    const finishQuiz = async () => {
        if (Questions[currQuestion].answer === optionChosen) {
            updateScore(score + 1);
        }
        const meetupData = {
            name: name,
            image: image,
            score: score,
        };
        console.log("Meetup Data:", meetupData); // Print the meetupData object

        await globalCtx.updateGlobals({cmd: 'addMeeting', newVal: meetupData})
           router.push("/end"); // Navigate to the end page
    };

    return (
        <div className={styles.Quiz}>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className={styles.options}>
                <button
                    className={styles.optionButton}
                    onClick={() => setOptionChosen("A")}
                >
                    {Questions[currQuestion].optionA}
                </button>
                <button
                    className={styles.optionButton}
                    onClick={() => setOptionChosen("B")}
                >
                    {Questions[currQuestion].optionB}
                </button>
                <button
                    className={styles.optionButton}
                    onClick={() => setOptionChosen("C")}
                >
                    {Questions[currQuestion].optionC}
                </button>
                <button
                    className={styles.optionButton}
                    onClick={() => setOptionChosen("D")}
                >
                    {Questions[currQuestion].optionD}
                </button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button className={styles.navigationButton} onClick={finishQuiz}>
                    Finish Quiz
                </button>
            ) : (
                <button className={styles.navigationButton} onClick={nextQuestion}>
                    Next Question
                </button>
            )}
        </div>
    );
}

export default Quiz;