import { useRef } from 'react';

function NewQuizForm(props) {
  const questionInputRef = useRef();
  const optionsInputRef = useRef();
  const correctAnswerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredQuestion = questionInputRef.current.value;
    const enteredOptions = optionsInputRef.current.value.split(',');
    const enteredCorrectAnswer = +correctAnswerInputRef.current.value;

    const quizData = {
      question: enteredQuestion,
      options: enteredOptions,
      correctAnswer: enteredCorrectAnswer,
    };

    props.onAddQuiz(quizData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="question">Question</label>
        <input type="text" id="question" ref={questionInputRef} required />
      </div>
      <div>
        <label htmlFor="options">Options (comma-separated)</label>
        <input type="text" id="options" ref={optionsInputRef} required />
      </div>
      <div>
        <label htmlFor="correctAnswer">Correct Answer Index</label>
        <input type="number" id="correctAnswer" ref={correctAnswerInputRef} required />
      </div>
      <button>Add Quiz</button>
    </form>
  );
}

export default NewQuizForm;
