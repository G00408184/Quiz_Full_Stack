import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewQuizAttempt.module.css';
import { useRouter } from 'next/router';

function NewQuizAttempt(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const meetupData = {
      name: enteredName,
      image: enteredImage,
    };

    try {
      // Call parent handler
      await props.onAddMeetup(meetupData);

      // Navigate to the quiz page
      router.push('/quiz');
    } catch (error) {
      console.error('Failed to navigate:', error);
    }
  }

  return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Profile</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Start Quiz</button>
          </div>
        </form>
      </Card>
  );
}

export default NewQuizAttempt;