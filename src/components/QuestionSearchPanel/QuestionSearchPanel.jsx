import styles from './QuestionSearchPanel.module.css';
import Input from '../../ui/Input/Input';
import SpecializationPanel from '../SpecializationPanel/SpecializationPanel';
import SkillsPanel from '../SkillsPanel/SkillsPanel';
import DifficultyPanel from '../DifficultyPanel/DifficultyPanel';
import difficultyOptions from '../../utils/difficultyOptions';
import RaitingPanel from '../RaitingPanel/RaitingPanel';
import raitingOptions from '../../utils/raitingOprions';



function QuestionSearchPanel({onInputChange, inputValue, onShowAllSpecs, onShowAllSkills, showAllSpecs, showAllSkills, specializations, skills, onSpecChange, onSkillChange, onDifficultyChange, onRaitingChange, filters}) {


	return (
		<div className={styles.questionSearchContainter}>

			<Input 
				onChange={onInputChange}
				value={inputValue}
			/>
			<SpecializationPanel
				showAllSpecs = {showAllSpecs}
				onShowAllSpecs = {onShowAllSpecs}
				selectedSpecialization={filters.specId} 
				options={specializations} 
				onChange={onSpecChange}
			/>
			<SkillsPanel 
				showAllSkills = {showAllSkills}
				onShowAllSkills = {onShowAllSkills}
				selectedSkills={filters.skills}  
				options={skills}  
				onChange={onSkillChange}
			/>
			<DifficultyPanel 
				selectedDifficulty={filters.difficulty}
				options={difficultyOptions} 
				onChange={onDifficultyChange}
			/>

			<RaitingPanel 
				selectedRate={filters.rate}
				onChange={onRaitingChange}
				options={raitingOptions}
			/>

		</div>
	);
}

export default QuestionSearchPanel;
