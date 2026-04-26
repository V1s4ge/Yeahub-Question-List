import styles from './QuestionShortAnswer.module.css';
import DOMPurify from 'dompurify';

function QuestionShortAnswer({shortAnswer}) {
	return (
		<div className={styles.questionShortAnswer} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(shortAnswer)}}>
			
		</div>
	);
}

export default QuestionShortAnswer;