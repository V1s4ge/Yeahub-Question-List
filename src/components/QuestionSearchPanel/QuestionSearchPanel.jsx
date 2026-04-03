import styles from './QuestionSearchPanel.module.css';
import Input from '../Input/Input';
import SpecializationPanel from '../SpecializationPanel/SpecializationPanel';
import SkillsPanel from '../SkillsPanel/SkillsPanel';
import DifficultyPanel from '../DifficultyPanel/DifficultyPanel';
import difficultyOptions from '../../difficultyOptions';
import RaitingPanel from '../RaitingPanel/RaitingPanel';
import raitingOptions from '../../raitingOprions';



function QuestionSearchPanel({onShowAllSpecs, onShowAllSkills, showAllSpecs, showAllSkills, specializations, skills,  onFiltersChange, filters}) {


	return (
		<div className={styles.questionSearchContainter}>

			<Input 
				onChange={onFiltersChange}
			/>
			<SpecializationPanel
				showAllSpecs = {showAllSpecs}
				onShowAllSpecs = {onShowAllSpecs}
				selectedSpecialization={filters.specialization} 
				options={specializations} 
				onChange={onFiltersChange}
			/>
			<SkillsPanel 
				showAllSkills = {showAllSkills}
				onShowAllSkills = {onShowAllSkills}
				selectedSkills={filters.skills}  
				options={skills}  
				onChange={onFiltersChange}
			/>
			<DifficultyPanel 
				selectedDifficulty={filters.difficulty}
				options={difficultyOptions} 
				onChange={onFiltersChange}
			/>

			<RaitingPanel 
				selectedRate={filters.rate}
				onChange={onFiltersChange}
				options={raitingOptions}
			/>

		</div>
	);
}

export default QuestionSearchPanel;
