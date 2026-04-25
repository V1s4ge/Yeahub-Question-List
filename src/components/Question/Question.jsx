import styles from'./Question.module.css';
import QuestionRaiting from '../QuestionRaiting/QuestionRaiting';
import QuestionDifficulty from '../QuestionDifficulty/QuestionDifficulty';
import QuestionShortAnswer from '../QuestionShortAnswer/QuestionShortAnswer';
import { Link } from 'react-router-dom';

function Question({title, id, shortAnswer, complexity, rate, isOpen}) {
	
	return (
		
		<div data-question-id = {id} className={styles.questionContainer}>
			<div className={styles.questionHeader}>
				<div className={styles.bullet}></div>
				<p className={styles.questionContainer__title}>{title}</p>
				<button  className={`${styles.arrowButton} ${isOpen ? styles.open : ''}`}>
					<img src="/arrow.svg" alt="Show short answer" />
				</button>
			</div>
			{isOpen && (
				<div className={`${styles.questionInfo} ${isOpen ? styles.open : ''}`}>
					<div className={styles.questionStats}>
						<QuestionRaiting rate={rate}/>
						<QuestionDifficulty complexity={complexity}/>
					</div>
					<QuestionShortAnswer shortAnswer={shortAnswer}/>
					<Link to={`/question/${id}`}> Подробнее </Link>
				</div>
				
			)}
		</div>
		
	);
}

export default Question;