import React, { useContext } from "react";
import GlobalContext from "../pages/store/globalContext";
import styles from "../components/Quiz/Score.module.css";

function Score() {
    const { score } = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Quiz Results</h1>
            <p className={styles.message}>
                {score > 7
                    ? "🎉 Fantastic! You're a quiz wizard! 🏆"
                    : score > 4
                        ? "🌟 Great effort! Keep sharpening your skills!"
                        : "💪 Don't give up! Practice makes perfect!"}
            </p>
            <p className={styles.score}>Your Score: <span>{score}</span></p>
            <div className={styles.actions}>
                <button
                    className={styles.tryAgainButton}
                    onClick={() => window.location.href = "/quiz"}
                >
                    Try Again
                </button>
                <button
                    className={styles.homeButton}
                    onClick={() => window.location.href = "/"}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default Score;
