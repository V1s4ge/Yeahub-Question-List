import { use } from 'react';
import QuestionDifficulty from '../QuestionDifficulty/QuestionDifficulty';
import QuestionRaiting from '../QuestionRaiting/QuestionRaiting';
import styles from './DetailedQuestionSideBar.module.css';
import SkillsPanel from '../SkillsPanel/SkillsPanel';
import DetailedQuestionKeywords from '../DetailedQuestionKeywords/DetailedQuestionKeywords';

function DetailedQuestionSideBar({questionsInfo}) {
	const question = use(questionsInfo);
    
	return (
		<div className={styles.detailedQuestionSideBarContainer}>
			<div className={styles.detailedQuestionLevel}>
				<QuestionDifficulty complexity={question.complexity}/>
				<QuestionRaiting rate={question.rate} />
			</div>
			<div className={styles.detailedQuestionSkills}>
				<SkillsPanel options={question.questionSkills}/>
			</div>
			<div className={styles.detailedQuestionKeywords}>
				<DetailedQuestionKeywords keywords={question.keywords} />
			</div>
		</div>
	);
}

export default DetailedQuestionSideBar;