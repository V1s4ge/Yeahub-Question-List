import styles from './DetailedQuestionKeywords.module.css';

function DetailedQuestionKeywords({keywords}) {
	return (
		<div className={styles.keywordsContainer}>
			<p className={styles.keywordsTitle}>Ключевые слова</p>
			<div className={styles.keywords}>
				{keywords.map(key => <a href='/'>#{key}</a>)}
                
			</div>
		</div>
	);
}

export default DetailedQuestionKeywords;