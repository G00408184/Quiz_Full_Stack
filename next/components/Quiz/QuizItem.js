import Card from '../ui/Card';
import classes from './QuizItem.module.css';
import { useRouter } from 'next/router';

function QuizItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
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
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
        </Card>
      </li>
  );
}

export default QuizItem;

