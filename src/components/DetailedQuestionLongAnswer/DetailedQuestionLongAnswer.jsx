import styles from './DetailedQuestionLongAnswer.module.css';
import DOMPurify from 'dompurify';

function DetailedQuestionLongAnswer({longAnswer}) {
	return (
		<div className={styles.detailedLongAnswerContainer}>
			<h1>Длинный ответ</h1>

			<div className={styles.detailedLongAnswer} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(longAnswer) }}>
		
			</div>
		</div>
			
	);
}

export default DetailedQuestionLongAnswer;