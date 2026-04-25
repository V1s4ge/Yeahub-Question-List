import DetailedQuestionHeader from '../DetailedQuestionHeader/DetailedQuestionHeader';
import DetailedQuestionLongAnswer from '../DetailedQuestionLongAnswer/DetailedQuestionLongAnswer';
import DetailedQuestionShortAnswer from '../DetailedQuestionShortAnswer/DetailedQuestionShortAnswer';
import styles from './DetailedQuestionContent.module.css';
import { use } from 'react';

function DetailedQuestionContent({questionToLoad}) {
	const question = use(questionToLoad);
	return (
		<div className={styles.detailedQuestionContentContainer}>
			<DetailedQuestionHeader questionTitle = {question.title} questionDescription = {question.description} />
			<DetailedQuestionShortAnswer shortAnswer={question.shortAnswer}/> 
			<DetailedQuestionLongAnswer longAnswer = {question.longAnswer} />
		</div>
	);
}

export default DetailedQuestionContent;