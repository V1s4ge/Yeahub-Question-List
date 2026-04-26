import styles from './DetailedQuestionShortAnswer.module.css';
import DOMPurify from 'dompurify';

function DetailedQuestionShortAnswer({shortAnswer}) {
	return (
		<div className={styles.detailedShortAnswerContainer}>
			<h1>Короткий ответ</h1>
			<div className={styles.detailedShortAnswer} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(shortAnswer) }}>
			</div>
		</div>
			
	);
}

export default DetailedQuestionShortAnswer;