import DetailedQuestionHeader from '../DetailedQuestionHeader/DetailedQuestionHeader';
import DetailedQuestionLongAnswer from '../DetailedQuestionLongAnswer/DetailedQuestionLongAnswer';
import DetailedQuestionShortAnswer from '../DetailedQuestionShortAnswer/DetailedQuestionShortAnswer';
import styles from './DetailedQuestionContent.module.css';
import { use } from 'react';
import { Link } from 'react-router-dom';

function DetailedQuestionContent({questionToLoad}) {
	const question = use(questionToLoad);
	return (
		<div className={styles.detailedQuestionContentContainer}>
			<Link to='/'> Назад </Link> 
			<DetailedQuestionHeader questionTitle = {question.title} questionDescription = {question.description} />
			<DetailedQuestionShortAnswer shortAnswer={question.shortAnswer}/> 
			<DetailedQuestionLongAnswer longAnswer = {question.longAnswer} />
		</div>
	);
}

export default DetailedQuestionContent;