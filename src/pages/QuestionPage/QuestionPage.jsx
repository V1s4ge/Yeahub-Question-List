import styles from './QuestionPage.module.css';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import QuestionSearchPanel from '../../components/QuestionSearchPanel/QuestionSearchPanel';
import useSearchFilters from '../../hooks/useSearchFilters.hook';
import useFilterData from '../../hooks/useFilterData.hook';
import useQuestionsLoader from '../../hooks/useQuestionsLoader.hook';


function QuestionPage() {

	const {filters, handlers} = useSearchFilters();
	const {specializations, skillsList, showAllSpecs, showAllSkills, handleShowAllSkills, handleShowAllSpecs } = useFilterData(filters.specId);
	const {questions, totalPages, isLoading, error} = useQuestionsLoader(filters);


	return (
		<div className={styles.pageContainer}>

			<QuestionsList
				specialization={specializations.find(s => s.id === filters.specId)}
				questions={questions}
				page={filters.page}
				totalPages={totalPages}
				onPageChange={handlers.handlePageChange}
				isLoading={isLoading}
				error={error}
			/>

			<QuestionSearchPanel
				onInputChange={handlers.handleInputChange}
				inputValue={filters.inputVal}
				onShowAllSpecs={handleShowAllSpecs}
				onShowAllSkills={handleShowAllSkills}
				showAllSpecs={showAllSpecs}
				showAllSkills={showAllSkills}
				specializations={specializations}
				skills={skillsList}
				filters={filters}
				onSpecChange={handlers.handleSpecializationChange}
				onSkillChange={handlers.handleSkillsChange}
				onDifficultyChange={handlers.handleDifficultyChange}
				onRaitingChange={handlers.handleRateChange}
			/>
			
		</div>
	);
}

export default QuestionPage;