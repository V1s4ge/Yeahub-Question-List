import styles from './QuestionDifficulty.module.css';

function QuestionDifficulty({complexity}) {
	return (
		<div className={styles.questionDiff}>
			<div className={styles.difficultyText}>Сложность: </div>
			<div className={styles.difficultyValue}>{complexity}</div>
		</div>
	);
}

export default QuestionDifficulty;