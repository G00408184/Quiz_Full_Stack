import QuizItem from './QuizItem';
import classes from './QuizList.module.css';

function QuizList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <QuizItem
          key={meetup.meetingId}
          id={meetup.meetingId}
          image={meetup.image}
          name={meetup.name}
          score={meetup.score}
        />
      ))}
    </ul>
  );
}

export default QuizList;
