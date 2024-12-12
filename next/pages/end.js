import React, { useContext } from "react";
import GlobalContext from "../pages/store/globalContext"; // Import GlobalContext
import styles from "../components/Quiz/Question.module.css"
function End() {
    const { score } = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🎉 Congratulations! 🎉</h1>
            <p className={styles.message}>You have completed the quiz.</p>
            <p className={styles.score}>
                Your final score is: <span>{score}</span>/10
            </p>
            <p className={styles.resultMessage}>
                {score > 7
                    ? "Amazing work! You're a quiz master! 🏆"
                    : score > 4
                        ? "Good job! Keep improving. 🌟"
                        : "Don't worry! Try again for a better score! 💪"}
            </p>
            <div className={styles.btnContainer}>
                <button
                    className={styles.backButton}
                    onClick={() => (window.location.href = "/")}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default End;