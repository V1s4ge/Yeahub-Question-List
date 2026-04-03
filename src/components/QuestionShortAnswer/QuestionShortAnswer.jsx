import styles from './QuestionShortAnswer.module.css';

function QuestionShortAnswer({shortAnswer}) {
	return (
		<div className={styles.questionShortAnswer} dangerouslySetInnerHTML={{ __html: shortAnswer }}>
			
		</div>
	);
}

export default QuestionShortAnswer;