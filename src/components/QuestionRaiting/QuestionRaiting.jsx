import styles from './QuestionRaiting.module.css';

function QuestionRaiting({rate}) {
	return (
		<div className={styles.questionRate}>
			<div className={styles.raitingText}>Рейтинг: </div>
			<div className={styles.raitingValue}>{rate}</div>
		</div>
	);
}

export default QuestionRaiting;