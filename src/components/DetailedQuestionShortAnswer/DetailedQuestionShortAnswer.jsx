import styles from './DetailedQuestionShortAnswer.module.css';

function DetailedQuestionShortAnswer({shortAnswer}) {
	return (
		<div className={styles.detailedShortAnswerContainer}>
			<h1>Короткий ответ</h1>
			<div className={styles.detailedShortAnswer} dangerouslySetInnerHTML={{ __html: shortAnswer }}>
			</div>
		</div>
			
	);
}

export default DetailedQuestionShortAnswer;