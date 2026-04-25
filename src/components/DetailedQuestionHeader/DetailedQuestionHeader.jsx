import styles from './DetailedQuestionHeader.module.css';

function DetailedQuestionHeader({questionTitle, questionDescription}) {
	return (
		<div className={styles.detailedQuestionHeader}>
			<div>
			    <h1>{questionTitle}</h1>
			</div>
			<div>
			    {questionDescription}
			</div>
		</div>
	);
}

export default DetailedQuestionHeader;
