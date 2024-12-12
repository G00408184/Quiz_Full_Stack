import Card from '../ui/Card';
import classes from './QuizItem.module.css';
import { useRouter } from 'next/router';

function QuizItem(props) {
  console.log("QuizItem Props:", props); // Log the props to inspect their content

  const router = useRouter();
  console.log("Score Prop:", props.score);

  function showDetailsHandler(score) {
    router.push(`/score?score=${score}`);  // Navigates to the score page
  }

  return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.name} />
          </div>
          <div className={classes.content}>
            <h3>{props.name}</h3>
          </div>
          <div className={classes.actions}>
            <button onClick={() => showDetailsHandler(props.score)}>Show Score</button>
          </div>
        </Card>
      </li>
  );
}

export default QuizItem;
