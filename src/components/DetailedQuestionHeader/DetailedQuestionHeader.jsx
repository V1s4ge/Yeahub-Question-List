import styles from './DetailedQuestionHeader.module.css';

function DetailedQuestionHeader({questionTitle, questionDescription}) {
	return (
		<div className={styles.detailedQuestionHeader}>
			<h1>{questionTitle}</h1>
			{questionDescription}
		</div>
	);
}

export default DetailedQuestionHeader;
