import {useContext, useRef} from 'react';
import Card from '../ui/Card';
import classes from './NewQuizAttempt.module.css';
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext";


function NewQuizAttempt(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const router = useRouter();
  const {updateName, updateImage  } = useContext(GlobalContext);

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    updateName(enteredName);
    updateImage(enteredImage);

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
            <label htmlFor="name">Username</label>
            <input type="text" required id="name" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Profile Picture</label>
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